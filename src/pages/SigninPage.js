import React from 'react';
import Helmet from 'react-helmet';
import { withRouter } from 'react-router';
import SigninContainer from '../redux/containers/SigninContainer';

const SigninPage = () => {
  return (
    <div>
      <Helmet title="Sign in"
              meta={[
                { name: "description", content: "Sign in" }
              ]}
      />
      <h1>Sign In</h1>

      <SigninContainer />
    </div>
  );
};
SigninPage.propTypes = {};
SigninPage.defaultProps = {};

export default withRouter(SigninPage);
