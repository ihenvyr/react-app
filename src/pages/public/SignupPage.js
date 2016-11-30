import React from 'react';
import Helmet from 'react-helmet';
import { withRouter } from 'react-router';
import SignupContainer from '../../redux/containers/SignupContainer';

const SignupPage = () => {
  return (
    <div>
      <Helmet title="Sign up"
              meta={[
                { name: "description", content: "Sign up" }
              ]}
      />
      <h2>Sign Up</h2>

      <SignupContainer />
    </div>
  );
};
SignupPage.propTypes = {};
SignupPage.defaultProps = {};

export default withRouter(SignupPage);
