import React from "react";
import NavbarV2 from "./global-components/navbar-v2";
import Footer_v1 from "./global-components/footer";
import Footer from './global-components/footer';

function Blog2() {
  return (
    <div>
        <NavbarV2/>
    <div className="min-vh-100  py-5 mt-20">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="position-relative">
              {/* Main Image Container */}
              <div className="position-relative overflow-hidden  ">
                <img
                  src="assets/img/updatates/Blogs/blg-home.jpg"
                  alt="Color Forecast 2025 - Modern Interior Design"
                  className="img-fluid w-100"
                  style={{ height: '500px' ,objectFit:'cover'}}
                />
                
                {/* Gradient Overlay */}
                <div 
                  className="position-absolute top-0 start-0 w-100 h-100"
                  style={{
                    background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%, transparent 100%)'
                  }}
                ></div>
              </div>

              {/* Content Card */}
              <div 
                className="position-absolute bg-white  p-2 shadow-lg border "
                style={{
                  bottom: '-6rem',
                  margin: '0 2rem',
                  backdropFilter: 'blur(10px)',
                  width:'85%',
                  left:'2.5rem'
                }}
              >
               

                {/* Main Heading */}
                <h4 className="text-muted text-center fw-normal"><small >INTERIOR DESIGN</small></h4>
                <h2 className="fw-normal text-dark mb-1 lh-sm text-center">
                  Dubai's Color Forecast for 2025: From Olive to Terracotta, Here's What's In
                </h2>
                <h4 className="text-muted text-center fw-normal"><small >BY LITTLE PARADISE INTERIORS</small></h4>

                {/* Author and Meta Info */}
                <div className="d-flex align-items-center justify-content-between pt-3 ">
                  <div className="d-flex align-items-center">
                  
                 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid" style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
      <div className="row">
          <p className="fst-italic mb-3" style={{ fontSize: '16px', lineHeight: '1.6' }}>
            Designers are saying goodbye to beige-on-beige boredom and hello to layered luxury, conscious living, and bold personality.
          </p>

           {/* Section 1 */}
          <div className="mb-4">
            <h5 className="fw-bold mb-3" style={{ fontSize: '16px' }}>
              What's Trending in 2025?
            </h5>
            <p className="mb-2" style={{ fontSize: '16px', lineHeight: '1.4' }}>
              Dubai has always loved luxury but 2025 is dialing it in with purpose. The post-minimalist era is here, and residents are ready to move past sterile showrooms into
spaces that actually feel like home.
            </p>
            <p className="mb-3" style={{ fontSize: '16px', lineHeight: '1.4' }}>
              Whether you’re renovating, redecorating, or just keeping up, here’s what’s in and what’s officially over.
            </p>
          </div>
           
        {/* Left Column - Text Content */}
        <div className="col-md-8 pe-5">
          {/* <p className="fst-italic mb-3" style={{ fontSize: '16px', lineHeight: '1.6' }}>
            From desert tones to deep olives, these are the color trends redefining interiors across the UAE.
          </p> */}

          

          {/* Section 1 */}
          <div className="mb-3">
            <h5 className="fw-bold mb-3" style={{ fontSize: '16px' }}>
             IN: Warm Minimalism with Personality
            </h5>
            <p className="mb-2" style={{ fontSize: '16px', lineHeight: '1.4' }}>
              Clean lines aren’t going anywhere, but 2025’s take on minimalism is softer, moodier, and far more personal.
            </p>
            <p className="mb-2" style={{ fontSize: '16px', lineHeight: '1.4' }}>
              Think:
            </p>
            <ul className="mb-3" style={{ fontSize: '16px', lineHeight: '1.4' }}>
              <li>Muted earth tones (terracotta, olive, clay)</li>
              <li>Soft curves over hard edges</li>
              <li>Vintage statement pieces mixed with modern finishes</li>
              <li>Layered lighting (no more ceiling lights only!)</li>
              {/* <li>These shades feel earthy, layered, and timeless, perfect for villas, apartments, and commercial interiors alike.</li> */}
            </ul>
          </div>

          {/* Section 2 */}
          <div className="mb-4">
            <h5 className="fw-bold mb-3" style={{ fontSize: '16px' }}>
              OUT: Cold Greys and Flat White Walls
            </h5>
            <p className="mb-2" style={{ fontSize: '16px', lineHeight: '1.4' }}>
             What once felt sleek now feels soulless. Sterile palettes are being replaced by rich textures, meaningful color, and
materials with character.
            </p>
            <p className="mb-3" style={{ fontSize: '16px', lineHeight: '1.4' }}>
              No one wants their apartment to look like a waiting room anymore, especially in a city like Dubai that thrives on
storytelling and culture.
            </p>
          </div>

          {/* Section 3 */}
          <div className="mb-4">
            <h5 className="fw-bold mb-3" style={{ fontSize: '16px' }}>
              IN: Sustainable and Conscious Materials
            </h5>
            <p className="mb-2" style={{ fontSize: '16px', lineHeight: '1.4' }}>
              Design in 2025 is not just about beauty, it's about impact. Homeowners in Dubai are choosing:
            </p>
            <p className="mb-2" style={{ fontSize: '16px', lineHeight: '1.4' }}>
              Expect to see:
            </p>
            
            <ul className="mb-3" style={{ fontSize: '16px', lineHeight: '1.4' }}>
              
              <li>FSC-certified wood</li>
              <li>VOC-free paints</li>
              <li>Natural stone over plastic laminates</li>
              <li>Local sourcing where possible</li>
            </ul>
            
          </div>
        </div>
        <div className="col-md-4 " >
          {/* Main Interior Image */}
          <div className="mb-3">
            <img
              src="assets/img/updatates/Blogs/b2-1.jpg"
              alt="Modern Interior with Neutral Tones"
              className="img-fluid w-100"
              style={{ 
                height: 'auto', 
                objectFit: 'cover',
                // borderRadius: '8px'
              }}
            />
          </div>
          </div>
            



        {/* Section 2 */}
          <div className="mb-4">
            <h5 className="fw-bold mb-3" style={{ fontSize: '16px' }}>
              OUT: Fast Furniture & Disposable Design
            </h5>
            <p className="mb-2" style={{ fontSize: '16px', lineHeight: '1.4' }}>
             Low-cost, trendy furniture that lasts a year or two? That’s on its way out. Dubai’s 2025
homeowners are investing in quality over quantity, choosing pieces that grow with their lifestyle
(and hold resale value).
            </p>
            
          </div>

         {/* Section 3 */}
          <div className="mb-4">
            <h5 className="fw-bold mb-3" style={{ fontSize: '16px' }}>
              IN: Statement Marble, Bold Stone & Artisan Finishes
            </h5>
            <p className="mb-2" style={{ fontSize: '16px', lineHeight: '1.4' }}>
              From bookmatched stone slabs to tactile handmade tiles, custom detail is everything this year.
            </p>
            
            <ul className="mb-3" style={{ fontSize: '16px', lineHeight: '1.4' }}>
              
              <li>Dramatic veined marble</li>
              <li>Stone-wrapped islands</li>
              <li>Fluted panels</li>
              <li>Handmade zellige tiles and tadelakt plaster</li>
            </ul>
            <p className="mb-2" style={{ fontSize: '16px', lineHeight: '1.4' }}>
             These materials turn homes into art pieces.
            </p>
          </div>

          {/* Section 2 */}
          <div className="mb-4">
            <h5 className="fw-bold mb-3" style={{ fontSize: '16px' }}>
              OUT: Overdone Gold and Mirror Accents
            </h5>
            <p className="mb-2" style={{ fontSize: '16px', lineHeight: '1.4' }}>
             Glossy finishes are fading. Mirror walls, gold trims, and mirrored furniture feel dated in today’s understated luxe design
landscape.
            </p>
            
          </div>
 <div className="mb-6">
            <h5 className="fw-bold mb-3" style={{ fontSize: '16px' }}>
             IN: Interior Wrapping & Space Transformations
            </h5>
            <p className="mb-2" style={{ fontSize: '16px', lineHeight: '1.4' }}>
             For renters and cost-conscious homeowners, interior wrapping is taking off. It allows you to revamp:
            </p>
            <ul className="mb-3" style={{ fontSize: '16px', lineHeight: '1.4' }}>
              <li>Kitchen cabinets</li>
              <li>Wardrobes</li>
              <li>Countertops</li>
              <li>Without breaking the bank or damaging original surfaces.</li>
            </ul>
            <p className="mb-2" style={{ fontSize: '16px', lineHeight: '1.4' }}>
             It’s the perfect hack for transforming a space without full renovation.
            </p>
          </div>
       




<div className="col-md-8 pe-5">
      
         
 <div className="mb-6">
            <h5 className="fw-bold mb-3" style={{ fontSize: '16px' }}>
             OUT: Thinking You Need More Space to Live Better
            </h5>
            <p className="mb-2" style={{ fontSize: '16px', lineHeight: '1.4' }}>
             2025 design in Dubai is all about smart use of space, not square footage. Designers are:
            </p>
            <ul className="mb-3" style={{ fontSize: '16px', lineHeight: '1.4' }}>
              <li>Removing unnecessary walls</li>
              <li>Adding multifunctional furniture</li>
              <li>Maximizing vertical storage</li>
              <li>Creating illusion through color and light</li>
            </ul>

          </div>

           {/* Section 2 */}
          <div className="mb-4">
            
            <h5 className="fw-bold mb-3" style={{ fontSize: '16px' }}>
              How You Live <span >{">"}</span> What’s In Style
            </h5>
            <p className="mb-2" style={{ fontSize: '16px', lineHeight: '1.4' }}>
             Interior design in Dubai is no longer about what’s trendy, it’s about what’s true to your lifestyle. Whether you’re revamping a villa in Jumeirah or personalizing an
apartment in Business Bay, 2025’s trends are about authenticity, longevity, and soul.
            </p>
            
          </div>
           {/* Section 2 */}
          <div className="mb-4">
            <h5 className="fw-bold mb-3" style={{ fontSize: '16px' }}>
              Want to Stay Ahead of the Curve?
            </h5>
            <p className="mb-2" style={{ fontSize: '16px', lineHeight: '1.4' }}>
             At Little Paradise Interiors, we don’t just follow trends, we tailor them to fit you. Our design team specializes in residential and commercial interiors across the UAE,
blending form, function, and future-proof style.
Let’s design something timeless, together.
            </p>
             <p className="mb-2" style={{ fontSize: '16px', lineHeight: '1.4' }}>Click here to get a quote now.</p>
            
          </div>
          


          

</div>
            <div className="col-md-4 " >
          {/* Main Interior Image */}
          <div className="mb-3">
            <img
              src="assets/img/updatates/Blogs/b2-2.jpg"
              alt="Modern Interior with Neutral Tones"
              className="img-fluid w-100"
              style={{ 
                height: 'auto', 
                objectFit: 'cover',
                // borderRadius: '8px'
              }}
            />
          </div>
          </div>
          </div>
      </div>
     <Footer/>
    </div>
    
  );
}

export default Blog2;