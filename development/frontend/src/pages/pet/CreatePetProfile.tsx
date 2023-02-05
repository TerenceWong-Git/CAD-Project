import { Radio, Select } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import ImageUploading from "react-images-uploading";
import { RxUpdate } from "react-icons/rx";
import { AiOutlineDelete } from "react-icons/ai";
import "./css/CreatePetProfile.css";

// photo preview
// update button + remove button
function CreatePetProfile() {
  const path = process.env.REACT_APP_BACKEND_URL;
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm();
  const [images, setImages] = React.useState([]);
  const onChange = (imageList: any, addUpdateIndex: any) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };
  const navigate = useNavigate();

  const [loadPetSpecies, setLoadPetSpecies] = useState<any[]>([]);
  const [isTriggered, setIsTriggered] = useState<number>(0);
  const [value, setValue] = useState<any>(null);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/pet/species`
      );
      const json = await res.json();

      setLoadPetSpecies(json);
    }
    fetchData();
  }, []);

  ///////////////////////   Cat Species   ///////////////////////
  const catFilter = loadPetSpecies.filter((item) => {
    return item.id === 1;
  });

  const catSpeciesFilter = loadPetSpecies.filter((item) => {
    return item.familyId === 1;
  });
  console.log(catSpeciesFilter);

  const catNameFilter = catFilter.map((item) => {
    return item.chiSpecies;
  });

  const catSubSpeciesFilter = catSpeciesFilter.map((item) => [
    { label: item.chiSpecies, value: item.id },
  ]);
  const catSubSpeciesId = catSubSpeciesFilter.flat();
  console.log(catSubSpeciesFilter);

  ///////////////////////   Cat Species   ///////////////////////

  ///////////////////////   Dog Species   ///////////////////////
  const dogFilter = loadPetSpecies.filter((item) => {
    return item.id === 2;
  });

  const dogSpeciesFilter = loadPetSpecies.filter((item) => {
    return item.familyId === 2;
  });
  console.log(dogSpeciesFilter);
  const dogNameFilter = dogFilter.map((item) => item.chiSpecies);

  const dogSubSpeciesFilter = dogSpeciesFilter.map((item) => [
    { label: item.chiSpecies, value: item.id },
  ]);
  const dogSubSpeciesId = dogSubSpeciesFilter.flat();

  ///////////////////////   Dog Species   ///////////////////////

  console.log("watch: ", watch());
  console.log("=================");
  const newFile = images.map((item: any) => item.file);

  return (
    <div className="pet-profile-create-page">
      <form
        className="pet-profile-create-form"
        onSubmit={handleSubmit(async (data) => {
          const jwt = localStorage.getItem("token");

          const formData = new FormData();
          formData.append("name", data.name);
          formData.append("gender", data.gender);
          formData.append("speciesId", data.firstName);
          formData.append("dateBirth", data.dateBirth);
          // formData.append("file",newFile);

          for (const img of newFile) {
            formData.append("file", img);
            console.log(img);
          }

          const res = await fetch(`${path}/pet/addPet`, {
            method: "POST",
            headers: {
              Authorization: `Bearer ${jwt}`,
            },
            body: formData,
          });

          const result = await res.json();
          if (res.status === 201) {
            alert("Success");
            navigate("/userprofile");
          } else {
            alert(`${result.message}`);
          }

          console.log(data);
        })}
      >
        <div>
          <label id="name">
            名字 &nbsp;
            <input type="text" className="pet-profile-create-text" {...register("name", { required: true })} />
          </label>
          <br></br>
          <div className="comment-error-area">
            {errors.name && (
              <span className="comment-error">請填寫寵物名字</span>
            )}
          </div>

          <div>
            <label id="dateBirth">
              出生日期 &nbsp;
              <input type="date" className="pet-profile-create-text" {...register("dateBirth")} />
            </label>
          </div>
        </div>

        <br></br>

        <div>
          <label id="gender">
            <input
              type="radio"
              value="Male"
              {...register("gender", { required: true })}
            />
            男
            <input type="radio" value="Female" {...register("gender")} />女
          </label>
          <br></br>
          <div className="comment-error-area">
            {errors.gender && (
              <span className="comment-error">請選擇寵物性別</span>
            )}
          </div>
        </div>

        <div>
          <Radio.Group value={value} onChange={setValue}>
            <Radio
              value={"1"}
              label={catNameFilter}
              onClick={() => setIsTriggered(1)}
            />
            <Radio
              value={"2"}
              label={dogNameFilter}
              onClick={() => setIsTriggered(2)}
            />
          </Radio.Group>
        </div>
        <br></br>

        <div className="pet-profile-create-option-area">
          <div>{isTriggered === 0 && <div></div>}</div>

          <div>
            {isTriggered === 1 && (
              <div>
                <Controller
                  name="firstName"
                  control={control}
                  render={({ field }) => (
                    <Select data={catSubSpeciesId} {...field} />
                  )}
                />
              </div>
            )}
          </div>

          <div>
            {isTriggered === 2 && (
              <div>
                <Controller
                  name="firstName"
                  control={control}
                  render={({ field }) => (
                    <Select data={dogSubSpeciesId} {...field} />
                  )}
                />
              </div>
            )}
          </div>
        </div>
        <br></br>

        {/* <div>
          <label id="profileImg">
            profile img
            <input type="file" {...register("file")} />
          </label>
        </div> */}

        <ImageUploading
          value={images}
          onChange={onChange}
          dataURLKey="data_url"
        >
          {({
            imageList,
            onImageUpload,
            onImageUpdate,
            onImageRemove,
            isDragging,
            dragProps,
          }) => (
            // write your building UI
            <div className="upload__image-wrapper">
              <button
                type="button"
                className="comment-edit-button"
                style={isDragging ? { color: "red" } : undefined}
                onClick={onImageUpload}
                {...dragProps}
              >
                上傳寵物頭像
              </button>

              {imageList.map((image, index) => (
                <div key={index} className="image-item">
                  <img src={image["data_url"]} alt="" width="100" />
                  <br></br>
                  <div className="image-item__btn-wrapper">
                    <button
                      type="button"
                      className="comment-image-update"
                      onClick={() => onImageUpdate(index)}
                    >
                      <RxUpdate color="#F2968F" />
                    </button>
                    <button
                      type="button"
                      className="comment-image-delete"
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
        <br></br>

        <div>
          <input type="submit" value="提交" className="comment-submit" />
        </div>
      </form>
    </div>
  );
}

export default CreatePetProfile;
