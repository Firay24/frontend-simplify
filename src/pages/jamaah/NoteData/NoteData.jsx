import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../../components/pages/NoteData/ListData/Header'
import SearchField from '../../../components/pages/NoteData/ListData/SearchField'
import TableList from '../../../components/pages/NoteData/ListData/TableList'
import { getNoteFlock } from '../../../utils/apiData'

function NoteData() {
  const [noteFlock, setNoteFlock] = useState({ error: false, data: [] })
  const { id } = useParams()

  useEffect(() => {
    const fetchData = async (id) => {
        try {
            const result = await getNoteFlock(id)
            if (result) {
              setNoteFlock(result)
            }
        } catch (error) {
            setNoteFlock({ error: true, data: null})
        }
      }

      fetchData(id)
    },[id])
    const detailNote = noteFlock && noteFlock.data && noteFlock.data.note

  //console.log(noteFlock)

  return (
    <div className='mt-4 mr-10'>
      <div>
        <Header id={id} />
      </div>
      <div>
        <SearchField />
      </div>
      <div>
        <TableList notes={detailNote && detailNote} idFlock={id} />
      </div>
    </div>
  )
}

export default NoteData
