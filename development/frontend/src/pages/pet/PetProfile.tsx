import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "./css/PetProfile.css";
import { TiTree } from "react-icons/ti";
import { BsCardList } from "react-icons/bs";
// import icon from "../../assets/img_8790.jpeg";

function PetProfile() {
  const jwt = localStorage.getItem("token");
  const petId = useParams();
  const path = process.env.REACT_APP_BACKEND_URL;
  // const jwt = localStorage.getItem('token');
  // const [pets, setPets] = useState<{
  //   id: number;
  //   name: string;
  //   dateBirth: string;
  //   PetWeight: Array<{
  //     id: number;
  //     petId: number;
  //     weight: string;
  //     createdAt: string;
  //   }>;
  // } | null>();

  const [pets, setPets] = useState<any>({});

  useEffect(() => {
    async function loadData() {
      const res = await fetch(`${path}/pet/petProfile/${petId.id}`, {
        headers: { Authorization: `Bearer ${jwt}` },
      });
      const json = await res.json();
      console.log(json);

      setPets(json[0]);
    }
    loadData();
  }, [petId]);
  if (pets) {
    console.log("weight12321", pets.PetWeight);
    console.log("pets: ", pets);

    // const petWeight = pets.PetWeight;
  }
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
    console.log(age_now);
    return age_now;
  };
  return (
    <div className="pet-profile-page">
      <Header />
      <div className="pet-card-container">
        <div className="pet-card">
          <div>
            {pets.profileImg ? (
              <img
                className="pet-icon"
                width="300"
                height="300"
                // src={icon}
                src={`${process.env.REACT_APP_S3_UPLOAD_URL}/${pets.profileImg}`}
                alt={pets.id}
              />
            ) : (
              <div className="empty-pet-icon"></div>
            )}
          </div>
          <div className="pet-introduction">
            <div className="pet-info-name">{pets.name}</div>
            {pets.dateBirth ? (
              <div className="pet-info-age">{age(pets.dateBirth)}&nbsp;歲</div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>

      <div>
        <div className="pet-profile-container">
          <Link to={`/weight/${petId.id}`}>
            <div className="pet-profile">
              {pets.PetWeight?.length > 0 ? (
                <div className="pet-profile-weight-container">
                  <div>體重</div>
                  <div className="pet-profile-weight">{pets.PetWeight?.at(-1).weight}&nbsp;KG</div>
                </div>
              ) : (
                <div>
                  <div>體重</div>
                  <div>- -&nbsp;KG</div>
                </div>
              )}
            </div>
          </Link>
        </div>

        <div className="pet-profile-container">
          <Link to={`/growtree/${petId.id}`}>
            <div className="pet-profile">
              <TiTree color="#013328" />
              &nbsp;成長樹
            </div>
          </Link>
        </div>

        <div className="pet-profile-container">
          <Link to={`/vaccine/${petId.id}`}>
            <div className="pet-profile">
              <BsCardList />
              &nbsp;針卡記錄
            </div>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PetProfile;
