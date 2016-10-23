import React from 'react';
import Helmet from 'react-helmet';
import Signin from './Signin';
import { withRouter } from 'react-router';

const SigninContainer = (props) => {
  return (
    <div>
      <Helmet title="Sign in"
              meta={[
                { name: "description", content: "Sign in" }
              ]}
      />
      <Signin {...props} />
    </div>
  );
};

export default withRouter(SigninContainer);
