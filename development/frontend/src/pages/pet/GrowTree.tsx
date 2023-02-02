import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

function GrowTree() {
  const petId = useParams();
  const [petImg, setImg] = useState<any>([]);

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
    }
    loadData();
  }, []);

  console.log("petImg: ", petImg);

  return (
    <div>
      成長樹
      <div></div>
    </div>
  );
}

export default GrowTree;
