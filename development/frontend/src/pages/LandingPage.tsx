import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Masonry from "react-masonry-css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { tags } from "../components/pet/PetTag";
// import Footer from "../components/Footer";
// import Header from "../components/Header";
import "./LandingPage.css";

export default function LandingPage() {
  const breakpointColumnsObj = {
    default: 3,
    820: 2,
    290: 1,
  };

  const [allPicture, setAllPicture] = useState<any>([]);
  const [initialPicture, setInitialPicture] = useState<any>([]);

  const [initialHasMore, setInitialHasMore] = useState(true);
  const [indexA, setIndexA] = useState(9);

  useEffect(() => {
    async function getLanding() {
      const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/user/landing`);
      const json = await res.json();

      setAllPicture(json);
      setInitialPicture(json.slice(0, 9));
    }
    getLanding();
  }, []);

  const notYetFilteredLandingPicture = async () => {
    if (!isFiltered) {
      setInitialPicture([...initialPicture, allPicture[indexA]]);
      if (allPicture.length - initialPicture.length < 2) {
        setInitialHasMore(false);
      }
      setIndexA(indexA + 1);
    }
  };

  /////////////////////////////////////   Category   /////////////////////////////////////

  const [filteredPicture, setFilteredPicture] = useState<any>([]);
  const [isShownFilteredPicture, setIsShownFilteredPicture] = useState<any[]>([]);

  const [hasMore, setHasMore] = useState(true);
  const [indexB, setIndexB] = useState(9);
  const [isFiltered, setIsFiltered] = useState(false);

  function clearTag() {
    window.scrollTo(0, 0);
    setIsFiltered(false);
  }

  function getTag(tag: any) {
    window.scrollTo(0, 0);
    setIsFiltered(true);
    landingTagFilter(tag);
  }

  const landingTagFilter = (tag: any) => {
    const newItems = allPicture.filter((picture: any) => {
      let tagName = picture.tag;
      let filteredTag = tag;

      return tagName === filteredTag;
    });

    setFilteredPicture(newItems);
    setIsShownFilteredPicture(newItems.slice(0, 9));
  };

  const filteredLandingPicture = async () => {
    if (isFiltered) {
      setIsShownFilteredPicture([...isShownFilteredPicture, filteredPicture[indexB]]);
      if (filteredPicture.length - isShownFilteredPicture.length < 2) {
        setHasMore(false);
      }
      setIndexB(indexB + 1);
    }
  };

  /////////////////////////////////////   Category   /////////////////////////////////////

  console.log("拎左幾多野", allPicture);
  console.log("一開頭show左幾多野", initialPicture);
  console.log("==============");
  console.log("簡左tag未", isFiltered);
  console.log("簡完tag之後有幾多野", filteredPicture);
  console.log("簡完tag之後show左幾多野", isShownFilteredPicture);
  console.log("");

  return (
    <>
      <div className="landingPageContainer">
        <Header />

        <div className="landingPageInfiniteScroll">
          <div className="landingPageTags">
            <div>
              <button onClick={() => clearTag()}>All</button>
            </div>
            {tags.map((tag) => {
              return (
                <div key={tag.value}>
                  <button onClick={() => getTag(tag.value)}>{tag.label}</button>
                </div>
              );
            })}
          </div>
          {isFiltered ? (
            <InfiniteScroll
              dataLength={isShownFilteredPicture.length}
              next={filteredLandingPicture}
              hasMore={hasMore}
              loader={<h4>Loading...</h4>}
              endMessage={
                <p style={{ textAlign: "center" }}>
                  <b>Yay! You have seen it all</b>
                </p>
              }
            >
              <Masonry breakpointCols={breakpointColumnsObj} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
                {isShownFilteredPicture.map((item: any) => {
                  return (
                    <div key={item.name}>
                      <img src={`${process.env.REACT_APP_S3_UPLOAD_URL}/${item.name}`} alt={item.name} />
                    </div>
                  );
                })}
              </Masonry>
            </InfiniteScroll>
          ) : (
            <InfiniteScroll
              dataLength={initialPicture.length}
              next={notYetFilteredLandingPicture}
              hasMore={initialHasMore}
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
          )}
        </div>

        <Footer />
      </div>
    </>
  );
}
