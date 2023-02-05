import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./css/UserProfile.css";
import { FaPlus } from "react-icons/fa";
import icon from "../../assets/img_8790.jpeg";
import userIcon from "../../assets/128.png";

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
        <div>
          <img className="user-icon" width="300" height="300" src={userIcon} alt="icon" />
        </div>
        {/* <div className="user-icon">{name.userIcon}</div> */}
        <div className="username">{name.username}</div>
      </div>
      <div className="pet-profile-container">
        {pets.map((pet) => (
          <Link to={`/petprofile/${pet.id}`} key={pet.id}>
            <div className="pet-profile">
              <div className="pet-image">
                {pet.profileImg ? (
                  <img
                    className="user-pet-icon"
                    width="300"
                    height="300"
                    src={icon}
                    // src={`${process.env.REACT_APP_S3_UPLOAD_URL}/${pet.profileImg}`}
                    alt={pet.id}
                  />
                ) : (
                  <div className="user-emtpy-pet-icon"></div>
                )}
              </div>
              <div className="pet-detail">
                <div className="pet-name">{pet.name}</div>
                {/* <div>{pet.dateBirth && <p>{age(pet.dateBirth)}</p>}</div> */}
                <div className="pet-age">{pet.dateBirth ? <div>{age(pet.dateBirth)}&nbsp;歲</div> : <div></div>}</div>
                <div className="pet-species-tag-container">
                  <div className="pet-species-tag-chi">{pet.species.chiSpecies}</div>
                </div>
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
