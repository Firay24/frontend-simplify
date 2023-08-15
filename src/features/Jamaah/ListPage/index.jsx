import React, { useEffect, useState } from 'react';
import Header from './Layout/Header';
import SearchField from './Layout/SearchField';
import Loading from '../../../components/Loading';
import TableList from './Layout/TableList';
import { getFlocks, getNotesFlock } from '../../../utils/apiData';

function ListPage() {
  const [flocks, setFlocks] = useState({ error: false, data: [] });
  const [notesFlock, setNotesFlock] = useState({ error: false, data: [] });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getFlocks();
        setFlocks(result);
        setIsLoading(false);
      } catch (error) {
        setFlocks({ error: true, data: [] });
      }
    };

    fetchData();
  }, []);

  const { data } = flocks;
  const dataFlock = data.flocks || []; // Add a check for data
  const dataFlockFilter = dataFlock && dataFlock.filter((item) => (
    item.gender !== '' || item.gender !== ''
  ));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getNotesFlock();
        setNotesFlock(result);
        setIsLoading(false);
      } catch (error) {
        setNotesFlock({ error: true, data: [] });
      }
    };
    fetchData();
  }, []);
  const dataNotesFlock = notesFlock && notesFlock.data && notesFlock.data.notes;

  if (!dataFlock || dataFlock.length === 0) {
    return console.log('waiting');
  }

  return (
    <div className="mt-4 mr-10">
      <div>
        <Header />
      </div>
      <div>
        <SearchField />
      </div>
      <div>
        {
          isLoading ? <Loading />
            : <TableList flocks={dataFlockFilter} notesFlock={dataNotesFlock} />
        }
      </div>
    </div>
  );
}

export default ListPage;
