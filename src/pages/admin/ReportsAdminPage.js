import React from 'react';
import Helmet from 'react-helmet';
import { Link, withRouter } from 'react-router';

const ReportsAdminPage = (props) => {
  return (
    <div>
      <Helmet title="Reports - Admin"
              meta={[
                { name: "description", content: "Reports - Admin" }
              ]}
      />
      {
        <div className="ui grid">
          <div className="three wide column">
            <div className="ui fluid vertical menu">
              <Link className="item" activeClassName="active" to="/admin/reports/sales">Sales</Link>
              <Link className="item" activeClassName="active" to="/admin/reports/visitors">Visitors</Link>
              <Link className="item" activeClassName="active" to="/admin/reports/customers">Customers</Link>
            </div>
          </div>
          <div className="thirteen wide column">
            {
              props.children ||
              <div>
                <h3>ReportsAdminPage</h3>
                <p>ReportsAdminPage</p>
              </div>
            }
          </div>
        </div>
      }
    </div>
  );
};
ReportsAdminPage.propTypes = {};
ReportsAdminPage.defaultProps = {};

export default withRouter(ReportsAdminPage);
