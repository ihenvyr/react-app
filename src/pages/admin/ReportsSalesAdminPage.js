import React from 'react';
import Helmet from 'react-helmet';
import { withRouter } from 'react-router';

const ReportsSalesAdminPage = () => {
  return (
    <div>
      <Helmet title="Sales Report - Admin"
              meta={[
                { name: "description", content: "Sales Report - Admin" }
              ]}
      />
      <h3>ReportsSalesAdminPage</h3>
      <p>ReportsSalesAdminPage</p>
    </div>
  );
};
ReportsSalesAdminPage.propTypes = {};
ReportsSalesAdminPage.defaultProps = {};

export default withRouter(ReportsSalesAdminPage);
