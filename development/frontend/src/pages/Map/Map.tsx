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

  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const [userLocation, setUserLocation] = useState({ lat: 0, lng: 0 });
  const [status, setStatus] = useState("");

  ////////////////////////////////////   Load Data   /////////////////////////////////////
  const [loadPlacesData, setLoadPlacesData] = useState<any[]>([]);
  const [items, setItems] = useState<any[]>([]);
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/map`);
      const json = await res.json();

      setLoadPlacesData(json);
      setItems(json);
    }
    fetchData();
  }, []);

  ////////////////////////////////////   Load Data   /////////////////////////////////////

  ///////////////////////////////////   Initial Map   ////////////////////////////////////
  navigator.geolocation.watchPosition((position) => {
    setUserLocation({ lat: position.coords.latitude, lng: position.coords.longitude });
  });
  console.log("UserLocation: ", userLocation);
  ///////////////////////////////////   Initial Map   ////////////////////////////////////

  /////////////////////////////////////   Relocate   /////////////////////////////////////
  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus("Geolocation is not supported by your browser");
    } else {
      setStatus("Locating...");
      navigator.geolocation.watchPosition(
        (position) => {
          setStatus("");
          setLat(position.coords.latitude);
          setLng(position.coords.longitude);
        },
        () => {
          setStatus("Unable to retrieve your location");
        }
      );
    }
  };
  ////////////////////////////////////   Relocate   ////////////////////////////////////

  ////////////////////////////////////   Category   ////////////////////////////////////

  const filterItem = (category: string) => {
    console.log("Category: ", category);
    const newItems = loadPlacesData.filter((place) => {
      return place.district === category || place.mapType.engType === category;
    });
    setItems(newItems);
  };

  console.log("item: ", items);
  ////////////////////////////////////   Category   ////////////////////////////////////

  ///////////////////////////////////   Search Bar   ///////////////////////////////////
  const [value, setValue] = useState("");
  console.log("value: ", value);

  const filterPlaceName = items.map((item) => {
    return item.engName;
  });
  console.log("filterPlaceName: ", filterPlaceName);
  ///////////////////////////////////   Search Bar   ///////////////////////////////////

  return (
    <div>
      <div>
        <CategoryButtons filterItem={filterItem} setItem={setItems} />
      </div>

      <div>
        <Autocomplete value={value} onChange={setValue} data={filterPlaceName} />
      </div>

      <div>
        {isLoaded && (
          <GoogleMap mapContainerStyle={containerStyle} center={userLocation} zoom={12} options={{ disableDefaultUI: true }}>
            <Circle center={userLocation} options={circleSettings} />
            <Marker position={userLocation} />
            {items.map((item) => {
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
  );
}
