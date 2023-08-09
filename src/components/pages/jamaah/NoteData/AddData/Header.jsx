import React from 'react'
import Title from '../../../../Header/HeaderTitle'
import BackButton from '../../../../shared/Button/backButton'

function Header() {
  return (
    <div className='flex items-center justify-between'>
        <Title title='Tambah catatan' />
        <BackButton />
    </div>
  )
}

export default Header
