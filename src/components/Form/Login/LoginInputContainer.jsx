import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SubmitButton from '@components/Button/buttonClik';

function LoginInputContainer({ login }) {
  const [user, setUser] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    login(user);
  };

  return (
    <div className="bg-white mt-8 px-6 py-10 drop-shadow-sm rounded w-full">
      <form onSubmit={onSubmitHandler}>
        <div className="flex flex-col text-xs gap-y-2">
          <label htmlFor="username">Username</label>
          <input
            name="username"
            id="username"
            type="text"
            value={user.username}
            onChange={handleInputChange}
            className="rounded border-gray-400"
          />
        </div>
        <div className="flex flex-col text-xs gap-y-2 mt-3">
          <label htmlFor="password">Password</label>
          <input
            name="password"
            id="password"
            type="password"
            value={user.password}
            onChange={handleInputChange}
            className="rounded border-gray-400"
          />
        </div>
        <div className="mt-5 w-full">
          <SubmitButton title="Login" bgColor="w-full bg-basic-blue hover:bg-blue-dark text-white text-sm" />
        </div>
      </form>
    </div>
  );
}

LoginInputContainer.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInputContainer;
