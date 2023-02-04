import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import ImageUploading from "react-images-uploading";
import { tags } from "../../components/pet/petTag";
import { MultiSelect } from "@mantine/core";

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
      CommentPage
      <form
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

          navigate(`/growtree/${petId.id}`);
        })}
      >
        <div>
          {/* key={tagId} */}
          {/* <MultiSelect data={tags} value={passTagValues} {...register("tag", { required: true })} onChange={setMultiSelectValues} /> */}
          <Controller name="firstName" control={control} render={({ field }) => <MultiSelect data={tags} {...field} />} />
        </div>

        <ImageUploading multiple value={images} onChange={onChange} dataURLKey="data_url">
          {({ imageList, onImageUpload, onImageRemoveAll, onImageUpdate, onImageRemove, isDragging, dragProps }) => (
            // write your building UI
            <div className="upload__image-wrapper">
              <button type="button" style={isDragging ? { color: "red" } : undefined} onClick={onImageUpload} {...dragProps}>
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

        <div>
          <input type="radio" value="true" required {...register("isPrivate")} />
          <label>公開</label>
          <input type="radio" value="false" {...register("isPrivate")} />
          <label>私人</label>
        </div>

        <div>
          <input type="submit" value="submit" />
        </div>
      </form>
    </div>
  );
}

export default UploadGrowTree;
