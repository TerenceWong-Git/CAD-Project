import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import axios from "axios";
import { Select } from "@mantine/core";

function CreatePetProfile() {
  const path = process.env.REACT_APP_BACKEND_URL;
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const [species, setSpecies] = useState<any[]>([]);
  useEffect(() => {
    async function loadSpecies() {
      const res = await fetch(`${path}/pet/species`);
      const json = await res.json();
      console.log(res);

      setSpecies(json);
    }
    loadSpecies();
  }, []);
  console.log("species: ", species);

  const [family, setFamily] = useState<{ familyId?: number }>({});
  const [value, setValue] = useState<string | null>(null);
  // const familyIdNull = species.filter((specie)=> specie.familyId === null)

  return (
    <div>
      CreatePetProfile
      <form
      // onSubmit={handleSubmit(async (data) => {
      //   const formData = new FormData();
      //   formData.append("name", data.name);
      //   formData.append("gender", data.gender);
      //   formData.append("speciesId", data.speciesId);
      //   formData.append("profileImg", data.profileImg[0]);

      //   console.log(data.gender);
      //   console.log(data);

      //   const result = await axios.post(`${path}/pet/addPet`, formData, { headers: { "Content-Type": "multipart/form-data" } });

      //   console.log(result);

      //   // await fetch(`${path}/pet/addPet`,{
      //   //     method: "POST",
      //   //     body: formData,
      //   //     headers:{
      //   //         'content-type':'multipart/form-data'
      //   //     }
      //   // })
      //   navigate("/");
      // })}
      >
        <div>
          <label id="profileImg">
            profile img
            <input type="file" {...register("profileImg")} />
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

        <div>
          <label id="species">
            species
            <Select value={value} onChange={setValue} data={species} />;
          </label>
        </div>

        <div>
          <label id="gender">
            gender
            <input type="radio" value="male" {...register("gender")} />
            Male
            <input type="radio" value="female" {...register("gender")} />
            Female
          </label>
        </div>

        <div>
          <label id="weight">
            weight
            <input type="text" {...register("weight")} />
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

// {
//     const formDate = new FormData();
//     formDate.append('profile_img', data.profile_img[0])
//     formDate.append('name',data.name)
//     formDate.append('date_birth', data.date_birth)
//     formDate.append('species', data.species)
//     formDate.append('gender', data.gender)
//     formDate.append('weight', data.weight)

//     await fetch(`${process.env.REACT_APP_BACKEND_URL}/pets`,{
//         method: 'POST',
//         body: formDate
//     })
// })}
