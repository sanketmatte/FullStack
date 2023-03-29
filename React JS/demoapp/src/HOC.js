import React from 'react';
import withLogging from './WithLogging';

class Hoc extends React.Component {
  render() {
    return <div>Hello World!</div>;
  }
}

export default withLogging(Hoc);