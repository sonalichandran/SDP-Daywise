// src/components/ImageSlider.js
import React, { useState } from 'react';

const slides = [
 ,

  'https://t3.ftcdn.net/jpg/05/85/50/46/360_F_585504652_mx2E5zY3SZxOE9yjuHArUIMWFweAgHY6.jpg',
  
  
  
  'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQlPjzRF-4PJcplaQ1xrBuAz1VOwh0ofHwnfVFdi0SZAYXHZ-iD3NKKTP99zEW1akP6vj6uqz3KrK7Z3tSZmLMQPHg50fWXz_c7zKrO2gO9czmUQRQQpgS9&usqp=CAE',
  'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR6DYjw3iqjtOhoGzUUHOD5bkh3NbJwQvqkvy1xqt7A-pcIO7CHbO1JnCwNLrpH4X4zxv6VqWc6LRIA18AuMvKBKE7GTmeIXw&usqp=CAE',
  'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQxVhqSlp2GBip67FDnE2aRUz9IhgL2H7RP7U53LTadytXUFQmwP4IZanKdQyhWsHkY8R5XN2I7YIMdlGtiURQR5RpDiM7q2zDVnxfSLzsVjofR5BTgXon6jQ&usqp=CAE',
  'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT94-fuZBmwmOV1RTkm43NNAN8yHWLTnh236FqL3F11isRt018gOztp8LZheSRyZLg7Jrsam1hhhkbp-KYw7VtV9xqDKS2prw5cwkbqnNlRDN6TE_rCG6BV&usqp=CAE',
  'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQCbhKNU9ZbWf-COlJ7tRztTOrBUeAk7wlWx0oQyFHudBL_wKHTnJWgI5xgprZ1wFudCJc8V3y2J2SSQPQZjPll8GXVLd1GpvfPOPzhrbIsr5JfwEtJL-HI8Q&usqp=CAE',
  'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSftNBoivQOENTvnVhGwIrv2RerF9s78NtEELjqMRBHXe_k-9f1kfmfnDByNVTnFYOnyffUbcgmMDKkd_sf2NYeQx_gayo6bAo-ek5lVpOmTGQZsOdy_PrqJg&usqp=CAE',
  'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSwa0ZVizgdb26CGf6IMTk8jMESKu6BEujQxoJcDMg6ACyYlOqPbi3QsWqTphBhtCaBtolFBDCCXTT0sC5pHcllMwZMl_XJYJKzxd9lkqWz&usqp=CAE'
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full max-w mx-auto overflow-hidden items-center justify-center flex">
      <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide}
            alt={`Slide ${index}`}
            className="w-full h-96"
          />
        ))}
      </div>
      <button
        onClick={goToPreviousSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2  p-2 rounded-full"
      >
        &lt;
      </button>
      <button
        onClick={goToNextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full"
      >
        &gt;
      </button>
    </div>
  );
};

export default ImageSlider;
