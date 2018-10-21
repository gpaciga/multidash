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
    this.setCurrentSlide(0);
  }

  nextSlide() {
    const nextSlide = (this.state.current + 1) % this.state.slides.length;
    this.setCurrentSlide(nextSlide);
  }

  setCurrentSlide(index) {
    const nextSeconds = this.state.slides[index].seconds || CONFIG.DEFAULT_SECONDS_PER_SLIDE;
    this.setState({current: index});
    this.timer = setTimeout(() => {this.nextSlide()}, nextSeconds * 1000);
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
