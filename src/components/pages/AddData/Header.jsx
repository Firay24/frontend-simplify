import React from 'react'
import AddFileButton from '../../shared/Button/addFileButton'

function Header() {
  return (
    <div className='flex items-center justify-between'>
      <div>
        <h1 className='font-semibold text-xl text-basic-grey'>Data Jamaah</h1>
        <p className='text-grey-light text-xs font-light'>BKMZ Jawa Timur</p>
      </div>
      <div>
        <AddFileButton />
      </div>
    </div>
  )
}

export default Header
