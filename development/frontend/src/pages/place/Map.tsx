import { Autocomplete, Card, Checkbox } from "@mantine/core";

import { Circle, GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import { districts, types } from "../../components/place/map/District";
import { circleSettings, containerStyle } from "../../components/place/map/MapSetting";
import "./css/Map.css";

// change marker icon
// 空search會爆
// 禁完filter跳出去map
// set多一個useState 先裝searchItems入面既野  search bar用依個state show選擇 每次search value清空  入面就重疊
// 禁card仔入個版
export default function Map() {
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

  ////////////////////////////////////   Load Data   /////////////////////////////////////

  ////////////////////////////////////   Initial Map   ///////////////////////////////////

  const [targetLocation, setTargetLocation] = useState({ lat: 0, lng: 0 });
  const [userLat, setUserLat] = useState(0);
  const [usertLng, setUserLng] = useState(0);

  navigator.geolocation.watchPosition((position) => {
    // setTargetLocation({ lat: position.coords.latitude, lng: position.coords.longitude });

    setUserLat(position.coords.latitude);
    setUserLng(position.coords.longitude);
  });

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
        return (
          inputValue.includes(districtName) || inputValue.includes(typeName) || (inputValue.includes(districtName) && inputValue.includes(typeName))
        );
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

  const search = () => {
    if (searchValues.length > 0) {
      searchSpecificPlace(searchValues);
    }
  };

  const searchSpecificPlace = (input: any) => {
    const newItems = allPlaceItems.filter((place) => {
      const inputValue = input;
      const districtName = place.chiName;

      return inputValue.includes(districtName);
    });

    setSearchItems(newItems);
    setTargetLocation({ lat: parseFloat(newItems[0].latitude), lng: parseFloat(newItems[0].longitude) });
    setUserLat(parseFloat(newItems[0].latitude));
    setUserLng(parseFloat(newItems[0].longitude));
  };

  ////////////////////////////////////   Search Bar   ////////////////////////////////////

  ///////////////////////////////////   Click Click   ////////////////////////////////////

  const [selectedMarker, setSelectedMarker] = useState<any>(null);
  const [isCardShown, setIsCardShown] = useState(false);

  ///////////////////////////////////   Click Click   ////////////////////////////////////
  console.log("依家係邊: ", targetLocation);
  console.log("拎到乜野: ", allPlaceItems);
  console.log("==========");
  console.log("係咪要用filter: ", isTriggered);
  console.log("fil完之後有咩地方: ", filteredItems);
  console.log("==========");
  console.log("可以search d咩: ", searchItems);
  console.log("入左咩落search bar: ", searchValues);
  console.log("==========");
  console.log("values: ", values);
  console.log("filteredItems: ", filteredItems);
  console.log("==========");
  console.log("");

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

            <button onClick={activateFilter}>Filter</button>
            <button onClick={deactivateFilter}>Clear</button>
          </div>
        </div>
      ) : (
        <div className="pageContainer">
          <div className="filterContainer">
            <div className="searchContainer">
              <Autocomplete value={searchValues} onChange={setSearchValues} data={searchablePlace} />
            </div>
            <div className="searchTrigger">
              <button onClick={search}>Search</button>
            </div>

            <div className="categoryTrigger">
              <button onClick={() => setIsTriggered(true)}>Category</button>
            </div>
          </div>
          {isCardShown && (
            <div>
              <Card className="previewPlaceCard">
                <Card.Section className="cardSection">
                  <img className="previewPicture2" src="/uploads/pictures/3.jpg" alt={selectedMarker.engName} />
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
              <GoogleMap mapContainerStyle={containerStyle} center={{ lat: userLat, lng: usertLng }} zoom={17} options={{ disableDefaultUI: true }}>
                {/* <GoogleMap mapContainerStyle={containerStyle} center={targetLocation} zoom={17} options={{ disableDefaultUI: true }}> */}
                <Circle center={{ lat: userLat, lng: usertLng }} options={circleSettings} />
                <Marker position={{ lat: userLat, lng: usertLng }} />
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
        </div>
      )}
    </>
  );
}
