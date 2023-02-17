import { Autocomplete, Checkbox } from "@mantine/core";
import { Circle, GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { PropsWithChildren, useEffect, useState } from "react";
import { AiOutlineArrowRight, AiOutlineClear } from "react-icons/ai";
import { BsCardList } from "react-icons/bs";
import { GrFilter, GrFormPrevious } from "react-icons/gr";
import { Link, useNavigate } from "react-router-dom";
import DefaultHeader from "../../components/DefaultHeader";
import Footer from "../../components/Footer";
import { districts, types } from "../../components/place/map/District";
import {
  circleSettings,
  containerStyle,
  containerStyle2,
  containerStyle3,
} from "../../components/place/map/MapSetting";
import "./css/Map.css";
import { useIsMounted } from "../../redux/Hook";
// import Mall from "/uploads/mapIcon/mall.png";
// options={{ icon: Mall }}

const MyMap = ({
  userLat,
  userLng,
  width,
  height,
  children,
}: PropsWithChildren<{
  width: string;
  height: string;
  userLat: number;
  userLng: number;
}>) => {
  return (
    <LoadScript
      googleMapsApiKey={`${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`}
    >
      <GoogleMap
        mapContainerStyle={{ width, height }}
        center={{ lat: userLat, lng: userLng }}
        zoom={17}
        options={{ disableDefaultUI: true }}
      >
        <Circle
          center={{ lat: userLat, lng: userLng }}
          options={circleSettings}
        />
        <Marker position={{ lat: userLat, lng: userLng }} />
        {children}
      </GoogleMap>
    </LoadScript>
  );
};

interface Place {
  id: number;
  latitude: string;
  longitude: string;
  chiAddress: string;
  chiName: string;
  district: string;
  email?: string;
  engAddress: string;
  engName: string;
  phoneNum: number;
  profileImg: string;
  mapType: { chinType: string; engType: string };
}

export default function Map() {
  const isMounted = useIsMounted();
  const [allPlaceItems, setAllPlaceItems] = useState<Place[]>([]);
  const [filteredItems, setFilteredItems] = useState<Place[]>([]);
  const [searchItems, setSearchItems] = useState<Place[]>([]);
  const [isTriggered, setIsTriggered] = useState(false);
  const [isFastTravel, setIsFastTravel] = useState(false);
  const [values, setValues] = useState<string[]>([]);
  const [userLat, setUserLat] = useState(0);
  const [userLng, setUserLng] = useState(0);
  const [searchValues, setSearchValues] = useState<any>();
  const navigate = useNavigate();

  // const testFilteredPlaceArr = useMemo(
  //   () => allPlaceItems.filter((place) => values.indexOf(place.district) >= 0),
  //   [values, allPlaceItems]
  // );
  // console.log(testFilteredPlaceArr);

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

  useEffect(() => {
    const successFunc = (position: any) => {
      setUserLat(position.coords.latitude);
      setUserLng(position.coords.longitude);
    };
    const errorFunc = () => console.error("navigator failed");

    const options = { maximumAge: Infinity };
    let watchId: number;
    if (isMounted.current && !isFastTravel) {
      watchId = navigator.geolocation.watchPosition(
        successFunc,
        errorFunc,
        options
      );
    }

    return () => {
      if (watchId) {
        navigator.geolocation.clearWatch(watchId);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        return (
          inputValue.includes(districtName) || inputValue.includes(typeName)
        );
      } else {
        return (
          inputValue.includes(districtName) ||
          inputValue.includes(typeName) ||
          (inputValue.includes(districtName) && inputValue.includes(typeName))
        );
      }
    });
    setFilteredItems(newItems);
    setSearchItems(newItems);
  };

  /////////////////////////////////////   Category   /////////////////////////////////////

  ////////////////////////////////////   Search Bar   ////////////////////////////////////

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
    setIsFastTravel(true);
    setUserLat(parseFloat(newItems[0].latitude));
    setUserLng(parseFloat(newItems[0].longitude));
  };

  ////////////////////////////////////   Search Bar   ////////////////////////////////////

  ///////////////////////////////////   Click Click   ////////////////////////////////////

  const [selectedMarker, setSelectedMarker] = useState<any>(null);
  const [isCardShown, setIsCardShown] = useState(false);

  let selectedStyle: { width: string; height: string };
  if (window.screen.width >= 821) {
    selectedStyle = containerStyle;
  } else if (window.screen.width >= 413) {
    selectedStyle = containerStyle2;
  } else {
    selectedStyle = containerStyle3;
  }

  return (
    <div className="mapContainerArea">
      <DefaultHeader />
      {isTriggered ? (
        <div className="pageContainer">
          <div className="categoryContainerMap">
            <div className="districtCategoryMap">
              {districts.map((district) => {
                return (
                  <Checkbox.Group
                    key={district.engDistrict}
                    value={values}
                    onChange={setValues}
                  >
                    <Checkbox
                      className="districtCategoryCheckBox"
                      value={district.engDistrict}
                      label={district.chiDistrict}
                    />
                  </Checkbox.Group>
                );
              })}
            </div>
            <div className="typeCategoryMap">
              {types.map((type) => {
                return (
                  <Checkbox.Group
                    key={type.engType}
                    value={values}
                    onChange={setValues}
                  >
                    <Checkbox
                      className="typeCategoryCheckBox"
                      value={type.engType}
                      label={type.chiType}
                    />
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
              <Autocomplete
                value={searchValues}
                onChange={setSearchValues}
                data={searchablePlace}
              />
            </div>
            <div className="searchTrigger">
              <button onClick={search}>
                <AiOutlineArrowRight />
              </button>
            </div>

            <div className="goListPage" onClick={() => navigate("/list")}>
              <BsCardList />
            </div>
          </div>
          <div className="mapContainer">
            <MyMap
              width={selectedStyle.width}
              height={selectedStyle.height}
              userLat={userLat}
              userLng={userLng}
            >
              {searchItems.map((item) => {
                const latitudeToFloat = parseFloat(item.latitude);
                const longitudeToFloat = parseFloat(item.longitude);
                return (
                  <Marker
                    key={item.engName}
                    position={{
                      lat: latitudeToFloat,
                      lng: longitudeToFloat,
                    }}
                    onClick={() => {
                      setSelectedMarker(item);
                      setIsCardShown(true);
                      setUserLat(latitudeToFloat);
                      setUserLng(longitudeToFloat);
                    }}
                  />
                );
              })}
            </MyMap>
          </div>
          {isCardShown && (
            <div className="previewCardArea">
              <div className="previewPlaceCard">
                <Link
                  to={`/list/placeDetail/${selectedMarker.id}`}
                  style={{ color: "#262220" }}
                >
                  <div className="previewPlaceCardPicture">
                    <img
                      src={`/uploads/list/${selectedMarker.profileImg}`}
                      alt={selectedMarker.engName}
                    />
                  </div>
                </Link>
                <div className="previewPlaceCardInfo">
                  <div className="cardTitle">{selectedMarker.chiName}</div>
                  <div className="cardType">
                    {selectedMarker.mapType.chiType}
                  </div>
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
  );
}
