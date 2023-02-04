import "./css/List.css";
import "../../components/place/list/placeCard.css";
import "../../components/place/list/placeCard.css";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { districts, types } from "../../components/place/map/District";
import { Checkbox } from "@mantine/core";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

// 如果filter完冇野 D card會縮細曬
// > 3間場所 要再set hasMore 條件
// 禁card仔入去detail
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

  const filterItem = (input: any) => {
    const newItems = allPlaceItems.filter((item) => {
      const inputValue = input;
      const districtName = item.district;
      const typeName = item.mapType.engType;

      if (values.length < 2) {
        return inputValue.includes(districtName) || inputValue.includes(typeName);
      } else {
        return inputValue.includes(districtName) && inputValue.includes(typeName);
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
      if (allPlaceItems.length - notYetFilteredPlaceCard.length < 2) {
        setInitialHasMore(false);
      }
      setNotYetFilteredDataIndex(notYetFilteredDataIndex + 1);
    }
  };

  const filteredInfiniteScroll = async () => {
    if (isFiltered) {
      setIsShownFilteredPlaceCard([...isShownFilteredPlaceCard, filteredPlaceCard[filteredDataIndex]]);
      if (filteredPlaceCard.length - isShownFilteredPlaceCard.length < 2) {
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
              <img className="previewPicture" src="/uploads/pictures/3.jpg" alt={data.engName} />
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
              <img className="previewPicture" src="/uploads/pictures/3.jpg" alt={data.engName} />
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

  const activateFilter = async () => {
    if (values.length > 0) {
      setInitialHasMore(false);
      setIsFiltered(true);
      setFilteredDataIndex(3);
      filterItem(values);
      setHasMore(true);
      window.scrollTo(0, 0);
    }
  };

  const deactivateFilter = async () => {
    setIsFiltered(false);
    setValues([]);
    window.scrollTo(0, 0);
  };

  console.log("一開波有幾多間野: ", allPlaceItems);
  console.log("依家show左幾多間: ", notYetFilteredPlaceCard);
  console.log("未fil個堆仲load唔load: ", initialHasMore);
  console.log("===============");
  console.log("filter左未: ", isFiltered);
  console.log("filter簡左咩: ", values);
  console.log("===============");
  console.log("filter完總共有幾多間野: ", filteredPlaceCard);
  console.log("依家show左幾多間: ", isShownFilteredPlaceCard);
  console.log("fil左個堆仲load唔load: ", hasMore);
  console.log("===============");

  return (
    <>
      <div className="listPageContainer">
        <Header />
        <div className="listContentContainer">
          <div className="listCategoryContainer">
            <div className="listDistrictCategory">
              地區
              {districts.map((district: any) => {
                return (
                  <Checkbox.Group key={district.engDistrict} value={values} onChange={setValues}>
                    <Checkbox value={district.engDistrict} label={district.chiDistrict} />
                  </Checkbox.Group>
                );
              })}
            </div>

            <div className="listTypeCategory">
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

          <div className="listPagePlaceContainer">
            <div className="listSearchBarContainer"></div>
            <div className="listPlaceCardContainer">
              {isFiltered ? (
                <InfiniteScroll
                  dataLength={isShownFilteredPlaceCard.length}
                  next={filteredInfiniteScroll}
                  hasMore={hasMore}
                  loader={<div></div>}
                  endMessage={
                    <p style={{ textAlign: "center" }}>
                      <b>你到底啦</b>
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
                      <b>你到底啦</b>
                    </p>
                  }
                >
                  {renderNotYetFilteredPlaceCard()}
                </InfiniteScroll>
              )}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
