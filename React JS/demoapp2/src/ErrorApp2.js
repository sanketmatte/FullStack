import React, { Component } from 'react';

class ItemList extends Component {
  state = {
    items: [],
    error: null
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
    //   .then(error => {
    //     this.setState({ error });
    //   })
    //   .catch(data => {
    //     this.setState({ items: data });
    //   });
      .then(data => {
        this.setState({ items: data });
      })
      .catch(error => {
        this.setState({ error });
      });
  }

  render() {
    const { items, error } = this.state;

    if (error) {
      throw new Error('Failed to load items');
    }

    return (
      <div>
        <h1>Items</h1>
        <ul>
          {items.map(item => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}

class ErrorBoundary2 extends Component {
  state = {
    hasError: false
  };

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

function ErrorApp2() {
  return (
    <div>
      <ErrorBoundary2>
        <ItemList />
      </ErrorBoundary2>
    </div>
  );
}
export default ErrorApp2;
