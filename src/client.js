import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './components/App';

if (__DEV__ && module.hot) {
  module.hot.accept();
}

ReactDOM.render(<App />, document.getElementById('root'));
