import React, { useState } from 'react'
import AddFileButton from '../../../Button/buttonClik'
import ButtonGuideFile from '../../../Button/buttonClik'
import Title from '../../../shared/HeaderTitle/Title'

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
      <Title title='Tambah Data' />
      <div>
        <form onSubmit={handleSubmit} className='flex gap-x-3 items-center'>
          <ButtonGuideFile guideFileButton={true} bgColor='bg-basic-blue hover:bg-blue-dark text-white text-base' />
          <input 
            type="file" 
            onChange={handleFileChange}
            accept=".csv"
            className='block outline-none bg-white text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 
            file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-gray-300 
            file:text-grey-light hover:file:bg-gray-400 hover:file:text-white file:items-center file:cursor-pointer' />
          <AddFileButton text='Upload file' bgColor='bg-basic-blue hover:bg-blue-dark text-white' addButton={true} />
        </form>
      </div>
    </div>
  )
}

export default Header
