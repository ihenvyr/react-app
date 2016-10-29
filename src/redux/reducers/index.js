import * as types from '../actions';

export const user = (state = { token: null }, action = {}) => {
  switch(action.type) {
    case types.USER_SIGNIN:
      return { token: action.payload.token };

    case types.USER_SIGNOUT:
      return { token: null };

    default:
      return state;
  }
};

export const counter = (state = 0, action = {}) => {
  switch(action.type) {
    case types.COUNTER_INCREMENT:
      return state + 1;

    case types.COUNTER_DECREMENT:
      return state - 1;

    case types.COUNTER_RESET:
      return 0;

    default:
      return state;
  }
};
