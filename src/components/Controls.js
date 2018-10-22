import React, { Component } from 'react';

class Controls extends Component {

  render() {

    return (
      <div className="controls">
        <button className="prevButton" onClick={this.props.next}>prev</button>
        <button className="nextButton" onClick={this.props.previous}>next</button>
      </div>
    );
  }
}

export default Controls;

