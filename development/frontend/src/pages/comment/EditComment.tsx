import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { MdOutlineThumbUpOffAlt, MdOutlineThumbDown } from "react-icons/md";
import { BiMap } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";

interface FormInput {
  title: string;
  content: string;
  files: File[];
  isThumb: string;
}

function EditComment() {
  const navigate = useNavigate();
  let commentId = useParams();
  const [comment, setComment] = useState<any>({});
  const [images, setImages] = useState<any>({});
  const [updateFile, setUpdateFile] = useState<any>([]);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormInput>();

  useEffect(() => {
    async function loadData() {
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/comment/${commentId.id}`
      );
      const data = await res.json();
      console.log(data);
      setComment(data);
      setValue("title", data.title);
      setValue("content", data.content);
      setValue("isThumb", data.isThumb);
    }
    loadData();
  }, [commentId, setValue]);

  useEffect(() => {
    async function loadImage() {
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/comment/files/${commentId.id}`
      );
      const data = await res.json();
      setImages(data);
    }
    loadImage();
  }, [commentId]);

  function uploadFiles(e: any) {
    const selectedFiles = e.target.files;
    const selectedFilesArray = Array.from(selectedFiles);
    setUpdateFile(selectedFilesArray);
  }

  function deleteUpdateFile(e: any) {
    const newFile = updateFile.filter((item: any, index: any) => index !== e);
    setUpdateFile(newFile);
  }
  console.log("errors: ", errors);

  return (
    <div className="comment-create-page">
      <form
        className="comment-create-form"
        onSubmit={handleSubmit(async (data) => {
          console.log(data);
          const jwt = localStorage.getItem("token");
          const formData = new FormData();
          formData.append("title", data.title);
          formData.append("content", data.content);
          formData.append("isThumb", data.isThumb);
          for (const img of updateFile) {
            formData.append("files", img);
          }

          console.log("formData: ", formData);

          await fetch(
            `${process.env.REACT_APP_BACKEND_URL}/comment/update/${commentId.id}`,
            {
              method: "PATCH",
              headers: {
                Authorization: `Bearer ${jwt}`,
              },
              body: formData,
            }
          );

          navigate("/comments/myComments");
        })}
      >
        <div className="comment-form-input">
          <div className="comment-edit-mapName">
            <BiMap color="#b74829" />
            {comment.map?.chiName}
          </div>
          <br></br>
          <div>
            <label>
              標題
              <br></br>
              <input
                type="text"
                className="comment-form-text"
                size={42}
                {...register("title", { required: true })}
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
                className="comment-form-text"
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

        <div className="comment-edit-form-second">
          <div>
            <input
              type="radio"
              id="good"
              value="true"
              {...register("isThumb")}
            />
            <label htmlFor="good">
              <MdOutlineThumbUpOffAlt color="#5A5555" />
              好評
            </label>
            <input
              type="radio"
              id="bad"
              value="false"
              {...register("isThumb")}
            />
            <label htmlFor="bad">
              <MdOutlineThumbDown color="#5A5555" />
              差評
            </label>
          </div>
          <br></br>

          <div className="comment-edit-uploadDiv ">
            <label htmlFor="comment-edit-uploadImage">
              <input
                id="comment-edit-uploadImage"
                type="file"
                multiple
                accept="image/png , image/jpg, image/jpeg"
                {...register("files")}
                onChange={uploadFiles}
              ></input>
              <div className="comment-upload-button">上載圖片</div>
            </label>

            <br></br>
            <div className="comment-edit-images">
              {images.CommentImg?.length > 0 &&
                images.CommentImg?.map((image: any, index: any) => {
                  return (
                    <div className="comment-edit-images-area" key={index}>
                      <img
                        className="comment-edit-oldImage"
                        src={`${process.env.REACT_APP_BACKEND_URL}/upload/${image.name}`}
                        width="100"
                        alt=""
                      />
                    <br></br>
                      <button
                        type="button"
                        className="comment-image-delete"
                        onClick={async (data) => {
                          const jwt = localStorage.getItem("token");
                          const res = await fetch(
                            `${process.env.REACT_APP_BACKEND_URL}/comment/deleteImg/${image.id}`,
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
                              `${process.env.REACT_APP_BACKEND_URL}/comment/files/${commentId.id}`,
                              {
                                headers: {
                                  Authorization: `Bearer ${jwt}`,
                                },
                              }
                            );
                            const data = await res.json();
                            setImages(data);
                          }
                        }}
                      >
                        <AiOutlineDelete color="#F2968F" />
                      </button>
                    </div>
                  );
                })}
              {updateFile.length > 0 &&
                updateFile.map((image: any, index: any) => {
                  return (
                    <div  className="comment-edit-images-area" key={index}>
                      <img
                        className="comment-edit-newImage"
                        src={URL.createObjectURL(image)}
                        width="100"
                        alt=""
                      />
                      <button
                        type="button"
                        className="comment-image-delete"
                        onClick={() => deleteUpdateFile(index)}
                      >
                        <AiOutlineDelete color="#F2968F" />
                      </button>
                    </div>
                  );
                })}
            </div>
          </div>
        <br></br>

          <div>
            <input type="submit" value="提交" className="comment-submit" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default EditComment;
