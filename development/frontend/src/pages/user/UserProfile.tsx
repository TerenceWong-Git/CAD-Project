import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../pet/css/UserProfile.css";

function UserProfile() {
  const path = process.env.REACT_APP_BACKEND_URL;
  const jwt = localStorage.getItem("token");
  const [pets, setPets] = useState<any[]>([]);
  const [name, setName] = useState<any>([]);

  useEffect(() => {
    async function loadData() {
      const res = await fetch(`${path}/pet/me`, {
        headers: { Authorization: `Bearer ${jwt}` },
      });
      const json = await res.json();

      setPets(json);
    }
    async function loadName() {
      const userRes = await fetch(`${path}/pet/username`, {
        headers: { Authorization: `Bearer ${jwt}` },
      });
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
      <div>{name.username}</div>
      <div className="pet-profile-container">
        {pets.map((pet) => (
          <Link to={`/petprofile/${pet.id}`} key={pet.id}>
            <div className="pet-profile">
              <div>
                <img
                  className="pet-icon"
                  width="300"
                  height="300"
                  src={`${path}/S3條route`}
                  alt={pet.id}
                />
              </div>
              <div>{pet.name}</div>
              {/* <div>{pet.dateBirth && <p>{age(pet.dateBirth)}</p>}</div> */}
              <div>{pet.name?(<div>{age(pet.dateBirth)}</div>):(<div></div>)}</div>
            </div>
          </Link>
        ))}
        <Link to={`/createpetprofile`}>
        <div className="pet-profile">
          <button>加寵</button>
        </div>
      </Link>
      </div>
      
    </div>
  );
}

export default UserProfile;
