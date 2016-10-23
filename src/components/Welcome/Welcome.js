import React from 'react';
import styles from './Welcome.scss';

class Welcome extends React.Component {
  static propTypes = {};
  static defaultProps = {};
  state = {
    checked: false
  };

  checkboxToggle = () => {
    this.setState({ checked: !this.state.checked })
  };

  render() {
    return (
      <div className={styles.container}>
        <h1>Welcome to React App</h1>
        <p>
          A <span className="bold-green-text">simple</span> react application boilerplate!
          {' '}
          <label>checkbox<input type="checkbox" checked={this.state.checked} onChange={this.checkboxToggle} /></label>
        </p>
      </div>
    );
  }
}

export default Welcome;
