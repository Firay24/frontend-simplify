import React from 'react'
import PropTypes from 'prop-types'
import { AiOutlinePlus } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function ButtonOnLink({
    text, path, addButton = false, styleButton
}) {
    return (
        <Link to={path} className={`${styleButton} flex justify-center items-center bg-basic-blue text-white text-xs p-2 rounded gap-x-1 hover:bg-blue-dark`}>
            {addButton ? <AiOutlinePlus /> : null}
            {text}
        </Link>
    )
}

ButtonOnLink.propTypes = {
    text: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    addButton: PropTypes.bool
}

export default ButtonOnLink
