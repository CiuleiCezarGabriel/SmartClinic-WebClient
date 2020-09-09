
import React from 'react';
import { Slide } from 'react-slideshow-image';

function Slideshow() {
  const images = [
    "/src/assets/images/slider/doc1.jpg",
    "/src/assets/images/slider/doc2.jpg",
    "/src/assets/images/slider/doc3.jpg"
  ];
  
  const fadeProperties = {
    duration: 3000,
    pauseOnHover: true
  };

  return (
    <div>
      <h2>Fade Effect</h2>
      <div className="slide-container">
        <Slide {...fadeProperties}>
          <div className="each-fade">
            <div>
              <img src={fadeImages[0]}></img>
            </div>
            <p>First Slide</p>
          </div>
          <div className="each-fade">
            <p>Second Slide</p>
            <div>
              <img src={fadeImages[1]}></img>
            </div>
          </div>
          <div className="each-fade">
            <div>
              <img src={fadeImages[2]}></img>
            </div>
            <p>Third Slide</p>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Slideshow;