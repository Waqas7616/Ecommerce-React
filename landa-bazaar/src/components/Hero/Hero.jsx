import React, { useState } from 'react';
import './Hero.css';
import slide from '../../images/slide1.png';
import slide2 from '../../images/slide2.webp';

function Hero() {
    const slides = [slide, slide2];
    var [currentSlide, setCurrentSlide] = useState(0);

    const Slide = () => {
        const currentImage = slides[currentSlide];
        return (
            <div className="container d-flex">
                <div className="slider-text d-flex flex-column justify-content-center align-items-start">
                    <h3 className="secondary-heading">
                        Smart Products
                    </h3><h1 className="primary-heading">
                        {currentSlide === 0 ? 'Winter Offer 2024 Collection ' : 'Summer Offer 2024 Collection'}
                    </h1>
                    <button>SHOP NOW</button>
                </div>

                <div className="slider-image">
                    <img src={currentImage} alt="" />
                </div>
            </div>

        );
    }
    const prev = () => {
        if (currentSlide > 0) {
            setCurrentSlide((previous) => previous - 1)
        } else {
            setCurrentSlide(slides.length - 1)
        }
    }

    const next = () => {
        if (currentSlide < slides.length - 1) {
            setCurrentSlide((previous) => previous + 1)
        } else {
            setCurrentSlide(0)
        }
    }
    return (
        <div className="container-fluid hero vh-100">
            <div className="slider">

                <Slide />
            </div>

            <button className="chevron chevron-left" onClick={prev}>
                <i className="fa-solid fa-chevron-left"></i>
            </button>
            <button className="chevron chevron-right" onClick={next}>
                <i className="fa-solid fa-chevron-right"></i>
            </button>
        </div>
    );
}

export default Hero;
