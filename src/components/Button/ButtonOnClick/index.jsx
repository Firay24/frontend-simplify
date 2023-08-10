/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router'
import { AiOutlinePlus } from 'react-icons/ai';
import { BsFillFileEarmarkTextFill } from 'react-icons/bs';
import { BiChevronLeft } from "react-icons/bi";

function buttonOnClick({
    onClick, text, bgColor, addButton = false, goBack = false, guideFileButton = false,
}) {
    const navigation = useNavigate()
    const goBackFunc = () => {
        navigation(-1)
    }
    
    return (
        <button type="submit" onClick={goBack ? goBackFunc : onClick} className={`flex items-center justify-center ${guideFileButton ? 'text-base' : 'text-xs'} p-2 rounded gap-x-1 ${bgColor}`}>
            { addButton ? <AiOutlinePlus /> : guideFileButton ? <BsFillFileEarmarkTextFill /> : goBack ? <BiChevronLeft /> : null }
            { text }
        </button>
    )
}

buttonOnClick.propTypes = {
    onClick: PropTypes.func,
    text: PropTypes.string,
    addButton: PropTypes.bool,
    goBack: PropTypes.bool,
    guideFileButton: PropTypes.bool,
}

export default buttonOnClick
