import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class ShopDetails16 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="ltn__shop-details-area pb-10">
				<div className="container">
				<div className="row">
					<div className="col-lg-12 col-md-12">
					<div className="ltn__shop-details-inner ltn__page-details-inner mb-60">
					
						<h2 id='responsive-text-project-heading'> 
                        </h2>
					 <label id='responsive-text-project-title'><span className="ltn__secondary-color"><img src='assets/img/Allimgs/pin.png' /></span>Basement / Mangalore
                     </label> 


					 <div className="ltn__property-details-gallery mb-30" id='responsive-text-project-title'>
<div className="row">
    <div className="col-md-12">
	<a >
								<img className="mb-30" src={publicUrl+"assets/img/Allimgs/Picture28.webp"} alt="Image" />
							</a>

    </div>
   
</div>
</div>
<h4 className="title-2"  id='responsive-text-project-heading'>   <span style={{fontSize:'20px'}}>Starry night/ Optic Fiber lights
</span><br/>SkyLight
  
</h4>
<div className="ltn__property-details-gallery mb-30" id='responsive-text-project-title'>
<div className="row">
    <div className="col-md-12">
	<a >
								<img className="mb-30" src={publicUrl+"assets/img/Allimgs/Picture29.webp"} alt="Image" />
							</a>

    </div>
   
</div>
</div>
<h4 className="title-2"   id='responsive-text-project-heading'>Togo Inspired /Statuario Inspired
                            </h4>

<p id='responsive-text-project-title'>Opting for a palette of grey, white, and black coupled with natural materials, we ensured a subtle backdrop that wouldn't overshadow the main attraction – the gaming system. The Lazyboy became the cornerstone of comfort.
</p>
<div className="ltn__property-details-gallery mb-30" id='responsive-text-project-title'>
<div className="row">
    <div className="col-md-6">
   
	{/* <a href={publicUrl+"assets/img/Allimgs/Picture30.webp"} data-rel="lightcase:myCollection"> */}
								<img className="mb-30" src={publicUrl+"assets/img/Allimgs/Picture30.webp"} alt="Image" />
							{/* </a> */}
							{/* <a href={publicUrl+"assets/img/Allimgs/Picture32.webp"} data-rel="lightcase:myCollection"> */}
								<img className="mb-30" src={publicUrl+"assets/img/Allimgs/Picture32.webp"} alt="Image" />
							{/* </a> */}
    </div>
    <div className="col-md-6">
	{/* <a href={publicUrl+"assets/img/Allimgs/Picture33.webp"} data-rel="lightcase:myCollection"> */}
								<img className="mb-30" src={publicUrl+"assets/img/Allimgs/Picture33.webp"} alt="Image" />
							{/* </a> */}
   {/* <a href={publicUrl+"assets/img/Allimgs/Picture31.webp"} data-rel="lightcase:myCollection"> */}
								<img className="mb-30" src={publicUrl+"assets/img/Allimgs/Picture31.webp"} alt="Image" />
							{/* </a> */}
							

    </div>
   
</div>
</div>

<h4 className="title-2"   id='responsive-text-project-heading'><span  style={{fontSize:'20px'}}>Whimsical / Storage
                            </span><br/>Chess Inspired


                            </h4>

<p id='responsive-text-project-title' >Bespoke open storage unit, inspired by chess motifs, subtly showcased the client's passion for the game.
</p>
<div className="ltn__property-details-gallery mb-30" id='responsive-text-project-title'>
<div className="row">
    <div className="col-md-4">
	{/* <a href={publicUrl+"assets/img/Allimgs/Picture34.webp"} data-rel="lightcase:myCollection"> */}
								<img className="mb-30" src={publicUrl+"assets/img/Allimgs/Picture34.webp"} alt="Image" />
							{/* </a> */}

    </div>
    <div className="col-md-8">
	{/* <a href={publicUrl+"assets/img/Allimgs/Picture35.webp"} data-rel="lightcase:myCollection"> */}
								<img className="mb-30" src={publicUrl+"assets/img/Allimgs/Picture35.webp"} alt="Image" />
							{/* </a> */}
							

    </div>
   
</div>
</div>



						{/* <h4 className="title-2">Estatehouse</h4>
						<p>Nestled within a scenic landscape, our double-sized house layout offers an enriched ecosystem and enhanced security. Planned around the natural contours, each residence enjoys privacy while fostering community engagement through landscaped areas, footpaths, and street lights.</p>
						<p>Residents also have access to a clubhouse featuring amenities such as a pool, indoor game area, and gym. These facilities provide opportunities for fun, stress relief, and quality time with loved ones.</p>
						{/* <p>Magnanimous First of its kind :-
                        It is the first of its kind, offering unparalleled innovation, luxury, and community-focused amenities for an extraordinary lifestyle experience.
                        </p> */}
                        {/* <p id='responsive-text-project-title' className="col-lg-10 col-md-12">The optical store focus on making the sunglasses the star attraction. The interior is charechterized by fluidity and movement, achieved through curved display units that weave through the space. Neutral tones provide a backdrop, allowing the sunglasses to stand out, accentuated by lighting.
                        </p> */}
						{/* <h4 className="title-2">Property Detail</h4>   */}
						{/* <div className="property-detail-info-list section-bg-1 clearfix mb-60">                           */}
						{/* <ul>
							<li><label>Area :</label> <span>3760 sq. ft</span></li>
							<li><label>Location </label> <span> Mangaluru, Karnataka</span></li>
							<li><label>Scope :</label> <span>Design Visualisation</span></li>
							
						</ul> */}
						{/* <ul>
							<li><label>Lot Area:</label> <span>HZ29 </span></li>
							<li><label>Lot dimensions:</label> <span>120 sqft</span></li>
							<li><label>Beds:</label> <span>7</span></li>
							<li><label>Price:</label> <span>2</span></li>
							<li><label>Property Status:</label> <span>For Sale</span></li>
						</ul> */}
						{/* </div> */}
						
						{/* <h4 className="title-2" id='#responsive-text-project-heading '>From Our Gallery</h4> */}
						<div className="ltn__property-details-gallery mb-30">
						<div className="row">
							<div className="col-md-10" id="responsive-text-project-heading">
							{/* <a >
								<img className="mb-30" src={publicUrl+"assets/img/Allimgs/Picture28.webp"} alt="Image" />
							</a> */}
							{/* <a href={publicUrl+"assets/img/others/15.jpg"} data-rel="lightcase:myCollection">
								<img className="mb-30" src={publicUrl+"assets/img/others/15.jpg"} alt="Image" />
							</a> */}
							</div>
							{/* <div className="col-md-6">
							<a href={publicUrl+"assets/img/others/16.jpg"} data-rel="lightcase:myCollection">
								<img className="mb-30" src={publicUrl+"assets/img/others/16.jpg"} alt="Image" />
							</a>
							</div> */}


{/* <h4 className="title-2"  id='responsive-text-project-heading'>   <span style={{fontSize:'20px'}}>Starry night/ Optic Fiber lights
</span><br/>SkyLight
  
</h4> */}

{/* <p className="col-lg-10 col-md-12"  id='responsive-text-project-title'>The vision of the eyewear brand was to bring dynamic eyewear designs that are not just for the present but the future too. 
                        </p> */}
                        {/* <p className="col-lg-10 col-md-12"  id='responsive-text-project-title'>The space required to be designed was a narrow long space. It needed to be broken down into smaller sections. The futuristic vision of the brand as well as the requirement of the space gave rise to the introduction of curves in the design. The curves broke the homogeneity of the space as well as it created pockets for displaying different ranges of eyewear. It guides the movement of the user. 
                        </p>
                        <p className="col-lg-10 col-md-12"  id='responsive-text-project-title'>Movement being an element of futurism, is also a metaphor for forward motion.
 
                        </p> */}
                        <div className="col-md-10" id="responsive-text-project-heading">
							{/* <a >
								<img className="mb-30" src={publicUrl+"assets/img/Allimgs/Picture29.webp"} alt="Image" />
							</a> */}
							{/* <a href={publicUrl+"assets/img/others/15.jpg"} data-rel="lightcase:myCollection">
								<img className="mb-30" src={publicUrl+"assets/img/others/15.jpg"} alt="Image" />
							</a> */}
							</div>






                            {/* <h4 className="title-2"   id='responsive-text-project-heading'>Togo Inspired /Statuario inspired
                            </h4>

<p className="col-lg-10 col-md-12"  id='responsive-text-project-title'>Opting for a palette of grey, white, and black coupled with natural materials, we ensured a subtle backdrop that wouldn't overshadow the main attraction – the gaming system. The Lazyboy became the cornerstone of comfort.
</p> */}
                        {/* <p id='responsive-text-project-title' className="col-lg-10 col-md-12">This intentional contrast ensures that customers intuitively identify the transaction area, while also serving the functional need of a flat, stable surface essential for efficient transactions.   
 
                        </p>
                        <p className="col-lg-10 col-md-12" id='responsive-text-project-title'>Placement at the central axis enhances accessibility, making it a focal point for both customers and staff.

 
                        </p> */}
                      




                            {/* <h4 className="title-2"   id='responsive-text-project-heading'><span  style={{fontSize:'20px'}}>Whimsical / Storage
                            </span><br/>Chess Inspired


                            </h4>

<p id='responsive-text-project-title' className="col-lg-10 col-md-12">Bespoke open storage unit, inspired by chess motifs, subtly showcased the client's passion for the game.
</p> */}
                        
 
                       
                        


						</div>
						</div>
						
						
						
						
					
					</div>
					</div>
					<div className="col-lg-4">
					<aside className="sidebar ltn__shop-sidebar ltn__right-sidebar---">
						{/* Author Widget */}
						
						{/* Search Widget */}
						
						{/* Form Widget */}
						
						{/* Top Rated Product Widget */}
					
						{/* Menu Widget (Category) */}
						
						{/* Popular Product Widget */}
						
						{/* Popular Post Widget */}
						
						{/* Social Media Widget */}
						{/* <div className="widget ltn__social-media-widget">
						<h4 className="ltn__widget-title ltn__widget-title-border-2">Follow us</h4>
						<div className="ltn__social-media-2">
							<ul>
							<li><a href="#" title="Facebook"><i className="fab fa-facebook-f" /></a></li>
							<li><a href="#" title="Twitter"><i className="fab fa-twitter" /></a></li>
							<li><a href="#" title="Linkedin"><i className="fab fa-linkedin" /></a></li>
							<li><a href="#" title="Instagram"><i className="fab fa-instagram" /></a></li>
							</ul>
						</div>
						</div> */}
						{/* Tagcloud Widget */}
						
						{/* Banner Widget */}
						{/* <div className="widget ltn__banner-widget d-none go-top">
						<Link to="/shop"><img src={publicUrl+"assets/img/banner/2.jpg"} alt="#" /></Link>
						</div> */}
					</aside>
					</div>
				</div>
				</div>
			</div>
        }
}

export default ShopDetails16