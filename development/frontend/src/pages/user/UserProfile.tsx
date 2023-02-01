import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function UserProfile() {
  const path = process.env.REACT_APP_BACKEND_URL;
  const jwt = localStorage.getItem("token");
  const [pets, setPets] = useState<any[]>([]);
  const [name, setName] = useState<any>([]);

  useEffect(() => {
    async function loadData() {
      const res = await fetch(`${path}/pet/me`,{headers: {Authorization: `Bearer ${jwt}`}});
      const json = await res.json();
      
      setPets(json);
    }
    async function loadName(){
      const userRes = await fetch(`${path}/pet/username`,{headers: {Authorization: `Bearer ${jwt}`}});
      const userJson = await userRes.json();
      
      setName(userJson);

    }
    loadName();
    loadData();
  }, []);
  const age = (dob1: any) => {
    if (dob1 === null) {
      return;
    }
    let today = new Date();
    let birthDate = new Date(dob1);
    let age_now = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age_now--;
    }
    return age_now;
  };
  return (
    <div>
      UserProfile

      <div>
        {name.username}
      </div>
      
      <div>
        {pets.map((pet) => (
          <Link to={`/petprofile/${pet.id}`} key={pet.id}>
            <div>
              <img width="100" src={`${path}/S3條route`} alt={pet.id} />
              <p>{pet.name}</p>
              {pet.dateBirth && <p>{age(pet.dateBirth)}</p>}
            </div>
          </Link>
        ))}
      </div>
      <Link to={`/createpetprofile`}>
        <button>加寵</button>
      </Link>
    </div>
  );
}

export default UserProfile;
