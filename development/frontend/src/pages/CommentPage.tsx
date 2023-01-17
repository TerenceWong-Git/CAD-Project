import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router';

function CommentPage() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
  

  

  return (
    <div>CommentPage
      <form onSubmit={handleSubmit( data => console.log(data))}>
        <p>
        <label>
          標題：
          <input type="text" {...register('title')}></input>
        </label>
        </p>
        <p>
        <label>
          內容：
          <textarea {...register('content')}></textarea>
        </label>
        </p>
        <p>
        <label>
          相：
          <input type="file" {...register('picture')}></input>
        </label>
        </p>
        <p>
        <input type="submit" value="submit" />
        </p>
      </form>
    </div>
   
    

  )
}

export default CommentPage