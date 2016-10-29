import React from 'react';
import styles from './Counter.scss';

class Counter extends React.Component {
  static propTypes = {
    // React.PropTypes.array
    // React.PropTypes.bool
    // React.PropTypes.func
    // React.PropTypes.number
    // React.PropTypes.object
    // React.PropTypes.string
    // React.PropTypes.node // anything that can be rendered
    // React.PropTypes.element
    // React.PropTypes.instanceOf(MyClass)
    // React.PropTypes.oneOf(['Thing 1', 'Thing 2'])
    // React.PropTypes.oneOfType([
    //   React.PropTypes.bool,
    //   React.PropTypes.string
    // ])
    // React.PropTypes.arrayOf(React.PropTypes.string)
    // React.PropTypes.objectOf(React.PropTypes.string)
    // React.PropTypes.shape({
    //   age: React.PropTypes.number,
    //   name: React.PropTypes.string
    // })
    // React.PropTypes.any
  };
  static defaultProps = {};
  state = {};

  // componentWillMount() {}

  // componentWillUnmount() {}

  // componentDidMount() {}

  // componentWillReceiveProps(nextProps) {}

  // shouldComponentUpdate(nextProps, nextState) {}

  // componentWillUpdate(nextProps, nextState) {}

  // componentDidUpdate(prevProps, prevState) {}

  onDecrement = () => {
    this.props.counterDecrement();
  };

  onIncrement = () => {
    this.props.counterIncrement();
  };

  onReset = () => {
    this.props.counterReset();
  };

  render() {
    return (
      <div className={styles.container}>
        <p className={styles.counter}>{this.props.counter || 0}</p>
        <p>
          <button type="button" onClick={this.onDecrement}> - </button>
          <button type="button" onClick={this.onReset}>reset (async)</button>
          <button type="button" onClick={this.onIncrement}> + </button>
        </p>
      </div>
    );
  }
}

export default Counter;
