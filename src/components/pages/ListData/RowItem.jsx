import React from 'react'
import { RxDotFilled } from "react-icons/rx";

function RowItem({ name, mzOrigin, kaji, regency }) {
  return (
    <tr class="bg-white border-b">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
            {name}
        </th>
        <td class="px-6 py-4">
            {mzOrigin}
        </td>
        <td class="px-6 py-4">
            {kaji}
        </td>
        <td class="px-6 py-4">
            {regency}
        </td>
        <td class="px-6 py-3 flex gap-x-2">
            <div className='bg-yellow-100 hover:bg-yellow-200 rounded-full py-[2px] pr-2 pl-[2px] flex items-center'>
                <RxDotFilled className='text-base text-yellow-500' />
                <button className='text-gray-900'>Edit</button>
            </div>
            <div className='bg-green-100 hover:bg-green-200 rounded-full py-[2px] pr-2 pl-[2px] flex items-center'>
                <RxDotFilled className='text-base text-green-500' />
                <button className='text-gray-900'>Catatan</button>
            </div>
        </td>
    </tr>
  )
}

export default RowItem
