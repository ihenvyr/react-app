import React from 'react';
import Helmet from 'react-helmet';
import Signup from './Signup';
import { withRouter } from 'react-router';

const SignupContainer = (props) => {
  return (
    <div>
      <Helmet title="Sign up"
              meta={[
                { name: "description", content: "Sign up" }
              ]}
      />
      <Signup {...props} />
    </div>
  );
};

export default withRouter(SignupContainer);
