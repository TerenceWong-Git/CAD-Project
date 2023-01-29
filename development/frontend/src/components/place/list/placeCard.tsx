import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import "./placeCard.css";

export default function PlaceCard() {
  ////////////////////////////////////   Load Data   /////////////////////////////////////

  const [placeData, setPlaceData] = useState<any>([]);
  const [placeDataForInfiniteScroll, setPlaceDataForInfiniteScroll] = useState<any>([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/map`);
      const json = await res.json();

      setPlaceData(json);
      setPlaceDataForInfiniteScroll(json.slice(0, 1));
    }
    fetchData();
  }, []);

  ////////////////////////////////////   Load Data   /////////////////////////////////////

  ////////////////////////////   Prepare InfiniteScroll   ///////////////////////////////

  const [placeDataIndex, setPlaceDataIndex] = useState(1);
  const [hasMore, sethasMore] = useState(true);

  const prepareInfiniteScroll = async () => {
    setPlaceDataForInfiniteScroll([...placeDataForInfiniteScroll, placeData[placeDataIndex]]);
    if (placeData.length - placeDataForInfiniteScroll.length === 0 || placeData.length - placeDataForInfiniteScroll.length < 2) {
      sethasMore(false);
    }
    setPlaceDataIndex(placeDataIndex + 1);
  };
  console.log("placeDataForInfiniteScroll: ", placeDataForInfiniteScroll);
  console.log("data length: ", placeData.length);
  console.log("card length: ", placeDataForInfiniteScroll.length);
  console.log("hasMore: ", hasMore);

  ////////////////////////////   Prepare InfiniteScroll   ///////////////////////////////

  return (
    <>
      123
      <InfiniteScroll
        dataLength={placeDataForInfiniteScroll.length}
        next={prepareInfiniteScroll}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {placeDataForInfiniteScroll.map((data: any) => {
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
        })}
      </InfiniteScroll>
    </>
  );
}
