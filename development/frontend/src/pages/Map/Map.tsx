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
  console.log(userLocation);

  const center = useMemo(() => ({ lat: 22.373855287590015, lng: 114.10615758383642 }), []);
  const zoom = useMemo(() => 16, []);

  const onLoad = React.useCallback(function callback(map: any) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

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
