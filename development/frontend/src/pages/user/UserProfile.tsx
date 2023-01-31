import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function UserProfile() {
  const path = process.env.REACT_APP_BACKEND_URL;
  const jwt = localStorage.getItem('token');
  const [pets, setPets] = useState<any[]>([]);

  useEffect(() => {
    async function loadData() {
      const res = await fetch(`${path}/pet/me`,{headers: {Authorization: `Bearer ${jwt}`}})
      const json = await res.json();
      console.log(json);
      
      setPets(json);
    }
    loadData();
  }, [])
  const age = (dob1:any) => {
    if (typeof dob1 === null){
      return
    }
    let today = new Date();
    let birthDate = new Date(dob1);
    let age_now = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
    {
        age_now--;
    }
    console.log(age_now);
    return age_now;
  }
  return (
    <div>
      UserProfile
      
      <div>
        {pets.map(pet => (
          <Link to={`/petprofile/${pet.id}`} key={pet.id}>
            <div>
              <img width="100" src={`${path}/me`} />
              <p>{pet.name}</p>
              {
                pet.dateBirth&&
                <p>{age(pet.dateBirth)}</p>
              }
            </div>
          </Link>
        ))}
      </div>
      <Link to={`/createpetprofile`}><button>加寵</button></Link>
    </div>
  )
}

export default UserProfile