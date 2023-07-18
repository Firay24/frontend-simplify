import React from 'react'

function SearchField() {
    const kaji = ['Izmujat', 'Lataif', 'Wukuf', 'Muraqabah', 'D1', 'Petoto']

    return (
        <div className='bg-white mt-5 p-6 drop-shadow-sm rounded'>
            <p className='text-sm text-basic-blue mb-3'>Data Search Fields</p>
            <div className='flex flex-col gap-y-3'>
                <div className='grid grid-cols-3 gap-5'>
                    <div>
                        <select name="" id="" className='w-full rounded px-4 py-[5px] text-xs outline-neutral-300 focus:border-blue-500 border-[1.5px]'>
                            <option selected>Kaji</option>
                            {
                                kaji.map((itemKaji, index) => (
                                    <option key={index} value={itemKaji}>{itemKaji}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div>
                        <select name="" id="" className='w-full rounded px-4 py-[5px] text-xs outline-neutral-300 focus:border-blue-500 border-[1.5px]'>
                            <option selected>Kabupaten</option>
                            {
                                kaji.map((itemKaji, index) => (
                                    <option key={index} value={itemKaji}>{itemKaji}</option>
                                ))
                            }
                        </select>
                    </div>
                </div>
                <div className='grid grid-cols-3 gap-5 items-center'>
                    <div>
                        <select name="" id="" className='w-full rounded px-4 py-[5px] text-xs outline-neutral-300 focus:border-blue-500 border-[1.5px]'>
                            <option selected>Fungsional</option>
                            {
                                kaji.map((itemKaji, index) => (
                                    <option key={index} value={itemKaji}>{itemKaji}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className='flex bg-white rounded gap-x-2 px-4 py-[5px] text-xs outline-neutral-300 border-[1.5px]'>
                        <select name="" id="" className='border-r-[1px] border-gray-300'>
                            <option selected>Pilih</option>
                            <option value="nama">Nama</option>
                            <option value="nama">MZ</option>
                        </select>
                        <input type="text" className='outline-none' placeholder='cari' />
                    </div>
                    <div>
                        <button className='w-full py-[5px] text-basic-grey bg-gray-200 text-xs rounded hover:bg-gray-300 border-[1.5px] border-neutral-300'>
                            Cari
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchField
