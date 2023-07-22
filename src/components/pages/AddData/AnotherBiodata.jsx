import React, { useState } from 'react'
import PropTypes from 'prop-types'

function AnotherBiodata({ putFlock, id }) {
    const [flock, setFlock] = useState({
        gender: '',
        job: '',
        yearEnteredTN: '',
        suluk: '',
        kaji: ''
    })

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setFlock((prevFlock) => ({
            ...prevFlock,
            [name]: value
        }))
    }

    const handleFormSubmit = (event) => {
        event.preventDefault()
        putFlock({...flock, id})

        setFlock({
            gender: '',
            job: '',
            yearEnteredTN: '',
            suluk: '',
            kaji: ''
        })
    }

    return (
        <div className='text-xs bg-white p-6 rounded drop-shadow-sm h-full text-basic-grey'>
            <p className='text-sm font-medium text-basic-blue mb-5'>Identitas Pribadi</p>
            <form action="" onSubmit={handleFormSubmit}>
                <div className='grid grid-cols-2 gap-x-14'>
                    <div className='flex flex-col gap-y-2'>
                        <div className='grid grid-cols-2 items-center'>
                            <label htmlFor="gender">Jenis Kelamin</label>
                            <select
                                name="gender"
                                id="gender"
                                value={flock.gender}
                                onChange={handleInputChange}
                                className='rounded text-xs border-gray-400'>
                                <option value="" disabled>pilih</option>
                                <option value="laki-laki">Laki-laki</option>
                                <option value="perempuan">Perempuan</option>
                            </select>
                        </div>
                        <div className='grid grid-cols-2 items-center'>
                            <label htmlFor="job">Pekerjaan</label>
                            <input
                                type="text"
                                id='job'
                                name='job'
                                value={flock.job}
                                onChange={handleInputChange}
                                placeholder='Frelancer'
                                className='rounded text-xs border-gray-400' />
                        </div>
                        <div className='grid grid-cols-2 items-center'>
                            <label htmlFor="yearEnteredTN">Tahun masuk TN</label>
                            <input
                                type="text"
                                id='yearEnteredTN'
                                name='yearEnteredTN'
                                value={flock.yearEnteredTN}
                                onChange={handleInputChange}
                                placeholder='1996'
                                className='rounded text-xs border-gray-400' />
                        </div>
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <div className='grid grid-cols-2 items-center'>
                            <label htmlFor="suluk">Suluk ke</label>
                            <input
                                type="text"
                                id='suluk'
                                name='suluk'
                                value={flock.suluk}
                                onChange={handleInputChange}
                                placeholder='2'
                                className='rounded text-xs border-gray-400' />
                        </div>
                        <div className='grid grid-cols-2 items-center'>
                            <label htmlFor="kaji">Kaji</label>
                            <input
                                type="text"
                                id='kaji'
                                name='kaji'
                                value={flock.kaji}
                                onChange={handleInputChange}
                                placeholder='Wukuf'
                                className='rounded text-xs border-gray-400' />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

AnotherBiodata.propTypes = {
    putFlock: PropTypes.func.isRequired
}

export default AnotherBiodata
