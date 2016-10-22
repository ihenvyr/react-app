import React from 'react';
import styles from './App.scss';

class App extends React.Component {
  static propTypes = {};
  static defaultProps = {};
  state = {
    checked: false
  };

  checkboxToggle = () => {
    this.setState({ checked: !this.state.checked })
  };

  render() {
    console.info('checked', this.state.checked);

    return (
      <div className={styles.container}>
        <h1>Welcome to React App</h1>
        <p>A <span className="bold-green-text">simple</span> react application boilerplate!</p>

        <label>checkbox <input type="checkbox" checked={this.state.checked} onChange={this.checkboxToggle} /></label>
      </div>
    );
  }
}

export default App;
