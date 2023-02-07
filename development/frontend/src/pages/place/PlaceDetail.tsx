import React, { useEffect, useState } from "react";
import "./css/PlaceDetail.css";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer";
import { Collapse } from "@mantine/core";
import { BiCurrentLocation, BiDislike, BiLike, BiTime } from "react-icons/bi";
import Header from "../../components/Header";
import { MdPlace } from "react-icons/md";
import { FaMapSigns } from "react-icons/fa";
import { AiOutlinePhone } from "react-icons/ai";

// 欠 isThumb Handle
export default function PlaceDetail() {
  ////////////////////////////////////   Load Data   /////////////////////////////////////
  const placeId = useParams();
  const [thisPlaceItems, setThisPlaceItems] = useState<any>([]);
  const [thisPlaceWorkingHours, setThis2PlaceWorkingHours] = useState<any>([]);

  const [thisPlaceComments, setThis2PlaceComments] = useState<any>([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/map/${placeId.id}`);
      const json = await res.json();

      setThisPlaceItems(json);
      setThis2PlaceWorkingHours(json.MapToWorkingHour);
      setThis2PlaceComments(json.Comment);
    }
    fetchData();
  }, [placeId]);

  console.log("PlaceItems: ", thisPlaceItems);
  console.log("WorkingHours: ", thisPlaceWorkingHours);
  console.log("Comments: ", thisPlaceComments);

  ////////////////////////////////////   Load Data   /////////////////////////////////////

  /////////////////////////////////   Render PlaceCard   /////////////////////////////////
  const workingHours = thisPlaceWorkingHours.map((item: any) => {
    return item.workingHour;
  });

  const checkIsThumb = thisPlaceComments.map((item: any) => {
    return item.isThumb === true;
  });

  const countThumbAmount = checkIsThumb.filter((value: boolean) => value === true).length;

  console.log(checkIsThumb);
  console.log("有幾多like啊: ", countThumbAmount);
  /////////////////////////////////   Render PlaceCard   /////////////////////////////////

  const [opened, setOpened] = useState(false);

  return (
    <>
      {thisPlaceItems && (
        <div className="placeDetailPageContainer">
          <div>
            <Header />
          </div>
          <div className="placeDetailCardContainer">
            <div className="placeDetailInfoContainer">
              <div className="placeDetailPreviewPicture">
                <img src={`/uploads/list/${thisPlaceItems.profileImg}`} alt="" />
              </div>

              {thisPlaceComments.isThumb === "true" ? (
                <div className="placeDetailCommentContainer">
                  {thisPlaceComments.map((comment: any) => {
                    return (
                      <div className="placeDetailEachComment" key={comment.content}>
                        <div className="placeDetailEachCommentColumn">{comment.user.username}</div>
                        <div className="placeDetailEachCommentColumn">{"Title: " + comment.title}</div>
                        <div className="placeDetailEachCommentColumn">{"Content: " + comment.content}</div>
                        <div className="placeDetailEachCommentColumn">
                          <BiLike />
                        </div>
                        <div className="placeDetailEachCommentColumn">{comment.createdAt.slice(0, 10)}</div>
                        {comment.CommentImg.length > 0 ? (
                          <img className="placeDetailEachCommentPicture" height="100" width="100" src={`${comment.CommentImg[0].name}`} alt="" />
                        ) : (
                          <div>No image</div>
                        )}
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="placeDetailCommentContainer">
                  {thisPlaceComments.map((comment: any) => {
                    return (
                      <div className="placeDetailEachComment" key={comment.content}>
                        <div className="placeDetailEachCommentColumn">{comment.user.username}</div>
                        <div className="placeDetailEachCommentColumn">{"Title: " + comment.title}</div>
                        <div className="placeDetailEachCommentColumn">{"Content: " + comment.content}</div>
                        <div className="placeDetailEachCommentColumn">
                          <BiDislike />
                        </div>
                        <div className="placeDetailEachCommentColumn">{comment.createdAt.slice(0, 10)}</div>
                        {comment.CommentImg.length > 0 ? (
                          <img className="placeDetailEachCommentPicture" height="100" width="100" src={`${comment.CommentImg[0].name}`} alt="" />
                        ) : (
                          <div>No image</div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
            <div className="placeDetailInfo">
              <div className="placeDetailNameArea">
                <div className="placeDetailNameLogo">
                  <FaMapSigns />
                </div>
                <div className="placeDetailName">{thisPlaceItems.chiName}</div>
              </div>

              <div className="placeDetailAddressArea">
                <div className="placeDetailAddressLogo">
                  <MdPlace />
                </div>
                <div className="placeDetailAddress">{thisPlaceItems.chiAddress}</div>
              </div>

              <div className="placeDetailPhoneArea">
                <div className="placeDetailPhoneLogo">
                  <AiOutlinePhone />
                </div>
                <div className="placeDetailPhone">{thisPlaceItems.phoneNumber}</div>
              </div>

              <div className="placeDetailDistrictArea">
                <div className="placeDetailDistrictLogo">
                  <BiCurrentLocation />
                </div>
                <div className="placeDetailDistrict">{thisPlaceItems.district}</div>
              </div>

              <div className="placeDetailThumbArea">
                <div className="placeDetailThumbLogo">
                  <BiLike />
                </div>
                <div className="placeDetailThumb">{"讚好數量: " + countThumbAmount}</div>
              </div>

              <div onClick={() => setOpened((o) => !o)}>
                <BiTime />
                營業時間
              </div>
              <Collapse in={opened}>
                {workingHours.map((hour: any) => {
                  return (
                    <div className="placeDetailWH" key={hour.id}>
                      <div>{hour.weekday}</div>
                      <div>{hour.hours}</div>
                    </div>
                  );
                })}
              </Collapse>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
}
