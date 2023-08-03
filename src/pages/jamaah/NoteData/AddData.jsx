import React, { useEffect, useState } from 'react'
import Header from '../../../components/pages/jamaah/NoteData/AddData/Header'
import InputContainer from '../../../components/pages/jamaah/NoteData/AddData/InputContainer'
import { getNoteFlock, getFlock, updateNoteFlock, addNoteFlock } from '../../../utils/apiData'
import { useParams } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddData() {
    const { id } = useParams()
    const [note, setNote] = useState({ error: false, data: [] })
    const [flock, setFlock] = useState({ error: false, data: [] })

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
    }, [id])
    const detailNote = note && note.data && note.data.note
    
    useEffect(() => {
        if (!detailNote) {
            const fetchData = async (id) => {
                try {
                    const result = await getFlock(id)
                    setFlock(result)
                } catch (error) {
                    setFlock({ error: true, data: null})
                }
            }
            fetchData(id)
        }
    }, [detailNote, id])
    const detailFlock = flock && flock.data && flock.data.flock

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

    const handleAddNote = async (value) => {
        try {
            const response = await addNoteFlock(value)
            notifySuccessEditData()
            console.log('Data berhasil diperbarui', response)
        } catch (error) {
            notifyErrordEditData()
            console.log('Data gagal diperbarui')
        }
    }

    const notifySuccessEditData = () => {
        let message = 'Data berhasil ditambahkan';
    
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
        let message = 'Data gagal ditambahkan';
    
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
                        addNote={detailNote ? handleUpdateNote : handleAddNote} 
                        prevNotes={detailNote ? detailNote && detailNote : detailFlock && detailFlock} />
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

export default AddData
