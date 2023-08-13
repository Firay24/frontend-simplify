import React from 'react'
import BiodataSection from '../../../../components/Container/Biodata'
import AddressSection from '../../../../components/Container/Address'
import InformationMZ from '../../../../components/Container/InformationMZ'
import EditButton from '../../../../components/Button/ButtonOnLink'

function DetailsContainer({ id, flock, functional }) {
  return (
    <div>
        <div className='bg-white mt-5 p-6 drop-shadow-sm rounded'>
            <div className='mb-3'>
                <h2 className='text-base text-basic-blue font-medium'>Identitas pribadi</h2>
                <div className='grid grid-cols-2 mt-5'>
                    <BiodataSection flock={flock && flock} />
                    <AddressSection flock={flock && flock}/>
                </div>
            </div>
            <div>
                <InformationMZ flock={flock && flock} />
            </div>
        </div>
        <div className='flex justify-end mt-8 mb-5'>
            <EditButton text='Edit' styleButton='w-1/6' path={`/jamaah/editData/${id}`} />
        </div>
    </div>
  )
}

export default DetailsContainer
