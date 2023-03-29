import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Mouse extends Component {
  constructor(props) {
    super(props);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove = (event) => {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  }

  render() {
    return (
      <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
        {this.props.render(this.state)}
      </div>
    );
  }
}

Mouse.propTypes = {
  render: PropTypes.func.isRequired,
};

class RenderPropsApp2 extends Component {
  render() {
    return (
      <div>
        <h1>Render Props Example 2</h1>
        <Mouse render={mouse => (
          <p>The current mouse position is ({mouse.x}, {mouse.y})</p>
        )}/>
      </div>
    );
  }
}

export default RenderPropsApp2;