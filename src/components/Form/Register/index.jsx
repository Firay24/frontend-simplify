/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import SubmitButton from '../../Button/ButtonOnClick';

function RegisInputContainer({ register }) {
  const [user, setUser] = useState({
    username: '',
    name: '',
    password: '',
    role: '',
    region: '',
  });
  const [open, setOpen] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    register(user);
  };

  const togglePassword = () => {
    setOpen(!open);
  };

  return (
    <div className="bg-white mt-8 p-6 drop-shadow-sm rounded w-full">
      <form onSubmit={onSubmitHandler}>
        <div className="flex flex-col text-xs gap-y-2">
          <label htmlFor="username" className="text-[#464646] text-opacity-60 font-medium">Username</label>
          <input
            name="username"
            id="username"
            type="text"
            value={user.username}
            onChange={handleInputChange}
            className="rounded border-gray-400 text-xs"
          />
        </div>
        <div className="flex flex-col text-xs gap-y-2 mt-3">
          <label htmlFor="name" className="text-[#464646] text-opacity-60 font-medium">Nama lengkap</label>
          <input
            name="name"
            id="name"
            type="text"
            value={user.name}
            onChange={handleInputChange}
            className="rounded border-gray-400 text-xs"
          />
        </div>
        <div className="flex flex-col text-xs gap-y-2 mt-3">
          <label htmlFor="password" className="text-[#464646] text-opacity-60 font-medium">Password</label>
          <div className="flex items-center gap-x-2">
            <div className="w-full">
              <input
                name="password"
                id="password"
                type="password"
                value={user.password}
                onChange={handleInputChange}
                className="rounded border-gray-400 w-full text-xs"
              />
            </div>
            <div className="text-2xl text-grey-light text-opacity-60 hover:text-opacity-80 cursor-pointer">
              {
                !open ? <AiFillEye onClick={togglePassword} /> : <AiFillEyeInvisible onClick={togglePassword} />
              }
            </div>
          </div>
        </div>
        <div className="flex flex-col text-xs gap-y-2 mt-3">
          <label htmlFor="role" className="text-[#464646] text-opacity-60 font-medium">Peran</label>
          <select
            name="role"
            id="role"
            value={user.role}
            onChange={handleInputChange}
            className="rounded border-gray-400 text-xs optional:text-xs"
          >
            <option value="">Pilih</option>
            <option value="BKMZ">BKMZ</option>
            <option value="Korwil">Korwil</option>
            <option value="Jamaah">Jamaah</option>
          </select>
        </div>
        {
          user.role === 'BKMZ' || user.role === 'Korwil' ? (
            <div className="flex flex-col text-xs gap-y-2 mt-3">
              <label htmlFor="region" className="text-[#464646] text-opacity-60 font-medium">Asal</label>
              <input
                name="region"
                id="region"
                type="text"
                value={user.region}
                onChange={handleInputChange}
                placeholder={user.role === 'BKMZ' ? 'Asal BKMZ' : 'Asal Korwil'}
                className="rounded border-gray-400 text-xs placeholder:text-xs"
              />
            </div>
          ) : null
        }
        <div className="mt-5 w-full">
          <SubmitButton text="Register" bgColor="w-full bg-basic-blue hover:bg-blue-dark text-white text-sm" />
        </div>
      </form>
    </div>
  );
}

RegisInputContainer.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisInputContainer;
