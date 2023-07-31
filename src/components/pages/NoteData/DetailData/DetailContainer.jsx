import React from 'react'
import parseDateFunc from '../../../../utils/parseDateFunc'
import { RxDotFilled } from "react-icons/rx";
import EditButton from '../../../shared/Button/editButton'

function DetailContainer({ name, details, updatedAt, status, author, id, idNote }) {
  return (
    <div className='mt-5'>
      <div>
        <div className='flex justify-end text-xs mb-3 gap-x-2'>
          <p className='text-basic-grey'>Author:</p>
          <p className='font-medium text-basic-blue'>{author}</p>
        </div>
        <div className='bg-white p-6 drop-shadow-sm rounded'>
          <div className='flex justify-between'>
              <div>
                  <h2 className='text-base font-semibold text-basic-blue'>{name}</h2>
                  <p className='text-xs text-grey-light' >Terakhir update, {parseDateFunc(updatedAt)}</p>
              </div>
              <div>
                <div className={status === 'Belum selesai' ? 'bg-red-100 hover:bg-red-200 rounded-full py-[2px] pr-2 pl-[2px] flex items-center' : 'bg-green-100 hover:bg-green-200 rounded-full py-[2px] pr-2 pl-[2px] flex items-center'}>
                    <RxDotFilled className={status === 'Belum selesai' ? 'text-base text-red-500' : 'text-base text-green-500'} />
                    <p className='text-gray-900 cursor-default text-xs'>{status}</p>
                </div>
              </div>
          </div>
          <div className='mt-3'>
              <p className='text-sm text-basic-grey font-normal' >{details}</p>
          </div>
        </div>
      </div>
      <div className='flex justify-end mt-8 mb-5'>
        <EditButton path={`/jamaah/catatan/editData/${id}/${idNote}`} />
      </div>
    </div>
  )
}

export default DetailContainer
