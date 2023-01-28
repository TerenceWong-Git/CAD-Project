import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Circle, GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import places from "../../components/Map/Data";
import Mall from "../../uploads/clinic.png";
import CategoryButtons from "../../components/Map/Category";
import { Autocomplete } from "@mantine/core";

const containerStyle = {
  width: "600px",
  height: "700px",
};

const circleSettings = {
  strokeColor: "#FF0000",
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: "#FF0000",
  fillOpacity: 0.1,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
  radius: 150,
  zIndex: 1,
};

export default function Map() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCD0Ddx6UPdWGsBUUBR711rCZQYRboSSrw",
  });

  const [userLocation, setUserLocation] = useState({ lat: 0, lng: 0 });
  const [targetLocation, setTargetLocation] = useState({ lat: 0, lng: 0 });
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);

  const [isTriggered, setIsTriggered] = useState(false);

  const [loadPlacesData, setLoadPlacesData] = useState<any[]>([]);
  const [items, setItems] = useState<any[]>([]);
  const [searchItems, setSearchItems] = useState<any[]>([]);

  const [value, setValue] = useState("");

  ////////////////////////////////////   Load Data   /////////////////////////////////////

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/map`);
      const json = await res.json();

      setItems(json);
      setLoadPlacesData(json);
      setSearchItems(json);
    }
    fetchData();
  }, []);

  // useEffect(() => {
  //   setTargetLocation({ lat: parseFloat(loadPlacesData[0].latitude), lng: parseFloat(loadPlacesData[0].longitude) });
  // }, []);

  ////////////////////////////////////   Load Data   /////////////////////////////////////

  ////////////////////////////////////   Initial Map   ///////////////////////////////////

  navigator.geolocation.watchPosition((position) => {
    // setLat(position.coords.latitude);
    // setLng(position.coords.longitude);
    setUserLocation({ lat: position.coords.latitude, lng: position.coords.longitude });
    setTargetLocation({ lat: position.coords.latitude, lng: position.coords.longitude });
  });
  console.log(targetLocation);

  ////////////////////////////////////   Initial Map   ///////////////////////////////////

  /////////////////////////////////////   Relocate   /////////////////////////////////////
  const getLocation = (e: any) => {
    e.preventDefault();
    navigator.geolocation.watchPosition((position) => {
      // setLat(position.coords.latitude);
      // setLng(position.coords.longitude);
      setUserLocation({ lat: position.coords.latitude, lng: position.coords.longitude });
      setTargetLocation({ lat: position.coords.latitude, lng: position.coords.longitude });
    });
    console.log(targetLocation);
  };
  /////////////////////////////////////   Relocate   /////////////////////////////////////

  /////////////////////////////////////   Category   /////////////////////////////////////
  const filterItem = (category: string) => {
    const newItems = loadPlacesData.filter((place) => {
      const districtName = place.district.replaceAll("_", " ");
      const mapType = place.mapType.engType.replaceAll("_", " ");

      return districtName === category || mapType === category;
    });
    setItems(newItems);
    setSearchItems(newItems);
  };

  console.log("item: ", items);

  /////////////////////////////////////   Category   /////////////////////////////////////

  ////////////////////////////////////   Search Bar   ////////////////////////////////////

  const filterPlaceName = items.map((item) => {
    return item.engName;
  });

  const getPlaceLocation = (category: string) => {
    const newItems = loadPlacesData.filter((place) => {
      const engName = place.engName;

      return engName === category;
    });

    setSearchItems(newItems);
    console.log("searchItems: ", searchItems);
    setTargetLocation({ lat: parseFloat(searchItems[0].latitude), lng: parseFloat(searchItems[0].longitude) });
    console.log("targetLocation: ", targetLocation);
  };
  console.log("value: ", value);
  console.log("targetLocation: ", targetLocation);
  console.log("searchItems: ", searchItems);
  ////////////////////////////////////   Search Bar   ////////////////////////////////////

  return (
    <div>
      {isTriggered ? (
        <div>
          <div>
            <button onClick={() => setIsTriggered(false)}>Back</button>
            <CategoryButtons filterItem={filterItem} setItem={setItems} />
          </div>
        </div>
      ) : (
        <div>
          <div>
            <Autocomplete value={value} onChange={setValue} data={filterPlaceName} />
            <button onClick={() => getPlaceLocation(value)}>Search</button>
          </div>

          <div>
            <button onClick={() => setIsTriggered(true)}>Category</button>
          </div>

          <div>
            {/* userLocation */}
            {/* { lat: lat, lng: lng } */}
            {isLoaded && (
              <GoogleMap mapContainerStyle={containerStyle} center={targetLocation} zoom={12} options={{ disableDefaultUI: true }}>
                <Circle center={userLocation} options={circleSettings} />
                <Marker position={userLocation} />
                {searchItems.map((item) => {
                  const latitudeToFloat = parseFloat(item.latitude);
                  const longitudeToFloat = parseFloat(item.longitude);
                  return (
                    <div key={item.engName}>
                      <Marker position={{ lat: latitudeToFloat, lng: longitudeToFloat }} options={{ icon: Mall }} />
                    </div>
                  );
                })}
              </GoogleMap>
            )}
            <button onClick={getLocation}>Get Location</button>
          </div>
        </div>
      )}
    </div>
  );
}
