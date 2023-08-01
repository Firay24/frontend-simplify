import React from 'react'
import Header from '../../components/pages/Login-regis/Header'
import RegisInputContainer from '../../components/pages/Login-regis/RegisInputContainer'

function Regis() {
  return (
    <div className='bg-gray-soft min-h-screen flex flex-col justify-between'>
        <div className='flex flex-col items-center my-auto'>
            <div>
                <Header title='Sign up to' />
            </div>
            <div className='w-1/4'>
                <RegisInputContainer />
            </div>
        </div>
        <div className='flex justify-center mb-7'>
            <p className='text-xs text-grey-light'>Copyright © 2023 Simplify</p>
        </div>
    </div>
  )
}

export default Regis
