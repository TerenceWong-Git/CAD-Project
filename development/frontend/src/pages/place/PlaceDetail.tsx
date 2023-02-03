import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
  }, []);

  console.log("PlaceItems: ", thisPlaceItems);
  console.log("WorkingHours: ", thisPlaceWorkingHours);
  console.log("Comments: ", thisPlaceComments);

  ////////////////////////////////////   Load Data   /////////////////////////////////////

  /////////////////////////////////   Render PlaceCard   /////////////////////////////////
  const workingHours = thisPlaceWorkingHours.map((item: any) => {
    return item.workingHour;
  });

  /////////////////////////////////   Render PlaceCard   /////////////////////////////////

  return (
    <>
      {thisPlaceItems && (
        <div className="placeDetailPageContainer">
          <div className="placeDetailCardContainer">
            <div>{thisPlaceItems.chiName}</div>
            <div>{thisPlaceItems.chiAddress}</div>
            <div>{thisPlaceItems.phoneNumber}</div>
            <div>{thisPlaceItems.district}</div>

            <br></br>
            {workingHours.map((hour: any) => {
              return (
                <div key={hour.id}>
                  <div>{hour.weekday}</div>
                  <div>{hour.hours}</div>
                </div>
              );
            })}

            <br></br>
            {
              thisPlaceComments.map((comment: any) => {
                return (
                  <div key={comment.content}>
                    <div>{comment.user.username}</div>
                    <div>{"Title: " + comment.title}</div>
                    <div>{"Content: " + comment.content}</div>
                    <div>{"Like?: " + comment.isThumb}</div>
                    <div>{"Like?: " + comment.CommentImg[0].name}</div>
                    <img
                    height="100"
                    width="100"
                    src={`${process.env.REACT_APP_BACKEND_URL}/upload/${comment.CommentImg[0].name}`}
                    alt=""
                  />
                    <br></br>
                  </div>
                );
              })
            }
            
          </div>

          <div className="placeDetailCommentContainer"></div>
        </div>
      )}
    </>
  );
}
