import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Masonry from "react-masonry-css";
import Footer from "../components/Footer";
import Header from "../components/Header";
// import Footer from "../components/Footer";
// import Header from "../components/Header";
import "./LandingPage.css";

export default function LandingPage() {
  const [allPicture, setAllPicture] = useState<any>([]);
  const [initialPicture, setInitialPicture] = useState<any>([]);

  const [hasMore, setHasMore] = useState(true);

  const [indexA, setIndexA] = useState(8);

  useEffect(() => {
    async function getLanding() {
      const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/user/landing`);
      const json = await res.json();

      setAllPicture(json);
      setInitialPicture(json.slice(0, 8));
    }
    getLanding();
  }, []);

  const fetchData = async () => {
    setInitialPicture([...initialPicture, allPicture[indexA]]);
    if (allPicture.length - initialPicture.length < 2) {
      setHasMore(false);
    }
    setIndexA(indexA + 1);
  };

  const breakpointColumnsObj = {
    default: 3,
    821: 2,
    290: 1,
  };

  console.log("allPicture: ", allPicture);
  console.log("item no: ", allPicture.length - initialPicture.length);
  console.log(hasMore);
  return (
    <>
      <div className="landingPageContainer">
        <Header />

        <div className="abc">
          <InfiniteScroll
            dataLength={initialPicture.length}
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
              {initialPicture.map((item: any) => {
                return (
                  <div key={item.name}>
                    <img src={`${process.env.REACT_APP_S3_UPLOAD_URL}/${item.name}`} alt={item.name} />
                  </div>
                );
              })}
            </Masonry>
          </InfiniteScroll>
        </div>

        <Footer />
      </div>
    </>
  );
}
