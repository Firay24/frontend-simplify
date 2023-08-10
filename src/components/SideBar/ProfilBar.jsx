import React from 'react'
import { LuUser } from "react-icons/lu";


function ProfilBar({ user }) {
  return (
    <div className='flex mb-5 ml-3 items-center gap-x-3'>
      <div className='bg-slate-500 rounded-full p-2 text-white'>
        <LuUser />
      </div>
      <div className='text-xs text-[#5F6D7E]'>
        <p className='font-semibold'>{user.role === 'Jamaah' ? user.role : user.region}</p>
        <p>{user.name}</p>
      </div>
    </div>
  )
}

export default ProfilBar
