import React, { useEffect, useState } from "react";
import "./css/WeightRecord.css";
import { Modal, Button, Group } from "@mantine/core";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import moment from "moment";
import { GiSittingDog } from "react-icons/gi";

// 寫翻fail情況提示  -> 最多6位(連小數)
function WeightRecord() {
  const petId = useParams();
  const jwt = localStorage.getItem("token");
  const path = process.env.REACT_APP_BACKEND_URL;
  const [opened, setOpened] = useState(false);
  const { register, handleSubmit } = useForm();
  const [pets, setPets] = useState<any>({});
  const [fiveRecord, setFiveRecord] = useState<any>({});
  // const [isLoading, setIsLoading] = useState(false);
  // const inputWeight = () => {
  //     // 👇️ passed function to setState
  //     setIsLoading(current => !current)
  // };
  useEffect(() => {
    async function loadData() {
      const res = await fetch(`${path}/pet/petProfile/${petId.id}`, {
        headers: { Authorization: `Bearer ${jwt}` },
      });
      const json = await res.json();

      const res2 = await fetch(`${path}/pet/petWeight/${petId.id}`, {
        headers: { Authorization: `Bearer ${jwt}` },
      });
      const json2 = await res2.json();
      setPets(json[0]);
      setFiveRecord(json2);
      console.log("what is pet", json[0]);
    }
    loadData();
  }, [jwt, petId.id, path]);
  console.log("what is weight", fiveRecord);
  // if (pets) {
  //   const onlyFiveRecord = pets.PetWeight.slice(-5);
  //   console.log("weight12321", pets.PetWeight);

  // }
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
    <div className="weight-page">
      <Header />
      <div className="weight-body-mid">
        <div className="weight-body">
          <div className="weight-profile">
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
              <div className="emtpy-pet-icon">
                <GiSittingDog className="user-emtpy-pet-icon-dummy ipad-dummy-pet-icon" />
              </div>
            )}

            <div className="weight-pet-introduction">
              <div className="weight-pet-name">{pets.name}</div>
              {pets.dateBirth ? <div className="weight-pet-age">{age(pets.dateBirth)}&nbsp;歲</div> : <div></div>}
            </div>
          </div>
          <div className="weight-container-body">
            <div className="weight-container">
              <div className="weight-container-titte">
                <div className="weight-container-titte-date">日期 </div>
                <div className="weight-container-titte-weight">體重</div>
              </div>
              {fiveRecord.length > 0 ? (
                <div>
                  {fiveRecord.map((item: any, index: number) => (
                    <div key={index} className="weight-record">
                      {/* <div className="weight-record-date">{item.createdAt.slice(0, 10)}</div> */}
                      <div className="weight-record-date">{moment(item.createdAt).format("l")}</div>
                      <div className="weight-record-weight">{item.weight}&nbsp;KG</div>
                    </div>
                  ))}
                </div>
              ) : (
                <div>未有記錄</div>
              )}
            </div>
            <div>
              {/* <button onClick={inputWeight}>+</button>
            {isLoading && <div className='toggleBox'>輸入體重</div>} */}
              <Modal
                centered
                size="auto"
                overlayOpacity={0.55}
                overlayBlur={1}
                className="weight-modal"
                opened={opened}
                onClose={() => setOpened(false)}
                title="輸入體重"
              >
                {
                  <form
                    onSubmit={handleSubmit(async (data) => {
                      const res = await fetch(`${path}/pet/addWeight/${petId.id}`, {
                        method: "POST",
                        headers: {
                          "content-type": "application/json; charset=utf-8",
                        },
                        body: JSON.stringify(data),
                        // body: formData
                      });

                      if (res.ok) {
                        const getRes = await fetch(`${path}/pet/petProfile/${petId.id}`, { headers: { Authorization: `Bearer ${jwt}` } });
                        const json = await getRes.json();
                        const getRes2 = await fetch(`${path}/pet/petWeight/${petId.id}`, { headers: { Authorization: `Bearer ${jwt}` } });
                        const json2 = await getRes2.json();

                        setPets(json[0]);
                        setFiveRecord(json2);
                        setOpened(false);
                      }
                      console.log(pets.PetWeight);
                    })}
                  >
                    <div className="weight-input-box">
                      <label className="weight-input-text">
                        <input type="text" {...register("weight")} className="weight-input-text-box" placeholder="KG" />
                      </label>
                      <div>
                        {/* <input type="submit" value="輸入" /> */}
                        <Button className="weight-submit-button" type="submit">
                          輸入
                        </Button>
                      </div>
                    </div>
                  </form>
                }
              </Modal>
            </div>

            <Group position="center">
              <Button className="weight-input-button" onClick={() => setOpened(true)}>
                輸入體重
              </Button>
            </Group>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default WeightRecord;
