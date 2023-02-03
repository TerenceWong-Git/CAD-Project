import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { ErrorMessage } from "@hookform/error-message";
import ImageUploading from "react-images-uploading";
// import logger from "redux-logger";

function CreateComment() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const [images, setImages] = React.useState([]);

  const onChange = (imageList: any, addUpdateIndex: any) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };
  console.log("img: ", images);

  const [maps, setMaps] = useState<any[]>([]);

  useEffect(() => {
    async function loadData() {
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/comment/map`
      );
      const data = await res.json();
      console.log(data);

      setMaps(data);
    }
    loadData();
  }, []);

  const newFile = images.map((item: any) => item.file);
  console.log("newFile: ", newFile);
  console.log("errors: ", errors);

  return (
    <div>
      CommentPage
      <form
        onSubmit={handleSubmit(async (data) => {
          console.log(data);
          const jwt = localStorage.getItem("token");
          const formData = new FormData();
          formData.append("mapId", data.mapId);
          formData.append("title", data.title);
          formData.append("content", data.content);
          formData.append("isThumb", data.isThumb);

          for (const img of newFile) {
            formData.append("files", img);
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
            <select {...register("mapId", { required: true })}>
              <option value="">--Choose here--</option>
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
            <input
              type="text"
              {...register("title", { required: "請填寫標題" })}
            ></input>
            <br></br>
            <ErrorMessage errors={errors} name="title" />
          </label>
        </p>

        <p>
          <label>
            內容：
            <textarea
              {...register("content", {
                minLength: 5,
              })}
            ></textarea>
            <br></br>
            {errors.content && errors.content.type === "minLength" && <span>請填寫5個字以上</span> }
          </label>
        </p>

        <ImageUploading
          multiple
          value={images}
          onChange={onChange}
          dataURLKey="data_url"
        >
          {({
            imageList,
            onImageUpload,
            onImageRemoveAll,
            onImageUpdate,
            onImageRemove,
            isDragging,
            dragProps,
          }) => (
            // write your building UI
            <div className="upload__image-wrapper">
              <button
                type="button"
                style={isDragging ? { color: "red" } : undefined}
                onClick={onImageUpload}
                {...dragProps}
              >
                Click or Drop here
              </button>
              &nbsp;
              <button type="button" onClick={onImageRemoveAll}>
                Remove all images
              </button>
              {imageList.map((image, index) => (
                <div key={index} className="image-item">
                  <img src={image["data_url"]} alt="" width="100" />
                  <div className="image-item__btn-wrapper">
                    <button type="button" onClick={() => onImageUpdate(index)}>
                      Update
                    </button>
                    <button type="button" onClick={() => onImageRemove(index)}>
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </ImageUploading>

        <p>
          <input type="radio" value="true" {...register("isThumb",{ required: "請選擇" })} />
          <label htmlFor="good">好評</label>
          <input type="radio" value="false" {...register("isThumb")} />
          <label htmlFor="bad">差評</label>
          <br></br><ErrorMessage errors={errors} name="isThumb" />
        </p>

        <p>
          <input type="submit" value="submit" />
        </p>
      </form>
    </div>
  );
}

export default CreateComment;
