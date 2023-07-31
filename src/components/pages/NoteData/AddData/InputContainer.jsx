import React, { useEffect, useState } from 'react'
import SubmitButton from '../../../shared/Button/submitButton'

function InputContainer({ prevNotes, addNote }) {
    const [note, setNote] = useState({
        _id: '',
        name: '',
        nik: '',
        fathersName: '',
        notesInfo: {
            name: '',
            status: 'Belum selesai',
            details: ''
        }
    })

    useEffect(() => {
        if (prevNotes !== undefined && prevNotes !== null) {
            setNote({
                _id: prevNotes._id,
                name: prevNotes.name,
                nik: prevNotes.nik,
                fathersName: prevNotes.fathersName,
                notesInfo: {
                    name: '',
                    status: 'Belum selesai',
                    details: ''
                }
            })
        }
    }, [prevNotes])

    const handleInputChange = (event) => {
        const { name, value } = event.target

        setNote((prevState) => ({
            ...prevState,
            notesInfo: {
                ...prevState.notesInfo,
                [name] : value
            }
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        addNote(note)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='text-xs bg-white p-6 rounded drop-shadow-sm h-full mt-5 flex flex-col gap-y-5'>
                    <p className='text-sm font-medium text-basic-blue mb-2'>Catatan</p>
                    <div className='grid grid-cols-2 gap-x-14'>
                        <div className='grid grid-cols-2 items-center'>
                            <label htmlFor="name">Judul</label>
                            <input 
                                name='name' 
                                id='name' 
                                type="text" 
                                value={note.notesInfo.name}
                                onChange={handleInputChange}
                                required
                                className='rounded text-xs border-gray-400' />
                        </div>
                        <div className='grid grid-cols-2 items-center'>
                            <label htmlFor="status">Status</label>
                            <select 
                                name="status" 
                                id="status" 
                                onChange={handleInputChange}
                                className='rounded text-xs border-gray-400'>
                                    <option value="Belum selesai">Belum selesai</option>
                                    <option value="Sudah selesai">Sudah selesai</option>
                            </select>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="details">Detail catatan</label>
                        <textarea 
                            name="details" 
                            id="details"
                            value={note.notesInfo.details}
                            onChange={handleInputChange}
                            cols="30" 
                            rows="5"
                            required 
                            className='mt-2 resize-none rounded text-xs' />
                    </div>
                </div>
                <div className='flex my-8 justify-end'>
                    <SubmitButton bgColor='bg-basic-blue hover:bg-blue-dark text-white text-sm' />
                </div>
            </form>
        </div>
    )
}

export default InputContainer
