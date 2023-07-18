import React, { useState } from 'react'
import SubmitButton from '../../shared/Button/submitButton'

function ConfirmAddData() {
    const [visible, setVisible] = useState(false)

    return (
        <div className='grid grid-cols-2 bg-white mt-5 p-6 drop-shadow-sm rounded text-xs text-basic-grey'>
            <div>
                <p className='text-basic-blue text-sm font-medium mb-3'>Konfirmasi</p>
                <p>Apakah Anda adalah petugas fungsional?</p>
                <div className='flex gap-x-5'>
                    <div className='flex items-center mt-5'>
                        <input id="default-radio-1" type="radio" value="" name="default-radio" onClick={ () => setVisible(true) }  class="w-3 h-3 text-basic-blue outline-none focus:ring-0" />
                        <label htmlFor="default-radio-1" class="ml-2">Ya, Saya petugas fungsional</label>
                    </div>
                    <div className='flex items-center mt-5'>
                        <input id="default-radio-1" type="radio" value="" name="default-radio" onClick={ () => setVisible(false) } class="w-3 h-3 text-basic-blue outline-none focus:ring-0" />
                        <label htmlFor="default-radio-1" class="ml-2">Tidak, Saya bukan fungsional</label>
                    </div>
                </div>
            </div>
            {
                visible &&
                (<div>
                    <div className='grid grid-cols-2 gap-x-5 text-basic-grey'>
                        <div className='flex flex-col'>
                            <label htmlFor="nik">NIK</label>
                            <input type="text" id='nik' className='rounded text-xs border-gray-400 mt-2' />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="fathersName">Nama bapak kandung</label>
                            <input type="text" id='fathersName' className='rounded text-xs border-gray-400 mt-2' />
                        </div>
                    </div>
                    <div className='flex justify-end mt-3'>
                        <SubmitButton />
                    </div>
                </div>)
            }
        </div>
    )
}

export default ConfirmAddData
