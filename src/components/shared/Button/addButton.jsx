import React from 'react'
import { AiOutlinePlus } from "react-icons/ai";
// import PropTypes from 'prop-types'

function addButton() {
  return (
    <button className='flex items-center bg-basic-blue text-white text-xs p-2 rounded gap-x-1 hover:bg-blue-dark'>
        <AiOutlinePlus />
        data jamaah
    </button>
  )
}

// addButton.propTypes = {}

export default addButton
