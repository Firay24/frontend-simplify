import React from 'react'
import Title from '../../../shared/HeaderTitle/Title'
import BackButton from '../../../shared/Button/backButton'

function Header() {
  return (
    <div className='flex items-center justify-between'>
        <Title title='Edit data catatan' />
        <BackButton />
    </div>
  )
}

export default Header
