import React from 'react';
import Helmet from 'react-helmet';
import { Link, withRouter } from 'react-router';

const ModelsUserAdminPage = (props) => {
  return (
    <div>
      <Helmet title="User Model - Admin"
              meta={[
                { name: "description", content: "User Model - Admin" }
              ]}
      />
      {
        props.children ||
          <div>
            <h3>
              Users
              &nbsp;
              <Link to="/admin/models/users/new" className="ui green button mini">New User</Link>
            </h3>
            <p>ModelsUserAdminPage</p>
          </div>
      }
    </div>
  );
};
ModelsUserAdminPage.propTypes = {};
ModelsUserAdminPage.defaultProps = {};

export default withRouter(ModelsUserAdminPage);
