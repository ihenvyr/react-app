import React from 'react';
import Helmet from 'react-helmet';
import { withRouter } from 'react-router';
import Signup from '../redux/containers/Signup';

const SignupPage = () => {
  return (
    <div>
      <Helmet title="Sign up"
              meta={[
                { name: "description", content: "Sign up" }
              ]}
      />
      <h1>Sign Up</h1>

      <Signup />
    </div>
  );
};
SignupPage.propTypes = {};
SignupPage.defaultProps = {};

export default withRouter(SignupPage);
