import React from 'react';
import { Router } from 'react-router';
import routes from '../../routes';
import { browserHistory } from 'react-router';
import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { user, counter } from '../../redux/reducers';

const customAPI = {};
const enhancers = [];
const middleware = [thunk.withExtraArgument(customAPI), routerMiddleware(browserHistory)];
const initialState = {};

const store = createStore(
  combineReducers({ user, counter }),
  initialState,
  compose(
    applyMiddleware(...middleware),
    ...enhancers
  )
);

// console.log('store', store.getState());

const App = () => {
  return (
    <Provider store={store}>
      <Router history={browserHistory} routes={routes} />
    </Provider>
  );
};

export default App;
