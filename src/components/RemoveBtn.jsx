'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { HiOutlineTrash } from 'react-icons/hi'

const RemoveBtn = ({id}) => {
  const router = useRouter();

  const removeTopic= async ()=>{
    const confirmed = confirm(" 삭제하시겠습니까? ")
    if (confirmed) {
      const res = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
        method: "DELETE",

      })
      if (res.ok) {
        router.refresh()
      }
    }
  }
  return (
    <button 
      className='text-red-400'
      onClick={removeTopic}
      >
      <HiOutlineTrash size={24}  />
    </button>
  )
}

export default RemoveBtn