import React from 'react'
import ParseDateFunc from '../../../utils/parseDateFunc'

function RowItemSuluk({ sulukTo, time, location, kaji }) {
  return (
    <tr class="bg-white border-b">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
            {sulukTo}
        </th>
        <td class="px-6 py-4">
            {ParseDateFunc(time)}
        </td>
        <td class="px-6 py-4">
            {location}
        </td>
        <td class="px-6 py-4">
            {kaji}
        </td>
    </tr>
  )
}

export default RowItemSuluk
