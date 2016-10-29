export const USER_SIGNIN = 'USER_SIGNIN';
export const userSignin = () => {
  return {
    type: USER_SIGNIN
  }
};

export const USER_SIGNOUT = 'USER_SIGNOUT';
export const userSignout = () => {
  return {
    type: USER_SIGNOUT
  }
};

export const COUNTER_INCREMENT = 'COUNTER_INCREMENT';
export const counterIncrement = () => {
  return {
    type: COUNTER_INCREMENT
  }
};

export const COUNTER_DECREMENT = 'COUNTER_DECREMENT';
export const counterDecrement = () => {
  return {
    type: COUNTER_DECREMENT
  }
};

export const COUNTER_RESET = 'COUNTER_RESET';
export const counterReset = () => {
  return dispatch => {
    setTimeout(() => {
      dispatch({ type: COUNTER_RESET });
    }, 1000);
  };
};
