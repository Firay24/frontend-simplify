import SideBar from './components/SideBar'
import { Route, Routes, useNavigate } from 'react-router-dom';
import { putAccessToken, getUserLogged, getAccessToken } from './utils/apiData';
import { useEffect, useState } from 'react';

import LoginPage from './features/Login-Register/LoginPage';
import RegisterPage from './features/Login-Register/RegisterPage';
import Navigation from './components/Navigation'

import ListPageJamaah from './features/Jamaah/ListPage'
import CreatePageJamaah from './features/Jamaah/CreatePage'
import DetailPageJamaah from './features/Jamaah/DetailPage';
import EditPageJamaah from './features/Jamaah/EditPage';

import ListPageMZ from './features/Fungsional/ListPage'
import CreatePageMZ from './features/Fungsional/CreatePage'

import ListPageFungsional from './features/Fungsional/ListPage'
import CreatePageFungsional from './features/Fungsional/CreatePage'

import NotesPageJamaah from './features/Note/Jamaah/ListPage';
import DetailNotePageJamaah from './features/Note/Jamaah/DetailPage'
import EditNotePageJamaah from './features/Note/Jamaah/EditPage';
import CreateNotePageJamaah from './features/Note/Jamaah/CreatePage'


function App() {
  const [authedUser, setAuthedUser] = useState(null)
  const navigate = useNavigate()
  
  async function onLoginSuccess(accessToken) {
    putAccessToken(accessToken)
    const { data } = await getUserLogged()
    const delayTime = 2000 

    setTimeout(() => {
      setAuthedUser(data.user)
      navigate('/jamaah/listData')
    }, delayTime)
  }

  const getTokenFromLocalStorage = () => {
    const token = getAccessToken()
    return token
  }

  // const onLogoutHandler = async () => {
  //   if (confirm('Apakah anda yakin ingin keluar?')) {
  //     setAuthedUser(null)
  //     putAccessToken('')
  //   }
  // }

  useEffect(() => {
    const token = getTokenFromLocalStorage()
    if (token) {
      setAuthedUser(token)
    }
  }, [authedUser])

  if (authedUser === null) {
    return (
      <div>
        <Routes>
          <Route path='/*' element={<LoginPage loginSuccess={onLoginSuccess} />}></Route>
          <Route path='/register' element={<RegisterPage />}></Route>
        </Routes>
      </div>
    )
  }

  return (
    <div className='grid grid-cols-12'>
      <header className='bg-white h-screen fixed w-1/5'>
        <SideBar user={authedUser} />
      </header>
      <main className='grid col-start-3 col-span-10 ml-16 py-5'>
        <Navigation />
        <Routes>
          <Route path='/' element={<ListPageJamaah />}></Route>
          <Route path='/jamaah/listData' element={<ListPageJamaah />}></Route>
          <Route path='/jamaah/addData' element={<CreatePageJamaah />}></Route>
          <Route path='/jamaah/detailData/:id' element={<DetailPageJamaah />}></Route>
          <Route path='/jamaah/editData/:id' element={<EditPageJamaah />}></Route>
          <Route path='/jamaah/catatan/listData/:id' element={<NotesPageJamaah />}></Route>
          <Route path='/jamaah/catatan/detailData/:id/:idNote' element={<DetailNotePageJamaah />}></Route>
          <Route path='/jamaah/catatan/editData/:id/:idNote' element={<EditNotePageJamaah />}></Route>
          <Route path='/jamaah/catatan/addData/:id' element={<CreateNotePageJamaah />}></Route>

          <Route path='/mz/listData' element={<ListPageMZ />}></Route>
          <Route path='/mz/addData' element={<CreatePageMZ />}></Route>

          <Route path='/fungsional/listData' element={<ListPageFungsional />}></Route>
          <Route path='/fungsional/addData' element={<CreatePageFungsional />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
