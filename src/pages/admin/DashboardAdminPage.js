import React from 'react';
import Helmet from 'react-helmet';
import { withRouter } from 'react-router';

const DashboardAdminPage = (props) => {
  return (
    <div>
      <Helmet title="Dashboard"
              meta={[
                { name: "description", content: "Dashboard" }
              ]}
      />
      {
        props.children ||
        <div>
          <h1>DashboardAdminPage</h1>
          <p>DashboardAdminPage</p>
        </div>
      }
    </div>
  );
};
DashboardAdminPage.propTypes = {};
DashboardAdminPage.defaultProps = {};

export default withRouter(DashboardAdminPage);
