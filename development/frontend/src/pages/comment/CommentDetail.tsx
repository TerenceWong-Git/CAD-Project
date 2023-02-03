import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

function CommentDetail() {
  let commentId = useParams();

  const [comment, setComments] = useState<any>({});
  useEffect(() => {
    async function loadData() {
      const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/comment/${commentId.id}`);
      const data = await res.json();
      setComments(data);
    }
    loadData();
  }, [commentId]);
  console.log(comment);

  return (
    <div>
      <p>{comment.title}</p>
      <p>{comment.content}</p>
      <p>{comment.map?.chiName}</p>
      <p>{comment.user?.username}</p>
      {comment.CommentImg?.map((image: any, index: any) => (
        <img key={index} height="100" width="100" src={`${process.env.REACT_APP_BACKEND_URL}/upload/${image.name}`} alt="" />
      ))}
      {/* <img height="100" width="100" src={`${process.env.REACT_APP_BACKEND_URL}/upload/${comments.CommentImg?.name}`} alt=''/> */}
    </div>
  );
}

export default CommentDetail;
