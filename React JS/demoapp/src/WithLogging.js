import React from 'react';

const WithLogging = (WrappedComponent) => {
  class WithLogging extends React.Component {
    componentDidMount() {
      console.log(`Component ${WrappedComponent.name} is mounted`);
    }

    componentWillUnmount() {
      console.log(`Component ${WrappedComponent.name} is unmounted`);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return WithLogging;
};

export default WithLogging;