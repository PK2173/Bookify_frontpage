import React, { useState } from 'react';
import './FeatureBooks.css';

// Import title props
import TitileTypeOne from '../../UI/TitileTypeOne/TitileTypeOne';
import { featuredBooksData } from '../../Data/Data';
import { Link } from 'react-router-dom';

// Import React Icon............
import { BsArrowReturnRight } from 'react-icons/bs';


const FeatureBooks = () => {
  const [currentSlide, setCurrentSlide] = useState(0);



  return (
    <section className='Featured'>
      <div className="container features-book-contnainer">
        {/* Title props */}
        <TitileTypeOne TitleTop={'Some Quality Time'} Title={'Featured Books'} />

        {/* FeaturedBooks Slider */}
        <div className="featuredBooks-slider-container">
          <div
            className="fbslider-wrapper"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
              transition: 'transform 0.5s ease-in-out',
            }}
          >
            {featuredBooksData.map(({ img, imgLlink, name, nameLink, writer, price }, index) => (
              <div key={index} className="featurebook-box">
                <Link to={imgLlink} className='featurebook'>
                  <img src={img} alt={`Cover of ${name}`} />
                </Link>
                <div className="featurebooks-info">
                  <Link to={nameLink}>{name}</Link>
                  <div>
                    <small>{writer}</small>
                  </div>
                  <h5><span>{price}</span></h5>
                </div>
              </div>
            ))}
          </div>
            <div className="feature-border container"></div>
            {/* ................swiper pagination................... */}
            <div className="swiper-pagination"></div>

            {/* ............ view all products button.......... */}
            <Link to='*' className='btn feature-btn'>View all products
            <BsArrowReturnRight /></Link>

        </div>
      </div>
    </section>
  );
};

export default FeatureBooks;
