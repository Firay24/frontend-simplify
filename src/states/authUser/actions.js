import { login, putAccessToken, getUserLogged } from './api';

const ActionType = {
  SET_AUTH_USER: 'SET_AUTH_USER',
  UNSET_AUTH_USER: 'UNSET_AUTH_USER',
  SET_LOADING: 'SET_LOADING',
};

const setAuthUserActionCreator = (authUser) => ({
  type: ActionType.SET_AUTH_USER,
  payload: {
    authUser,
  },
});

const setLoadingActionCreator = (isLoading) => ({
  type: ActionType.SET_LOADING,
  payload: {
    isLoading,
  },
});

function asyncSetAuthUser({ username, password }) {
  return async (dispatch) => {
    try {
      dispatch(setLoadingActionCreator(true));

      const token = await login({ username, password });
      putAccessToken(token);
      const authUser = await getUserLogged();
      dispatch(setAuthUserActionCreator(authUser));
    } catch (error) {
      console.log(error.message);
    } finally {
      dispatch(setLoadingActionCreator(false));
    }
  };
}

export {
  ActionType,
  setAuthUserActionCreator,
  asyncSetAuthUser,
};
