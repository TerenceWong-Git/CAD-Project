import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

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
    <div>
      CommentPage
      <form
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
        <p>地點：{comment.map?.chiName}</p>

        <p>
          <label>
            標題：
            <input
              type="text"
              {...register("title")}
            ></input>
          </label>
        </p>

        <p>
          <label>
            內容：
            <textarea
              {...register("content")}
            ></textarea>
          </label>
        </p>

        <div>
          <label>
            相：
            <input
              type="file"
              multiple
              accept="image/png , image/jpg, image/jpeg"
              {...register("files")}
              onChange={uploadFiles}
            ></input>
          </label>
          <br></br>
          <div className="images">
            {images.CommentImg?.length > 0 &&
              images.CommentImg?.map((image: any, index: any) => {
                return (
                  <div key={index} className="image">
                    <img
                      src={`${process.env.REACT_APP_BACKEND_URL}/upload/${image.name}`}
                      height="200"
                      alt=""
                    />
                    <button
                      type="button"
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
                      delete image
                    </button>
                  </div>
                );
              })}
            {updateFile.length > 0 &&
              updateFile.map((image: any, index: any) => {
                return (
                  <div key={index} className="image">
                    <img src={URL.createObjectURL(image)} height="200" alt="" />
                    <button
                      type="button"
                      onClick={() => deleteUpdateFile(index)}
                    >
                      delete image
                    </button>
                  </div>
                );
              })}
          </div>
        </div>

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

export default EditComment;
