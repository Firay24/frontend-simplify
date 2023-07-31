import React from 'react'
import { BsSearch } from "react-icons/bs";

function SearchField() {
  return (
    <div className='bg-white mt-5 p-6 drop-shadow-sm rounded'>
        <p className='text-sm text-basic-blue mb-3'>Data Search Fields</p>
        <div className='flex flex-col gap-y-3'>
        <div className='grid grid-cols-3 gap-5 items-center'>
                    <div className='relative'>
                        <input type="date" className='w-full rounded px-4 py-2 text-xs outline-none focus:border-blue-500 border-[1px] border-gray-400' />
                    </div>
                    <div className="relative text-xs">
                        <input type="text" placeholder='cari' className='w-full rounded px-4 py-2 text-xs outline-none focus:border-blue-500 border-[1px] border-gray-400' />
                        <div className="absolute right-0 top-0 mt-3 mr-4">
                            <BsSearch />
                        </div>
                    </div>
                    <div className='relative'>
                        <button className='w-full py-[5px] text-basic-grey bg-gray-200 text-xs rounded hover:bg-gray-300 border-[1.5px] border-neutral-300 hover:border-neutral-400'>
                            Cari
                        </button>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default SearchField
