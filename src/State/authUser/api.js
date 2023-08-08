/* eslint-disable import/no-unresolved */
/* eslint-disable no-alert */
import fetchWithToken from '@utils/fetchWithToken';

const BASE_URL = process.env.REACT_APP_API_DATA;

function putAccessToken(accessToken) {
  return localStorage.setItem('accessToken', accessToken);
}

async function login({ username, password }) {
  const response = await fetch(`${BASE_URL}/users/loginUser`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });
  const responseJson = await response.json();

  try {
    return { error: false, data: responseJson };
  } catch (error) {
    console.log(responseJson.message);
    return { error: true, data: null };
  }
}

async function register({
  name, username, password, role, region,
}) {
  const response = await fetch(`${BASE_URL}/users/addUser`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name, username, password, role, region,
    }),
  });
  const responseJson = await response.json();

  try {
    return { error: false, data: responseJson };
  } catch (error) {
    console.log(responseJson.message);
    return { error: true, data: null };
  }
}

async function getUserLogged() {
  const response = await fetchWithToken(`${BASE_URL}/users/getUser`);
  const responseJson = await response.json();

  try {
    return { error: false, data: responseJson.data };
  } catch (error) {
    return { error: true, data: null };
  }
}

export {
  putAccessToken,
  login,
  register,
  getUserLogged,
};
