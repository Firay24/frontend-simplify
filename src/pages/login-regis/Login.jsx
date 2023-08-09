import React, { useState } from 'react'
import Header from '../../components/pages/Login-regis/Header'
import LoginInputContainer from '../../components/pages/Login-regis/LoginInputContainer'
import { login } from '../../utils/apiData'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

function Login({ loginSuccess }) {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)

    async function onLogin(user) {
        setIsLoading(true)
        try {
            const { data } = await login(user)
    
            if (data.token !== undefined) {
                notifySuccessAddData()
                loginSuccess(data.token)
            } else {
                navigate('/')
                notifyErrordAddData()
            }
        } catch (error) {
            console.log('Error while logging in', error)
            notifyErrordAddData()
        } finally {
            setIsLoading(false)
        }
    }

    const notifySuccessAddData = () => {
        let message = 'Login berhasil';
    
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
    
      const notifyErrordAddData = () => {
        let message = 'Gagal untuk login';
    
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
            <div className='bg-gray-soft min-h-screen flex flex-col justify-between'>
                <div className='flex flex-col items-center my-auto'>
                    <div>
                        <Header title='Sign in to' />
                    </div>
                    <div className='w-1/4'>
                        <LoginInputContainer login={onLogin} isLoading={isLoading} />
                    </div>
                </div>
                <div className='flex justify-center mb-7'>
                    <p className='text-xs text-grey-light'>Copyright © 2023 Simplify</p>
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

export default Login
