import React from 'react'
import { useState } from 'react';
import {Carousel} from "react-bootstrap"
import "../components/header/header.css"


const Corseal = () => {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <>
     <Carousel activeIndex={index} onSelect={handleSelect} className='corosalHomemade'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.eng-literature.com/wp-content/uploads/2022/05/Wings-of-Fire-Analysis.webp"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-80"
          src="https://m.media-amazon.com/images/I/41Z2HQdTeUL.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      
    </>
  )
}

export default Corseal
