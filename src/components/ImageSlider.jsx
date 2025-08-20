import { ArrowLeft, ArrowRight } from 'lucide-react';
import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

const slides = [
  {
    id: 1,
    image: 'assets/img/Allimgs/sky/s-c.jpg',
    title: 'Sky',
    path: '/Sky'
  },
  {
    id: 2,
    image: 'assets/img/Allimgs/Picture113.webp',
    title: 'Hospital - Dialysis Center',
    path: '/PERLIYAS'
  },
  {
    id: 3,
    image: 'assets/img/Allimgs/Picture95.webp',
    title: 'TWL',
    path: '/TWL'
  },
  {
    id: 4,
    image: 'assets/img/updatates/project/rue1.jpg',
    title: 'Rué',
    path: '/Rue'
  },
  {
    id: 5,
    image: 'assets/img/Allimgs/Picture118.webp',
    title: 'Legacy',
    path: '/LEGACY'
  },
  {
    id: 6,
    image: 'assets/img/updatates/project/Aura.jpg',
    title: 'Aura ',
    path: '/Aura'
  },
  {
    id: 7,
    image: 'assets/img/allimgLP/Nova/n24.webp',
    title: 'Nova ',
    path: '/Nova1'
  }
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [imagesPerView, setImagesPerView] = useState(3);

  const updateImagesPerView = () => {
    const width = window.innerWidth;
    if (width < 640) setImagesPerView(1);
    else if (width < 1024) setImagesPerView(2);
    else setImagesPerView(3);
  };

  useEffect(() => {
    updateImagesPerView();
    window.addEventListener('resize', updateImagesPerView);
    return () => window.removeEventListener('resize', updateImagesPerView);
  }, []);

  const maxIndex = Math.max(0, slides.length - imagesPerView);

  const nextSlide = useCallback(() => {
    setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = useCallback(() => {
    setCurrentIndex(prev => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [isPlaying, nextSlide]);

  return (
    <div className="slider-container">
      <style>{`
        .slider-header h1 {
          text-align: start;
          font-size: 2.2rem;
          font-weight: 500;
          margin-top: 50px;
          margin-left: 250px;
          margin-bottom: 40px;
        }

        /* Responsive styles for h1 only */
        @media (max-width: 1200px) {
          .slider-header h1 {
            margin-left: 150px;
            font-size: 2.2rem;
          }
        }

        @media (max-width: 992px) {
          .slider-header h1 {
            margin-left: 100px;
            font-size: 2rem;
          }
        }

        @media (max-width: 768px) {
          .slider-header h1 {
            margin-left: 50px;
            font-size: 1.8rem;
          }
        }

        @media (max-width: 576px) {
          .slider-header h1 {
            margin-left: 20px;
            font-size: 1.8rem;
            margin-top: 30px;
            margin-bottom: 20px;
          }
        }

        @media (max-width: 400px) {
          .slider-header h1 {
            margin-left: 15px;
            font-size: 1.8rem;
          }
        }


        .slider-main {
          position: relative;
          height: 400px;
          width: 1050px;
          margin: 20px auto;
          padding: 0 16px;
          overflow: hidden;
        }

        .slider-track {
          display: flex;
          height: 100%;
          transition: transform 0.5s ease;
        }

        .slider-item {
          padding: 0 10px;
        }

        .image-wrapper {
          height: 100%;
          position: relative;
          overflow: hidden;
          border-radius: 4px;
        }

        .image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          // transition: transform 0.5s;
        }

        .image-wrapper:hover img {
          transform: scale(1.05);
        }

        .overlay {
          position: absolute;
          inset: 0;
          // background: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent);
          opacity: 0.6;
        }

        .content {
          position: absolute;
          bottom: 0px;
          left: 20px;
          top:-30px;
          color: white;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.3s;
        }

        .image-wrapper:hover .content {
          opacity: 1;
          transform: translateY(0);
        }

        .content h3 {
            font-size: 1.3rem;
            color: white;
          }

        .nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 44px;
          height: 44px;
          color: #CB4D29;
          font-size: 1.5rem;
          background: rgba(255, 255, 255, 0.5);
          border-radius: 50%;
          cursor: pointer;
          z-index: 10;
        }

        .nav.left {
          left: 10px;
        }

        .nav.right {
          right: 10px;
        }

        .nav:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }

        /* Responsive Heights */
        @media (max-width: 992px) {
          .slider-main {
            height: 320px;
          }
        }

        @media (max-width: 768px) {
          .slider-main {
            height: 260px;
          }
        }

        @media (max-width: 576px) {
          .slider-main {
            height: 420px;
            width:100%;
          }

          .slider-header h1 {
            font-size: 1.5rem;
          }
            .content {
          position: absolute;
          bottom: 0px;
          left: 20px;
          top:20px;
          color: white;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.3s;
        }
        }
      `}</style>

      <div className="slider-header">
        <h1>Featured Section</h1>
      </div>

      <div className="slider-main">
        <div
          className="slider-track"
          style={{
            transform: `translateX(-${currentIndex * (100 / slides.length)}%)`,
            width: `${(slides.length * 100) / imagesPerView}%`
          }}
        >
          {slides.map(slide => (
            <div
              key={slide.id}
              className="slider-item"
              style={{ width: `${100 / slides.length}%` }}
            >
              <Link to={slide.path}>
                <div className="image-wrapper">
                  <img src={slide.image} alt={slide.title} />
                  <div className="overlay" />
                  <div className="content">
                    <h3>{slide.title}</h3>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <ArrowLeft className="nav left" onClick={prevSlide} />
        <ArrowRight className="nav right" onClick={nextSlide} />
      </div>
    </div>
  );
};

export default ImageSlider;
