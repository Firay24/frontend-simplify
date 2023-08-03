import React from 'react'
import RowItemClass from './RowItemClass'

function TableListClass({ classes }) {
  return (
    <div class="relative overflow-x-auto mt-5 drop-shadow-sm">
        <table class="w-full text-xs text-left text-gray-500">
            <thead class="bg-[#F2F4F8] text-gray-700 uppercase">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        Nama kelas
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Pelaksanaan
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Lokasi
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    classes && classes.classInfo.map((itemClass, index) =>(
                        <RowItemClass
                        key={index}
                        {...itemClass}
                         />
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default TableListClass
