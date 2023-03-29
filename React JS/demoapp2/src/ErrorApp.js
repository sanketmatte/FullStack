import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}

class ErrorApp extends Component {
  render() {
    return (
      <div>
        <h1>Hello, World!</h1>
        <ErrorBoundary>
          <BrokenComponent />
        </ErrorBoundary>
      </div>
    );
  }
}

class BrokenComponent extends Component {
  componentDidMount() {
    throw new Error('I broke!');
  }

  render() {
    return <h2>This is a broken component.</h2>;
  }
}

export default ErrorApp;