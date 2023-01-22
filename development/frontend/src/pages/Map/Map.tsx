import React, { useCallback, useMemo, useState } from "react";
import { Circle, GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import Mall from "../../uploads/clinic.png";

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

const places = [
  {
    chiName: "龍貓仔專門店",
    engName: "CHINCHILLA AND PETS SHOP",
    chiAddress: "香港渣華道3-5號永光閣4號鋪",
    engAddress: "SHOP 4, G/F, CIRCLE COURT, 3-5 JAVA ROAD, NORTH POINT, HK",
    phoneNumber: 28955502,
    district: "Eastern",
    latitude: 22.29130977593307,
    longitude: 114.1954751346806,
    profileImg: "123",
  },
  {
    chiName: "BABY FAT PET SHOP",
    engName: "BABY FAT PET SHOP",
    chiAddress: "香港西營盤皇后大道西330號-336號新昇大廈C號鋪",
    engAddress: "SHOP C, NEW S]TART BUILDING, 330 - 336 QUEEN'S ROAD WEST, SAI YING PUN, HK",
    phoneNumber: 54960222,
    district: "Central_and_western",
    latitude: 22.286832518313616,
    longitude: 114.14131763163783,
    profileImg: "124",
  },
  {
    chiName: "夏利維動物醫院",
    engName: "Chris & Nicola's Animal Hospital",
    chiAddress: "香港天后永興街37號地鋪",
    engAddress: "G/F, 37 Wing Hing Street, Tin Hau, HK",
    phoneNumber: 25706048,
    district: "Eastern",
    latitude: 22.28541251424708,
    longitude: 114.19265225447529,
    profileImg: "125",
  },
  {
    chiName: "中環貓醫院 ",
    engName: "Central Cat Hospital ",
    chiAddress: "香港中環鴨巴甸街37號地舖",
    engAddress: "G/F, 37 Aberdeen Street, Central, HK",
    phoneNumber: 25052505,
    district: "Central_and_western",
    latitude: 22.282777590021777,
    longitude: 114.1516801968238,
    profileImg: "126",
  },
  {
    chiName: "Pets Central 流動診所 (荃灣)",
    engName: "Pets Central Mobile Clinic (Tsuen Wan)",
    chiAddress: "新界荃灣馬灣珀麗路8號",
    engAddress: "8 Pak Lai Road, Ma Wan, Tsuen Wan, N.T.",
    phoneNumber: 62230903,
    district: "Tsuen_wan",
    latitude: 22.353041481736252,
    longitude: 114.06208494100319,
    profileImg: "127",
  },
];

export default function Map() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCD0Ddx6UPdWGsBUUBR711rCZQYRboSSrw",
  });

  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const [status, setStatus] = useState("");
  console.log("lat: ", lat);
  console.log("lng: ", lng);

  navigator.geolocation.getCurrentPosition((position) => {
    setLat(position.coords.latitude);
    setLng(position.coords.longitude);
  });

  // const [map, setMap] = useState(null);

  // const onLoad = useCallback(function callback(map: any) {
  //   const bounds = new window.google.maps.LatLngBounds(center);
  //   map.fitBounds(bounds);

  //   setMap(map);
  // }, []);

  // const onUnmount = useCallback(function callback(map: any) {
  //   setMap(null);
  // }, []);

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

  return (
    <div>
      <div>
        {isLoaded && (
          <GoogleMap mapContainerStyle={containerStyle} center={{ lat: lat, lng: lng }} zoom={18}>
            <Circle center={{ lat: lat, lng: lng }} options={circleSettings} />
            <Marker position={{ lat: lat, lng: lng }} />
            {places.map((place) => {
              return (
                <div key={place.engName}>
                  <Marker position={{ lat: place.latitude, lng: place.longitude }} options={{ icon: Mall }} />
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
