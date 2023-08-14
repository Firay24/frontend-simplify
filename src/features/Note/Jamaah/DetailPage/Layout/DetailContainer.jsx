import React from 'react'
import EditButton from '../../../../../components/Button/ButtonOnLink'
import NoteContainer from '../../../../../components/Container/Note'

function DetailContainer({ infoNote, id, idNote }) {
  return (
    <div className='mt-5'>
      <NoteContainer {...infoNote} />
      <div className='flex justify-end mt-8 mb-5'>
        <EditButton text='Edit' styleButton='w-1/6' path={`/jamaah/catatan/editData/${id}/${idNote}`} />
      </div>
    </div>
  )
}

export default DetailContainer
