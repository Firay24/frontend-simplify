import React from 'react'
import ParseDateFunc from '../../../utils/parseDateFunc'

function BiodataSection({ flock }) {
  return (
    <div>
        <h3 className='text-sm text-grey-light font-normal'>Identitas pribadi</h3>
        <div className='text-xs text-grey-light mt-3 mb-5'>
            <div className='flex flex-col gap-y-1'>
                <p>Nama</p>
                <p className='text-basic-grey text-sm font-medium'>{flock && flock.name}</p>
            </div>
            <div className='flex flex-col gap-y-1 mt-3'>
                <p>NIK</p>
                <p className='text-basic-grey text-sm font-medium'>{flock && flock.nik}</p>
            </div>
            <div className='flex flex-col gap-y-1 mt-3'>
                <p>Nama bapak kandung</p>
                <p className='text-basic-grey text-sm font-medium'>{flock && flock.fathersName}</p>
            </div>
            <div className='flex flex-col gap-y-1 mt-3'>
                <p>Jenis kelamin</p>
                <p className='text-basic-grey text-sm font-medium'>{flock && flock.gender}</p>
            </div>
            <div className='flex flex-col gap-y-1 mt-3'>
                <p>Tempat tanggal lahir</p>
                <p className='text-basic-grey text-sm font-medium'>{`${flock && flock.placesBirth}, ${ParseDateFunc(flock && flock.datesBirth) }`}</p>
            </div>
            <div className='flex flex-col gap-y-1 mt-3'>
                <p>Pekerjaan</p>
                <p className='text-basic-grey text-sm font-medium'>{flock && flock.job}</p>
            </div>
            <div className='flex flex-col gap-y-1 mt-3'>
                <p>Nomor HP</p>
                <p className='text-basic-grey text-sm font-medium'>{flock && flock.numberPhone}</p>
            </div>
        </div>
    </div>
  )
}

export default BiodataSection
