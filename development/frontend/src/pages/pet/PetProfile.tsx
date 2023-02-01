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
    console.log("pets: ", pets);
    
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
    


      

            {/* <h1>{pets.name}</h1>
            {pets.dateBirth && <h1>{age(pets.dateBirth)}</h1>}
            {pets.PetWeight?.length > 0 && 
            <h1>{pets.PetWeight?.at(-1).weight}
            <Link to={`/weight/${petId.id}`} >
          </Link>
            </h1>} */}
            <h1>{pets.name}</h1>
      {pets.dateBirth && <h1>{age(pets.dateBirth)}</h1>}
      
      <div>
      <Link to={`/weight/${petId.id}`}>
        {(pets.PetWeight?.length > 0 )?<div><div>體重</div>{pets.PetWeight?.at(-1).weight}&nbsp;KG</div>:<div><div>體重</div><div>- -&nbsp;KG</div></div>}
        
        </Link>
        
      </div>
      
      <div>
      <Link to={`/growtree/${petId.id}`}>
        成長樹
      </Link>
      </div>
      
      <div>
      <Link to={`/vaccine/${petId.id}`}>
        針卡記錄
      </Link>
      </div>

  

    </>
  );
}

export default PetProfile;

      