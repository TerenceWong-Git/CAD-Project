import React, { useState } from 'react'
import "./WeightRecord.css"
import { Modal, Button, Group } from '@mantine/core';
import { useForm } from 'react-hook-form';

function WeightRecord() {
    const [opened, setOpened] = useState(false);
    const {register, handleSubmit } = useForm();
    // const [isLoading, setIsLoading] = useState(false);
    // const inputWeight = () => {
    //     // 👇️ passed function to setState
    //     setIsLoading(current => !current)
    // };
  return (
    <div>
        <div>
            name
        </div>
        <div>
            age
        </div>
        <div>
            <div>
                record
            </div>
            <div>
                日期
            </div>
            <div>
                體重
            </div>
        </div>
        <div>
            {/* <button onClick={inputWeight}>+</button>
            {isLoading && <div className='toggleBox'>輸入體重</div>} */}
            <Modal
            opened={opened}
            onClose={() => setOpened(false)}
            title="輸入體重"
            
        >
        {<form onSubmit={handleSubmit(data => console.log(data))}>
            <label>
                date of birth
                <input type="date" {...register('date_birth')}/>
            </label>
            <label>
                weight
                <input type="text" {...register('weight')}/>
            </label>
            <p>
            <input type="submit" value="submit"/>
            </p>
        </form>}
      </Modal>

      <Group position="center">
        <Button onClick={() => setOpened(true)}>輸入體重</Button>
      </Group>


        </div>
    </div>
    )}


export default WeightRecord