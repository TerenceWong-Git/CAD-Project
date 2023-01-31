import { Autocomplete, Card, Checkbox } from "@mantine/core";
import { border } from "@mui/system";
import { Circle, GoogleMap, InfoWindow, LoadScript, Marker } from "@react-google-maps/api";
import { useEffect, useState } from "react";
import { districts, types } from "../../components/place/map/District";
import { circleSettings, containerStyle } from "../../components/place/map/MapSetting";
import "./css/Map.css";

export default function Map3() {
  ////////////////////////////////////   Load Data   /////////////////////////////////////

  const [allPlaceItems, setAllPlaceItems] = useState<any[]>([]);
  const [filteredItems, setFilteredItems] = useState<any[]>([]);
  const [searchItems, setSearchItems] = useState<any[]>([]);
  const [isTriggered, setIsTriggered] = useState(false);

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

  ////////////////////////////////////   Load Data   /////////////////////////////////////

  ////////////////////////////////////   Initial Map   ///////////////////////////////////

  const [userLocation, setUserLocation] = useState({ lat: 0, lng: 0 });
  const [targetLocation, setTargetLocation] = useState({ lat: 0, lng: 0 });

  navigator.geolocation.watchPosition((position) => {
    setUserLocation({ lat: position.coords.latitude, lng: position.coords.longitude });
    setTargetLocation({ lat: position.coords.latitude, lng: position.coords.longitude });
  });
  console.log(targetLocation);

  ////////////////////////////////////   Initial Map   ///////////////////////////////////

  /////////////////////////////////////   Category   /////////////////////////////////////

  const [values, setValues] = useState<any>([]);

  const activateFilter = async () => {
    filterItem(values);
  };

  const deactivateFilter = async () => {
    setValues([]);
  };

  const filterItem = (input: any) => {
    const newItems = allPlaceItems.filter((item) => {
      const inputValue = input;
      const districtName = item.district;
      const typeName = item.mapType.engType;

      console.log("inputValue: ", inputValue);
      console.log("districtName: ", districtName);

      if (values.length < 2) {
        return inputValue.includes(districtName) || inputValue.includes(typeName);
      } else {
        return inputValue.includes(districtName) && inputValue.includes(typeName);
      }
    });
    setFilteredItems(newItems);
    setSearchItems(newItems);
  };

  /////////////////////////////////////   Category   /////////////////////////////////////

  ////////////////////////////////////   Search Bar   ////////////////////////////////////

  const [searchValues, setSearchValues] = useState<any>();

  const searchablePlace = searchItems.map((item) => {
    return item.chiName;
  });

  const searchSpecificPlace = (input: any) => {
    const newItems = allPlaceItems.filter((place) => {
      const inputValue = input;
      const districtName = place.chiName;

      return inputValue.includes(districtName);
    });

    setSearchItems(newItems);
    setTargetLocation({ lat: parseFloat(newItems[0].latitude), lng: parseFloat(newItems[0].longitude) });
  };
  console.log("searchValues: ", searchValues);
  console.log("searchItems: ", searchItems);
  console.log("==========");

  ////////////////////////////////////   Search Bar   ////////////////////////////////////

  ///////////////////////////////////   Click Click   ////////////////////////////////////

  const [selectedMarker, setSelectedMarker] = useState<any>(null);
  const [isCardShown, setIsCardShown] = useState(false);

  ///////////////////////////////////   Click Click   ////////////////////////////////////

  console.log("values: ", values);
  console.log("filteredItems: ", filteredItems);

  return (
    <>
      {isTriggered ? (
        <div className="pageContainer">
          <button onClick={() => setIsTriggered(false)}>Back</button>
          <div className="categoryContainer">
            <div className="districtCategory">
              {districts.map((district) => {
                return (
                  <Checkbox.Group key={district.engDistrict} value={values} onChange={setValues}>
                    <Checkbox value={district.engDistrict} label={district.chiDistrict} />
                  </Checkbox.Group>
                );
              })}
            </div>
            <div className="typeCategory">
              {types.map((type) => {
                return (
                  <Checkbox.Group key={type.engType} value={values} onChange={setValues}>
                    <Checkbox value={type.engType} label={type.chiType} />
                  </Checkbox.Group>
                );
              })}
            </div>
            <div>
              <Autocomplete value={searchValues} onChange={setSearchValues} data={searchablePlace} />
              <button onClick={() => searchSpecificPlace(searchValues)}>Search</button>
            </div>

            <button onClick={activateFilter}>Filter</button>
            <button onClick={deactivateFilter}>Clear</button>
          </div>
        </div>
      ) : (
        <>
          <div>
            <button onClick={() => setIsTriggered(true)}>Category</button>
          </div>
          {isCardShown && (
            <div>
              <Card className="previewPlaceCard">
                <Card.Section className="cardSection">
                  <img className="previewPicture2" src="/uploads/pictures/3.jpg" />
                </Card.Section>
                <Card.Section className="cardSection">{selectedMarker.chiName}</Card.Section>
                <Card.Section className="cardSection">{selectedMarker.mapType.chiType}</Card.Section>
                <button
                  className="closeCardButton"
                  onClick={() => {
                    setIsCardShown(false);
                  }}
                >
                  x
                </button>
              </Card>
            </div>
          )}
          <div className="mapContainer">
            <LoadScript googleMapsApiKey={`${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`}>
              <GoogleMap mapContainerStyle={containerStyle} center={targetLocation} zoom={17} options={{ disableDefaultUI: true }}>
                <Circle center={userLocation} options={circleSettings} />
                <Marker position={userLocation} />
                {searchItems.map((item) => {
                  const latitudeToFloat = parseFloat(item.latitude);
                  const longitudeToFloat = parseFloat(item.longitude);
                  return (
                    <Marker
                      key={item.engName}
                      position={{ lat: latitudeToFloat, lng: longitudeToFloat }}
                      onClick={() => {
                        setSelectedMarker(item);
                        setIsCardShown(true);
                      }}
                    />

                    // options={{ icon: Mall }}
                  );
                })}
                <></>
              </GoogleMap>
            </LoadScript>
          </div>
        </>
      )}
    </>
  );
}
