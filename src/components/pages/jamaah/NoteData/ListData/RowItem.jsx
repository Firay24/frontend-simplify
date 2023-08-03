import React from 'react'
import { RxDotFilled } from "react-icons/rx";
import { Link } from 'react-router-dom';
import parseDateFunc from '../../../../../utils/parseDateFunc'

function RowItem({ id, name, author, status, createAt, updatedAt, idFlock }) {
    return (
        <tr className="bg-white border-b">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                <Link to={`/jamaah/catatan/detailData/${idFlock}/${id}`}>{name}</Link>
            </th>
            <td className="px-6 py-4">
                {parseDateFunc(createAt)}
            </td>
            <td className="px-6 py-4">
                {author}
            </td>
            <td className="px-6 py-4">
                {parseDateFunc(updatedAt)}
            </td>
            <td className="px-6 py-3">
                <div className={status === 'Belum selesai' ? 'bg-red-100 hover:bg-red-200 rounded-full py-[2px] pr-2 pl-[2px] flex items-center w-fit' : 'bg-green-100 w-fit hover:bg-green-200 rounded-full py-[2px] pr-2 pl-[2px] flex items-center'}>
                    <RxDotFilled className={status === 'Belum selesai' ? 'text-base text-red-500' : 'text-base text-green-500'} />
                    <p className='text-gray-900 cursor-default'>{status}</p>
                </div>
            </td>
            <td className="px-6 py-3 flex gap-x-2">
                <div className='bg-yellow-100 hover:bg-yellow-200 rounded-full py-[2px] pr-2 pl-[2px] flex items-center'>
                    <RxDotFilled className='text-base text-yellow-500' />
                    <button className='text-gray-900'>
                        <Link to={`/jamaah/catatan/editData/${idFlock}/${id}`}>Edit</Link>
                    </button>
                </div>
                <div className='bg-green-100 hover:bg-green-200 rounded-full py-[2px] pr-2 pl-[2px] flex items-center'>
                    <RxDotFilled className='text-base text-green-500' />
                    <button className='text-gray-900'>
                        <Link to={`/jamaah/catatan/detailData/${idFlock}/${id}`}>Detail</Link>
                    </button>
                </div>
            </td>
        </tr>
    )
}

export default RowItem
