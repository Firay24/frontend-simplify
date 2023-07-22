import React from 'react'
// 'p-2 bg-slate-300 hover:bg-slate-400 rounded w-1/4'

function submitButton({ bgColor, onClick }) {
  return (
    <button type='submit' onClick={onClick} className={`p-2 rounded w-1/4 ${bgColor}`}>
        Submit
    </button>
  )
}

export default submitButton
