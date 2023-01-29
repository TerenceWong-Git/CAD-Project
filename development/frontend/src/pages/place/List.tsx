import React from "react";
import "./css/List.css";
import PlaceCard from "../../components/place/list/placeCard";

export default function List() {
  return (
    <>
      <div className="pageContainer">
        <div className="categoryContainer"></div>
        <div className="placeContainer">
          <div className="orderContainer"></div>
          <div className="CardContainer">
            <PlaceCard />
          </div>
        </div>
      </div>
    </>
  );
}
