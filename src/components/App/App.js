import React from 'react';
import { Router } from 'react-router';
import routes from '../../routes';
import { browserHistory } from 'react-router';
import './App.scss';

const store = window.store = {};
const createElement = (Component, props) => {
  return <Component {...props} store={store} />
};

const App = () => {
  return (
    <Router history={browserHistory} children={routes} createElement={createElement} />
  )
};

export default App;
