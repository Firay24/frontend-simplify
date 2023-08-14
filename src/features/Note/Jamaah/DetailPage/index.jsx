import React, { useEffect, useState } from 'react'
import Header from './Layout/Header'
import DetailContainer from './Layout/DetailContainer'
import { useParams } from 'react-router-dom'
import { getNoteFlock } from '../../../../utils/apiData'

function DetailNotePage() {
    const { id } = useParams()
    const { idNote } = useParams()
    const [note, setNote] = useState({ error: false, data: [] })
    const [infoNote, setInfoNote] = useState({ error: false, data: [] })

    useEffect(() => {
        const fetchData = async (id) => {
            try {
                const result = await getNoteFlock(id)
                setNote(result)
            } catch (error) {
                setNote({ error: true, data: [] })
            }
        }
        fetchData(id)
    })
    const detailNote = note && note.data && note.data.note

    useEffect(() => {
        const detailInfoNote = detailNote && detailNote.details.find((noteItem) => noteItem._id === idNote)
        if (detailInfoNote) {
            setInfoNote(detailInfoNote)
        }
    }, [idNote, detailNote ])

    return (
        <div className='mt-4 mr-10 mb-6'>
            <div>
                <Header />
            </div>
            <div>
                <DetailContainer infoNote={infoNote} id={id} idNote={idNote} />
            </div>
        </div>
    )
}

export default DetailNotePage
