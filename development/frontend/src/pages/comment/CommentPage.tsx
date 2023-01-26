import React, { useState } from "react";
import { Link } from "react-router-dom";
import SimpleBottomNavigation from "../../components/FunctionBar";

function CommentPage() {
  const comments = [
    {
      id: 1,
      title: "good",
      service: "baby shop",
      username: "tom",
      is_thumb: true,
    },
    {
      id: 2,
      title: "bad",
      service: "food shop",
      username: "peter",
      is_thumb: false,
    },
    {
      id: 3,
      title: "bad 123",
      service: "food shop",
      username: "peter 123",
      is_thumb: false,
    },
  ];

  const [filter, setFilter] = useState<{
    is_thumb?: boolean;
    title?: string;
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
      CommentPage
      <div>
        <button><Link to={'/createComments'}>建立</Link></button>
        <button>篩選</button>
        <button>排序</button>
        <button
          onClick={() => setFilter((filter) => ({ ...filter, is_thumb: true }))}
        >
          好評
        </button>
        <button
          onClick={() =>
            setFilter((filter) => ({ ...filter, is_thumb: false }))
          }
        >
          差評
        </button>
      </div>
      {filteredComments.map((comment) => (
        <div key={comment.id}>
          <p>{comment.title}</p>
          <p>{comment.service}</p>
          <p>{comment.username}</p>
        </div>
      ))}
    </div>
  );
}

export default CommentPage;
