import React from 'react'
import RowItem from './RowItem'

function TableList({ notes, idFlock }) {
    return (
        <div class="relative overflow-x-auto mt-5 drop-shadow-sm">
            <table class="w-full text-xs text-left text-gray-500">
                <thead class="bg-[#F2F4F8] text-gray-700 uppercase">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Judul catatan
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Tanggal
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Author
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Terakhir di update
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Status
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        notes && notes.notesInfo && notes.notesInfo.map((note) =>(
                            <RowItem
                            idFlock={idFlock}
                            key={note._id}
                            {...note}
                            id={note._id}
                            />
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default TableList
