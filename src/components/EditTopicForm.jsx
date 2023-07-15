'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation';

const EditTopicForm = ({id, title, description}) => {
  const [ newTitle, setNewTitle] = useState(title);
  const [ newDescription, setNewDescription] = useState(description)
  const router = useRouter()

  const handleSubmit = async (e)=> {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: "PUT",
        headers: {
          "Content": "application/json",
        },
        body: JSON.stringify({newTitle, newDescription})
      });
      if (!res.ok) {
        throw new Error("Failed to update the topic")
      }

      router.refresh()
      router.push('/')
    } catch (error) {
      console.log("에러 : ",error)
    }
  }
  return (
    <form onSubmit={handleSubmit} action="" className='flex flex-col gap-3'>
      <input 
        className='border border-slate-500 px-6 py-2' 
        type="text" 
        placeholder=""
        onChange={e=>setNewTitle(e.target.value)}
        value={newTitle}
      />
      <textarea 
        className='border border-slate-500 px-6 py-2' 
        name="description" 
        id="" 
        cols="30" rows="2"
        placeholder=""
        onChange={e=>setNewDescription(e.target.value)}
        value={newDescription}
        
      />
      <button 
        type="submit"
        className='bg-green-700 font-bold text-white py-2 px-6 w-fit'
        >수정하기</button>
    </form>
  )
}

export default EditTopicForm