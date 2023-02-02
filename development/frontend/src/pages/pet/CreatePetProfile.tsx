import { Radio, Select } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { tags } from "../../components/pet/petTag";
import Species from "./Species";

function CreatePetProfile() {
  const path = process.env.REACT_APP_BACKEND_URL;
  const { register, handleSubmit, control, watch } = useForm();

  const navigate = useNavigate();

  const [loadPetSpecies, setLoadPetSpecies] = useState<any[]>([]);
  const [isTriggered, setIsTriggered] = useState<number>(0);
  const [value, setValue] = useState<any>(null);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/pet/species`);
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

  const catIdFilter = catFilter.map((item) => {
    return item.id;
  });
  const catNameFilter = catFilter.map((item) => {
    return item.chiSpecies;
  });

  const catSubSpeciesFilter = catSpeciesFilter.map((item) => [{ label: item.chiSpecies, value: item.id }]);
  const newArr = catSubSpeciesFilter.flat();

  console.log("catFilter: ", catFilter);
  console.log("catSpeciesFilter: ", catSpeciesFilter);
  console.log("catIdFilter: ", catIdFilter);
  console.log("catNameFilter: ", catNameFilter);
  console.log("newArr: ", newArr);
  console.log("=================");
  ///////////////////////   Cat Species   ///////////////////////

  ///////////////////////   Dog Species   ///////////////////////
  const dogFilter = loadPetSpecies.filter((item) => {
    return item.id === 2;
  });
  const dogIdFilter = dogFilter.map((item) => item.id);
  const dogNameFilter = dogFilter.map((item) => item.chiSpecies);

  const dogSpeciesFilter = loadPetSpecies.filter((item) => {
    return item.familyId === 2;
  });
  const dogSubSpeciesFilter = dogSpeciesFilter.map((item) => item.chiSpecies);
  console.log("dogNameFilter: ", dogNameFilter);
  console.log("dogSpeciesFilter: ", dogSpeciesFilter);

  ///////////////////////   Dog Species   ///////////////////////

  console.log("watch: ", watch());
  console.log("=================");

  return (
    <div>
      CreatePetProfile
      <form
        onSubmit={handleSubmit(async (data) => {
          const jwt = localStorage.getItem("token");
          const formData = new FormData();
          formData.append("name", data.name);
          formData.append("gender", data.gender);
          formData.append("speciesId", data.firstName);
          formData.append("dateBirth", data.dateBirth);
          formData.append("file", data.file[0]);

          await fetch(`${path}/pet/addPet`, {
            method: "POST",
            headers: {
              Authorization: `Bearer ${jwt}`,
            },
            body: formData,
          });
          // .then(() => navigate("/userprofile"));
        })}
      >
        <div>
          <Radio.Group value={value} onChange={setValue}>
            <Radio value={"1"} label={catNameFilter} onClick={() => setIsTriggered(1)} />
            <Radio value={"2"} label={dogNameFilter} onClick={() => setIsTriggered(2)} />
          </Radio.Group>
        </div>

        <div>{isTriggered === 0 && <div></div>}</div>

        <div>
          {isTriggered === 1 && (
            <div>
              <Controller name="firstName" control={control} render={({ field }) => <Select data={newArr} {...field} />} />
            </div>
          )}
        </div>

        <div>
          {isTriggered === 2 && (
            <div>
              <Controller name="firstName" control={control} render={({ field }) => <Select data={dogSubSpeciesFilter} {...field} />} />
            </div>
          )}
        </div>

        <div>
          <label id="profileImg">
            profile img
            <input type="file" {...register("file")} />
          </label>
        </div>

        <div>
          <label id="name">
            name
            <input type="text" {...register("name")} />
          </label>
        </div>

        <div>
          <label id="dateBirth">
            date of birth
            <input type="date" {...register("dateBirth")} />
          </label>
        </div>

        <div></div>

        <div>
          <label id="gender">
            gender
            <input type="radio" value="Male" {...register("gender")} />
            Male
            <input type="radio" value="Female" {...register("gender")} />
            Female
          </label>
        </div>

        <div>
          <input type="submit" value="submit" />
        </div>
      </form>
    </div>
  );
}

export default CreatePetProfile;
