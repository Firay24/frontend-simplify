import React, { useEffect, useState } from 'react';
import Loading from 'components/Loading';
import { getBoards } from 'utils/apiData';
import Header from './Layout/Header';
import SearchField from './Layout/SearchField';
import TableList from './Layout/TableList';

function ListPage() {
  const [boards, setBoards] = useState({ error: false, data: [] });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getBoards();
        setBoards(result);
        setIsLoading(false);
      } catch (error) {
        setBoards({ error: true, data: [] });
      }
    };

    fetchData();
  }, []);
  const dataBoards = boards && boards.data && boards.data.boards;

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
            : <TableList boards={dataBoards && dataBoards} />
        }
      </div>
    </div>
  );
}

export default ListPage;
