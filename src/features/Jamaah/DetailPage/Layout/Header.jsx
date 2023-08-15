import React from 'react';
import Title from '../../../../components/Header/HeaderTitle';
import AddButton from '../../../../components/Button/ButtonOnLink';

function Header() {
  return (
    <div className="flex items-center justify-between">
      <Title title="Detail data" />
      <div>
        <AddButton text="Data fungsional" path="/fungsional/addData" addButton />
      </div>
    </div>
  );
}

export default Header;
