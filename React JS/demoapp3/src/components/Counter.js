import React from 'react';
import { connect } from 'react-redux';

function Counter(props) {
  return (
    <div>
      <h1>{props.count}</h1>
      <button onClick={props.increment}>Increment</button>
      <button onClick={props.decrement}>Decrement</button>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    count: state.count,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increment: () => dispatch({ type: 'INCREMENT' }),
    decrement: () => dispatch({ type: 'DECREMENT' }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);