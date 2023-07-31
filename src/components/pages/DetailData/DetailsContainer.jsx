import React from 'react'
import BiodataSection from './BiodataSection'
import AddressSection from './AddressSection'
import InformationMZ from './InformationMZ'
import EditButton from '../../shared/Button/editButton'

function DetailsContainer({ id, flock, functional }) {
  return (
    <div>
        <div className='bg-white mt-5 p-6 drop-shadow-sm rounded'>
            <div className='mb-3'>
                <h2 className='text-base text-basic-blue font-medium'>Identitas pribadi</h2>
                <div className='grid grid-cols-2 mt-5'>
                    <BiodataSection {...flock} />
                    <AddressSection flock={flock && flock}/>
                </div>
            </div>
            <div>
                <InformationMZ />
            </div>
        </div>
        <div className='flex justify-end mt-8 mb-5'>
            <EditButton id={id} />
        </div>
    </div>
  )
}

export default DetailsContainer
