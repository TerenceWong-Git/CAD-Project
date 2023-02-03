import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Masonry from "react-masonry-css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./LandingPage.css";

const data1 = [
  { id: 1, name: "1", img: "/uploads/pictures/1.jpg" },
  { id: 2, name: "2", img: "/uploads/pictures/2.jpg" },
  { id: 3, name: "3", img: "/uploads/pictures/3.jpg" },
  { id: 4, name: "4", img: "/uploads/pictures/4.jpg" },
  { id: 5, name: "5", img: "/uploads/pictures/5.jpg" },
  { id: 6, name: "6", img: "/uploads/pictures/6.jpg" },
  { id: 7, name: "7", img: "/uploads/pictures/7.jpg" },
  { id: 8, name: "8", img: "/uploads/pictures/8.jpg" },
  { id: 9, name: "9", img: "/uploads/pictures/9.jpg" },
  { id: 10, name: "10", img: "/uploads/pictures/10.jpg" },
  { id: 11, name: "11", img: "/uploads/pictures/11.jpg" },
  { id: 12, name: "12", img: "/uploads/pictures/12.jpg" },
  { id: 13, name: "13", img: "/uploads/pictures/13.jpg" },
  { id: 14, name: "14", img: "/uploads/pictures/14.jpg" },
  { id: 15, name: "15", img: "/uploads/pictures/15.jpg" },
];
// const data2 = [
//   { id: 4, img: "/uploads/photos/4.jpg" },
//   { id: 5, img: "/uploads/photos/5.jpg" },
//   { id: 6, img: "/uploads/photos/6.jpg" },
// ];
// const data3 = [
//   { id: 7, img: "/uploads/photos/7.jpg" },
//   { id: 8, img: "/uploads/photos/8.jpg" },
//   { id: 9, img: "/uploads/photos/9.jpg" },
// ];
// const data4 = [
//   { id: 10, img: "/uploads/photos/10.jpg" },
//   { id: 11, img: "/uploads/photos/11.jpg" },
//   { id: 12, img: "/uploads/photos/12.jpg" },
//   { id: 13, img: "/uploads/photos/13.jpg" },
// ];

export default function LandingPage() {
  const [items, setItems] = useState<any>([]);

  const [hasMore, sethasMore] = useState(true);

  const [indexA, setIndexA] = useState(6);
  const [indexB, setIndexB] = useState(9);
  const [indexC, setIndexC] = useState(10);
  // const [indexD, setIndexD] = useState(9);

  console.log("data no: ", data1.length);
  console.log("item no: ", items.length);
  console.log(hasMore);

  useEffect(() => {
    const getComments = async () => {
      setItems(data1.slice(0, 6));
    };

    getComments();
  }, []);

  const fetchData = async () => {
    //  data1[indexB], data1[indexC];
    setItems([...items, data1[indexA]]);
    if (data1.length - items.length === 0 || data1.length - items.length < 4) {
      sethasMore(false);
    }
    setIndexA(indexA + 1);
    // setIndexB(indexB + 1);
    // setIndexC(indexC + 1);
    // setIndexD(indexD + 1);
    // setIndexTwo(indexTwo + 2);
  };

  // console.log(indexOne);
  // console.log(indexTwo);
  // console.log(indexThree);

  console.log("items: ", items);

  const breakpointColumnsObj = {
    default: 3,
    1300: 3,
    1000: 2,
    290: 1,
  };

  return (
    <>
      <div className="homeContainer">
        <div className="header">
          <Header />
        </div>

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

        <Footer/>
      </div>
    </>
  );
}
