import React, { useState } from 'react'
import SubmitButton from '../../Button/ButtonOnClick'
import LoadingButton from '../../Button/ButtonOnLoading'

function LoginInputContainer({ login, isLoading }) {
  const [user, setUser] = useState({
    username: '',
    password: ''
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
    login(user)
  }

  return (
    <div className='bg-white mt-8 px-6 py-10 drop-shadow-sm rounded w-full'>
      <form onSubmit={onSubmitHandler}>
        <div className='flex flex-col text-xs gap-y-2'>
          <label htmlFor="username">Username</label>
          <input 
            name='username' 
            id='username' 
            type="text" 
            value={user.username}
            onChange={handleInputChange}
            className='rounded border-gray-400' />
        </div>
        <div className='flex flex-col text-xs gap-y-2 mt-3'>
          <label htmlFor="password">Password</label>
          <input 
            name='password' 
            id='password' 
            type="password"
            value={user.password} 
            onChange={handleInputChange}
            className='rounded border-gray-400' />
        </div>
        <div className='mt-5 w-full'>
          {
            isLoading ? <LoadingButton /> : <SubmitButton text='Login' bgColor='w-full bg-basic-blue hover:bg-blue-dark text-white text-sm' />
          }
        </div>
        {/* <div className='mt-3'>
            <p className='text-xs mb-3 text-basic-blue'>Belum memiliki akun?</p>
            <SubmitButton title='Registrasi' bgColor='w-full bg-basic-blue hover:bg-blue-dark text-white text-sm' />
        </div> */}
      </form>
    </div>
  )
}

export default LoginInputContainer
