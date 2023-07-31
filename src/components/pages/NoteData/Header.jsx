import React from 'react'
import Title from '../../shared/HeaderTitle/Title'
import AddButton from '../../shared/Button/addButton'

function Header() {
  return (
    <div className='flex items-center justify-between'>
        <Title title='Data Catatan' />
        <div>
            <AddButton title='Tambah catatan' path='/jamaah/catatan/addData' />
        </div>
    </div>
  )
}

export default Header
