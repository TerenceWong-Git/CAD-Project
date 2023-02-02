import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";

function UploadGrowTree() {
  const path = process.env.REACT_APP_BACKEND_URL;
  const petId = useParams();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  //   const [file, setFile] = useState<any>([]);

  //   function uploadFiles(e: any) {
  //     const selectedFiles = e.target.files;
  //     const selectedFilesArray = Array.from(selectedFiles);
  //     setFile(selectedFilesArray)
  //   }

  //   function deleteFile(e: any) {
  //     const newFile = file.filter((item: any, index: any) => index !== e);
  //     setFile(newFile);
  //   }

  return (
    <div>
      UploadGrowTree
      <form
        onSubmit={handleSubmit(async (data) => {
          const formData = new FormData();
          formData.append("tag", data.tag);
          // formData.append("files", data.file[0]);
          formData.append("isPrivate", data.isPrivate);
          console.log(data)
          
            for (const item of data.file) {
              formData.append("files", item);
            }

          await fetch(`${path}/pet/uploadPetImg/${petId.id}`,{
            method: "POST",
            body: formData,
        }).then(
            () => navigate(`/growtree/${petId.id}`)
          )
        })}
        >
        <div>
          <label id="file">
            upload photo
            <input type="file" multiple {...register("file")} />
          </label>
        </div>

        <div>
          <label id="tag">
            tag
            <input type="text" {...register("tag")} />
          </label>
        </div>

        <div>
          <label id="isPrivate">
            <div>
              <input type="radio" value="true" {...register("isPrivate")} />
              private
              <input type="radio" value="false" {...register("isPrivate")} />
              public
            </div>
          </label>
        </div>
        <div>
          <input type="submit" value="submit" />
        </div>
      </form>
    </div>
  );
}

export default UploadGrowTree;
