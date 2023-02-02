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
      {comments.CommentImg?.map((image:any,index:any) => (
        <img key={index}
          height="100"
          width="100"
          src={`${process.env.REACT_APP_BACKEND_URL}/upload/${image.name}`}
          alt=""
        />
      ))}
      {/* <img height="100" width="100" src={`${process.env.REACT_APP_BACKEND_URL}/upload/${comments.CommentImg?.name}`} alt=''/> */}
    </div>
  );
}

export default CommentDetail;
