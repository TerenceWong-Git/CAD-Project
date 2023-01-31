import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

function PetProfile() {
  const petId = useParams();
  console.log("petpetid", petId);
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

  const [pets, setPets] = useState<any>({})

  useEffect(() => {
    async function loadData() {
      const res = await fetch(`${path}/pet/petProfile/${petId.id}`);
      const json = await res.json();
      console.log(json);

      setPets(json);
    }
    loadData();
  }, []);
  if (pets) {
    console.log("weight12321", pets.PetWeight);
    const petWeight = pets.PetWeight;
  }
  const age = (dob1: any) => {
    if (typeof dob1 === null) {
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
    <>
      <h1>{pets.name}</h1>
      {pets.dateBirth && <h1>{age(pets.dateBirth)}</h1>}
      <div>
        {pets.PetWeight? <div>{pets.PetWeight.map((item:any)=> <div key={item.id}><h2>{item.weight}</h2><h2>{(item.createdAt).slice(0,10)}</h2></div>)}</div>:<div>No pets</div>}
      </div>
    </>
  );
}

export default PetProfile;
