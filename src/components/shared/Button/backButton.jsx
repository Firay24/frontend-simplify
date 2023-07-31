import React from 'react'
import { BiChevronLeft } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';

function BackButton() {
    const navigate = useNavigate()
    const goBack = () => {
        navigate(-1)
    }

    return (
        <button onClick={goBack} className='flex items-center bg-basic-blue text-white text-xs p-2 rounded gap-x-1 hover:bg-blue-dark'>
            <BiChevronLeft />
            Kembali
        </button>
    )
}

export default BackButton
