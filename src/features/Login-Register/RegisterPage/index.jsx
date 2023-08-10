import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../../components/Header/HeaderLogo'
import RegisInputContainer from '../../../components/Form/Register'
import { register } from '../../../utils/apiData'

function RegisPage() {
    const navigate = useNavigate()

    async function onRegisterHandler(user) {
        const {error} = await register(user)

        if (!error) {
            navigate('/')
        }
    }

    return (
        <div className='bg-gray-soft min-h-screen flex flex-col justify-between'>
            <div className='flex flex-col items-center my-auto'>
                <div>
                    <Header title='Sign up to' />
                </div>
                <div className='w-1/4'>
                    <RegisInputContainer register={onRegisterHandler} />
                </div>
            </div>
            <div className='flex justify-center mb-7'>
                <p className='text-xs text-grey-light'>Copyright © 2023 Simplify</p>
            </div>
        </div>
    )
}

export default RegisPage
