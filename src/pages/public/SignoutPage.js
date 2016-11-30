import React from 'react';
import Helmet from 'react-helmet';
import { withRouter } from 'react-router';

class SignoutPage extends React.Component {
  static propTypes = {};
  static defaultProps = {};
  state = {};

  componentDidMount() {
    setTimeout(() => {
      // if (this.props.location.pathname.indexOf('admin') >= 0) {
      //   return this.props.router.push('/admin');
      // }
      this.props.router.push('/');
    }, 1000);
  }

  render() {
    return (
      <div>
        <Helmet title="Signing out.."
                meta={[
                  { name: "description", content: "Signing out.." }
                ]}
        />
        <h2>Signing out..</h2>
        <p>Please wait while we sign you out from the app!</p>
      </div>
    );
  }
}

export default withRouter(SignoutPage);
