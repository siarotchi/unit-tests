import { USER } from "../actions/types";

const addUser = (state, { user }) => ({
  ...state,
  [user.id]: user,
});

const updateUser = (state, { id, user }) => ({
  ...state,
  [id]: {
    ...state[id],
    ...user,
  },
});

const deleteUser = (state, { id }) =>
  Object.keys(state).reduce((acc, stateId) => {
    if (stateId !== id) {
      acc[stateId] = state[stateId];
    }
    return acc;
  }, {});

export default (state = {}, { type, payload }) => {
  switch (type) {
    case USER.ADD_USER:
      return addUser(state, payload);
    case USER.UPDATE_USER:
      return updateUser(state, payload);
    case USER.DELETE_USER:
      return deleteUser(state, payload);
    default:
      return state;
  }
};
