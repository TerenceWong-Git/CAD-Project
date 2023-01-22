import React, { useEffect, useMemo } from "react";
import { Circle, GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "600px",
  height: "700px",
};

const circleSettings = {
  strokeColor: "#FF0000",
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: "#FF0000",
  fillOpacity: 0.25,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
  radius: 100,
  zIndex: 1,
};

function MapHook() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    // googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    googleMapsApiKey: "AIzaSyCD0Ddx6UPdWGsBUUBR711rCZQYRboSSrw",
  });

  const [map, setMap] = React.useState(null);
  //   const [latitude, setLatitude] = React.useState(0);
  //   const [longitude, setLongitude] = React.useState(0);
  const userLocation: number[] = [];

  navigator.geolocation.watchPosition((position) => {
    let userLat = position.coords.latitude;
    let userLng = position.coords.longitude;

    userLocation.push(userLat);
    userLocation.push(userLng);
  });

  const center = useMemo(() => ({ lat: userLocation[0], lng: userLocation[1] }), []);
  const zoom = useMemo(() => 18, []);

  const onLoad = React.useCallback(function callback(map: any) {
    const bounds = new window.google.maps.LatLngBounds(center);

    console.log(bounds);
    map.setZoom(zoom);
    console.log(map);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={zoom} onLoad={onLoad} onUnmount={onUnmount}>
      <Circle center={center} options={circleSettings} />
      <Marker position={center} />
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(MapHook);
