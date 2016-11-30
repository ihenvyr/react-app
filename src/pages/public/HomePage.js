import React from 'react';
import Helmet from 'react-helmet';
import { withRouter } from 'react-router';
import Welcome from '../../components/Welcome';

const HomePage = () => {
  return (
    <div>
      <Helmet title="Home"
              meta={[
                { name: "description", content: "Home" }
              ]}
      />
      <Welcome/>
    </div>
  );
};
HomePage.propTypes = {};
HomePage.defaultProps = {};

export default withRouter(HomePage);
