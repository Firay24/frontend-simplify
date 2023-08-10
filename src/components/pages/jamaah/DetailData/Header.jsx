import React from 'react'
import Title from '../../../Header/HeaderTitle'
import AddButton from '../../../Button/ButtonOnLink'

function Header() {
  return (
    <div className='flex items-center justify-between'>
      <Title title='Detail data' />
      <div>
        <AddButton text='Data fungsional' path='/fungsional/addData' addButton={true} />
      </div>
    </div>
  )
}

export default Header
