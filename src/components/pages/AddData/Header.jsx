import React, { useState } from 'react'
import AddFileButton from '../../shared/Button/addFileButton'
import ButtonGuideFile from '../../shared/Button/guideFile'

function Header({ importFileFlocks }) {
  const [selectedFile, setSelectedFile] = useState(null)

  const handleFileChange = (event) => {
    const value = event.target.files[0]
    setSelectedFile(value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const data = await importFileFlocks(selectedFile)
      console.log('data berhasil ditambahkan', data)
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div className='flex items-center justify-between'>
      <div>
        <h1 className='font-semibold text-xl text-basic-grey'>Data Jamaah</h1>
        <p className='text-grey-light text-xs font-light'>BKMZ Jawa Timur</p>
      </div>
      <div>
        <form onSubmit={handleSubmit} className='flex gap-x-3 items-center'>
          <ButtonGuideFile />
          <input 
            type="file" 
            onChange={handleFileChange}
            accept=".csv"
            className='block outline-none bg-white text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 
            file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-gray-300 
            file:text-grey-light hover:file:bg-gray-400 hover:file:text-white file:items-center' />
          <AddFileButton />
        </form>
      </div>
    </div>
  )
}

export default Header
