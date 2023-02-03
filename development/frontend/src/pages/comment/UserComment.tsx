import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
                    <img src={`${process.env.REACT_APP_BACKEND_URL}/upload/${comment.CommentImg?.[0].name}`} alt="" />
                  ) : (
                    <div className="comment-image">no image</div>
                  )}
                </Link>

                <div className="comment-detail-user">
                  <div className="comment-detail-div">
                    <span>{comment.title}</span>
                    <span>{comment.content}</span>
                    <span>{comment.map?.chiName}</span>
                  </div>

                  <div className="comment-detail-button">
                    <button className="comment-edit-button">
                      <Link to={`/comments/editComment/${comment.id}`} style={{ color: "#7C699B" }}>
                        edit
                      </Link>
                    </button>
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
                      delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>you don't have comment</div>
        )}
      </div>
    </div>
  );
}

export default UserComment;
