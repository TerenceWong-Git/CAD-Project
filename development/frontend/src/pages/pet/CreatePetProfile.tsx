import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import Species from "./Species";



// function CreatePetProfile() {
//   const path = process.env.REACT_APP_BACKEND_URL;
//   const { register, handleSubmit } = useForm();
//   const navigate = useNavigate();
//   const [species, setSpecies] = useState<any[]>([]);
//   useEffect(() => {
//     async function loadSpecies() {
//       const res = await fetch(`${path}/pet/species`);
//       const json = await res.json();
//       console.log(res);

//       setSpecies(json);
//     }
//     loadSpecies();
//   }, []);
//   console.log("species: ", species);
//   return (
//     <div>
//       CreatePetProfile
//       <form 
//       onSubmit={handleSubmit(async data => {
//         const jwt = localStorage.getItem('token');
//         const formData = new FormData();
//         formData.append("name", data.name);
//         formData.append("gender", data.gender);
//         formData.append("speciesId", data.speciesId);
//         formData.append("dateBirth",data.dateBirth)
//         formData.append("file", data.file[0]);

//         console.log(data);
//         console.log(jwt)
//         console.log(path)

//         await fetch(`${path}/pet/addPet`,{
//             method: "POST",
//             headers: {
//               Authorization: `Bearer ${jwt}`,
//             },
//             body: formData,
//         }).then(
//           () => navigate("/userprofile")  
//         )
//       })}
//       >
//         <div>
//           <label id="profileImg">
//             profile img
//             <input type="file" {...register("file")} />
//           </label>
//         </div>

//         <div>
//           <label id="name">
//             name
//             <input type="text" {...register("name")} />
//           </label>
//         </div>

//         <div>
//           <label id="dateBirth">
//             date of birth
//             <input type="date" {...register("dateBirth")} />
//           </label>
//         </div>
        
//         <div>
//           <label id="species">
//             species
//             {/* <Select value={value} onChange={setValue} data={species} /> */}

//             <input type="radio" value="1" {...register("speciesId")} />
//             唐貓
//             <input type="radio" value="2" {...register("speciesId")} />
//             唐狗
//           </label>
//         </div>

//         <div>
//           <label id="gender">
//             gender
//             <input type="radio" value="Male" {...register("gender")} />
//             Male
//             <input type="radio" value="Female" {...register("gender")} />
//             Female
//           </label>
//         </div>

//         <div>
//           <input type="submit" value="submit" />
//         </div>
//       </form>
//     </div>
//   );
// }

// export default CreatePetProfile;

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
  return (
    <div>
      CreatePetProfile
      <form 
      onSubmit={handleSubmit(async data => {
        const jwt = localStorage.getItem('token');
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("gender", data.gender);
        formData.append("speciesId", data.speciesId);
        formData.append("dateBirth",data.dateBirth)
        formData.append("file", data.file[0]);

        console.log(data);
        console.log(jwt)
        console.log(path)

        await fetch(`${path}/pet/addPet`,{
            method: "POST",
            headers: {
              Authorization: `Bearer ${jwt}`,
            },
            body: formData,
        }).then(
          () => navigate("/userprofile")  
        )
      })}
      >
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
        
        <div>
          <label id="species">
            species
            {/* <Select value={value} onChange={setValue} data={species} /> */}

            <input type="radio" value="1" {...register("speciesId")} />
            唐貓
            <input type="radio" value="2" {...register("speciesId")} />
            唐狗
          </label>
        </div>

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
