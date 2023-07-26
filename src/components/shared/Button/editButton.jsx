import React from 'react'
import { Link } from 'react-router-dom'

function editButton({ id }) {
  return (
    <Link to={`/jamaah/editData/${id}`} className="flex justify-center items-center w-40 bg-basic-blue text-white text-xs p-2 rounded gap-x-1 hover:bg-blue-dark">
      Edit
    </Link>
  )
}

export default editButton
