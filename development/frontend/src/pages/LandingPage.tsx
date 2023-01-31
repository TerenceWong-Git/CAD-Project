import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

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

  const [indexOne, setIndexOne] = useState(3);
  const [indexTwo, setIndexTwo] = useState(4);
  const [indexThree, setIndexThree] = useState(5);

  console.log("data no: ", data1.length);
  console.log("item no: ", items.length);
  console.log(hasMore);

  useEffect(() => {
    const getComments = async () => {
      setItems(data1.slice(0, 3));
    };

    getComments();
  }, []);

  const fetchData = async () => {
    setItems([...items, data1[indexOne], data1[indexTwo], data1[indexThree]]);
    if (data1.length - items.length === 0 || data1.length - items.length < 4) {
      sethasMore(false);
    }
    setIndexOne(indexOne + 3);
    setIndexTwo(indexTwo + 3);
    setIndexThree(indexThree + 3);
  };
  // console.log(indexOne);
  // console.log(indexTwo);
  // console.log(indexThree);

  console.log("items: ", items);
  return (
    <>
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
        {items.map((item: any) => {
          return (
            //<Link to={`/matching/${data.id}`} > </Link>
            <div key={item.id}>
              <p>
                <img width="400" src={`${item.img}`} />
              </p>
            </div>
          );
        })}
      </InfiniteScroll>
    </>
  );
}
