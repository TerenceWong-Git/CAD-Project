import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GiHollowCat } from "react-icons/gi";
import { BiCommentDetail } from "react-icons/bi";
import { MdOutlineThumbUpOffAlt, MdOutlineThumbDown } from "react-icons/md";

function UserComment() {
  const [comments, setComments] = useState<any[]>([]);

  useEffect(() => {
    async function loadData() {
      const jwt = localStorage.getItem("token");
      const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/comment/myComment`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      const json = await res.json();
      setComments(json);
    }
    loadData();
  }, []);

  return (
    <div>
      <div className="comment-body ">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <div className="comment-card-container" key={comment.id}>
              <div className="comment-card">
                <Link to={`/comments/commentDetail/${comment.id}`} style={{ color: "BLACK" }} className="comment-image">
                  {comment.CommentImg.length > 0 ? (
                    <img src={`${comment.CommentImg?.[0].name}`} alt="" />
                    // <img src={`${REACT_APP_S3_UPLOAD_URL}/${comment.CommentImg?.[0].name}`} alt="" />
                  ) : (
                    <div className="comment-image">
                      <GiHollowCat size={70} />
                    </div>
                  )}
                </Link>

                <div className="comment-detail-user">
                  <div className="comment-detail-div">
                    <span>
                      <BiCommentDetail />
                      &nbsp;{comment.title}
                    </span>
                    {comment.isThumb ? (
                    <span>
                      <MdOutlineThumbUpOffAlt />&nbsp;
                      {comment.map.chiName}
                    </span>
                  ) : (
                    <span>
                      <MdOutlineThumbDown />&nbsp;
                      {comment.map.chiName}
                    </span>
                  )}
                  </div>

                  <div className="comment-detail-button">
                    <button className="comment-edit-button">
                      <Link
                        to={`/comments/editComment/${comment.id}`}
                        style={{ color: "#7C699B" }}
                      >
                        <span className="comment-detail-button-font">修改</span>
                      </Link>
                    </button>&nbsp;&nbsp;
                    <button
                      className="comment-delete-button"
                      onClick={async (data) => {
                        const jwt = localStorage.getItem("token");
                        const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/comment/delete/${comment.id}`, {
                          method: "DELETE",
                          headers: {
                            Authorization: `Bearer ${jwt}`,
                          },
                        });
                        if (res.ok) {
                          const jwt = localStorage.getItem("token");
                          const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/comment/myComment`, {
                            headers: {
                              Authorization: `Bearer ${jwt}`,
                            },
                          });
                          const data = await res.json();
                          setComments(data);
                        }
                      }}
                    >
                      <span className="comment-detail-button-font">刪除</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>您還沒有建立留言</div>
        )}
      </div>
    </div>
  );
}

export default UserComment;
