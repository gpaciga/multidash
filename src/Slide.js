import React, { Component } from 'react';

class Slide extends Component {

  render() {

    let classes;
    if (this.props.state === "previous") {
      classes = "slide previous animated slideOutLeft";
    } else if (this.props.state === "next") {
      classes = "slide next";
    } else if (this.props.state === "current") {
      classes = "slide current animated slideInRight";
    } else {
      classes = "slide hidden";
    }

    return (
      <div className={classes}>
        <iframe title={this.props.path} src={this.props.path}></iframe>
      </div>
    );
  }
}

export default Slide;
