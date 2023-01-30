import "./css/List.css";
import "../../components/place/list/placeCard.css";
import "../../components/place/list/placeCard.css";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { districts } from "../../components/place/map/District";
import { Checkbox } from "@mantine/core";

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

  console.log("values: ", values);

  const activateFilter = async () => {
    if (values.length > 1) {
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
    window.scrollTo(0, 0);
  };

  const filterItem = (input: any) => {
    const newItems = allPlaceItems.filter((item) => {
      const inputValue = input;
      const districtName = item.district.replaceAll("_", " ");

      console.log("inputValue: ", inputValue);
      console.log("districtName: ", districtName);

      return inputValue.includes(districtName);
    });
    setFilteredPlaceCard(newItems);
    setIsShownFilteredPlaceCard(newItems.slice(0, 3));
  };

  /////////////////////////////////////   Category   /////////////////////////////////////

  /////////////////////////////   Prepare InfiniteScroll   ///////////////////////////////

  const [notYetFilteredDataIndex, setNotYetFilteredDataIndex] = useState(3);
  const [filteredDataIndex, setFilteredDataIndex] = useState(3);
  const [initialHasMore, setInitialHasMore] = useState(true);
  const [hasMore, setHasMore] = useState(true);

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
    if (isFiltered) {
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
          <div className="card">
            <div className="picture">
              <img className="previewPicture" src="/uploads/pictures/3.jpg" />
            </div>
            <div className="info">
              <div className="chiName">{data.chiName}</div>
              <div className="engName">{data.engName}</div>
              <div className="district">{data.district}</div>
              <div className="mapType">{data.mapType.chiType}</div>
            </div>
          </div>
          <div className="cardMargin"></div>
        </div>
      );
    });

  const renderFilteredPlaceCard = () =>
    isShownFilteredPlaceCard.map((data: any) => {
      return (
        <div key={data.chiName}>
          <div className="card">
            <div className="picture">
              <img className="previewPicture" src="/uploads/pictures/3.jpg" />
            </div>
            <div className="info">
              <div className="chiName">{data.chiName}</div>
              <div className="engName">{data.engName}</div>
              <div className="district">{data.district}</div>
              <div className="mapType">{data.mapType.chiType}</div>
            </div>
          </div>
          <div className="cardMargin"></div>
        </div>
      );
    });
  /////////////////////////////////   Render PlaceCard   /////////////////////////////////

  // console.log("===============");
  // console.log("allPlaceItems: ", allPlaceItems);
  // console.log("notYetFilteredPlaceCard: ", notYetFilteredPlaceCard);
  // console.log("length difference: ", allPlaceItems.length - notYetFilteredPlaceCard.length);
  console.log("===============");
  console.log("filteredPlaceCard: ", filteredPlaceCard);
  console.log("isShownFilteredPlaceCard: ", isShownFilteredPlaceCard);
  console.log("length difference: ", filteredPlaceCard.length - isShownFilteredPlaceCard.length);
  console.log("===============");
  console.log("initialHasMore: ", initialHasMore);
  console.log("hasMore: ", hasMore);

  return (
    <>
      <div className="pageContainer">
        <div className="categoryContainer">
          {districts.map((district: any) => {
            return (
              <Checkbox.Group key={district} value={values} onChange={setValues}>
                <Checkbox value={district} label={district} />
              </Checkbox.Group>
            );
          })}
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
                loader={<h4>Loading...</h4>}
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
                loader={<h4>Loading...</h4>}
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
