import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Counter from '../../components/Counter';
import { counterDecrement, counterIncrement, counterReset } from '../../redux/actions';

const CounterContainer = (props) => {
  return <Counter {...props} />
};

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    counterDecrement, counterIncrement, counterReset
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
