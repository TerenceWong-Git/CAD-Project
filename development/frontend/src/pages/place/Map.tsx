import { Autocomplete, Card, Checkbox } from "@mantine/core";
import { Circle, GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useEffect, useState } from "react";
import { AiOutlineClear } from "react-icons/ai";
import { BsCardList } from "react-icons/bs";
import { GrFilter, GrFormPrevious } from "react-icons/gr";
import { Link, useNavigate } from "react-router-dom";
import DefaultHeader from "../../components/DefaultHeader";
import Footer from "../../components/Footer";
import { districts, types } from "../../components/place/map/District";
import { circleSettings, containerStyle, containerStyle2, containerStyle3 } from "../../components/place/map/MapSetting";
import "./css/Map.css";

export default function Map() {
  const bigSizeMap = () => {
    return (
      <LoadScript googleMapsApiKey={`${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`}>
        <GoogleMap mapContainerStyle={containerStyle} center={{ lat: userLat, lng: usertLng }} zoom={17} options={{ disableDefaultUI: true }}>
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
                  setUserLat(latitudeToFloat);
                  setUserLng(longitudeToFloat);
                }}
              />

              // options={{ icon: Mall }}
            );
          })}
          <></>
        </GoogleMap>
      </LoadScript>
    );
  };

  const middleSizeMap = () => {
    return (
      <LoadScript googleMapsApiKey={`${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`}>
        <GoogleMap mapContainerStyle={containerStyle2} center={{ lat: userLat, lng: usertLng }} zoom={17} options={{ disableDefaultUI: true }}>
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
                  setUserLat(latitudeToFloat);
                  setUserLng(longitudeToFloat);
                }}
              />

              // options={{ icon: Mall }}
            );
          })}
          <></>
        </GoogleMap>
      </LoadScript>
    );
  };

  const smallSizeMap = () => {
    return (
      <LoadScript googleMapsApiKey={`${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`}>
        <GoogleMap mapContainerStyle={containerStyle3} center={{ lat: userLat, lng: usertLng }} zoom={17} options={{ disableDefaultUI: true }}>
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
                  setUserLat(latitudeToFloat);
                  setUserLng(longitudeToFloat);
                }}
              />

              // options={{ icon: Mall }}
            );
          })}
          <></>
        </GoogleMap>
      </LoadScript>
    );
  };
  ////////////////////////////////////   Load Data   /////////////////////////////////////

  const [allPlaceItems, setAllPlaceItems] = useState<any[]>([]);
  const [filteredItems, setFilteredItems] = useState<any[]>([]);
  const [searchItems, setSearchItems] = useState<any[]>([]);
  const [isTriggered, setIsTriggered] = useState(false);
  const navigate = useNavigate();

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

  // const [targetLocation, setTargetLocation] = useState({ lat: 0, lng: 0 });
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

  const activateFilter = () => {
    filterItem(values);
    setIsTriggered(false);
  };

  const deactivateFilter = () => {
    setValues([]);
  };

  const closeFilter = () => {
    setValues([]);
    setIsTriggered(false);
  };

  const wantToUseFilter = () => {
    setValues([]);
    setIsTriggered(true);
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
    setSearchItems(filteredItems);
  };

  const searchSpecificPlace = (input: any) => {
    const newItems = allPlaceItems.filter((place) => {
      const inputValue = input;
      const districtName = place.chiName;

      return inputValue.includes(districtName);
    });

    setSearchItems(newItems);
    setUserLat(parseFloat(newItems[0].latitude));
    setUserLng(parseFloat(newItems[0].longitude));
  };

  ////////////////////////////////////   Search Bar   ////////////////////////////////////

  ///////////////////////////////////   Click Click   ////////////////////////////////////

  const [selectedMarker, setSelectedMarker] = useState<any>(null);
  const [isCardShown, setIsCardShown] = useState(false);

  ///////////////////////////////////   Click Click   ////////////////////////////////////
  console.log("依家係邊: ", userLat, usertLng);
  console.log("拎到乜野: ", allPlaceItems);
  console.log("==========");
  console.log("係咪要用filter: ", isTriggered);
  console.log("入左咩落filter: ", values);
  console.log("fil完之後有咩地方: ", filteredItems);
  console.log("==========");
  console.log("可以search d咩: ", searchItems);
  console.log("入左咩落search bar: ", searchValues);
  console.log("==========");
  console.log("search左邊間: ", selectedMarker);
  console.log("");

  console.log(window.screen.width);
  console.log(window.screen.height);

  return (
    <>
      <div className="mapContainerArea">
        <DefaultHeader />
        {isTriggered ? (
          <div className="pageContainer">
            <div className="categoryContainerMap">
              <div className="districtCategoryMap">
                {districts.map((district) => {
                  return (
                    <Checkbox.Group key={district.engDistrict} value={values} onChange={setValues}>
                      <Checkbox className="districtCategoryCheckBox" value={district.engDistrict} label={district.chiDistrict} />
                    </Checkbox.Group>
                  );
                })}
              </div>
              <div className="typeCategoryMap">
                {types.map((type) => {
                  return (
                    <Checkbox.Group key={type.engType} value={values} onChange={setValues}>
                      <Checkbox className="typeCategoryCheckBox" value={type.engType} label={type.chiType} />
                    </Checkbox.Group>
                  );
                })}
              </div>
              <div className="categoryContainerButton">
                <div className="closeFilterButton">
                  <button onClick={closeFilter}>
                    <GrFormPrevious />
                  </button>
                </div>
                <div className="filterButton">
                  <button onClick={activateFilter}>
                    <GrFilter />
                  </button>
                </div>
                <div className="filterButton">
                  <button onClick={deactivateFilter}>
                    <AiOutlineClear />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="pageContainer">
            <div className="filterContainer">
              <div className="categoryTrigger">
                <button onClick={wantToUseFilter}>
                  <GrFilter />
                </button>
              </div>

              <div className="searchContainer">
                <Autocomplete value={searchValues} onChange={setSearchValues} data={searchablePlace} />
              </div>
              <div className="searchTrigger">
                <button onClick={search}>
                  <AiOutlineClear />
                </button>
              </div>

              <div className="goListPage" onClick={() => navigate("/list")}>
                <BsCardList />
              </div>
            </div>
            {window.screen.width >= 821 && <div className="mapContainer">{bigSizeMap()}</div>}
            {window.screen.width < 821 && window.screen.width >= 413 && <div className="mapContainer">{middleSizeMap()}</div>}
            {window.screen.width < 413 && <div className="mapContainer">{smallSizeMap()}</div>}

            {isCardShown && (
              <div className="previewCardArea">
                <div className="previewPlaceCard">
                  <Link to={`/list/placeDetail/${selectedMarker.id}`} style={{ color: "#262220" }}>
                    <div className="previewPlaceCardPicture">
                      <img src={`/uploads/list/${selectedMarker.profileImg}`} alt={selectedMarker.engName} />
                    </div>
                  </Link>
                  <div className="previewPlaceCardInfo">
                    <div className="cardTitle">{selectedMarker.chiName}</div>
                    <div className="cardType">{selectedMarker.mapType.chiType}</div>
                  </div>
                </div>
                <button
                  className="closeCardButton"
                  onClick={() => {
                    setIsCardShown(false);
                  }}
                >
                  x
                </button>
              </div>
            )}
          </div>
        )}
        <Footer />
      </div>
    </>
  );
}
