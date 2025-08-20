import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { FaChevronCircleLeft, FaChevronCircleRight, FaDotCircle, FaCircle } from 'react-icons/fa';

const images = [
  "https://images.unsplash.com/photo-1518640027989-a30d5d7e498e?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=f9575732a498c98486879d7000ab1d47",
  "https://images.unsplash.com/photo-1505843378597-b96befae716e?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=9e69634f39ec7c08514fef902cfc85ac",
  "https://images.unsplash.com/photo-1471138406156-7a89e687a062?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=7820fc816715b37942a793360b785c60"
];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const time = 5000; // default time for auto slideshow

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(currentIndex >= images.length - 1 ? 0 : currentIndex + 1);
    }, time);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const showImage = (index) => {
    setCurrentIndex(index);
  };

  const prevImage = () => {
    setCurrentIndex(currentIndex <= 0 ? images.length - 1 : currentIndex - 1);
  };

  const nextImage = () => {
    setCurrentIndex(currentIndex >= images.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="container-fluid position-relative bg-gradient" style={{ height: '100vh', overflow: 'hidden' }}>
      {/* <div className="position-absolute top-50 start-0 translate-middle-y" style={{ left: '2%' }}>
        <FaChevronCircleLeft onClick={prevImage} className="text-cornsilk fs-1 opacity-50 hover-opacity-100 cursor-pointer" />
      </div> */}
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt=""
          className="w-100 h-100 position-absolute top-0 start-0"
          style={{ display: currentIndex === index ? 'block' : 'none', objectFit: 'cover' }}
        />
      ))}
      
    </div>
  );
};

export default Slideshow;
