import React, { Component } from 'react';

class RenderPropsComp extends Component {
  state = {
    count: 0
  }

  handleClick = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <h2>Render Props Example</h2>
        {this.props.render(count, this.handleClick)}
      </div>
    );
  }
}

export default RenderPropsComp;