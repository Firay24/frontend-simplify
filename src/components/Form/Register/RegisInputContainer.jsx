import React, { useState } from 'react'
import SubmitButton from '../../shared/Button/submitButton'

function RegisInputContainer({ register }) {
  const [user, setUser] = useState({
    username: '',
    name: '',
    password: '',
    role: '',
    region: ''
  })

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value
    }))
  }

  const onSubmitHandler = (event) => {
    event.preventDefault()
    register(user)
  }

  return (
    <div className='bg-white mt-8 p-6 drop-shadow-sm rounded w-full'>
      <form onSubmit={onSubmitHandler}>
        <div className='flex flex-col text-xs gap-y-2'>
            <label htmlFor="username">Username</label>
            <input 
              name='username' 
              id='username' 
              type="text" 
              value={user.username}
              onChange={handleInputChange}
              className='rounded border-gray-400 py-1 px-2' />
        </div>
        <div className='flex flex-col text-xs gap-y-2 mt-3'>
            <label htmlFor="name">Nama lengkap</label>
            <input 
              name='name'
              id='name'
              type="text"
              value={user.name}
              onChange={handleInputChange} 
              className='rounded border-gray-400 py-1 px-2' />
        </div>
        <div className='flex flex-col text-xs gap-y-2 mt-3'>
            <label htmlFor="password">Password</label>
            <input 
              name='password'
              id='password'
              type="password"
              value={user.password}
              onChange={handleInputChange}
              className='rounded border-gray-400 py-1 px-2' />
        </div>
        <div className='flex flex-col text-xs gap-y-2 mt-3'>
            <label htmlFor="role">Peran</label>
            <select 
              name="role" 
              id="role"
              value={user.role}
              onChange={handleInputChange}
              className='rounded border-gray-400 optional:text-xs'>
                <option value="">Pilih</option>
                <option value="BKMZ">BKMZ</option>
                <option value="Korwil">Korwil</option>
                <option value="Jamaah">Jamaah</option>
            </select>
        </div>
        {
          user.role === 'BKMZ' || user.role === 'Korwil' ? (
            <div className='flex flex-col text-xs gap-y-2 mt-3'>
                <label htmlFor="region">Asal</label>
                <input 
                  name='region'
                  id='region' 
                  type="text"
                  value={user.region}
                  onChange={handleInputChange}
                  placeholder={user.role === 'BKMZ' ? 'Asal BKMZ' : 'Asal Korwil'}
                  className='rounded border-gray-400 py-1 px-2 placeholder:text-xs' />
            </div>
          ) : null
        }
        <div className='mt-5 w-full'>
            <SubmitButton title='Register' bgColor='w-full bg-basic-blue hover:bg-blue-dark text-white text-sm' />
        </div>
      </form>
    </div>
  )
}

export default RegisInputContainer
