import React from 'react'
import { useForm } from 'react-hook-form'

function CreatePetProfile() {
    const section = ["cat", "dog"]
    const {register, handleSubmit } = useForm();
    
  return (
    <div>CreatePetProfile

        <form onSubmit={handleSubmit(data => console.log(data))}>
            <p>
            <label>
                profile img
                <input type="file" {...register('profile_img')}/>
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
                <input type="date" {...register('date_birth')}/>
            </label>
            </p>
            <p>
            <label>
                species
                <select {...register('species')}>
                    <option value={section[0]}>cat</option>
                    <option value={section[1]}>dog</option>
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