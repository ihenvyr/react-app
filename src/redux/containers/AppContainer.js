import React from 'react';
import { Router } from 'react-router';
import routes from '../../routes';
import { browserHistory } from 'react-router';
import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { routerMiddleware } from 'react-router-redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { user, counter } from '../../redux/reducers';

const client = new ApolloClient();

const customAPI = {};
const enhancers = [];
const middleware = [client.middleware(), thunk.withExtraArgument(customAPI), routerMiddleware(browserHistory)];
const initialState = {};

const store = createStore(
  combineReducers({ user, counter, apollo: client.reducer() }),
  initialState,
  compose(
    applyMiddleware(...middleware),
    ...enhancers
  )
);

// console.log('store', store.getState());

const AppContainer = () => {
  return (
    <ApolloProvider store={store} client={client}>
      <Router history={browserHistory} routes={routes} />
    </ApolloProvider>
  );
};

export default AppContainer;
