import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./css/UserProfile.css";
import { FaPlus } from "react-icons/fa";
import icon from "./IMG_8790.jpeg";
import userIcon from "./7D2555FA-F4B2-4F88-865C-326B0E7CC787_1_105_c.jpeg";

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

  console.log(pets);
  console.log(name);

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
      {/* UserProfile */}
      <div className="user-card">
<<<<<<< HEAD
        <div>
          <img className="user-icon" width="300" height="300" src={userIcon} alt="icon" />
        </div>
=======
        <div>{/* <img className="user-icon" width="300" height="300" src={userIcon} alt="icon" /> */}</div>
>>>>>>> 40baf01190ba515a20a01f391dd216d5cb97e430
        {/* <div className="user-icon">{name.userIcon}</div> */}
        <div className="username">{name.username}</div>
      </div>
      <div className="pet-profile-container">
        {pets.map((pet) => (
          <Link to={`/petprofile/${pet.id}`} key={pet.id}>
            <div className="pet-profile">
              <div className="pet-image">
                <img
                  className="pet-icon"
                  width="300"
                  height="300"
                  src={icon}
                  alt={pet.id}
                />
              </div>
              <div className="pet-detail">
                <div className="pet-name">{pet.name}</div>
                {/* <div>{pet.dateBirth && <p>{age(pet.dateBirth)}</p>}</div> */}
                <div className="pet-age">{pet.dateBirth ? <div>{age(pet.dateBirth)}&nbsp;歲</div> : <div></div>}</div>
              </div>
            </div>
          </Link>
        ))}
        <div className="pet-profile-container">
          <Link to={`/createpetprofile`}>
            <div className="add-pet">
              <div className="plus">
                <FaPlus />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
