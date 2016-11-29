import React from 'react';
import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
import Counter from '../../components/Counter';
import { counterDecrement, counterIncrement, counterReset } from '../../redux/actions';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

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

const counter = gql`query Counter($counterId: String!) {
  counter(id: $counterId) {
    count
  }
}`;

const counterCountReset = gql`mutation counterCountReset($counterId: String!) {
  counterCountReset(id: $counterId) {
    count
  }
}`;

const counterCountIncrement = gql`mutation counterCountIncrement($counterId: String!) {
  counterCountIncrement(id: $counterId) {
    count
  }
}`;

const counterCountDecrement = gql`mutation counterCountDecrement($counterId: String!) {
  counterCountDecrement(id: $counterId) {
    count
  }
}`;

export default compose(
  // graphql === connect
  graphql(counter/*, { options: { pollInterval: 60000 } }*/),
  graphql(counterCountReset, { name: 'counterCountReset' }),
  graphql(counterCountIncrement, { name: 'counterCountIncrement' }),
  graphql(counterCountDecrement, { name: 'counterCountDecrement' }),
  // connect(mapStateToProps, mapDispatchToProps)
)(CounterContainer);
