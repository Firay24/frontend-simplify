import SideBar from './components/shared/SideBar'
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/shared/Navigation'
import ListDataJamaah from './pages/jamaah/ListData'
import AddDataJamaah from './pages/jamaah/AddData'
import DetailData from './pages/jamaah/DetailData';
import EditData from './pages/jamaah/EditData';
import ListDataMz from './pages/mz/ListData'
import AddDataMz from './pages/mz/AddData'
import ListDataFunc from './pages/fungsional/ListData'
import AddDataFunc from './pages/fungsional/AddData'

function App() {
  return (
    <div className='grid grid-cols-12'>
      <header className='bg-white h-screen fixed w-1/5'>
        <SideBar />
      </header>
      <main className='grid col-start-3 col-span-10 ml-16 py-5'>
        <Navigation />
        <Routes>
          <Route path='/' element={<ListDataJamaah />}></Route>
          <Route path='/jamaah/listData' element={<ListDataJamaah />}></Route>
          <Route path='/jamaah/addData' element={<AddDataJamaah />}></Route>
          <Route path='/jamaah/detailData/:id' element={<DetailData />}></Route>
          <Route path='/jamaah/editData/:id' element={<EditData />}></Route>

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
