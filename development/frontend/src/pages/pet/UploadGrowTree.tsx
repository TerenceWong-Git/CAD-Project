import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import ImageUploading from "react-images-uploading";
import { tags } from "../../components/pet/PetTag";
import { MultiSelect } from "@mantine/core";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./css/UploadGrowTree.css";
import { RxUpdate } from "react-icons/rx";
import { AiOutlineDelete } from "react-icons/ai";

function UploadGrowTree() {
  const path = process.env.REACT_APP_BACKEND_URL;
  const petId = useParams();
  const { register, handleSubmit, control, watch } = useForm();
  const navigate = useNavigate();
  const [images, setImages] = React.useState([]);
  const newFile = images.map((item: any) => item.file);

  const onChange = (imageList: any, addUpdateIndex: any) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  console.log("img: ", images);

  console.log(watch());
  return (
    <div>
      <Header />
      <div className="upload-grow-tree-page">
        <div className="upload-grow-tree-title">加入回憶</div>
        <form
          className="upload-grow-tree-form"
          onSubmit={handleSubmit((data) => {
            const jwt = localStorage.getItem("token");
            const formData = new FormData();
            const tag = data.firstName.join();
            formData.append("tag", tag);
            formData.append("isPrivate", data.isPrivate);

            for (const img of newFile) {
              formData.append("files", img);
            }

            console.log(typeof tag, "tag: ", tag);
            console.log("data: ", data);

            fetch(`${path}/pet/uploadPetImg/${petId.id}`, {
              method: "POST",
              headers: {
                Authorization: `Bearer ${jwt}`,
              },
              body: formData,
            });

            navigate(`/petProfile/${petId.id}`);
          })}
        >
          <div className="upload-grow-tree-select-tag">
            {/* key={tagId} */}
            {/* <MultiSelect data={tags} value={passTagValues} {...register("tag", { required: true })} onChange={setMultiSelectValues} /> */}
            <Controller name="firstName" control={control} render={({ field }) => <MultiSelect data={tags} {...field} />} />
          </div>

          <ImageUploading multiple value={images} onChange={onChange} dataURLKey="data_url">
            {({ imageList, onImageUpload, onImageRemoveAll, onImageUpdate, onImageRemove, isDragging, dragProps }) => (
              // write your building UI
              <div className="upload-grow-tree-input-tag">
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
                <button className="comment-delete-button" type="button" onClick={onImageRemoveAll}>
                  移除所有圖片
                </button>
                {imageList.map((image, index) => (
                  <div key={index} className="image-item upload-grow-tree-img">
                    <img src={image["data_url"]} alt="" width="100" />
                    <div className="image-item__btn-wrapper upload-grow-tree-button">
                      <button className="comment-image-update" type="button" onClick={() => onImageUpdate(index)}>
                        <RxUpdate color="#F2968F" />
                      </button>
                      <button className="comment-image-delete" type="button" onClick={() => onImageRemove(index)}>
                        <AiOutlineDelete color="#F2968F" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </ImageUploading>

          <div>
            <input className="comment-form-radio" type="radio" value="false" required {...register("isPrivate")} />
            <label>公開</label>
            <input className="comment-form-radio" type="radio" value="true" {...register("isPrivate")} />
            <label>私人</label>
          </div>

          <div>
            <input type="submit" value="提交" className="comment-submit upload-grow-tree-submit" />
          </div>
        </form>
      </div>
      <div className="grow-tree-footer">
        <Footer />
      </div>
    </div>
  );
}

export default UploadGrowTree;
