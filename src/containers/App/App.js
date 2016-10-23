import React from 'react';
import { Router } from 'react-router';
import routes from '../../routes';
import { browserHistory } from 'react-router';

const store = window.store = {};
const createElement = (Component, props) => {
  return <Component {...props} store={store} />
};

const App = () => {
  // return (
  //   <Provider store={store}>
  //     <Router history={browserHistory} routes={routes} />
  //   </Provider>
  // );
  return (
    <Router history={browserHistory} children={routes} createElement={createElement} />
  )
};

export default App;
