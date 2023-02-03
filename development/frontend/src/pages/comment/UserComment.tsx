import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function UserComment() {
  const [comments, setComments] = useState<any[]>([]);

  useEffect(() => {
    async function loadData() {
      const jwt = localStorage.getItem("token");
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/comment/myComment`,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      const json = await res.json();
      setComments(json);
    }
    loadData();
  }, []);

  return (
    <div>
      {comments.length > 0 ? (
        comments.map((comment) => (
          <div key={comment.id}>
            <Link to={`/comments/commentDetail/${comment.id}`}>
              <p>{comment.title}</p>
              <p>{comment.content}</p>
              <p>{comment.map?.chiName}</p>
            </Link>
            {comment.CommentImg.length > 0 ? (
              <img
                height="100"
                width="100"
                src={`${process.env.REACT_APP_BACKEND_URL}/upload/${comment.CommentImg?.[0].name}`}
                alt=""
              />
            ) : (
              <p>no image</p>
            )}
            <button>
              <Link to={`/comments/editComment/${comment.id}`}>edit</Link>
            </button>
            <button
              onClick={async (data) => {
                const jwt = localStorage.getItem("token");
                const res = await fetch(
                  `${process.env.REACT_APP_BACKEND_URL}/comment/delete/${comment.id}`,
                  {
                    method: "DELETE",
                    headers: {
                      Authorization: `Bearer ${jwt}`,
                    },
                  }
                );
                if (res.ok) {
                  const jwt = localStorage.getItem("token");
                  const res = await fetch(
                    `${process.env.REACT_APP_BACKEND_URL}/comment/myComment`,
                    {
                      headers: {
                        Authorization: `Bearer ${jwt}`,
                      },
                    }
                  );
                  const data = await res.json();
                  setComments(data);
                }
              }}
            >
              delete
            </button>
          </div>
        ))
      ) : (
        <p>you don't have comment</p>
      )}
    </div>
  );
}

export default UserComment;
