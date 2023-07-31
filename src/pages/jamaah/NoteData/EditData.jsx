import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../../components/pages/NoteData/EditData/Header'
import InputContainer from '../../../components/pages/NoteData/EditData/InputContainer'
import { getNoteFlock, updateNoteFlock } from '../../../utils/apiData'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function EditData() {
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
    },[id])
    const detailNote = note && note.data && note.data.note

    useEffect(() => {
        const detailInfoNote = detailNote && detailNote.notesInfo.find((noteItem) => noteItem._id === idNote)
        if (detailInfoNote) {
            setInfoNote(detailInfoNote)
        }
    }, [idNote, detailNote ])

    const handleUpdateNote = async (value) => {
        try {
            const response = await updateNoteFlock(value)
            notifySuccessEditData()
            console.log('Data berhasil diperbarui', response)
        } catch (error) {
            notifyErrordEditData()
            console.log('Data gagal diperbarui')
        }
    }

    const notifySuccessEditData = () => {
        let message = 'Data berhasil diperbarui';
    
        toast.success(message, {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light'
        });
    };

    const notifyErrordEditData = () => {
        let message = 'Data gagal diperbarui';
    
        toast.error(message, {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light'
        });
    };

    return (
        <>
            <div className='mt-4 mr-10 mb-6'>
                <div>
                    <Header />
                </div>
                <div>
                    <InputContainer 
                        prevNote={infoNote && infoNote} 
                        prevNotes={detailNote && detailNote}
                        updateNote={handleUpdateNote} />
                </div>
            </div>
            <ToastContainer 
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light" />
        </>
    )
}

export default EditData
