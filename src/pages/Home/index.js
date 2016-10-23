import React from 'react';
import Helmet from 'react-helmet';
import Home from './Home';
import { withRouter } from 'react-router';

const HomeContainer = (props) => {
  return (
    <div>
      <Helmet title="Home"
              meta={[
                { name: "description", content: "Home" }
              ]}
      />
      <Home {...props} />
    </div>
  );
};

export default withRouter(HomeContainer);
