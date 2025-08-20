import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom'
import Btn from './Btn'
import QuoteModalTrigger from './QuoteModalTrigger'

export default function HomePage() {
  return (
    <div className="ltn__about-us-area pt-20 pb-10 ">
			  <div className="container">
			    <div className="row">
          <div className="col-lg-12 col-md-12">
					<div className="ltn__shop-details-inner ltn__page-details-inner mb-60">
          
    <div >
        <p id="responsive-text-project-bannerpage">Design that is <br/> guided  by  you,<br/>
tailored for you,<br/>
  and inspired by you.</p>
  <div className="btn-wrapper animated" id='responsive-text-project-title' >
   <div >
          {/* <Link to="/Architecture" className="buttons">Architecture Design</Link>&#160; */}
          <Link to="/Interior" className="buttons">Project</Link>&#160;
          <Link to="/Getin" className="buttons"> Get a Quote</Link>&#160;

          {/* >>> changed line */}
          {/* <QuoteModalTrigger className="buttons" />&#160; */}

          <Link to="/contact" className="buttons">Contact</Link>&#160;
        </div>
					
						</div>
  <div className="responsive-text " >
  {/* <div className="btn-wrapper animated" id="responsive-text-project-heading-main-btn">
  <Link to="/our-projects" className="theme-btn-1 btn btn-effect-1">Projects</Link>
  <Link to="/about" className="theme-btn-1 btn btn-effect-1">About</Link>
		</div> */}
    {/* <Btn/> */}
        </div>


        {/* <div className="ltn__property-details-gallery mb-30" >
						<div className="row">
							<div className="col-md-12 " id='responsive-text-project-heading'>
              <div class="slider-one">
  <div class="slider-one-image">
   
  </div>
</div>
<div class="slider-two">
  <div class="slider-two-image">
 
  </div>
</div>
<div class="slider-three">
  <div class="slider-three-image">
    
  </div>
</div>
<div class="slider-four">
  <div class="slider-four-image">
    
  </div>
</div>
						
							</div>





        <div className="ltn__property-details-gallery"  id='imgbanner'>
        <div className="row">
       
    </div>
    </div>
    </div>
    </div> */}
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}
