import React from 'react';
import './Signout.scss';

class Signout extends React.Component {
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
        <h1>Signing out..</h1>
        <p>Please wait while we sign you out from the app!</p>
      </div>
    );
  }
}

export default Signout;
