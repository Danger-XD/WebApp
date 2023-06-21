import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';


class Banner extends Component {
  render() {
    return (
      <div>
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require('./02.jpg')} 
          alt="First slide"
          height={570}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require('./01.jpg')} 
          alt="Second slide"
          height={570}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require('./03.jpg')} 
          alt="Third slide"
          height={570}
        />
      </Carousel.Item>
    </Carousel>
      </div>
    );
  }
}

export default Banner;
