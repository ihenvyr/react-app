import React from 'react';
import Helmet from 'react-helmet';
import { Link, withRouter } from 'react-router';

const OrdersAdminPage = (props) => {
  return (
    <div>
      <Helmet title="Orders - Admin"
              meta={[
                { name: "description", content: "Orders - Admin" }
              ]}
      />
      {
        <div className="ui grid">
          <div className="three wide column">
            <div className="ui fluid vertical menu">
              <Link className="item" activeClassName="active" to="/admin/orders/all">All</Link>
              <Link className="item" activeClassName="active" to="/admin/orders/new">New</Link>
              <Link className="item" activeClassName="active" to="/admin/orders/paid">Paid</Link>
              <Link className="item" activeClassName="active" to="/admin/orders/shipped">Shipped</Link>
            </div>
          </div>
          <div className="thirteen wide column">
            {
              props.children ||
              <div>
                <h1>OrdersAdminPage</h1>
                <p>OrdersAdminPage</p>
              </div>
            }
          </div>
        </div>
      }
    </div>
  );
};
OrdersAdminPage.propTypes = {};
OrdersAdminPage.defaultProps = {};

export default withRouter(OrdersAdminPage);
