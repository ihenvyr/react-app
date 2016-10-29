import React from 'react';
import Helmet from 'react-helmet';
import { withRouter } from 'react-router';
import Counter from '../redux/containers/Counter';

const CounterPage = () => {
  return (
    <div>
      <Helmet title="Counter"
              meta={[
                { name: "description", content: "Counter" }
              ]}
      />
      <h1>Counter</h1>
      <Counter />
    </div>
  );
};

export default withRouter(CounterPage);
