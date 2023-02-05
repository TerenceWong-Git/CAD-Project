import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Carousel } from "@mantine/carousel";
import moment from "moment";
import { GiHollowCat } from "react-icons/gi";
import { BiUser, BiMap } from "react-icons/bi";

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
    <div className="comment-detail-page">
      {comment.CommentImg?.length > 0 ? (
        <Carousel sx={{ maxWidth: 343 }} mx="auto">
          {comment.CommentImg?.map((image: any, index: any) => (
            <Carousel.Slide key={index}>
              <img
                key={image.id}
                className="comment-detail-image"
                src={`${image.name}`}
                // src={`${process.env.REACT_APP_S3_UPLOAD_URL}/${image.name}`}
                alt=""
              />
            </Carousel.Slide>
          ))}
        </Carousel>
      ) : (
        <div className="comment-detail-noImage">
          <GiHollowCat size={150} />
        </div>
      )}
      <div className="comment-detail-body">
        <div className="comment-detail-title">{comment.title}</div>
        <div className="comment-detail-map-name">
          <BiMap />
          {comment.map?.chiName}
        </div>
        <div className="comment-detail-username">
          <BiUser />
          {comment.user?.username}
        </div>
        <div className="comment-detail-content">{comment.content}</div>
        <div className="comment-detail-date">
          最後更新日期：{moment(comment.updatedAt).format("MMM Do YY")}
        </div>
      </div>
    </div>
  );
}

export default CommentDetail;
