import React from 'react';
import Helmet from 'react-helmet';
import Signout from './Signout';
import { withRouter } from 'react-router';

const SignoutContainer = (props) => {
  return (
    <div>
      <Helmet title="Signing out.."
              meta={[
                { name: "description", content: "Signing out.." }
              ]}
      />
      <Signout {...props} />
    </div>
  );
};

export default withRouter(SignoutContainer);
