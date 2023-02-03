import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function PlaceDetail() {
  ////////////////////////////////////   Load Data   /////////////////////////////////////
  const placeId = useParams();
  const [thisPlaceItems, setThisPlaceItems] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/map/${placeId.id}`);
      const json = await res.json();

      setThisPlaceItems(json);
    }
    fetchData();
  }, [placeId.id]);

  console.log("thisPlaceItems: ", thisPlaceItems);

  ////////////////////////////////////   Load Data   /////////////////////////////////////

  ////////////////////////////////////   Load Data   /////////////////////////////////////

  ////////////////////////////////////   Load Data   /////////////////////////////////////

  return (
    <>
      <div className="placeDetailPageContainer">
        <div className="placeDetailCardContainer"></div>
        <div className="placeDetailCommentContainer"></div>
      </div>
    </>
  );
}
