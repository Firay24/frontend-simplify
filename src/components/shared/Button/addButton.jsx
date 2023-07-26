import React from 'react'
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types'

function addButton({ title, path }) {
  return (
    <Link to={path} className="flex items-center bg-basic-blue text-white text-xs p-2 rounded gap-x-1 hover:bg-blue-dark">
      <AiOutlinePlus />
      { title }
    </Link>
  )
}

// addButton.propTypes = {}

export default addButton
