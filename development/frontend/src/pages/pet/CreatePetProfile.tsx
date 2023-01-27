import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router';
import axios from 'axios'

function CreatePetProfile() {
    const path = process.env.REACT_APP_BACKEND_URL;
    const {register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const [species, setSpecies] = useState<any[]>([]);
    useEffect(() => {
        async function loadSpecies() {
            const res = await fetch(`${path}/pet/species`)
            const json = await res.json();
            console.log(res);
            
            setSpecies(json);
            
        }
        loadSpecies()
    },[])
    
    const [family, setFamily] = useState<number| null>(0)
    // const familyIdNull = species.filter((specie)=> specie.familyId === null)
    
  return (
    <div>CreatePetProfile

        <form onSubmit={handleSubmit(async data => {
            
            const formData = new FormData();
            formData.append('name',data.name)
            formData.append('gender',data.gender)
            formData.append('speciesId',data.speciesId)
            formData.append('profileImg',data.profileImg[0])

            console.log(data.gender);
            console.log(data);
            
            

            const result = await axios.post(`${path}/pet/addPet`, formData, { headers: {'Content-Type': 'multipart/form-data'}})

            console.log(result);
            
            // await fetch(`${path}/pet/addPet`,{
            //     method: "POST",
            //     body: formData,
            //     headers:{
            //         'content-type':'multipart/form-data'
            //     }
            // })
            navigate('/')
        })}>
            <p>
            <label>
                profile img
                <input type="file" {...register('profileImg')}/>
            </label>
            </p>
            <p>
            <label>
                name
                <input type="text" {...register('name')}/>
            </label>
            </p>
            <p>
            <label>
                date of birth
                <input type="date" {...register('dateBirth')}/>
            </label>
            </p>
           
            <p>
            <label>
                species
                <select {...register('speciesId')}>
                
                
            
                </select>



                
                <select {...register('speciesId')}>
                
            {species.filter((specie)=> specie.familyId === specie.id).map(specie =>(<option>{specie.chiSpecies}</option>))}
                </select>
            </label>
            </p>
            <p>
            <label>
                gender
                <input type="radio" value="male" {...register('gender')} />
                Male
                <input type="radio" value="female" {...register('gender')} />
                Female
            </label>
            </p>
            <p>
            <label>
                weight
                <input type="text" {...register('weight')}/>
            </label>
            </p>
            <p>
            <input type="submit" value="submit"/>
            </p>
        </form>
    </div>
  )
}

export default CreatePetProfile


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