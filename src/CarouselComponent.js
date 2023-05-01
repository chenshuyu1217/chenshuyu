import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // 引入样式
import './CarouselComponent.css'; // 引入我们刚才创建的样式文件

const CarouselComponent = () => {
  return (
    <div className="carousel-container">
      <Carousel
        autoPlay
        interval={3000}
        infiniteLoop
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        swipeable
        dynamicHeight
        emulateTouch
      >
        <div>
          <img className="carousel-image" src="https://s2.loli.net/2023/01/08/oNixg71I6jdeSLH.jpg" alt="Slide 1" />
        </div>
        <div>
          <img className="carousel-image" src="https://via.placeholder.com/900x300" alt="Slide 2" />
        </div>
        <div>
          <img className="carousel-image" src="https://via.placeholder.com/900x300" alt="Slide 3" />
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
