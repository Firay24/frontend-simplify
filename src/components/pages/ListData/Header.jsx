import React from 'react'
import AddButton from '../../shared/Button/addButton'

function Header() {
  return (
    <div className='flex items-center justify-between'>
        <div>
            <h1 className='font-semibold text-xl text-basic-grey'>Data Jamaah</h1>
            <p className='text-grey-light text-xs font-light'>BKMZ Jawa Timur</p>
        </div>
        <div>
            <AddButton />
        </div>
    </div>
  )
}

export default Header
