import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

function CommentDetail() {
  let commentId = useParams();
  
  const [comments, setComments] = useState<any>({});
  useEffect(() => {
    async function loadData() {
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/comment/${commentId.id}`
      );
      const json = await res.json();
      setComments(json);
    }
    loadData();
  }, []);
  console.log(comments);

  return (
  <div>
    <p>{comments.title}</p>
    <p>{comments.content}</p>
    <p>{comments.map?.chiName}</p>
    <p>{comments.user?.username}</p>
  </div>
  );
}

export default CommentDetail;
