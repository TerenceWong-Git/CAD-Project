import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Masonry from "react-masonry-css";
import Header from "../components/Header";
// import Footer from "../components/Footer";
// import Header from "../components/Header";
import "./LandingPage.css";

// 欠 tag handle
const data1 = [
  { id: 1, name: "1", img: "/uploads/1.jpg" },
  { id: 2, name: "2", img: "/uploads/2.jpg" },
  { id: 3, name: "3", img: "/uploads/3.jpg" },
  { id: 4, name: "4", img: "/uploads/4.jpg" },
  { id: 5, name: "5", img: "/uploads/5.jpg" },
  { id: 6, name: "6", img: "/uploads/6.jpg" },
  { id: 7, name: "7", img: "/uploads/7.jpg" },
  { id: 8, name: "8", img: "/uploads/8.jpg" },
  { id: 9, name: "9", img: "/uploads/9.jpg" },
  { id: 10, name: "10", img: "/uploads/10.jpg" },
  { id: 11, name: "11", img: "/uploads/11.jpg" },
  { id: 12, name: "12", img: "/uploads/12.jpg" },
  { id: 13, name: "13", img: "/uploads/13.jpg" },
  { id: 14, name: "14", img: "/uploads/14.jpg" },
  { id: 15, name: "15", img: "/uploads/15.jpg" },
  { id: 16, name: "16", img: "/uploads/16.jpg" },
  { id: 17, name: "17", img: "/uploads/17.jpg" },
  { id: 18, name: "18", img: "/uploads/18.jpg" },
  { id: 19, name: "19", img: "/uploads/19.jpg" },
  { id: 20, name: "20", img: "/uploads/20.jpg" },
  { id: 21, name: "21", img: "/uploads/21.jpg" },
  { id: 22, name: "22", img: "/uploads/22.jpg" },
  { id: 23, name: "23", img: "/uploads/23.jpg" },
  { id: 24, name: "24", img: "/uploads/24.jpg" },
  { id: 25, name: "25", img: "/uploads/25.jpg" },
];

export default function LandingPage() {
  const [items, setItems] = useState<any>([]);

  const [hasMore, sethasMore] = useState(true);

  const [indexA, setIndexA] = useState(8);

  console.log("item no: ", data1.length - items.length);
  console.log(hasMore);

  useEffect(() => {
    const getComments = async () => {
      setItems(data1.slice(0, 8));
    };

    getComments();
  }, []);

  const fetchData = async () => {
    setItems([...items, data1[indexA]]);
    if (data1.length - items.length === 0 || data1.length - items.length < 3) {
      sethasMore(false);
    }
    setIndexA(indexA + 1);
  };

  const breakpointColumnsObj = {
    default: 3,
    821: 2,
    290: 1,
  };

  return (
    <>
      <div className="landingPageContainer">
        <Header />

        <div className="abc">
          <InfiniteScroll
            dataLength={items.length}
            next={fetchData}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
          >
            <Masonry breakpointCols={breakpointColumnsObj} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
              {items.map((item: any) => {
                return (
                  <div key={item.id}>
                    <img src={`${item.img}`} alt={item.name} />
                  </div>
                );
              })}
            </Masonry>
          </InfiniteScroll>
        </div>
      </div>
    </>
  );
}
