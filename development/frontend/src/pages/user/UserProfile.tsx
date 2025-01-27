import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./css/UserProfile.css";
import { FaPlus } from "react-icons/fa";

import Footer from "../../components/Footer";
import { RiUser3Line } from "react-icons/ri";
import { GiSittingDog } from "react-icons/gi";
import DefaultHeader from "../../components/DefaultHeader";

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
  }, [jwt,path]);

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
    <div className="user-profile-page">
      <DefaultHeader />
      {/* UserProfile */}
      <div className="user-profile-body">
        <div style={{display:"flex",justifyContent:"center"}}>
          <div className="user-card">
            {/* <div>
              <img
                className="user-icon"
                width="300"
                height="300"
                src={userIcon}
                alt="icon"
              />
            </div> */}
            {/* <div className="user-icon">{name.userIcon}</div> */}
            <div className="username">
              <div className="user-emtpy-pet-icon">
              <RiUser3Line className="user-emtpy-pet-icon-dummy username-icon-area"/>
              </div>
              <div className="username-name">
              {name.username}
              </div>
            </div>
          </div>
        </div>
        <div className="user-pet-profile-container">
          {pets.map((pet) => (
            <Link
              to={`/petprofile/${pet.id}`}
              key={pet.id}
              style={{ color: "#2b2b2e" }}
            >
              <div className="user-pet-profile">
                <div className="pet-image">
                  {pet.profileImg ? (
                    <img
                      className="user-pet-icon"
                      width="300"
                      height="300"
                      // src={icon}
                      src={`${process.env.REACT_APP_S3_UPLOAD_URL}/${pet.profileImg}`}
                      alt={pet.id}
                    />
                  ) : (
                    <div className="user-emtpy-pet-icon"><GiSittingDog className="user-emtpy-pet-icon-dummy"/></div>
                  )}
                </div>
                <div className="pet-detail">
                  <div className="pet-name">{pet.name}</div>
                  {/* <div>{pet.dateBirth && <p>{age(pet.dateBirth)}</p>}</div> */}
                  <div className="pet-tag-container">
                    <div className="pet-age">
                      {pet.dateBirth ? (
                        <div>{age(pet.dateBirth)}&nbsp;歲</div>
                      ) : (
                        <div></div>
                      )}
                    </div>
                  </div>
                  <div className="pet-tag-container">
                    <div className="pet-species-tag-chi">
                      {pet.species.chiSpecies}
                    </div>
                    <div className="pet-tag-gender">{pet.gender}</div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
          <div className="user-add-pet-container ">
            <Link to={`/createpetprofile`} style={{ color: "#2b2b2e" }}>
              <div className="user-add-pet">
                <br />
                <FaPlus />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default UserProfile;
