import React from "react";
import { Users, Award, Globe, Heart } from "lucide-react";

export default function AboutUs() {
  return (
    <>
      <style jsx>{`
        .about-hero {
          position: relative;
          height: 24rem;
          background: linear-gradient(to right, #0f172a, #334155);
          overflow: hidden;
        }
        
        .about-hero-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.4;
        }
        
        .about-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, rgba(119, 21, 21, 0.7), rgba(204, 146, 112, 0.7));
        }
        
        .about-hero-content {
          position: relative;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          padding: 0 1rem;
        }
        
        .about-hero-text {
          text-align: center;
          color: white;
        }
        
        .about-hero-title {
          font-size: 3rem;
          font-weight: bold;
          margin-bottom: 1rem;
          color:white;
        }
        
        .about-hero-subtitle {
          font-size: 1.25rem;
          color: #e5e7eb;
          max-width: 32rem;
        }
        
        .about-main-section {
          padding: 4rem 1rem;
        }
        
        .about-container {
          max-width: 72rem;
          margin: 0 auto;
        }
        
        .about-story-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          align-items: center;
          margin-bottom: 4rem;
        }
        
        .about-story-title {
          font-size: 2.2rem;
        font-weight: 480;
          margin-bottom: 1.5rem;
          color: black;
          // text-align:center;
          margin-bottom:50px;
        }
        
        .about-story-text {
          font-size: 1rem;
          line-height: 1.5;
          color: #374151;
          margin-bottom: 1.5rem;
        }
        
        .about-story-highlight {
          font-weight: 600;
          color: #d97706;
        }
        
        .about-image-container {
          position: relative;
          height:400px
        }
        
        .about-story-image {
          width: 100%;
          height: 20rem;
          object-fit: cover;
          border-radius: 0.5rem;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }
        
        .about-image-decoration {
          position: absolute;
          bottom: -1.5rem;
          right: -1.5rem;
          width: 8rem;
          height: 8rem;
          background: linear-gradient(to right, #f59e0b, #ea580c);
          border-radius: 0.5rem;
          opacity: 0.2;
        }
        
        .about-mission {
          background-color: #f9fafb;
          border-radius: 1rem;
          padding: 2rem;
          margin-bottom: 4rem;
        }
        
        .about-mission-content {
          text-align: center;
          max-width: 64rem;
          margin: 0 auto;
        }
        
        .about-mission-title {
          font-size: 1.875rem;
          font-weight: bold;
          margin-bottom: 1.5rem;
          color: black;
        }
        
        .about-mission-text {
          font-size: 1.25rem;
          line-height: 1.75;
          color: #374151;
        }
        
        .about-features-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          margin-bottom: 4rem;
        }
        
        .about-feature-item {
          text-align: center;
        }
        
        .about-feature-icon {
          background: linear-gradient(to right, #f59e0b, #ea580c);
          width: 4rem;
          height: 4rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1rem;
          transition: transform 0.3s ease;
        }
        
        .about-feature-item:hover .about-feature-icon {
          transform: scale(1.1);
        }
        
        .about-feature-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: black;
          margin-bottom: 0.5rem;
        }
        
        .about-feature-description {
          color: #6b7280;
        }
        
        .about-gallery {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        
        .about-gallery-item {
          position: relative;
          overflow: hidden;
          border-radius: 0.5rem;
        }
        
        .about-gallery-image {
          width: 100%;
          height: 16rem;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        
        .about-gallery-item:hover .about-gallery-image {
          transform: scale(1.05);
        }
        
        .about-gallery-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .about-gallery-item:hover .about-gallery-overlay {
          opacity: 1;
        }
        
        .about-gallery-text {
          position: absolute;
          bottom: 1rem;
          left: 1rem;
          color: white;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .about-gallery-item:hover .about-gallery-text {
          opacity: 1;
        }
        
        .about-gallery-label {
          font-weight: 600;
        }
        
        /* Responsive styles */
        @media (min-width: 768px) {
          .about-hero-title {
            font-size: 3.75rem;
          }
          
          .about-hero-subtitle {
            font-size: 1.5rem;
          }
          
          .about-main-section {
            padding: 4rem 2rem;
          }
          
          .about-story-grid {
            grid-template-columns: 1fr 1fr;
          }
          
          .about-story-text {
            font-size: 1.25rem;
          }
          
          .about-mission {
            padding: 3rem;
          }
          
          .about-features-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .about-gallery {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        
        @media (min-width: 1024px) {
          .about-main-section {
            padding: 4rem 4rem;
          }
          
          .about-features-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }
        
        @media (min-width: 1280px) {
          .about-main-section {
            padding: 4rem 8rem;
          }
        }
      `}</style>
      
      <div className="min-h-screen bg-white"  style={{marginTop:"-70px"}}>
     
      {/* Main Content */}
        <section className="about-main-section">
          <div className="about-container">
            <h3 className="about-story-title" >About Us</h3>
          {/* Company Story */}
            <div className="about-story-grid">
            <div>
                {/* <h2 className="about-story-title">About Us</h2> */}
                <p className="about-story-text">
                  At <span className="about-story-highlight">LPI</span>, we specialize in crafting interiors that are both elegant and efficient, blending aesthetics with everyday function. With a growing presence across India and the UAE, we offer end-to-end interior design solutions for homes, apartments, and boutique commercial spaces.
              </p>
                <p className="about-story-text">
                Each project reflects our client's personality and purpose, brought to life through curated materials, thoughtful detailing, and refined execution.  Backed by a passionate team and a commitment to quality, <span className="about-story-highlight">LPI</span> transforms interiors into timeless, expressive spaces built for how you live and work.
              </p>
              {/* <p className="about-mission-text">
                 
              </p> */}
            </div>
              <div className="about-image-container">
               <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '90%',
            objectFit: 'fill',
            zIndex: 0,
          }}
        >
          <source src='assets/img/allimgLP/about us.mp4' type="video/mp4" />
          Your browser does not support the video tag.
        </video>

                {/* <div className="about-image-decoration"></div> */}
            </div>
          </div>

          {/* Mission Statement */}
            {/* <div className="about-mission">
              <div className="about-mission-content">
                <h3 className="about-mission-title">Our Mission</h3>
                <p className="about-mission-text">
                  Backed by a passionate team and a commitment to quality, <span className="about-story-highlight">LPI</span> transforms interiors into timeless, expressive spaces built for how you live and work. We believe that great design should enhance your daily experience while reflecting your unique story.
              </p>
            </div>
          </div> */}

          {/* Key Features */}
            {/* <div className="about-features-grid">
              <div className="about-feature-item">
                <div className="about-feature-icon">
                <Users className="w-8 h-8 text-white" />
              </div>
                <h4 className="about-feature-title">Expert Team</h4>
                <p className="about-feature-description">Passionate designers with years of experience</p>
            </div>

              <div className="about-feature-item">
                <div className="about-feature-icon">
                <Award className="w-8 h-8 text-white" />
              </div>
                <h4 className="about-feature-title">Quality Focus</h4>
                <p className="about-feature-description">Commitment to excellence in every detail</p>
            </div>

              <div className="about-feature-item">
                <div className="about-feature-icon">
                <Globe className="w-8 h-8 text-white" />
              </div>
                <h4 className="about-feature-title">Global Reach</h4>
                <p className="about-feature-description">Serving clients across India and the UAE</p>
            </div>

              <div className="about-feature-item">
                <div className="about-feature-icon">
                <Heart className="w-8 h-8 text-white" />
              </div>
                <h4 className="about-feature-title">Personal Touch</h4>
                <p className="about-feature-description">Every space reflects your unique personality</p>
            </div>
          </div> */}

          {/* Image Gallery */}
            {/* <div className="about-gallery">
              <div className="about-gallery-item">
              <img 
                src="https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Luxury living room" 
                  className="about-gallery-image"
              />
                <div className="about-gallery-overlay"></div>
                <div className="about-gallery-text">
                 
              </div>
            </div>

              <div className="about-gallery-item">
              <img 
                src="https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Modern kitchen" 
                  className="about-gallery-image"
              />
                <div className="about-gallery-overlay"></div>
                <div className="about-gallery-text">
               
              </div>
            </div>

              <div className="about-gallery-item">
              <img 
                src="https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Elegant bedroom" 
                  className="about-gallery-image"
              />
                <div className="about-gallery-overlay"></div>
                <div className="about-gallery-text">
                 
              </div>
            </div>
          </div> */}
        </div>
      </section>
     
      </div>
    </>
  );
}