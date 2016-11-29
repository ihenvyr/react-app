import React from 'react';
import Helmet from 'react-helmet';
import { withRouter } from 'react-router';

const UserAdminPage = () => {
  return (
    <div>
      <Helmet title="User - Admin"
              meta={[
                { name: "description", content: "User - Admin" }
              ]}
      />
      <h1>UserAdminPage</h1>
      <p>UserAdminPage</p>
    </div>
  );
};
UserAdminPage.propTypes = {};
UserAdminPage.defaultProps = {};

export default withRouter(UserAdminPage);
