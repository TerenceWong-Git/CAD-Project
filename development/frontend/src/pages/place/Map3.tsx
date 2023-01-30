import { Checkbox } from "@mantine/core";
import { Circle, GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useEffect, useState } from "react";
import { districts, types } from "../../components/place/map/District";
import { circleSettings, containerStyle } from "../../components/place/map/MapSetting";

export default function Map3() {
  ////////////////////////////////////   Load Data   /////////////////////////////////////

  const [allPlaceItems, setAllPlaceItems] = useState<any[]>([]);
  const [filteredItems, setFilteredItems] = useState<any[]>([]);
  const [searchItems, setSearchItems] = useState<any[]>([]);
  const [isTriggered, setIsTriggered] = useState(false);
  const [values, setValues] = useState<any>([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/map`);
      const json = await res.json();

      setAllPlaceItems(json);
      setFilteredItems(json);
      setSearchItems(json);
    }
    fetchData();
  }, []);

  //   console.log("allPlaceItems: ", allPlaceItems);
  //   console.log("filteredItems: ", filteredItems);
  //   console.log("searchItems: ", searchItems);

  ////////////////////////////////////   Load Data   /////////////////////////////////////

  ////////////////////////////////////   Initial Map   ///////////////////////////////////
  console.log("values: ", values);
  const [targetLocation, setTargetLocation] = useState({ lat: 0, lng: 0 });
  navigator.geolocation.watchPosition((position) => {
    setTargetLocation({ lat: position.coords.latitude, lng: position.coords.longitude });
  });
  console.log(targetLocation);

  ////////////////////////////////////   Initial Map   ///////////////////////////////////

  return (
    <>
      {isTriggered ? (
        <>
          <div>
            <button onClick={() => setIsTriggered(false)}>Back</button>
            <div className="categoryContainer">
              {districts.map((district) => {
                return (
                  <Checkbox.Group key={district.engDistrict} value={values} onChange={setValues}>
                    <Checkbox value={district.engDistrict} label={district.chiDistrict} />
                  </Checkbox.Group>
                );
              })}
              {types.map((type) => {
                return (
                  <Checkbox.Group key={type.engType} value={values} onChange={setValues}>
                    <Checkbox value={type.engType} label={type.chiType} />
                  </Checkbox.Group>
                );
              })}
              {/* <button onClick={activateFilter}>Filter</button>
              <button onClick={deactivateFilter}>Clear</button> */}
            </div>
          </div>
        </>
      ) : (
        <>
          <div>
            <button onClick={() => setIsTriggered(true)}>Category</button>
          </div>
          <div>
            <LoadScript googleMapsApiKey={`${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`}>
              <GoogleMap mapContainerStyle={containerStyle} center={targetLocation} zoom={17}>
                <Circle center={targetLocation} options={circleSettings} />
                <Marker position={targetLocation} />
                <></>
              </GoogleMap>
            </LoadScript>
          </div>
        </>
      )}
    </>
  );
}
