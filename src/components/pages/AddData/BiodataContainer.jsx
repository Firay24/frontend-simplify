
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

function BiodataContainer({ onInputChange, updatePersonalData, buttonOnClick, sendGender }) {
  const [flock, setFlock] = useState({
    name: '',
    placesBirth: '',
    datesBirth: '',
    nik: '',
    fathersName: '',
    gender: '',
    job: '',
    numberPhone: '',
    mzOrigin: '',
    yearEnteredTN: '',
    kaji: '',
    suluk: ''
  })

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFlock((prevFlock) => ({
      ...prevFlock,
      [name]: value
    }))

    updatePersonalData(
      name === 'name' ? value : flock.name,
      name === 'nik' ? value : flock.nik,
      name === 'fathersName' ? value : flock.fathersName
    )
  }

  useEffect(() => {
    onInputChange(flock)
  }, [buttonOnClick, flock, onInputChange])

  useEffect(() => {
    sendGender(flock.gender)
  }, [flock, sendGender])

  useEffect(() => {
    if (buttonOnClick) {
      setFlock({
        name: '',
        placesBirth: '',
        datesBirth: '',
        nik: '',
        fathersName: '',
        gender: '',
        job: '',
        numberPhone: '',
        mzOrigin: '',
        yearEnteredTN: '',
        kaji: '',
        suluk: ''
      })
    }
  }, [buttonOnClick])

  return (
    <div className='text-xs bg-white p-6 rounded drop-shadow-sm h-full text-basic-grey'>
      <p className='text-sm font-medium text-basic-blue mb-5'>Identitas Pribadi</p>
      <form className='flex flex-col gap-y-2'>
        <div className='grid grid-cols-2 items-center'>
          <label htmlFor="name">Nama Lengkap</label>
          <input 
            type="text" 
            id='name'
            name='name'
            value={flock.name}
            onChange={handleInputChange}
            placeholder='John Doe'
            className='rounded text-xs border-gray-400' />
        </div>
        <div className='grid grid-cols-2 items-center'>
          <label htmlFor="nik">NIK</label>
          <input
            type="text"
            id='nik'
            name='nik'
            value={flock.nik}
            onChange={handleInputChange}
            placeholder='3651001234567'
            className='rounded text-xs border-gray-400' />
        </div>
        <div className='grid grid-cols-2 items-center'>
          <label htmlFor="fathersName">Nama bapak kandung</label>
          <input
            type="text"
            id='fathersName'
            name='fathersName'
            value={flock.fathersName}
            onChange={handleInputChange}
            placeholder='John Mark'
            className='rounded text-xs border-gray-400' />
        </div>
        <div className='grid grid-cols-2 items-center'>
          <label htmlFor="gender">Jenis kelamin</label>
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
          <label htmlFor="placesBirth">Tempat lahir</label>
          <input
            type="text"
            id='placesBirth'
            name='placesBirth'
            value={flock.placesBirth}
            onChange={handleInputChange}
            placeholder='California'
            className='rounded text-xs border-gray-400' />
        </div>
        <div className='grid grid-cols-2 items-center'>
          <label htmlFor="datesBirth">Tanggal lahir</label>
          <input
            type="date"
            id='datesBirth'
            name='datesBirth'
            value={flock.datesBirth}
            onChange={handleInputChange}
            className='rounded text-xs border-gray-400' />
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
          <label htmlFor="numberPhone">Nomer HP</label>
          <input
            type="text"
            id='numberPhone'
            name='numberPhone'
            value={flock.numberPhone}
            onChange={handleInputChange}
            placeholder='0852312345678'
            className='rounded text-xs border-gray-400' />
        </div>
      </form>
    </div>
  )
}

BiodataContainer.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  updatePersonalData: PropTypes.object.isRequired,
  buttonOnClick: PropTypes.bool
}

export default BiodataContainer
