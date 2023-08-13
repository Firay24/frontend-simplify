import React from 'react'
import AddButton from '../../../../components/Button/ButtonOnLink'
import Title from '../../../../components/Header/HeaderTitle'

function Header() {
  return (
    <div className='flex items-center justify-between'>
        <Title title='Data Jamaah' />
        <div>
            <AddButton text='Data jamaah' path='/jamaah/addData' addButton={true} />
        </div>
    </div>
  )
}

export default Header