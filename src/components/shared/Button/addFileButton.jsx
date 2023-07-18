import React from 'react'
import { AiOutlinePlus } from "react-icons/ai";

function addFileButton() {
  return (
    <button className='flex items-center bg-basic-blue text-white text-xs p-2 rounded gap-x-1 hover:bg-blue-dark'>
        <AiOutlinePlus />
        Upload file
    </button>
  )
}

export default addFileButton
