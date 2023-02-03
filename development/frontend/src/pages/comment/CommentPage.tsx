import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../comment/css/Comment.css";
// import SimpleBottomNavigation from "../../components/FunctionBar";

function CommentPage() {
  const [comments, setComments] = useState<any[]>([]);
  useEffect(() => {
    async function loadData() {
      const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/comment`);
      const data = await res.json();
      setComments(data);
    }
    loadData();
  }, []);
  console.log(comments);

  const [filter, setFilter] = useState<{
    isThumb?: boolean;
  }>({});
  const filteredComments = comments.filter((comment) => {
    let isFiltered = true;
    for (let key in filter) {
      // @ts-ignore
      if (comment[key] !== filter[key]) {
        isFiltered = false;
        break;
      }
    }
    return isFiltered;
  });

  return (
    <div>
      評論區
      <div>
        <button>
          <Link to={"createComment"} style={{ textDecoration: "none" }}>
            建立
          </Link>
        </button>

        <button>
          <Link to={`myComments`}>我的評論</Link>
        </button>

        <button onClick={() => setFilter((filter) => ({}))}>全部</button>

        <button
          onClick={() => setFilter((filter) => ({ ...filter, isThumb: true }))}
        >
          好評
        </button>

        <button
          onClick={() => setFilter((filter) => ({ ...filter, isThumb: false }))}
        >
          差評
        </button>
      </div>
      <div>
        {filteredComments.map((comment) => (
          <div className="comment-card" key={comment.id}>
            <Link to={`commentDetail/${comment.id}`}>
              {comment.CommentImg.length > 0 ? (
                <div className="comment-image">
                  <img
                    height="100"
                    width="100"
                    src={`${process.env.REACT_APP_BACKEND_URL}/upload/${comment.CommentImg?.[0].name}`}
                    alt=""
                  />
                </div>
              ) : (
                <div className="comment-image">no image</div>
              )}
              <div >
                {comment.title}
                {comment.map.chiName}
                {comment.user.username}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CommentPage;
