import React from 'react';
import Helmet from 'react-helmet';
import { Link, withRouter } from 'react-router';

const ModelAdminPage = (props) => {
  return (
    <div>
      <Helmet title="Models - Admin"
              meta={[
                { name: "description", content: "Models - Admin" }
              ]}
      />
      {
        <div className="ui grid">
          <div className="three wide column">
            <div className="ui fluid vertical menu">
              <Link className="item" activeClassName="active" to="/admin/models/posts">Posts</Link>
              <Link className="item" activeClassName="active" to="/admin/models/users">Users</Link>
              <Link className="item" activeClassName="active" to="/admin/models/products">Products</Link>
            </div>
          </div>
          <div className="thirteen wide column">
            {
              props.children ||
              <div>
                <h3>ModelAdminPage</h3>
                <p>ModelAdminPage</p>
              </div>
            }
          </div>
        </div>
      }
    </div>
  );
};
ModelAdminPage.propTypes = {};
ModelAdminPage.defaultProps = {};

export default withRouter(ModelAdminPage);
