import React, { useState, useEffect } from 'react';
// import './WelcomeCard.css'; // Import your CSS file

const WelcomeCard = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    'assets/img/Allimgs/23.png',
    '/assets/img/Allimgs/7.png',
    'assets/img/Allimgs/63.jpg', // Replace with your third image URL
    'assets/img/Allimgs/Picture40.webp'  // Replace with your fourth image URL
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = (currentImageIndex + 1) % images.length;
      setCurrentImageIndex(newIndex);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [currentImageIndex, images.length]);

  const nextSlide = () => {
    const newIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(newIndex);
  };

  return (

    <div className="ltn__shop-details-area pb-10">
				<div className="container">
				<div className="row">
					<div className="col-lg-12 col-md-12" style={{fontFamily:"GT Walsheim, sans-serif"}}>
					<div className="ltn__shop-details-inner ltn__page-details-inner mb-60">
					

          



         
    <div className="card-wrapper">
      
      {/* <div className="shade"></div> */}
      <div className="ltn__property-details-gallery ">
						<div className="row">
							<div className="col-md-12" id='responsive-text-project-heading'>
      <div className="card__bg__image">
        <img
          alt={`Slide ${currentImageIndex + 1}`}
          src={images[currentImageIndex]}
        />
        {/* <div className="slide-buttons">
          <button onClick={prevSlide}>&#8249;</button>
          <button onClick={nextSlide}>&#8250;</button>
        </div> */}
      </div>
      </div>
      </div>
      </div>

    </div>
    </div>
          </div>
          </div>
          </div>
          </div>
  );
};

export default WelcomeCard;
