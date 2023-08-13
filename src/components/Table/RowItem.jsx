import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { RxDotFilled } from "react-icons/rx";
import ParseDateFunc from '../../utils/parseDateFunc';

function RowItem({rows, data, pathDetail, pathEdit, pathNote, regency, isClasses = false, isSuluk = false}) {
    const [scopeColumn, ...regularColumns] = rows

    return (
        <tr className="bg-white border-b">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                {pathDetail ? (<Link to={pathDetail}>{data[scopeColumn]}</Link>) : data[scopeColumn]}
            </th>
            {
                regularColumns.map((column, index) => (
                    column === 'time' ? 
                    <td key={index} className="px-6 py-4">
                        {ParseDateFunc(data[column])}
                    </td> : 
                    <td key={index} className="px-6 py-4">
                        {data[column]}
                    </td>
                ))
            }
            {
                regency ? (
                    <td className="px-6 py-4">
                        {regency}
                    </td>
                ) : null
            }
            {
                !isClasses && !isSuluk ? (
                    <td className="px-6 py-3 flex gap-x-2">
                        <div className='bg-yellow-100 hover:bg-yellow-200 rounded-full py-[2px] pr-2 pl-[2px] flex items-center'>
                            <RxDotFilled className='text-base text-yellow-500' />
                            <button className='text-gray-900'>
                                <Link to={pathEdit}>Edit</Link>
                            </button>
                        </div>
                        <div className='bg-green-100 hover:bg-green-200 rounded-full py-[2px] pr-2 pl-[2px] flex items-center'>
                            <RxDotFilled className='text-base text-green-500' />
                            <button className='text-gray-900'>
                                <Link to={pathNote}>Catatan</Link>
                            </button>
                        </div>
                    </td>
                ) : null
            }
        </tr>
    )
}

RowItem.propTypes = {
    columns: PropTypes.array,
    id: PropTypes.string,
    regency: PropTypes.string,
    idNote: PropTypes.string,
    idFlock: PropTypes.string
}

export default RowItem
