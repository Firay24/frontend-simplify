import React from 'react'

function HeaderTitle({ title }) {
  return (
    <div>
        <h1 className='font-semibold text-xl text-basic-grey'>{title}</h1>
        <p className='text-grey-light text-xs font-light'>BKMZ Jawa Timur</p>
    </div>
  )
}

export default HeaderTitle
