export const USER_SIGNUP = 'USER_SIGNUP';
export const userSignup = ({ email, password }) => {
  return dispatch => {
    // save to mongodb

    // save token
    dispatch({
      type: USER_SIGNUP,
      payload: { token: 'token from server' }
    });
  };
};

export const USER_SIGNIN = 'USER_SIGNIN';
export const userSignin = ({ email, password }) => {
  return dispatch => {
    // validate email and password
    fetch('/signin', {
      method: 'post',
      email, password,
      body: JSON.stringify({ email, password }),
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json; charset=UTF-8' }
    })
      .then(response => {
        console.log('response', response);
        return response.json();
      })
      .then(response => {
        console.log('response', response);

        // save token
        dispatch({
          type: USER_SIGNIN,
          payload: { token: 'token from server' }
        });
      });
      // .catch(error => console.log('Error', error));
  };
};

export const USER_SIGNOUT = 'USER_SIGNOUT';
export const userSignout = () => {
  return {
    type: USER_SIGNOUT
  };
};

export const COUNTER_INCREMENT = 'COUNTER_INCREMENT';
export const counterIncrement = () => {
  return {
    type: COUNTER_INCREMENT
  };
};

export const COUNTER_DECREMENT = 'COUNTER_DECREMENT';
export const counterDecrement = () => {
  return {
    type: COUNTER_DECREMENT
  };
};

export const COUNTER_RESET = 'COUNTER_RESET';
export const counterReset = () => {
  return dispatch => {
    setTimeout(() => {
      dispatch({ type: COUNTER_RESET });
    }, 1000);
  };
};
