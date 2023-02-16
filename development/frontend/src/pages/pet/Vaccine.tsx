import { Button, Group, Modal } from "@mantine/core";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import { ImFolderUpload } from "react-icons/im";
import "./css/Vaccine.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const path = process.env.REACT_APP_BACKEND_URL;

interface Vaccine {
  id: number;
  name: string;
}

function VaccinePage() {
  const [opened, setOpened] = useState(false);
  const petId = useParams();
  const { register, handleSubmit } = useForm();
  const [vaccine, setVaccine] = useState<Vaccine>();
  const jwt = localStorage.getItem("token");

  useEffect(() => {
    async function loadData() {
      const res = await fetch(`${path}/pet/vaccine/${petId.id}`, { headers: { Authorization: `Bearer ${jwt}` } });
      const data = await res.json();
      setVaccine(data.at(-1));
    }
    loadData();
  }, [jwt, petId.id]);

  return (
    <div className="vaccine-page">
      <Header />
      <div className="vaccine-body">
        <div className="vaccine-tittle">針卡記錄</div>

        <div>
          {/* {vaccine?.name} */}
          <img className="vaccine" src={`${process.env.REACT_APP_S3_UPLOAD_URL}/${vaccine?.name}`} alt={""} />
        </div>

        <Modal centered className="vaccine-upload-tille" opened={opened} overlayOpacity={0.55} overlayBlur={1} onClose={() => setOpened(false)}>
          {
            <form
              className="vaccine-upload-container"
              onSubmit={handleSubmit(async (data) => {
                const formData = new FormData();
                formData.append("file", data.file[0]);
                const res = await fetch(`${path}/pet/uploadVaccine/${petId.id}`, {
                  method: "POST",
                  body: formData,
                });
                console.log(res);
                console.log(vaccine);
                if (res.status === 201) {
                  const getRes = await fetch(`${path}/pet/vaccine/${petId.id}`, { headers: { Authorization: `Bearer ${jwt}` } });
                  const json = await getRes.json();
                  setVaccine(json.at(-1));
                  setOpened(false);
                }
              })}
            >
              <div>
                <label id="file">
                  <input style={{ display: "none" }} type="file" {...register("file")} />
                  <div className="vaccine-folderupload">
                    <ImFolderUpload />
                    上載針卡
                  </div>
                </label>
              </div>

              <div>
                <Button type="submit" value="submit" className="upload-vaccine-button">
                  加入針卡
                </Button>
              </div>
            </form>
          }
        </Modal>

        <Group position="center">
          <Button className="add-vaccine-button" onClick={() => setOpened(true)}>
            新增針卡
          </Button>
        </Group>
      </div>
      <Footer />
    </div>
  );
}

export default VaccinePage;
