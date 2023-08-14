import React from 'react'
import HeaderItem from './HeaderItem'
import RowItem from './RowItem'
import PropTypes from 'prop-types'


function TableSection({ columnsName, rowsName, data, pathDetail, pathEdit, pathNote, getIdFromNotesFlock, isClasses = false, isSuluk = false, isNotes = false, idFlock }) {
    return (
        <div className="relative overflow-x-auto mt-5 drop-shadow-sm">
            <table className="w-full text-xs text-left text-gray-500">
                <HeaderItem columns={columnsName} />
                <tbody>
                    {   
                        isClasses || isSuluk || isNotes ? 
                        data && data.details.map((item) =>(
                            <RowItem
                            key={item._id}
                            data={item}
                            rows={rowsName}
                            isClasses={isClasses}
                            isSuluk={isSuluk}
                            pathDetail={`${pathDetail}${idFlock}/${item._id}`}
                            pathEdit={`${pathEdit}${idFlock}/${item._id}`}
                            />
                        ))
                         : 
                        data && data.map((item) =>(
                            <RowItem
                            key={item._id}
                            data={item}
                            rows={rowsName}
                            pathDetail={`${pathDetail}${item._id}`}
                            pathEdit={`${pathEdit}${item._id}`}
                            pathNote={getIdFromNotesFlock(item) ? `${pathNote}${getIdFromNotesFlock(item)}` : `${pathNote}${item._id}`}
                            regency={item.address.regency}
                            />
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

TableSection.propTypes = {
    columnsName: PropTypes.arrayOf(PropTypes.string),
    rowsName: PropTypes.arrayOf(PropTypes.string),
    data:PropTypes.object,
    pathDetail: PropTypes.string,
    pathEdit: PropTypes.string,
    pathNote: PropTypes.string,
    getIdFromNotesFlock: PropTypes.func
}

export default TableSection
