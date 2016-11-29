import React from 'react';
import Helmet from 'react-helmet';
import { Link, withRouter } from 'react-router';

const SalesAdminPage = (props) => {
  return (
    <div>
      <Helmet title="Sales - Admin"
              meta={[
                { name: "description", content: "Sales - Admin" }
              ]}
      />
      {
        <div className="ui grid">
          <div className="three wide column">
            <div className="ui fluid vertical menu">
              <Link className="item" activeClassName="active" to="/admin/sales/daily">Daily</Link>
              <Link className="item" activeClassName="active" to="/admin/sales/weekly">Weekly</Link>
              <Link className="item" activeClassName="active" to="/admin/sales/monthly">Monthly</Link>
              <Link className="item" activeClassName="active" to="/admin/sales/bestsellers">Bestsellers</Link>
            </div>
          </div>
          <div className="thirteen wide column">
            {
              props.children ||
              <div>
                <h1>SalesAdminPage</h1>
                <p>SalesAdminPage</p>
              </div>
            }
          </div>
        </div>
      }
    </div>
  );
};
SalesAdminPage.propTypes = {};
SalesAdminPage.defaultProps = {};

export default withRouter(SalesAdminPage);
