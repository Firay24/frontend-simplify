import React from 'react'
import RowItemSuluk from './RowItemSuluk'

function TableListSuluk({ suluks }) {
  return (
    <div class="relative overflow-x-auto mt-5 drop-shadow-sm">
        <table class="w-full text-xs text-left text-gray-500">
            <thead class="bg-[#F2F4F8] text-gray-700 uppercase">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        Suluk ke
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Pelaksanaan
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Lokasi
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Kaji
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    suluks && suluks.sulukInfo.map((suluk, index) =>(
                        <RowItemSuluk
                        key={index}
                        {...suluk}
                         />
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default TableListSuluk
