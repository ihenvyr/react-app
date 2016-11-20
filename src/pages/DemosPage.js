import React from 'react';
import { Link } from 'react-router';
import Helmet from 'react-helmet';
import { withRouter } from 'react-router';

const DemosPage = (props) => {
  return (
    <div>
      <Helmet title="Demos"
              meta={[
                { name: "description", content: "Demos" }
              ]}
      />
      {
        props.children ||
        <div>
          <h1>Demos</h1>

          <div className="ui bulleted list">
            <div className="item"><Link to="/demos/counter">Counter</Link></div>
            <div className="item">Todos</div>
          </div>
        </div>
      }
    </div>
  );
};
DemosPage.propTypes = {};
DemosPage.defaultProps = {};

export default withRouter(DemosPage);
