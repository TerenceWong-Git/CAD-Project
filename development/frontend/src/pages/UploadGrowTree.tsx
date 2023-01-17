import React from 'react'
import { useForm } from 'react-hook-form';

function UploadGrowTree() {
    const {register, handleSubmit } = useForm();
  return (
    <div>UploadGrowTree
        
        <form onSubmit={handleSubmit(data => console.log(data))}>
            <p>
            <label>
                upload photo
                <input type="file" {...register('photo_name')}/>
            </label>
            </p>
            <p>
            <label>
                private or publice
                <p>
                <input type="radio" value="true" {...register('is_private')} />
                private
                <input type="radio" value="false" {...register('is_private')} />
                public
                </p>
            </label>
            </p>
            <p>
            <input type="submit" value="submit"/>
            </p>
        </form>
    </div>
  )
}

export default UploadGrowTree