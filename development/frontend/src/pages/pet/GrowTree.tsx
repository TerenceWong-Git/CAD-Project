import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useParams } from "react-router";
import "./css/GrowTree.css";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import { AiOutlinePlusSquare } from "react-icons/ai";

export default function GrowTree() {
  const petId = useParams();
  const [petImg, setImg] = useState<any>([]);
  const [imgForGrow, setImgForGrow] = useState<any>([]);

  useEffect(() => {
    async function loadData() {
      const jwt = localStorage.getItem("token");
      const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/pet/petImg/${petId.id}`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      const json = await res.json();
      setImg(json);
      setImgForGrow(json.slice(0, 4));
    }
    loadData();
  }, [petId]);

  console.log("petImg: ", petImg);
  console.log("imgForGrow: ", imgForGrow);

  // const reOrder = petImg.reduce((pv: any, cv: any) => {
  //   if (pv > cv.id) {
  //     return pv;
  //   } else {
  //     return [...pv, cv.id];
  //   }
  // }, []);
  // console.log("reOrder: ", reOrder);

  const [continueGrowIndex, setContinueGrowIndex] = useState(4);
  const [hasMore, setHasMore] = useState(true);

  const continueGrow = async () => {
    setImgForGrow([...imgForGrow, petImg[continueGrowIndex]]);
    if (petImg.length - imgForGrow.length < 2) {
      setHasMore(false);
    }
    setContinueGrowIndex(continueGrowIndex + 1);
  };

  const renderContinueGrow = () =>
    imgForGrow.map((img: any, index: any) => {
      if (!img.isPrivate && img.id % 2 === 0) {
        return (
          <div className="paw" key={index}>
            <div className="leftPhoto inner">
              <div className="bottom">
                <img
                  className="left"
                  // style={{
                  //   backgroundImage: url(`${process.env.REACT_APP_S3_UPLOAD_URL}/${img.name}`),
                  //   backgroundPosition: "center",
                  //   backgroundSize: "cover",
                  // }}
                  src={`${process.env.REACT_APP_S3_UPLOAD_URL}/${img.name}`}
                  alt={img.engName}
                />
              </div>
            </div>
          </div>
        );
      } else {
        return (
          <div className="paw" key={index}>
            <div className="rightPhoto inner">
              <div className="bottom">
                {/* <img
                  className="right"
                  style={{ backgroundImage: "url(" + `${process.env.REACT_APP_S3_UPLOAD_URL}/${img.name}` + ")" }}
                  src={`${process.env.REACT_APP_S3_UPLOAD_URL}/${img.name}`}
                  alt={img.engName}
                /> */}
                <img className="right" key={img.name} src={"/dog-cat-gfb55af861_1920.jpg"} alt={img.engName} />
              </div>
            </div>
          </div>
        );
      }
    });

  return (
    <div>
      <Header />

      <div className="growTreePageContainer">
        <div className="treeContainer">
          Our Journey Starts Here
          <div>
            <Link to={`/uploadGrowTree/${petId.id}`}>
              <AiOutlinePlusSquare />
            </Link>
          </div>
          <InfiniteScroll
            dataLength={imgForGrow.length}
            next={continueGrow}
            hasMore={hasMore}
            loader={<div></div>}
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>To be continued ~ </b>
              </p>
            }
          >
            {renderContinueGrow()}
          </InfiniteScroll>
        </div>
      </div>
      <Footer />
    </div>
  );
}
