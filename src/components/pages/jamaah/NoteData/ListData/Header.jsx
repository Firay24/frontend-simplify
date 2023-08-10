import React from 'react'
import Title from '../../../../Header/HeaderTitle'
import AddButton from '../../../../Button/ButtonOnLink'

function Header({ id }) {
  return (
    <div className='flex items-center justify-between'>
        <Title title='Data Catatan' />
        <div>
            <AddButton text='Tambah catatan' addButton={true} path={`/jamaah/catatan/addData/${id}`} />
        </div>
    </div>
  )
}

export default Header
