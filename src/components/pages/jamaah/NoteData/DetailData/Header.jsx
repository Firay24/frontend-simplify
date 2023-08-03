import React from 'react'
import Title from '../../../../shared/HeaderTitle/Title'
import BackButton from '../../../../shared/Button/backButton'

function Header() {
  return (
    <div className='flex items-center justify-between'>
      <Title title='Detail data catatan' />
      <div>
        <BackButton />
      </div>
    </div>
  )
}

export default Header
