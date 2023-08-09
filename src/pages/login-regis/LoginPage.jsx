import React from 'react'
import Header from '@components/Header/HeaderLoginRegis'
import LoginInputContainer from '@components/Form/Login'
import { useDispatch } from 'react-redux';
import { asyncSetAuthUser } from 'states/authUser/actions';
import Notification from '@components/Notification'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onLogin = async (user) => {
        try {
            const response = await dispatch(asyncSetAuthUser(user))
            if (response.data.token !== undefined) {
                notifySuccess('Login berhasil')
            } else {
                navigate('/')
                notifyError('Login gagal')
            }
        } catch (error) {
            console.error('Error while logging in', error)
            notifyError('Terjadi kesalahan saat login')
        }
    }

    // async function onLogin(user) {
    //     const { data } = await login(user)
        
    //     if (data.token !== undefined) {
    //         notifySuccess('Login berhasil')
    //         loginSuccess(data.token)
    //     } else {
    //         navigate('/')
    //         notifyError('Login gagal')
    //     }
    // }

    // const notifySuccessAddData = () => {
    //     let message = 'Login berhasil';
    
    //     toast.success(message, {
    //       position: 'top-right',
    //       autoClose: 5000,
    //       hideProgressBar: false,
    //       closeOnClick: true,
    //       pauseOnHover: true,
    //       draggable: true,
    //       progress: undefined,
    //       theme: 'light'
    //     });
    //   };
    
    //   const notifyErrordAddData = () => {
    //     let message = 'Gagal untuk login';
    
    //     toast.error(message, {
    //       position: 'top-right',
    //       autoClose: 5000,
    //       hideProgressBar: false,
    //       closeOnClick: true,
    //       pauseOnHover: true,
    //       draggable: true,
    //       progress: undefined,
    //       theme: 'light'
    //     });
    //   };

    return (
        <>
            <div className='bg-gray-soft min-h-screen flex flex-col justify-between'>
                <div className='flex flex-col items-center my-auto'>
                    <div>
                        <Header title='Sign in to' />
                    </div>
                    <div className='w-1/4'>
                        <LoginInputContainer login={onLogin} />
                    </div>
                </div>
                <div className='flex justify-center mb-7'>
                    <p className='text-xs text-grey-light'>Copyright © 2023 Simplify</p>
                </div>
            </div>
            <Notification />
        </>
    )
}

export default LoginPage
