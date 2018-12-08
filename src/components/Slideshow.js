import React, { Component } from 'react';
import Slide from './Slide';
import Controls from './Controls';
import * as CONFIG from '../config';

class Slideshow extends Component {

  constructor() {
    super();
    this.state = {
      current: 0,
      previous: 0,
      slides: CONFIG.SLIDES
    };
  }

  componentDidMount() {
    this.setCurrentSlide(0);
  }

  nextSlide() {
    this.changeSlideIndexBy(1);
  }

  prevSlide() {
    this.changeSlideIndexBy(-1);
  }

  changeSlideIndexBy(change) {
    const newSlide = (this.state.current + this.state.slides.length + change) % this.state.slides.length;
    this.setCurrentSlide(newSlide);
  }

  setCurrentSlide(nextIndex) {
    clearTimeout(this.timer);
    const prevIndex = this.state.current;
    const nextSeconds = this.state.slides[nextIndex].seconds || CONFIG.DEFAULT_SECONDS_PER_SLIDE;
    this.setState({
      current: nextIndex,
      previous: prevIndex
    });
    this.timer = setTimeout(() => {this.nextSlide()}, nextSeconds * 1000);
  }

  render() {

    const nslides = this.state.slides.length;
    const slides = [];
    for (let i=0; i<nslides; i++) {

      let state = "hidden";
      if (i === this.state.current) {
        state = "current";
        console.log(`Current ${this.state.slides[i].type}: ${this.state.slides[i].path}`);
      } else if (i === this.state.previous) {
        state = "previous";
      }

      slides.push(<Slide type={this.state.slides[i].type} path={this.state.slides[i].path} state={state} key={i} />);
    }

    return (
      <div className="slideshow">
        <Controls next={this.nextSlide.bind(this)} previous={this.prevSlide.bind(this)} />
        {slides}
      </div>
    );
  }
}

export default Slideshow;
