import React from 'react';
import Helmet from 'react-helmet';
import { withRouter } from 'react-router';

const AboutPage = () => {
  return (
    <div>
      <Helmet title="About"
              meta={[
                { name: "description", content: "About" }
              ]}
      />
      <h2>About</h2>
      <p>It includes react-router, react-hot-loader 3, express, karma test runner and semantic-ui css framework!</p>
    </div>
  );
};
AboutPage.propTypes = {};
AboutPage.defaultProps = {};

export default withRouter(AboutPage);
