import React, { useEffect, useState } from 'react'
import Header from '../../components/pages/ListData/Header'
import SearchField from '../../components/pages/ListData/SearchField'
import TableList from '../../components/pages/ListData/TableList'
import { getFlocks, getNotesFlock } from '../../utils/apiData'

function ListData() {
  const [flocks, setFlocks] = useState({ error: false, data: []})
  const [notesFlock, setNotesFlock] = useState({ error: false, data: [] })
  // const [idNoteFlock, setIdNoteFlock] = useState('')
  // const [noteFlock, setNoteFlock] = useState({ error: false, data: null })
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getFlocks()
        setFlocks(result);
      } catch (error) {
        setFlocks({ error: true, data: [] })
      }
    }

    fetchData()
  },[])

  const { data } = flocks
  const dataFlock = data.flocks || [] // Add a check for data
  const dataFlockFilter = dataFlock && dataFlock.filter((item) => (
    item.gender !== '' || item.gender !== ''
  ))

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getNotesFlock()
        setNotesFlock(result)
      } catch (error) {
        setNotesFlock({ error: true, data: [] })
      }
    }
    fetchData()
  }, [])
  const dataNotesFlock = notesFlock && notesFlock.data && notesFlock.data.notes

  // useEffect(() => {
  //   const detailNoteFlock = dataNotesFlock && dataFlock
  // })

  if (!dataFlock || dataFlock.length === 0) {
    return console.log('waiting');
  }



  return (
    <div className='mt-4 mr-10'>
      <div>
        <Header />
      </div>
      <div>
        <SearchField />
      </div>
      <div>
        <TableList flocks={dataFlockFilter} notesFlock={dataNotesFlock} />
      </div>
    </div>
  )
}

export default ListData
