import React from 'react'
import Title from '../../../../Header/HeaderTitle'
import BackButton from '../../../../Button/ButtonOnClick'

function Header() {
  return (
    <div className='flex items-center justify-between'>
        <Title title='Edit data catatan' />
        <BackButton text='Kembali' goBack={true} bgColor='bg-basic-blue hover:bg-blue-dark text-white text-xs' />
    </div>
  )
}

export default Header
