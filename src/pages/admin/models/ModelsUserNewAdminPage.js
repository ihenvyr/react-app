import React from 'react';
import Helmet from 'react-helmet';
import { Link, withRouter } from 'react-router';
import { UserForm } from '../../../components/Forms';

const ModelsUserNewAdminPage = () => {
  return (
    <div>
      <Helmet title="New User - Admin"
              meta={[
                { name: "description", content: "New User - Admin" }
              ]}
      />
      <h3>New User</h3>
      <UserForm />
    </div>
  );
};
ModelsUserNewAdminPage.propTypes = {};
ModelsUserNewAdminPage.defaultProps = {};

export default withRouter(ModelsUserNewAdminPage);
