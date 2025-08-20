import React from "react";
import NavbarV2 from "./global-components/navbar-v2";
import Footer_v1 from "./global-components/footer";
import Footer from './global-components/footer';

function Blog1() {
  return (
    <div >
        <NavbarV2/>
    <div className="min-vh-100  py-5 mt-20" >
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
    <div className="container-fluid" style={{ maxWidth: '1050px', margin: '0 auto', padding: '40px 20px' }} >
      <div className="row" >
          <p className=" mb-3" style={{ fontSize: '16px', lineHeight: '1.6' }}>
            From desert tones to deep olives, these are the color trends redefining interiors across the UAE.
          </p>
           <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.6' }}>
            In a city that thrives on luxury, light, and bold personal style, it's no surprise that color trends in Dubai are shifting dramatically in 2025. 
            Gone are the days of one-size-fits-all neutrals. This year, homeowners and designers alike are embracing character-rich palettes, tones that feel grounded, reflect 
            the natural surroundings, and most importantly, elevate your mood.
          </p>
          <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.6' }}>
            If you're planning a renovation or thinking of updating your interiors, here's your color forecast from Little Paradise Interiors, 
            rooted in global design direction, local preferences, and timeless appeal.
          </p>
        {/* Left Column - Text Content */}
        <div className="col-md-8 pe-5">
          {/* <p className="fst-italic mb-3" style={{ fontSize: '16px', lineHeight: '1.6' }}>
            From desert tones to deep olives, these are the color trends redefining interiors across the UAE.
          </p> */}

         

          

          {/* Section 1 */}
          <div className="mb-3">
            <h5 className="fw-bold mb-3" style={{ fontSize: '16px' }}>
              1. Desert Neutrals with Depth
            </h5>
            <p className="mb-2" style={{ fontSize: '16px', lineHeight: '1.4' }}>
              Think beyond beige, Dubai's take on neutrals is evolving.
            </p>
            <p className="mb-2" style={{ fontSize: '16px', lineHeight: '1.4' }}>
              What's In:
            </p>
            <ul className="mb-3" style={{ fontSize: '16px', lineHeight: '1.4' }}>
              <li>Warm taupe</li>
              <li>Sandy greys</li>
              <li>Dusty rose</li>
              <li>Buttery cream</li>
              <li>These shades feel earthy, layered, and timeless, perfect for villas, apartments, and commercial interiors alike.</li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="mb-4">
            <h5 className="fw-bold mb-3" style={{ fontSize: '16px' }}>
              2. Olive Green & Forest Biome
            </h5>
            <p className="mb-2" style={{ fontSize: '16px', lineHeight: '1.4' }}>
              Inspired by nature and biophilic design, deep greens are making their way into walls, upholstery, and even kitchens. They 
              pair beautifully with warm woods, brushed brass, and creamy stones.
            </p>
            <p className="mb-3" style={{ fontSize: '16px', lineHeight: '1.4' }}>
              These greens bring a grounded calm, ideal for high-rise homes and family spaces alike.
            </p>
          </div>

          {/* Section 3 */}
          <div className="mb-4">
            <h5 className="fw-bold mb-3" style={{ fontSize: '16px' }}>
              3. Brick, Terracotta & Rust Accents
            </h5>
            <p className="mb-2" style={{ fontSize: '16px', lineHeight: '1.4' }}>
              Bold without being loud, these sun-baked colors feel right at home in Dubai's light-filled spaces.
            </p>
            <p className="mb-2" style={{ fontSize: '16px', lineHeight: '1.4' }}>
              Perfect for:
            </p>
            <ul className="mb-3" style={{ fontSize: '16px', lineHeight: '1.4' }}>
              <li>Accent walls</li>
              <li>Upholstery</li>
              <li>Ceramic tiles</li>
              <li>They offer warmth, character, and a sense of place.</li>
            </ul>
          </div>
        </div>
        <div className="col-md-4 " >
          {/* Main Interior Image */}
          <div className="mb-3">
            <img
              src="assets/img/updatates/Blogs/b1-1.jpg"
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
            



        {/* Section 4 */}
          <div className="mb-4">
            <h5 className="fw-bold mb-3" style={{ fontSize: '16px' }}>
              4. Soft Black & Charcoal Details
            </h5>
            <p className="mb-2" style={{ fontSize: '16px', lineHeight: '1.4' }}>
              Yes, black is back but in softer, matte, moodier finishes. Charcoal trims, black fixtures, and deep-toned cabinetry offer contrast and sophistication without feeling
harsh.
            </p>
            <p className="mb-3" style={{ fontSize: '16px', lineHeight: '1.4' }}>
              It’s the secret to making modern interiors feel polished and intentional.
            </p>
          </div>

          {/* Section 5 */}
          <div className="mb-4">
            <h5 className="fw-bold mb-3" style={{ fontSize: '16px' }}>
              5. Sky Blues & Misty Tones
            </h5>
            <p className="mb-2" style={{ fontSize: '16px', lineHeight: '1.4' }}>
              Light blue tones are being used as cooling contrasts in desert-inspired homes. Sky, mist, and slate blue are making their way into bedrooms, bathrooms, and soft
furnishings bringing an effortless serenity that offsets Dubai’s warm climate.
            </p>
          </div>




<div className="col-md-8 pe-5">
 <div className="mb-6">
            <h5 className="fw-bold mb-3" style={{ fontSize: '16px' }}>
             What’s Out in 2025?
            </h5>
            <ul className="mb-3" style={{ fontSize: '16px', lineHeight: '1.4' }}>
              <li>Overly grey interiors with no contrast</li>
              <li>High-shine surfaces in unnatural tones</li>
              <li>Monochrome everything (unless layered with texture)</li>
              <li>Ultra-saturated jewel tones without context or balance</li>
            </ul>
          </div>
          
 {/* Section 6 */}
          <div className="mb-4">
            <h5 className="fw-bold mb-3" style={{ fontSize: '16px' }}>
              Your Palette Should Tell Your Story
            </h5>
            <p className="mb-2" style={{ fontSize: '16px', lineHeight: '1.4' }}>
              The best interiors don’t just follow trends, they reflect your lifestyle, location, and personality.
Dubai’s 2025 color direction is all about warmth, subtle drama, and livable beauty shades that feel timeless,
textured, and emotionally connected.
            </p>
          </div>

          {/* Section 7 */}
          <div className="mb-4">
            <h5 className="fw-bold mb-3" style={{ fontSize: '16px' }}>
              Want a Custom Palette for Your Home?
            </h5>
            <p className="mb-2" style={{ fontSize: '16px', lineHeight: '1.4' }}>
             At Little Paradise Interiors, we help you design a home that reflects both who you are and how you want to
feel, from color to layout to finishes.
            </p>
            <p className="mb-2" style={{ fontSize: '16px', lineHeight: '1.4' }}>
             Let us help you choose the perfect palette for your Dubai home.</p>
            <p className="mb-2" style={{ fontSize: '16px', lineHeight: '1.4' }}>
             Let’s bring color into your space, the right way.
            </p>
          </div>

</div>
            <div className="col-md-4 " >
          {/* Main Interior Image */}
          <div className="mb-3">
            <img
              src="assets/img/updatates/Blogs/b1-2.jpg"
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

        {/* Right Column - Images */}
        

        
      </div>
     <Footer/>
    </div>
    
  );
}

export default Blog1;