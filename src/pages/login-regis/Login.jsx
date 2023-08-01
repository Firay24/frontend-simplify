import React from 'react'
import Header from '../../components/pages/Login-regis/Header'
import LoginInputContainer from '../../components/pages/Login-regis/LoginInputContainer'

function Login() {
  return (
    <div className='bg-gray-soft min-h-screen flex flex-col justify-between'>
        <div className='flex flex-col items-center my-auto'>
            <div>
                <Header title='Sign in to' />
            </div>
            <div className='w-1/4'>
                <LoginInputContainer />
            </div>
        </div>
        <div className='flex justify-center mb-7'>
            <p className='text-xs text-grey-light'>Copyright © 2023 Simplify</p>
        </div>
    </div>
  )
}

export default Login
