import React from 'react';
import Helmet from 'react-helmet';
import { withRouter } from 'react-router';
import CounterContainer from '../redux/containers/CounterContainer';

const CounterPage = () => {
  return (
    <div>
      <Helmet title="Counter"
              meta={[
                { name: "description", content: "Counter" }
              ]}
      />
      <h1>Counter</h1>
      <CounterContainer counterId="582c6bf3bfa4d57c168fbebb" />
    </div>
  );
};

export default withRouter(CounterPage);
