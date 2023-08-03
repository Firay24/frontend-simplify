import React from 'react'
import AddButton from '../../../shared/Button/addButton'
import Title from '../../../shared/HeaderTitle/Title'

function Header() {
  return (
    <div className='flex items-center justify-between'>
        <Title title='Data Jamaah' />
        <div>
            <AddButton title='Data jamaah' path='/jamaah/addData' />
        </div>
    </div>
  )
}

export default Header
