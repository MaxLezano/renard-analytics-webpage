import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './cardCarousel.css';

const CardCarousel = ({ values }) => {
  const [centerCardIndex, setCenterCardIndex] = useState(0);

  const settings = {
    dots: true,
    centerMode: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    focusOnSelect: true,
    swipe: false,
    arrows: false,
    adaptiveHeight: true,
    beforeChange: (current, next) => {
      setCenterCardIndex(next);
    },
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
    ],
    appendDots: (dots, i) => (
      <div>
        <ul className='carousel-dots'> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        key={i}
        className={`carousel-dot ${centerCardIndex === i ? 'active' : ''}`}
        onClick={() => setCenterCardIndex(i)}
      ></div>
    )
  };

  return (
    <div className='pb-3 carousel-container'>
      <Slider {...settings} className='pb-3'>
        {values.map((value, index) => (
          <div 
            key={index} 
            className={`d-flex flex-column align-items-center justify-content-center text-center p-4 gap-3 card-value 
            ${index === centerCardIndex ? 'active' : ''}`}
          >
            <h3 className='regular-title m-0'>{value.title}</h3>
            <p className='light-text m-0 fs-6 value-content'>{value.content}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CardCarousel;