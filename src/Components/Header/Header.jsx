import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

//  Import Headerbooks from data
import { headerBooks } from '../../Data/Data';

// React Arrow Icons
import { GoArrowLeft, GoArrowRight } from 'react-icons/go';

// Shape SVG Import
import headerShape from '../../assets/header-shape.svg';

const Header = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = headerBooks.length;

  // Automatically move to the next slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  // Move to the next slide
  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  // Move to the previous slide
  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? totalSlides - 1 : prevSlide - 1
    );
  };

  return (
    <header>
      <div className="header-container">
        {/* Header Slider */}
        <div className="slider-container">
          <div className="slider-wrapper" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {headerBooks.map(({ title, info, img, btnLink }, index) => (
              <div className="slide" key={index}>
                <div className="header-wrapper headcontainer">
                  {/* Header Left */}
                  <div className="header-left">
                    <h1>{title}</h1>
                    <p dangerouslySetInnerHTML={{ __html: info }}></p>
                    <Link className="btn btn-border" to={btnLink}>
                      Learn More
                    </Link>
                  </div>

                  {/* Header Right */}
                  <div className="header-right">
                    <img src={img} alt="" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Slider Navigation */}
          <div className="slider-button">
            <div className="button-prev-slide slidebutton" onClick={goToPrevSlide}>
              <GoArrowLeft />
            </div>
            <div className="button-next-slide slidebutton" onClick={goToNextSlide}>
              <GoArrowRight />
            </div>
          </div>

          {/* Pagination */}
          <div className="headcontainer">
            <div className="swiper-pagination">
              {headerBooks.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Header Shape */}
        <div className="header-shape">
          <img src={headerShape} alt="" />
        </div>
      </div>
    </header>
  );
};

export default Header;
