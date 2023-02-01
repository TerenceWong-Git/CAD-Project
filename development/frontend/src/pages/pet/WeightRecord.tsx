import React, { useEffect, useState } from "react";
import "./css/WeightRecord.css";
import { Modal, Button, Group } from "@mantine/core";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";

function WeightRecord() {
  const petId = useParams();
  const jwt = localStorage.getItem('token');
  const path = process.env.REACT_APP_BACKEND_URL;
  const [opened, setOpened] = useState(false);
  const { register, handleSubmit } = useForm();
  const [pets, setPets] = useState<any>({});
  // const [isLoading, setIsLoading] = useState(false);
  // const inputWeight = () => {
  //     // 👇️ passed function to setState
  //     setIsLoading(current => !current)
  // };
  useEffect(() => {
    async function loadData() {
      const res = await fetch(`${path}/pet/petProfile/${petId.id}`,{headers: {Authorization: `Bearer ${jwt}`}});
      const json = await res.json();
      console.log(json);

      setPets(json[0]);
      console.log("what is pet",pets);
      
    }
    loadData();
  }, []);
  if (pets) {
    
    console.log("weight12321", pets.PetWeight);
    

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
    <div>
      <div>
        <h1>{pets.name}</h1>
      </div>
      <div>{pets.dateBirth && <h1>{age(pets.dateBirth)}</h1>}</div>
      <div>
        <div>record</div>
        {pets.PetWeight ? (
          <div>
            {pets.PetWeight.map((item: any) => (
              <div key={item.id}>
                <h2>{item.weight}</h2>
                <h2>{item.createdAt.slice(0, 10)}</h2>
              </div>
            ))}
          </div>
        ) : (
          <div>no record</div>
        )}
      </div>
      <div>
        {/* <button onClick={inputWeight}>+</button>
            {isLoading && <div className='toggleBox'>輸入體重</div>} */}
        <Modal opened={opened} onClose={() => setOpened(false)} title="輸入體重">
          {
            <form
              onSubmit={handleSubmit(async (data) => {
                // const formData = new FormData();
                // formData.append('weight',data.weight)

                console.log(data);

                const res = await fetch(`${path}/pet/addWeight/${petId.id}`, {
                  method: "POST",
                  headers: {
                    "content-type": "application/json; charset=utf-8",
                  },
                  body: JSON.stringify(data),
                  // body: formData
                });

                if (res.ok) {
                    const getRes = await fetch(`${path}/pet/petProfile/${petId.id}`,{headers: {Authorization: `Bearer ${jwt}`}});
                    const json = await getRes.json();
                    console.log(json);
                    setPets(json[0]);
                    setOpened(false)
                }

                // console.log(res);
              })}
            >
              <label>
                weight
                <input type="text" {...register("weight")} />
              </label>
              <p>
                <input type="submit" value="submit" />
              </p>
            </form>
          }
        </Modal>

        <Group position="center">
          <Button onClick={() => setOpened(true)}>輸入體重</Button>
        </Group>
      </div>
    </div>
  );
}

export default WeightRecord;
