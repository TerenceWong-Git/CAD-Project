import { Button, Group, Modal } from "@mantine/core";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";

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
  }, []);
  return (
    <div>
      Vaccine
      <div>
        {vaccine?.name}
        {/* <img width="100" src={`${path}/S3條route`} /> */}
      </div>
      <Modal opened={opened} onClose={() => setOpened(false)} title="新增針卡">
        {
          <form
            onSubmit={handleSubmit(async (data) => {
              const formData = new FormData();
              formData.append("file", data.file[0]);
              const res = await fetch(`${path}/pet/uploadVaccine/${petId.id}`, {
                method: "POST",
                body: formData,
              });
              console.log(res);
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
                upload photo
                <input type="file" {...register("file")} />
              </label>
            </div>

            <div>
              <input type="submit" value="submit" />
            </div>
          </form>
        }
      </Modal>
      <Group position="center">
        <Button onClick={() => setOpened(true)}>新增針卡</Button>
      </Group>
    </div>
  );
}

export default VaccinePage;
