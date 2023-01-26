import React, { useEffect, useState } from "react";
import places from "./Data";
import districts from "./District";

const CategoryButtons = ({ filterItem, setItems }: any) => {
  const [catergoryPageItems, setCatergoryPageItems] = useState<any[]>([]);
  ////////////////////////////////////   Load Data   /////////////////////////////////////

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/map`);
      const json = await res.json();

      // setLoadPlacesData(json);
      setCatergoryPageItems(json);
    }
    fetchData();
  }, []);

  ///////////////////////////////////   Load Data   ////////////////////////////////////

  return (
    <>
      <div>
        <button onClick={() => setItems(catergoryPageItems)}>All</button>
        {districts.map((district, id) => {
          return (
            <button onClick={() => filterItem(district)} key={id}>
              {district}
            </button>
          );
        })}
      </div>
      <br></br>
      <div>
        <button onClick={() => setItems(catergoryPageItems)}>All</button>
        {catergoryPageItems
          .reduce((pv: any[], cv) => {
            if (pv.includes(cv.mapType.engType)) {
              return pv;
            } else {
              return [...pv, cv.mapType.engType];
            }
          }, [])
          .map((place, id) => {
            return (
              <button onClick={() => filterItem(place)} key={place}>
                {place}
              </button>
            );
          })}
      </div>
    </>
  );
};

export default CategoryButtons;
