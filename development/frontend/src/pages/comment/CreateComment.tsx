import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import ImageUploading from "react-images-uploading";
import { MdOutlineThumbUpOffAlt, MdOutlineThumbDown } from "react-icons/md";
import { RxUpdate } from "react-icons/rx";
import { AiOutlineDelete } from "react-icons/ai";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

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
    <div className="comment-create-page">
      <Header />
      <form
        className="comment-create-form"
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
        <div className="comment-form-input">
          <div>
            <label>
              地點
              <br></br>
              <select
                className="comment-select"
                {...register("mapId", { required: true })}
              >
                <option value=""></option>
                {maps.map((map, i) => (
                  <option key={i} value={map.id}>
                    {map.chiName}
                  </option>
                ))}
              </select>
            </label>
            <br></br>
            <div className="comment-error-area">
              {errors.mapId && (
                <span className="comment-error">請選擇地點</span>
              )}
            </div>
          </div>

          <div>
            <label>
              標題
              <br></br>
              <input
                type="text"
                className="comment-form-text"
                size={42}
                {...register("title", { required: true, maxLength: 50 })}
              ></input>
              <br></br>
              <div className="comment-error-area">
                {errors.title && (
                  <span className="comment-error">請填寫標題</span>
                )}
              </div>
            </label>
          </div>

          <div>
            <label>
              內容
              <br></br>
              <textarea
                className="comment-form-textarea"
                rows={10}
                cols={35}
                {...register("content", { required: true })}
              ></textarea>
              <br></br>
              <div className="comment-error-area">
                {errors.content && (
                  <span className="comment-error">請填寫內容</span>
                )}
              </div>
            </label>
          </div>
        </div>

        <div className="comment-create-form-second">
          <div>
            <input
              type="radio"
              value="true"
              id="good"
              className="comment-form-radio"
              {...register("isThumb", { required: true })}
            />
            <label htmlFor="good">
              <MdOutlineThumbUpOffAlt color="#5A5555" />
              好評
            </label>
            <input
              type="radio"
              value="false"
              id="bad"
              className="comment-form-radio"
              {...register("isThumb")}
            />
            <label htmlFor="bad">
              <MdOutlineThumbDown color="#5A5555" />
              差評
            </label>
            <br></br>
            <div className="comment-error-area">
              {errors.isThumb && (
                <span className="comment-error">請選擇其一選項</span>
              )}
            </div>
          </div>

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
                  className="comment-edit-button"
                  type="button"
                  style={isDragging ? { color: "red" } : undefined}
                  onClick={onImageUpload}
                  {...dragProps}
                >
                  上載圖片
                </button>
                &nbsp;
                <button
                  className="comment-delete-button"
                  type="button"
                  onClick={onImageRemoveAll}
                >
                  移除所有圖片
                </button>
                {imageList.map((image, index) => (
                  <div key={index} className="image-item">
                    <img src={image["data_url"]} alt="" width="100" />
                    <div className="image-item__btn-wrapper">
                      <button
                        className="comment-image-update"
                        type="button"
                        onClick={() => onImageUpdate(index)}
                      >
                        <RxUpdate color="#F2968F" />
                      </button>
                      <button
                        className="comment-image-delete"
                        type="button"
                        onClick={() => onImageRemove(index)}
                      >
                        <AiOutlineDelete color="#F2968F" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </ImageUploading>
          <p></p>

          <div>
            <input type="submit" value="提交" className="comment-submit" />
          </div>
        </div>
      </form>
      <Footer />
    </div>
  );
}

export default CreateComment;
