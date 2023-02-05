import "./css/List.css";
import "../../components/place/list/PlaceCard.css";
import "../../components/place/list/PlaceCard.css";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { districts, types } from "../../components/place/map/District";
import { Checkbox } from "@mantine/core";
import { Link } from "react-router-dom";

export default function List() {
  ////////////////////////////////////   Load Data   /////////////////////////////////////

  const [allPlaceItems, setAllPlaceItems] = useState<any[]>([]);
  const [notYetFilteredPlaceCard, setNotYetFilteredPlaceCard] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/map`);
      const json = await res.json();

      setAllPlaceItems(json);
      setNotYetFilteredPlaceCard(json.slice(0, 3));
    }
    fetchData();
  }, []);

  ////////////////////////////////////   Load Data   /////////////////////////////////////

  /////////////////////////////////////   Category   /////////////////////////////////////
  const [filteredPlaceCard, setFilteredPlaceCard] = useState<any[]>([]);
  const [isShownFilteredPlaceCard, setIsShownFilteredPlaceCard] = useState<any[]>([]);
  const [values, setValues] = useState<any>([]);
  const [isFiltered, setIsFiltered] = useState(false);

  const activateFilter = async () => {
    if (values.length > 0) {
      setInitialHasMore(false);
      setHasMore(true);
      setIsFiltered(true);
      setFilteredDataIndex(3);
    }
    filterItem(values);
    window.scrollTo(0, 0);
  };

  const deactivateFilter = async () => {
    setIsFiltered(false);
    setValues([]);
    setInitialHasMore(true);
    window.scrollTo(0, 0);
  };

  const reTag = () => {
    window.scrollTo(0, 0);
  };

  const filterItem = (input: any) => {
    const newItems = allPlaceItems.filter((item) => {
      const inputValue = input;
      const districtName = item.district;
      const typeName = item.mapType.engType;

      if (values.length < 2) {
        return inputValue.includes(districtName) || inputValue.includes(typeName);
      } else {
        return (
          inputValue.includes(districtName) || inputValue.includes(typeName) || (inputValue.includes(districtName) && inputValue.includes(typeName))
        );
      }
    });
    setFilteredPlaceCard(newItems);
    setIsShownFilteredPlaceCard(newItems.slice(0, 3));
  };

  /////////////////////////////////////   Category   /////////////////////////////////////

  /////////////////////////////   Prepare InfiniteScroll   ///////////////////////////////

  const [notYetFilteredDataIndex, setNotYetFilteredDataIndex] = useState(3);
  const [filteredDataIndex, setFilteredDataIndex] = useState(3);
  const [initialHasMore, setInitialHasMore] = useState(true);
  const [hasMore, setHasMore] = useState(false);

  const notYetFilteredInfiniteScroll = async () => {
    if (!isFiltered) {
      setNotYetFilteredPlaceCard([...notYetFilteredPlaceCard, allPlaceItems[notYetFilteredDataIndex]]);
      if (allPlaceItems.length - notYetFilteredPlaceCard.length === 0 || allPlaceItems.length - notYetFilteredPlaceCard.length < 2) {
        setInitialHasMore(false);
      }
      setNotYetFilteredDataIndex(notYetFilteredDataIndex + 1);
    }
  };

  const filteredInfiniteScroll = async () => {
    if (isFiltered && (filteredPlaceCard.length > 3 || filteredPlaceCard.length <= 2 || filteredPlaceCard.length === 0)) {
      setIsShownFilteredPlaceCard([...isShownFilteredPlaceCard, filteredPlaceCard[filteredDataIndex]]);
      if (filteredPlaceCard.length - isShownFilteredPlaceCard.length === 0 || filteredPlaceCard.length - isShownFilteredPlaceCard.length < 2) {
        setHasMore(false);
      }
      setFilteredDataIndex(filteredDataIndex + 1);
    }
  };
  /////////////////////////////   Prepare InfiniteScroll   ///////////////////////////////

  /////////////////////////////////   Render PlaceCard   /////////////////////////////////
  const renderNotYetFilteredPlaceCard = () =>
    notYetFilteredPlaceCard.map((data: any) => {
      return (
        <div key={data.chiName}>
          <Link to={`placeDetail/${data.id}`} style={{ color: "#262220" }}>
            <div className="card">
              <div className="picture">
                <img className="previewPicture" src="/uploads/pictures/3.jpg" alt={data.engName} />
              </div>
              <div className="info">
                <div className="chiName">{data.chiName}</div>
                <div className="engName">{data.engName}</div>
                <div className="district">{data.district}</div>
                <div className="mapType">{data.mapType.chiType}</div>
              </div>
            </div>
          </Link>
          <div className="cardMargin"></div>
        </div>
      );
    });

  const renderFilteredPlaceCard = () =>
    isShownFilteredPlaceCard.map((data: any) => {
      return (
        <div key={data.chiName}>
          <Link to={`placeDetail/${data.id}`} style={{ color: "#262220" }}>
            <div className="card">
              <div className="picture">
                <img className="previewPicture" src="/uploads/pictures/3.jpg" alt={data.engName} />
              </div>
              <div className="info">
                <div className="chiName">{data.chiName}</div>
                <div className="engName">{data.engName}</div>
                <div className="district">{data.district}</div>
                <div className="mapType">{data.mapType.chiType}</div>
              </div>
            </div>
          </Link>
          <div className="cardMargin"></div>
        </div>
      );
    });
  /////////////////////////////////   Render PlaceCard   /////////////////////////////////

  console.log("一開波有幾多間野: ", allPlaceItems);
  console.log("依家show左幾多間: ", notYetFilteredPlaceCard);
  console.log("未fil個堆仲load唔load: ", initialHasMore);
  console.log("===============");
  console.log("filter左未: ", isFiltered);
  console.log("filter簡左咩: ", values);
  console.log("===============");
  console.log("filter完總共有幾多間野: ", filteredPlaceCard);
  console.log("依家show左幾多間: ", isShownFilteredPlaceCard);
  console.log("仲有幾多間未load: ", filteredPlaceCard.length - isShownFilteredPlaceCard.length);
  console.log("fil左個堆仲load唔load: ", hasMore);
  console.log("===============");
  console.log("");

  return (
    <>
      <div className="listPageContainer">
        <div className="categoryContainer">
          <div className="districtCategory">
            {districts.map((district: any) => {
              return (
                <Checkbox.Group key={district.engDistrict} onClick={reTag} value={values} onChange={setValues}>
                  <Checkbox value={district.engDistrict} label={district.chiDistrict} />
                </Checkbox.Group>
              );
            })}
          </div>

          <div className="typeCategory">
            {types.map((type: any) => {
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
        <div className="placeContainer">
          <div className="searchBarContainer"></div>
          <div className="CardContainer">
            {isFiltered ? (
              <InfiniteScroll
                dataLength={isShownFilteredPlaceCard.length}
                next={filteredInfiniteScroll}
                hasMore={hasMore}
                loader={<div></div>}
                endMessage={
                  <p style={{ textAlign: "center" }}>
                    <b>Yay! You have seen it all</b>
                  </p>
                }
              >
                {renderFilteredPlaceCard()}
              </InfiniteScroll>
            ) : (
              <InfiniteScroll
                dataLength={notYetFilteredPlaceCard.length}
                next={notYetFilteredInfiniteScroll}
                hasMore={initialHasMore}
                loader={<div></div>}
                endMessage={
                  <p style={{ textAlign: "center" }}>
                    <b>Yay! You have seen it all</b>
                  </p>
                }
              >
                {renderNotYetFilteredPlaceCard()}
              </InfiniteScroll>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
