import React, { useState } from 'react'
import PropTypes from 'prop-types'

function FunctionalContainer({ addFunctional, personalData }) {
    const [functional, setFunctional] = useState({
        petoto: {
            status: '',
            time: '',
            timeLifted: '',
            location: '',
            notes: ''
        },
        pentawajuh: {
            status: '',
            time: '',
            timeLifted: '',
            location: '',
            notes: ''
        },
        pentarekat: {
            status: '',
            time: '',
            timeLifted: '',
            location: '',
            notes: ''
        },
        pz: {
            status: '',
            time: '',
            timeLifted: '',
            location: '',
            notes: ''
        },
    })

    const handleInputChange = (event) => {
        const { name, value } = event.target
        const [section, property] = name.split('.')

        setFunctional((prevFunctional) => ({
            ...prevFunctional,
            [section]: {
                ...prevFunctional[section],
                [property]: value
            }

        }))
    }

    const handleFormSubmit = (event) => {
        event.preventDefault()
        const dataToSubmit = {
            ...functional,
            ...personalData
        }

        addFunctional(dataToSubmit)

        setFunctional({
            petoto: {
                status: '',
                time: '',
                timeLifted: '',
                location: '',
                notes: ''
            },
            pentawajuh: {
                status: '',
                time: '',
                timeLifted: '',
                location: '',
                notes: ''
            },
            pentarekat: {
                status: '',
                time: '',
                timeLifted: '',
                location: '',
                notes: ''
            },
            pz: {
                status: '',
                time: '',
                timeLifted: '',
                location: '',
                notes: ''
            },
        })

    }

    return (
        <div>
            <h1 className='font-semibold text-xl text-basic-grey'>Tambah Data</h1>
            <p className='text-grey-light text-xs font-light'>BKMZ Jawa Timur</p>
            <form action="" onSubmit={handleFormSubmit}>
                <div className='grid grid-cols-2 gap-5 mt-5'>
                    <div className='text-xs bg-white p-6 rounded drop-shadow-sm h-full text-basic-grey'>
                        <p className='text-sm font-medium text-basic-blue mb-5'>Petoto</p>
                        <div className='flex flex-col gap-y-2'>
                            <div className='grid grid-cols-2 items-center'>
                                <label htmlFor="statusPtt">Status</label>
                                <select
                                    name="status"
                                    id="statusPtt"
                                    value={functional.petoto.status}
                                    onChange={handleInputChange}
                                    className='rounded text-xs border-gray-400'>
                                    <option value="aktif">Aktif</option>
                                    <option value="non-aktif">Non-Aktif</option>
                                </select>
                            </div>
                            <div className='grid grid-cols-2 items-center'>
                                <label htmlFor="timePtt">Waktu</label>
                                <input
                                    type="date"
                                    id='timePtt'
                                    name='time'
                                    value={functional.petoto.time}
                                    onChange={handleInputChange}
                                    className='rounded text-xs border-gray-400' />
                            </div>
                            <div className='grid grid-cols-2 items-center'>
                                <label htmlFor="timeLiftedPtt">Waktu diangkat</label>
                                <input
                                    type="date"
                                    id='timeLiftedPtt'
                                    name='timeLifted'
                                    value={functional.petoto.timeLifted}
                                    onChange={handleInputChange}
                                    className='rounded text-xs border-gray-400' />
                            </div>
                            <div className='grid grid-cols-2 items-center'>
                                <label htmlFor="locationPtt">Tempat</label>
                                <input 
                                    type="text"
                                    id='locationPtt'
                                    name='location'
                                    value={functional.petoto.location}
                                    onChange={handleInputChange}
                                    placeholder='Mayang'
                                    className='rounded text-xs border-gray-400' />
                            </div>
                            <div className='grid grid-cols-2 items-center'>
                                <label htmlFor="notesPtt">Catatan</label>
                                <input
                                    type="text"
                                    id='notesPtt'
                                    name='notes'
                                    value={functional.petoto.notes}
                                    onChange={handleInputChange}
                                    placeholder='baik dari segi ...'
                                    className='rounded text-xs border-gray-400' />
                            </div>
                        </div>
                    </div>
                    <div className='text-xs bg-white p-6 rounded drop-shadow-sm h-full text-basic-grey'>
                        <p className='text-sm font-medium text-basic-blue mb-5'>Pentawajjuh</p>
                        <div className='flex flex-col gap-y-2'>
                            <div className='grid grid-cols-2 items-center'>
                                <label htmlFor="statusPtw">Status</label>
                                <select
                                    name="status"
                                    id="statusPtw"
                                    value={functional.pentawajuh.status}
                                    onChange={handleInputChange}
                                    className='rounded text-xs border-gray-400'>
                                    <option value="aktif">Aktif</option>
                                    <option value="non-aktif">Non-aktif</option>
                                </select>
                            </div>
                            <div className='grid grid-cols-2 items-center'>
                                <label htmlFor="timePtw">Waktu</label>
                                <input
                                    type="date"
                                    id='timePtw'
                                    name='time'
                                    value={functional.pentawajuh.time}
                                    onChange={handleInputChange}
                                    className='rounded text-xs border-gray-400' />
                            </div>
                            <div className='grid grid-cols-2 items-center'>
                                <label htmlFor="timeLiftedPtw">Waktu diangkat</label>
                                <input
                                    type="date"
                                    id='timeLiftedPtw'
                                    name='timeLifted'
                                    value={functional.pentawajuh.timeLifted}
                                    onChange={handleInputChange}
                                    className='rounded text-xs border-gray-400' />
                            </div>
                            <div className='grid grid-cols-2 items-center'>
                                <label htmlFor="locationPtw">Tempat</label>
                                <input
                                    type="text"
                                    id='locationPtw'
                                    name='location'
                                    value={functional.pentawajuh.location}
                                    onChange={handleInputChange}
                                    placeholder='Mayang'
                                    className='rounded text-xs border-gray-400' />
                            </div>
                            <div className='grid grid-cols-2 items-center'>
                                <label htmlFor="notesPtw">Catatan</label>
                                <input
                                    type="text"
                                    id='notesPtw'
                                    name='notes'
                                    value={functional.pentawajuh.notes}
                                    onChange={handleInputChange}
                                    placeholder='baik dari segi ...'
                                    className='rounded text-xs border-gray-400' />
                            </div>
                        </div>
                    </div>
                    <div className='text-xs bg-white p-6 rounded drop-shadow-sm h-full text-basic-grey'>
                        <p className='text-sm font-medium text-basic-blue mb-5'>Pentareqat</p>
                        <div className='flex flex-col gap-y-2'>
                            <div className='grid grid-cols-2 items-center'>
                                <label htmlFor="statusPtq">Status</label>
                                <select
                                    name="status"
                                    id="statusPtq"
                                    value={functional.pentarekat.status}
                                    onChange={handleInputChange}
                                    className='rounded text-xs border-gray-400'>
                                    <option value="aktif">Aktif</option>
                                    <option value="non-aktif">Non-aktif</option>
                                </select>
                            </div>
                            <div className='grid grid-cols-2 items-center'>
                                <label htmlFor="timePtq">Waktu</label>
                                <input
                                    type="date"
                                    id='timePtq'
                                    name='time'
                                    value={functional.pentarekat.time}
                                    onChange={handleInputChange}
                                    className='rounded text-xs border-gray-400' />
                            </div>
                            <div className='grid grid-cols-2 items-center'>
                                <label htmlFor="timeLiftedPtq">Waktu diangkat</label>
                                <input
                                    type="date"
                                    id='timeLiftedPtq'
                                    name='timeLifted'
                                    value={functional.pentarekat.timeLifted}
                                    onChange={handleInputChange}
                                    className='rounded text-xs border-gray-400' />
                            </div>
                            <div className='grid grid-cols-2 items-center'>
                                <label htmlFor="locationPtq">Tempat</label>
                                <input
                                    type="text"
                                    id='locationPtq'
                                    name='location'
                                    value={functional.pentarekat.location}
                                    onChange={handleInputChange}
                                    placeholder='Mayang'
                                    className='rounded text-xs border-gray-400' />
                            </div>
                            <div className='grid grid-cols-2 items-center'>
                                <label htmlFor="notesPtq">Catatan</label>
                                <input
                                    type="text"
                                    id='notesPtq'
                                    name='notes'
                                    value={functional.pentarekat.notes}
                                    onChange={handleInputChange}
                                    placeholder='Baik dari segi ...'
                                    className='rounded text-xs border-gray-400' />
                            </div>
                        </div>
                    </div>
                    <div className='text-xs bg-white p-6 rounded drop-shadow-sm h-full text-basic-grey'>
                        <p className='text-sm font-medium text-basic-blue mb-5'>PZ</p>
                        <div className='flex flex-col gap-y-2'>
                            <div className='grid grid-cols-2 items-center'>
                                <label htmlFor="statusPZ">Status</label>
                                <select
                                    name="status"
                                    id="statusPZ"
                                    value={functional.pz.status}
                                    onChange={handleInputChange}
                                    className='rounded text-xs border-gray-400'>
                                    <option value="aktif">Aktif</option>
                                    <option value="non-aktif">Non-aktif</option>
                                </select>
                            </div>
                            <div className='grid grid-cols-2 items-center'>
                                <label htmlFor="timePZ">Waktu</label>
                                <input
                                    type="date"
                                    id='timePZ'
                                    name='time'
                                    value={functional.pz.time}
                                    onChange={handleInputChange}
                                    className='rounded text-xs border-gray-400' />
                            </div>
                            <div className='grid grid-cols-2 items-center'>
                                <label htmlFor="timeLiftedPZ">Waktu diangkat</label>
                                <input
                                    type="date"
                                    id='timeLiftedPZ'
                                    name='timeLifted'
                                    value={functional.pz.timeLifted}
                                    onChange={handleInputChange}
                                    className='rounded text-xs border-gray-400' />
                            </div>
                            <div className='grid grid-cols-2 items-center'>
                                <label htmlFor="locationPZ">Tempat</label>
                                <input
                                    type="text"
                                    id='locationPZ'
                                    name='location'
                                    value={functional.pz.location}
                                    onChange={handleInputChange}
                                    placeholder='Mayang'
                                    className='rounded text-xs border-gray-400' />
                            </div>
                            <div className='grid grid-cols-2 items-center'>
                                <label htmlFor="notesPZ">Catatan</label>
                                <input
                                    type="text"
                                    id='notesPZ'
                                    name='notes'
                                    value={functional.pz.notes}
                                    onChange={handleInputChange}
                                    placeholder='Baik dari segi ...'
                                    className='rounded text-xs border-gray-400' />
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

FunctionalContainer.propTypes = {
    addFunctional: PropTypes.func.isRequired,
    personalData: PropTypes.object.isRequired
}

export default FunctionalContainer
