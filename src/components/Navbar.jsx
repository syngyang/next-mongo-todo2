import Link from 'next/link'
import React from 'react'
import {HiOutlinePlus} from 'react-icons/hi'

function Navbar() {
  return (
    <nav className='flex justify-between items-center bg-slate-800 px-8 py-3 text-white'>
      <Link href={'/'} className='text-inherit font-bold'>To Do List </Link>
      <Link href={'/addTopic'} className='text-white p-2'>
        <HiOutlinePlus size={30} />
      </Link>
    </nav>
  )
}

export default Navbar