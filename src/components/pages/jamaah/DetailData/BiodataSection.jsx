import React from 'react'
import ParseDateFunc from '../../../../utils/parseDateFunc'

function BiodataSection({ name, nik, fathersName, gender, placesBirth, datesBirth, job, numberPhone }) {
  return (
    <div>
        <h3 className='text-sm text-grey-light font-normal'>Identitas pribadi</h3>
        <div className='text-xs text-grey-light mt-3 mb-5'>
            <div className='flex flex-col gap-y-1'>
                <p>Nama</p>
                <p className='text-basic-grey text-sm font-medium'>{name}</p>
            </div>
            <div className='flex flex-col gap-y-1 mt-3'>
                <p>NIK</p>
                <p className='text-basic-grey text-sm font-medium'>{nik}</p>
            </div>
            <div className='flex flex-col gap-y-1 mt-3'>
                <p>Nama bapak kandung</p>
                <p className='text-basic-grey text-sm font-medium'>{fathersName}</p>
            </div>
            <div className='flex flex-col gap-y-1 mt-3'>
                <p>Jenis kelamin</p>
                <p className='text-basic-grey text-sm font-medium'>{gender}</p>
            </div>
            <div className='flex flex-col gap-y-1 mt-3'>
                <p>Tempat tanggal lahir</p>
                <p className='text-basic-grey text-sm font-medium'>{`${placesBirth}, ${ParseDateFunc(datesBirth) }`}</p>
            </div>
            <div className='flex flex-col gap-y-1 mt-3'>
                <p>Pekerjaan</p>
                <p className='text-basic-grey text-sm font-medium'>{job}</p>
            </div>
            <div className='flex flex-col gap-y-1 mt-3'>
                <p>Nomor HP</p>
                <p className='text-basic-grey text-sm font-medium'>{numberPhone}</p>
            </div>
        </div>
    </div>
  )
}

export default BiodataSection
