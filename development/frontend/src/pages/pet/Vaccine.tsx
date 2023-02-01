import { Button, Group, Modal } from '@mantine/core';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router';

function Vaccine() {
  const path = process.env.REACT_APP_BACKEND_URL;
  const [opened, setOpened] = useState(false);
  const petId = useParams();
  const { register, handleSubmit } = useForm();
  const [vaccine, setVaccine] = useState<any>({});
  useEffect(() => {
    async function loadData() {
      const res = await fetch(`${path}/pet/vaccine/${petId.id}`);
      const json = await res.json();
      console.log(json);

      setVaccine(json);
    }
    loadData();
  }, []);
  return (
    <div>
      Vaccine

      <div>
        {/* {vaccine.createdAt} */}
       <img width="100" src={`${path}/S3條route`} />
      </div>

      <Modal
          opened={opened}
          onClose={() => setOpened(false)}
          title="新增針卡">
          {
      <form
        onSubmit={handleSubmit(async (data) => {
          const formData = new FormData();
          formData.append("file", data.file[0]);
          const res = await fetch(`${path}/pet/vaccine/${petId.id}`,{
            method: "POST",
            body: formData,
        })
        
        if (res.ok) {
          const res = await fetch(`${path}/pet/vaccine/${petId.id}`);
          const json = await res.json();
          console.log(json);
          setVaccine(json);
          setOpened(false)
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
  )
}

export default Vaccine