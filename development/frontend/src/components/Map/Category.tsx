import React from "react";
import places from "./Data";
import districts from "./District";

const CategoryButtons = ({ filterItem, setItem }: any) => {
  return (
    <>
      <div>
        {districts.map((district, id) => {
          return (
            <button onClick={() => filterItem(district)} key={id}>
              {district}
            </button>
          );
        })}
        <button onClick={() => setItem(places)}>All</button>
      </div>
    </>
  );
};

export default CategoryButtons;
