import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

function EditComment() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  let commentId = useParams();

  const [comments, setComments] = useState<any>({});
  const [images, setImages] = useState<any>({});
  const [updateFile, setUpdateFile] = useState<any>([]);
  console.log("this is images:", images);

  useEffect(() => {
    async function loadData() {
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/comment/${commentId.id}`
      );
      const json = await res.json();
      console.log(json);
      setComments(json);
    }
    loadData();
  }, []);

  useEffect(() => {
    async function loadImage() {
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/comment/files/${commentId.id}`
      );
      const json = await res.json();
      setImages(json);
    }
    loadImage();
  }, []);

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

          for (let i = 0; i < updateFile.length; i++) {
            formData.append("files", updateFile[i]);
          }

          console.log("formData: ", formData);

          await fetch(
            `${process.env.REACT_APP_BACKEND_URL}/comment/update/${commentId.id}`,
            {
              method: "PUT",
              headers: {
                Authorization: `Bearer ${jwt}`,
              },
              body: formData,
            }
          );

          navigate("/comments/myComments");
        })}
      >
        <p>地點：{comments.map?.chiName}</p>

        <p>
          <label>
            標題：
            <input
              type="text"
              {...register("title")}
              placeholder={comments.title}
            ></input>
          </label>
        </p>

        <p>
          <label>
            內容：
            <textarea
              {...register("content")}
              placeholder={comments.content}
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
                          const json = await res.json();
                          setImages(json);
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
