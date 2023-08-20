import React from 'react';
import PropTypes from 'prop-types';
import Title from 'components/Header/HeaderTitle';
import AddButton from 'components/Button/ButtonOnLink';
import BackButton from 'components/Button/ButtonOnClick';

function Header({ id }) {
  return (
    <div className="flex items-center justify-between">
      <Title title="Data Catatan" subheader="Data jamaah" />
      <div className="flex gap-x-2">
        <BackButton text="Kembali" goBack bgColor="bg-grey-light hover:bg-basic-grey text-white text-xs" />
        <AddButton text="Tambah catatan" addButton path={`/jamaah/catatan/addData/${id}`} />
      </div>
    </div>
  );
}

Header.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Header;
