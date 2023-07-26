import React from 'react'
import ParseDateFunc from '../../../utils/parseDateFunc'

function RowItemClass({ nameClass, time, location }) {
  return (
    <tr class="bg-white border-b">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
            {nameClass}
        </th>
        <td class="px-6 py-4">
            {ParseDateFunc(time)}
        </td>
        <td class="px-6 py-4">
            {location}
        </td>
    </tr>
  )
}

export default RowItemClass
