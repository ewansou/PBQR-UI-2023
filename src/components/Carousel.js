import React from "react";
import { Carousel } from "react-responsive-carousel";
import devSlide1 from "../images/dev-slide1.jpg";
import devSlide2 from "../images/dev-slide2.jpg";
import devSlide3 from "../images/dev-slide3.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
function LandingPageCarousel() {
    return (
        <Carousel
            autoPlay
            interval={5000}
            showStatus={false}
            showThumbs={false}
            showArrows={false}
            stopOnHover={false}
            infiniteLoop={true}
            swipeable={false}
            showIndicators={false}
        >
            <div>
                <img alt="" src={devSlide1} />
            </div>
            <div>
                <img alt="" src={devSlide2} />
            </div>
            <div>
                <img alt="" src={devSlide3} />
            </div>
        </Carousel>
    );
}

export default LandingPageCarousel;