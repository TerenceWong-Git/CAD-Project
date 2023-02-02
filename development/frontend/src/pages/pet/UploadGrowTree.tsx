import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import ImageUploading from "react-images-uploading";
import { tags } from "../../components/pet/petTag";
import { MultiSelect } from "@mantine/core";

function UploadGrowTree() {
  const path = process.env.REACT_APP_BACKEND_URL;
  const petId = useParams();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const [images, setImages] = React.useState([]);
  const [multiSelectValues, setMultiSelectValues] = useState<any>([""]);
  const newFile = images.map((item: any) => item.file);

  // const passTagValues = multiSelectValues.toString();

  const onChange = (imageList: any, addUpdateIndex: any) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  console.log("img: ", images);
  console.log("tags: ", multiSelectValues);
  // console.log("passTagValues: ", passTagValues);

  return (
    <div>
      CommentPage
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
          const jwt = localStorage.getItem("token");
          const formData = new FormData();
          formData.append("tag", data.tag.toString());
          formData.append("isPrivate", data.isPrivate);

          for (const img of newFile) {
            formData.append("files", img);
          }

          // fetch(`${path}/pet/uploadPetImg/${petId.id}`, {
          //   method: "POST",
          //   headers: {
          //     Authorization: `Bearer ${jwt}`,
          //   },
          //   body: formData,
          // });

          // navigate(`/growtree/${petId.id}`);
        })}
      >
        <div>
          {/* key={tagId} */}
          <MultiSelect data={tags} value={multiSelectValues} {...register("tag", { required: true })} onChange={setMultiSelectValues} />
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
