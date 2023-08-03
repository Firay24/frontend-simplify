import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../../components/pages/jamaah/NoteData/ListData/Header'
import SearchField from '../../../components/pages/jamaah/NoteData/ListData/SearchField'
import TableList from '../../../components/pages/jamaah/NoteData/ListData/TableList'
import { getNoteFlock } from '../../../utils/apiData'
import Loading from '../../../components/shared/Loading'

function NoteData() {
  const [noteFlock, setNoteFlock] = useState({ error: false, data: [] })
  const { id } = useParams()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async (id) => {
        try {
            const result = await getNoteFlock(id)
            if (result) {
              setNoteFlock(result)
              setIsLoading(false)
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
      <div className='bg-slate-400 min'>
        {
          isLoading ? <Loading /> : <TableList notes={detailNote && detailNote} idFlock={id} />
        }
      </div>
    </div>
  )
}

export default NoteData
