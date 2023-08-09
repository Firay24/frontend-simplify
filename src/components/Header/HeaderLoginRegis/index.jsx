import React from 'react'
import Logo from '../../../assets/onlyLogo.png'

function Header({ title }) {
  return (
    <div className='flex flex-col items-center'>
      <div>
        <img className='h-12' src={Logo} alt="logo avatar" />
      </div>
      <div className='mt-5'>
        <h1 className='text-3xl font-semibold text-basic-grey'>
            {title} <span className='font-bold text-basic-blue'>simplify.</span>
        </h1>
      </div>
    </div>
  )
}

export default Header
