import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
// import logger from "redux-logger";

function CreateComment() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  // const files = watch("files");

  const [maps, setMaps] = useState<any[]>([]);

  useEffect(() => {
    async function loadData() {
      const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/comment/map`);
      const json = await res.json();
      console.log(json);

      setMaps(json);
    }
    loadData();
  }, []);

  const [file, setFile] = useState<any>([]);

  function uploadFiles(e: any) {
    const selectedFiles = e.target.files;
    const selectedFilesArray = Array.from(selectedFiles);
    setFile(selectedFilesArray);
  }

  function deleteFile(e: any) {
    const newFile = file.filter((item: any, index: any) => index !== e);
    setFile(newFile);
  }

  console.log("file: ", file);
  console.log("errors: ", errors);

  return (
    <div>
      CommentPage
      <form
        onSubmit={handleSubmit(async (data) => {
          const jwt = localStorage.getItem("token");
          const formData = new FormData();
          formData.append("mapId", data.mapId);
          formData.append("title", data.title);
          formData.append("content", data.content);
          formData.append("isThumb", data.isThumb);
          for(let i = 0; i < file.length; i++) {
            formData.append("files", file[i]);
          }

          await fetch(`${process.env.REACT_APP_BACKEND_URL}/comment/create`, {
            method: "POST",
            headers: {
              Authorization: `Bearer ${jwt}`,
            },
            body: formData,
          });

          navigate("/comments");
        })}
      >
        <p>
          <label>
            地點：
            <select {...register("mapId")}>
              {maps.map((map, i) => (
                <option key={i} value={map.id}>
                  {map.chiName}
                </option>
              ))}
            </select>
          </label>
        </p>

        <p>
          <label>
            標題：
            <input type="text" {...register("title", { required: true })}></input>
          </label>
        </p>

        <p>
          <label>
            內容：
            <textarea {...register("content",{ required: true })}></textarea>
          </label>
        </p>

        <div>
          <label>
            相：
            <input type="file" multiple accept="image/png , image/jpg, image/jpeg" {...register("files")} onChange={uploadFiles}></input>
          </label>
          <br></br>
          <div className="images">
            {file.length > 0 &&
              file.map((image: any, index: any) => {
                return (
                  <div key={index} className="image">
                    <img src={URL.createObjectURL(image)} height="200" alt="" />
                    <button onClick={() => deleteFile(index)}>delete image</button>
                  </div>
                );
              })}
          </div>
        </div>

        <p>
          <input type="radio" value="true"  {...register("isThumb")}  required />
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
