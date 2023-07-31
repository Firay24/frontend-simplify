import React from 'react'
import RowItem from './RowItem'

function TableList({ flocks, notesFlock }) {
    const getIdFromNotesFlock = (flock) => {
        const detailNote = flock && notesFlock && notesFlock.find(note => flock.nik === note.nik && flock.fathersName === note.fathersName);
        return detailNote ? detailNote._id : null;
    }

    return (
        <div class="relative overflow-x-auto mt-5 drop-shadow-sm">
            <table class="w-full text-xs text-left text-gray-500">
                <thead class="bg-[#F2F4F8] text-gray-700 uppercase">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Nama
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Asal MZ
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Kaji
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Kabupaten
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        flocks.map((flock) =>(
                            <RowItem
                            key={flock._id}
                            {...flock}
                            id={flock._id}
                            regency={flock.address.regency}
                            idNote={getIdFromNotesFlock(flock)} />
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default TableList
