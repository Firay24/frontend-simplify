import { ActionType } from './actions';

const initialState = {
  authUser: {},
  isLoading: false,
};

const authUserReducer = (authUser = initialState, action = {}) => {
  switch (action.type) {
    case ActionType.SET_AUTH_USER:
      return action.payload.authUser;
    case ActionType.UNSET_AUTH_USER:
      return null;
    case ActionType.SET_LOADING:
      return action.payload.isLoading;
    default:
      return authUser;
  }
};

export default authUserReducer;
