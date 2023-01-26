import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import logger from "redux-logger";

function CreateComment() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const pictures = watch("pictures");

  const [maps, setMaps] = useState<any[]>([]);

  useEffect(() => {
    async function loadData() {
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/comment/map`
      );
      const json = await res.json();
      console.log(json);

      setMaps(json);
    }
    loadData();
  }, []);

  return (
    <div>
      CommentPage
      <form
        onSubmit={handleSubmit(async (data) => {
          const formData = new FormData();
          formData.append("map", data.map);
          formData.append("title", data.title);
          formData.append("content", data.content);
          formData.append("isThumb", data.isThumb);
          formData.append("picture", data.picture);
          console.log(data);

          await fetch(`${process.env.REACT_APP_BACKEND_URL}/comment/create`, {
            method: "POST",
            body: formData,
          });

          navigate("/createComments");
        })}
      >
        <p>
          <label>
            地點：
            <select  {...register("map")}>
              {maps.map((map,i) => (
                <option key={i} value={map.id}>{map.chiName}</option>
              ))}
            </select>
          </label>
        </p>

        <p>
          <label>
            標題：
            <input type="text" {...register("title")}></input>
          </label>
        </p>

        <p>
          <label>
            內容：
            <textarea {...register("content")}></textarea>
          </label>
        </p>

        <p>
          <label>
            相：
            <input type="file" multiple {...register("picture")} ></input>
          </label>
        </p>

        <p>
          <input type="radio" value="true" {...register("isThumb")} />
          <label htmlFor="good">好評</label>
          <input type="radio" value="false" {...register("isThumb")} />
          <label htmlFor="bad">差評</label>
        </p>

        <p>
          <input type="submit" value="submit" />
        </p>
      </form>
    </div>
  );
}

export default CreateComment;
