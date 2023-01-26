import React, { useState } from "react";
import places from "./Data";
import { districts, mapTypeId } from "./District";

const CategoryButtons = ({ filterItem, setItem }: any) => {
  // const [distinctDistrict, setDistinctDistrict] = useState<number[]>([]);
  return (
    <>
      <div>
        <button onClick={() => setItem(places)}>All</button>
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
        <button onClick={() => setItem(places)}>All</button>
        {places
          .reduce((pv: any[], cv) => {
            if (pv.includes(cv.mapTypeId)) {
              return pv;
            } else {
              return [...pv, cv.mapTypeId];
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
