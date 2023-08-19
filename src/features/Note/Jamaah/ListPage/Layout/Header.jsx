import React from 'react';
import PropTypes from 'prop-types';
import Title from 'components/Header/HeaderTitle';
import AddButton from 'components/Button/ButtonOnLink';

function Header({ id }) {
  return (
    <div className="flex items-center justify-between">
      <Title title="Data Catatan" subheader="Data jamaah" />
      <div>
        <AddButton text="Tambah catatan" addButton path={`/jamaah/catatan/addData/${id}`} />
      </div>
    </div>
  );
}

Header.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Header;
