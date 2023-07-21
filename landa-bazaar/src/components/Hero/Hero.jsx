import React, { useState } from 'react';
import './Hero.css';
import slide from '../../images/slide1.png';
import slide2 from '../../images/slide2.webp';

function Hero() {
    const slides = [slide, slide2];
    const [currentSlide, setCurrentSlide] = useState(0);

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="container-fluid hero">
            <div className="slider">
                <div
                    className="slide"
                    style={{
                        transform: `translateX(-${currentSlide * 100}%)`,
                        transition: 'transform 1s ease',
                    }}
                >
                    {/* Slide 1 */}
                    <div className="container d-flex">
                        <div className="slider-text d-flex flex-column justify-content-center align-items-start">
                            <h3 className="secondary-heading">Smart Products</h3>
                            <h1 className="primary-heading">Winter Offer 2024 Collection</h1>
                            <button>SHOP NOW</button>
                        </div>
                        <div className="slider-image">
                            <img src={slide} alt="" />
                        </div>
                    </div>

                    {/* Slide 2 */}
                    <div className="container d-flex">
                        <div className="slider-text d-flex flex-column justify-content-center align-items-start">
                            <h3 className="secondary-heading">Smart Products</h3>
                            <h1 className="primary-heading">Summer Offer 2024 Collection</h1>
                            <button>SHOP NOW</button>
                        </div>
                        <div className="slider-image">
                            <img src={slide2} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <button className="chevron chevron-left" onClick={prevSlide}>
                <i className="fa-solid fa-chevron-left"></i>
            </button>
            <button className="chevron chevron-right" onClick={nextSlide}>
                <i className="fa-solid fa-chevron-right"></i>
            </button>
        </div>
    );
}

export default Hero;
