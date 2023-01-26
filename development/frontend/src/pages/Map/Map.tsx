import React, { useCallback, useMemo, useState } from "react";
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
  const [userlocation, setUserlocation] = useState({ lat: 0, lng: 0 });
  const [status, setStatus] = useState("");

  console.log("lat: ", lat);
  console.log("lng: ", lng);

  ///////////////////////////////////   Initial Map   ////////////////////////////////////
  navigator.geolocation.watchPosition((position) => {
    // setLat(position.coords.latitude);
    // setLng(position.coords.longitude);
    setUserlocation({ lat: position.coords.latitude, lng: position.coords.longitude });
  });
  console.log("Userlocation: ", userlocation);
  ///////////////////////////////////   Initial Map   ////////////////////////////////////

  ////////////////////////////////////   Relocate   ////////////////////////////////////
  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus("Geolocation is not supported by your browser");
    } else {
      setStatus("Locating...");
      navigator.geolocation.getCurrentPosition(
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
  const [items, setItems] = useState(places);

  console.log("item: ", items);

  const filterItem = (category: string | number) => {
    console.log("Category: ", category);
    const newItems = places.filter((place) => {
      return place.district === category || place.mapTypeId === category;
    });
    setItems(newItems);
  };

  //(place.district || place.mapTypeId)

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
          <GoogleMap mapContainerStyle={containerStyle} center={userlocation} zoom={18} options={{ disableDefaultUI: true }}>
            <Circle center={userlocation} options={circleSettings} />
            <Marker position={userlocation} />
            {items.map((item) => {
              return (
                <div key={item.engName}>
                  <Marker position={{ lat: item.latitude, lng: item.longitude }} options={{ icon: Mall }} />
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
