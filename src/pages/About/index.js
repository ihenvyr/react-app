import React from 'react';
import Helmet from 'react-helmet';
import About from './About';
import { withRouter } from 'react-router';

const AboutContainer = (props) => {
  return (
    <div>
      <Helmet title="About"
              meta={[
                { name: "description", content: "About" }
              ]}
      />
      <About {...props} />
    </div>
  );
};

export default withRouter(AboutContainer);
