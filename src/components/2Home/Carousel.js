import React from "react";
import Carousel from "react-bootstrap/Carousel";

const Carousel1 = () => {
  return (
    <div className="Carousel_Container">
      <h3 className="Carousel_Text">Life Skills</h3>
      {/* <Carousel>
        <Carousel.Item>
          <img
            className="Carousel_WidthHeight"
            src="/img/carousel/BodyLanguage.jpeg"
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="Carousel_WidthHeight"
            src="/img/carousel/Eyes.jpeg"
            alt="First slide"
          />
        </Carousel.Item>
      </Carousel> */}
      <img
            className="Carousel_WidthHeight"
            src="/img/carousel/Awareness.jpeg"
            alt="First slide"
          />
      <h3 className="Carousel_Text">
        Read Body Language • Connect With Empathy
      </h3>
    </div>
  );
};

export default Carousel1;
