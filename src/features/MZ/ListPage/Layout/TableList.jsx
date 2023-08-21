/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import TableSection from 'components/Table';

function TableList({ boards }) {
  const columnsName = ['NAMA', 'STATUS MZ', 'KATEGORI SK 117', 'KABUPATEN', 'ACTION'];
  const rowsName = ['name', 'statusBoard', 'SKCategory'];
  const pathDetail = '/mz/detailData/';
  const pathEdit = '/mz/editData/';

  return (
    <div>
      <TableSection
        columnsName={columnsName}
        rowsName={rowsName}
        data={boards}
        pathDetail={pathDetail}
        pathEdit={pathEdit}
      />
    </div>
  );
}

TableList.propTypes = {
  boards: PropTypes.array.isRequired,
};

export default TableList;
