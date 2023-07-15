'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation';


const AddTopicPage = () => {
  const [ title, setTitle] = useState("")
  const [ description, setDescription]= useState("")
  const router = useRouter()

  const handleSubmit = async (e)=>  {
    e.preventDefault();
  
    if (!title){
      alert(" 제목을 작성하세요^^ ");
      return;
    }
  
    try {
      const res = await fetch('http://localhost:3000/api/topics', {
        method: "POST",
        headers: {
          "Content": "application/json"
        },
        body: JSON.stringify({title, description}),
      })
      if (res.ok) {
        router.refresh();
        router.push("/");
      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (error) {
      console.log("실패", error);
    }
  }
  
  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
      <input 
        className='border border-slate-500 px-6 py-2' 
        type="text" 
        placeholder="제목"
        onChange={(e)=>setTitle(e.target.value)}
        value = {title}
      />
      <textarea 
        className='border border-slate-500 px-6 py-2' 
        name="description" 
        id="" 
        cols="30" rows="2"
        placeholder="내용"
        onChange={(e)=>setDescription(e.target.value)}
        value = {description}
      />
      <button 
        type="submit" 
        className='bg-green-700 font-bold text-white py-2 px-6 w-fit'
        >추가하기</button>
    </form>
  )
}

export default AddTopicPage