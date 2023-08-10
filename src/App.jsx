import SideBar from './components/shared/SideBar'
import { Route, Routes, useNavigate } from 'react-router-dom';
import Navigation from './components/shared/Navigation'
import ListDataJamaah from './pages/jamaah/ListData'
import AddDataJamaah from './pages/jamaah/AddData'
import DetailData from './pages/jamaah/DetailData';
import EditData from './pages/jamaah/EditData';
import ListDataMz from './pages/mz/ListData'
import AddDataMz from './pages/mz/AddData'
import ListDataFunc from './pages/fungsional/ListData'
import AddDataFunc from './pages/fungsional/AddData'
import NoteData from './pages/jamaah/NoteData/NoteData';
import DetailDataNote from './pages/jamaah/NoteData/DetailData'
import EditDataNote from './pages/jamaah/NoteData/EditData';
import AddDataNote from './pages/jamaah/NoteData/AddData'
import Login from './pages/login-regis/Login';
import Registrasi from './pages/login-regis/Regis';
import { putAccessToken, getUserLogged, getAccessToken } from './utils/apiData';
import { useEffect, useState } from 'react';

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
          <Route path='/*' element={<Login loginSuccess={onLoginSuccess} />}></Route>
          <Route path='/register' element={<Registrasi />}></Route>
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
          <Route path='/' element={<ListDataJamaah />}></Route>
          <Route path='/jamaah/listData' element={<ListDataJamaah />}></Route>
          <Route path='/jamaah/addData' element={<AddDataJamaah />}></Route>
          <Route path='/jamaah/detailData/:id' element={<DetailData />}></Route>
          <Route path='/jamaah/editData/:id' element={<EditData />}></Route>
          <Route path='/jamaah/catatan/listData/:id' element={<NoteData />}></Route>
          <Route path='/jamaah/catatan/detailData/:id/:idNote' element={<DetailDataNote />}></Route>
          <Route path='/jamaah/catatan/editData/:id/:idNote' element={<EditDataNote />}></Route>
          <Route path='/jamaah/catatan/addData/:id' element={<AddDataNote />}></Route>

          <Route path='/mz/listData' element={<ListDataMz />}></Route>
          <Route path='/mz/addData' element={<AddDataMz />}></Route>

          <Route path='/fungsional/listData' element={<ListDataFunc />}></Route>
          <Route path='/fungsional/addData' element={<AddDataFunc />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
