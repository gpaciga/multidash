import React, { Component } from 'react';
import Slide from './Slide';
import * as CONFIG from '../config';

class Slideshow extends Component {

  constructor() {
    super();
    this.state = {
      current: 0,
      slides: CONFIG.SLIDES
    };
  }

  componentDidMount() {
    this.iterator = setInterval(() => {
       const nextSlide = (this.state.current + 1) % this.state.slides.length;
       this.setState({current: nextSlide});
    }, CONFIG.DEFAULT_SECONDS_PER_SLIDE * 1000);
  }

  render() {

    const nslides = this.state.slides.length;
    const slides = [];
    for (let i=0; i<nslides; i++) {

      let state = "hidden";
      if (i === this.state.current) {
        state = "current";
      } else if (i === (this.state.current - 1 + nslides) % nslides) {
        state = "previous";
      } else if (i === (this.state.current + 1) % nslides) {
        state = "next";
      }

      slides.push(<Slide type={this.state.slides[i].type} path={this.state.slides[i].path} state={state} key={i} />);
    }

    return (
      <div className="slideshow">
        {slides}
      </div>
    );
  }
}

export default Slideshow;
