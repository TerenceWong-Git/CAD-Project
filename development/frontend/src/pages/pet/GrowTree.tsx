import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useParams } from "react-router";
import "./css/GrowTree.css";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import { AiFillPlusCircle } from "react-icons/ai";

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
      setImgForGrow(json.slice(0, 3));
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

  const [continueGrowIndex, setContinueGrowIndex] = useState(3);
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
      if (index % 2 !== 0) {
        return (
          <div className="growPictureRight">
            <div className="paw leftPhoto">
              <div className=" inner" key={index}>
                <img className="left" src={`${process.env.REACT_APP_S3_UPLOAD_URL}/${img.name}`} alt={img.engName} />
              </div>
            </div>
          </div>
        );
      } else {
        return (
          <div className="growPictureLeft">
            <div className="paw rightPhoto">
              <div className=" inner" key={index}>
                <img className="right" src={`${process.env.REACT_APP_S3_UPLOAD_URL}/${img.name}`} alt={img.engName} />
              </div>
            </div>
          </div>
        );
      }
    });

  return (
    <div>
      <div className="growTreePage">
        <Header />
        <div className="grow-tree-body">
          <div className="tree-top-area">
            <div className="tree-title">
              <img src="/uploads/growTreeDog.png" alt=""></img>
              <img src="/uploads/growTreeCat.png" alt=""></img>
            </div>

            <div className="tree-upload-grow-tree">
              <Link to={`/uploadGrowTree/${petId.id}`}>
                <AiFillPlusCircle className="tree-upload-grow-tree" />
              </Link>
            </div>
          </div>
          <div className="grow-tree-mid">
            <div className="growTreePageContainer">
              <div className="treeContainer">
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
          </div>
          <div className="growTreeFooter">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
