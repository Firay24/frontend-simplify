import React from 'react'
import Title from '../../../Header/HeaderTitle'
import AddButton from '../../../shared/Button/addButton'

function Header() {
  return (
    <div className='flex items-center justify-between'>
      <Title title='Detail data' />
      <div>
        <AddButton title='Data fungsional' path='/fungsional/addData' />
      </div>
    </div>
  )
}

export default Header
