import React, { useEffect, useState } from 'react'
import Header from '../../components/pages/ListData/Header'
import SearchField from '../../components/pages/ListData/SearchField'
import TableList from '../../components/pages/ListData/TableList'
import { getFlocks } from '../../utils/apiData'

function ListData() {
  const [flocks, setFlocks] = useState({ error: false, data: []})
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getFlocks();
        setFlocks(result);
      } catch (error) {
        setFlocks({ error: true, data: [] });
      }
    }

    fetchData()
  },[])

  const { data } = flocks;
  const dataFlock = data && data.flocks; // Add a check for data
  

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
        <TableList flocks={dataFlock} />
      </div>
    </div>
  )
}

export default ListData
