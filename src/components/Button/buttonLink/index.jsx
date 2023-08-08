import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlinePlus } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function index({ text, path, addButton = false }) {
  return (
    <Link to={path} className="flex justify-center items-center w-40 bg-basic-blue text-white text-xs p-2 rounded gap-x-1 hover:bg-blue-dark">
      {addButton ? <AiOutlinePlus /> : null}
      {text}
    </Link>
  );
}

index.propTypes = {
  text: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  addButton: PropTypes.bool.isRequired,
};

export default index;
