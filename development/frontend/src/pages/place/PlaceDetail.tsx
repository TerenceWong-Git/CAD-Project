import React, { useEffect, useState } from "react";
import "./css/PlaceDetail.css";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer";
import DefaultHeader from "../../components/DefaultHeader";
import { Button, Collapse } from "@mantine/core";
import { BiDislike, BiLike } from "react-icons/bi";

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
          <DefaultHeader />
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
              <div>{thisPlaceItems.chiName}</div>
              <div>{thisPlaceItems.chiAddress}</div>
              <div>{thisPlaceItems.phoneNumber}</div>
              <div>{thisPlaceItems.district}</div>
              <div>{"讚好數量: " + countThumbAmount}</div>

              <Button onClick={() => setOpened((o) => !o)}>Toggle content</Button>
              <Collapse in={opened}>
                {workingHours.map((hour: any) => {
                  return (
                    <div key={hour.id}>
                      {hour.weekday}: {hour.hours}
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
