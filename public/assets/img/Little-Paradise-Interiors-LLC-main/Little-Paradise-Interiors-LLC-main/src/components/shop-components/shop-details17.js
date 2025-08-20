import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class ShopDetails17 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="ltn__shop-details-area pb-10">
				<div className="container">
				<div className="row">
					<div className="col-lg-12 col-md-12">
					<div className="ltn__shop-details-inner ltn__page-details-inner mb-60">
					
						<h2 id='responsive-text-project-heading'> 3 BHK / Earthessence
                        </h2>
					 <label id='responsive-text-project-title'><span className="ltn__secondary-color"><img src='assets/img/Allimgs/pin.png'/></span>Mangalore
                     </label> 
						{/* <h4 className="title-2">Estatehouse</h4>
						<p>Nestled within a scenic landscape, our double-sized house layout offers an enriched ecosystem and enhanced security. Planned around the natural contours, each residence enjoys privacy while fostering community engagement through landscaped areas, footpaths, and street lights.</p>
						<p>Residents also have access to a clubhouse featuring amenities such as a pool, indoor game area, and gym. These facilities provide opportunities for fun, stress relief, and quality time with loved ones.</p>
						{/* <p>Magnanimous First of its kind :-
                        It is the first of its kind, offering unparalleled innovation, luxury, and community-focused amenities for an extraordinary lifestyle experience.
                        </p> */}
                        <p id='responsive-text-project-title'>Nature’s palette seamlessly intertwines with contemporary design, shapes the ambiance of this 3BHK. A consistent theme graces every space—a warm, neutral symphony of brown and white, adorned with a singular, striking accent drawn from nature’s canvas.

                        </p>
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

						<div className="ltn__property-details-gallery mb-30" id='responsive-text-project-title'>
<div className="row">
    <div className="col-md-12">
   
	{/* <a href={publicUrl+"assets/img/Allimgs/Picture40.webp"} data-rel="lightcase:myCollection"> */}
								<img className="mb-30" src={publicUrl+"assets/img/Allimgs/Picture40.webp"} alt="Image" />
							{/* </a> */}
    </div>
   
</div>
</div>
<h4 className="title-2"  id='responsive-text-project-heading'>Living - Dining / Brick Red & Teak Wood
</h4>

<p   id='responsive-text-project-title'> A warm, neutral palette, adorned with a striking ’forest biome’ & ‘brick red’ color acts as an accent, drawing inspiration from nature. The colors have been kept minimal with a play on different textures. The TV unit has been constructed with a single piece of lacquered glass placed against a fabric-inspired tile. These tiles have been arranged in a series of differing widths, to create an intricate pattern. The faux leather green accent chair and brick red-colored Pu-coated storage pop in this neutral space. 
 
                        </p>



						<div className="ltn__property-details-gallery mb-30" id='responsive-text-project-title'>
<div className="row">
    <div className="col-md-4">
	{/* <a href={publicUrl+"assets/img/Allimgs/Picture39.webp"} data-rel="lightcase:myCollection"> */}
								<img className="mb-30" src={publicUrl+"assets/img/Allimgs/Picture39.webp"} alt="Image" />
							{/* </a> */}
						

    </div>
    <div className="col-md-4">
	{/* <a href={publicUrl+"assets/img/Allimgs/Picture38.webp"} data-rel="lightcase:myCollection"> */}
								<img className="mb-30" src={publicUrl+"assets/img/Allimgs/Picture38.webp"} alt="Image" />
							{/* </a> */}

    </div>
    <div className="col-md-4">
	{/* <a href={publicUrl+"assets/img/Allimgs/Picture38.webp"} data-rel="lightcase:myCollection"> */}
								<img className="mb-30" src={publicUrl+"assets/img/Allimgs/Picture38.webp"} alt="Image" />
							{/* </a> */}

    </div>
   
</div>
</div>
<h4 className="title-2"   id='responsive-text-project-heading'>Kitchen /Color Lividus / Tranquility
                            </h4>

<p   id='responsive-text-project-title'>The inspiration for our color palette for this space originated from the existing black granite countertop.  The color Lividus, reminiscent of a sky gracefully transitioning between bluish and greenish tones, has been used as an accent for the top cabinets.This evokes a sense of tranquility and sophistication while also adding a striking touch to the space.
</p>
<div className="ltn__property-details-gallery mb-30" id='responsive-text-project-title'>
<div className="row">
    <div className="col-md-4">
	{/* <a href={publicUrl+"assets/img/Allimgs/Picture44.webp"} data-rel="lightcase:myCollection"> */}
								<img className="mb-30" src={publicUrl+"assets/img/Allimgs/Picture44.webp"} alt="Image" />
							{/* </a> */}

    </div>
    <div className="col-md-4">
	{/* <a href={publicUrl+"assets/img/Allimgs/Picture43.webp"} data-rel="lightcase:myCollection"> */}
								<img className="mb-30" src={publicUrl+"assets/img/Allimgs/Picture43.webp"} alt="Image" />
							{/* </a> */}

    </div>
    <div className="col-md-4">
	{/* <a href={publicUrl+"assets/img/Allimgs/Picture42.webp"} data-rel="lightcase:myCollection"> */}
								<img className="mb-30" src={publicUrl+"assets/img/Allimgs/Picture42.webp"} alt="Image" />
							{/* </a> */}

    </div>
   
</div>
</div>
<h4 className="title-2"   id='responsive-text-project-heading'>Soft / Greige
                            Daughter’s Bedroom

                            </h4>
							<div className="ltn__property-details-gallery mb-30" id='responsive-text-project-title'>
<div className="row">
    <div className="col-md-6">
    {/* <a href={publicUrl+"assets/img/Allimgs/Picture45.webp"} data-rel="lightcase:myCollection"> */}
								<img className="mb-30" src={publicUrl+"assets/img/Allimgs/Picture45.webp"} alt="Image" />
							{/* </a> */}
    </div>
    <div className="col-md-6">
	{/* <a href={publicUrl+"assets/img/Allimgs/Picture46.webp"} data-rel="lightcase:myCollection"> */}
								<img className="mb-30" src={publicUrl+"assets/img/Allimgs/Picture46.webp"} alt="Image" />
							{/* </a> */}
    </div>
   
</div>
</div>

						
						{/* <h4 className="title-2" id='#responsive-text-project-heading '>From Our Gallery</h4> */}
						<div className="ltn__property-details-gallery">
						<div className="row">
							<div className="col-md-8" id='responsive-text-project-heading'>
							{/* <a>
								<img className="mb-30" src={publicUrl+"assets/img/Allimgs/Picture36.webp"} alt="Image" id='responsive-text-project-title'/>
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

{/* 
<h4 className="title-2"  id='responsive-text-project-heading'>Living - Dining / Brick Red & Teak Wood
</h4>

<p className="col-lg-10 col-md-12"  id='responsive-text-project-title'> A warm, neutral palette, adorned with a striking ’forest biome’ & ‘brick red’ color acts as an accent, drawing inspiration from nature. The colors have been kept minimal with a play on different textures. The TV unit has been constructed with a single piece of lacquered glass placed against a fabric-inspired tile. These tiles have been arranged in a series of differing widths, to create an intricate pattern. The faux leather green accent chair and brick red-colored Pu-coated storage pop in this neutral space. 
 
                        </p> */}
						<div>
							
						</div>
                        <div className="col-md-3" id="responsive-text-project-heading">
							{/* <a href={publicUrl+"assets/img/Allimgs/Picture37.webp"} data-rel="lightcase:myCollection">
								<img className="mb-30" src={publicUrl+"assets/img/Allimgs/Picture37.webp"} alt="Image" />
							</a> */}
						
							</div>
                        <div className="col-md-3">
							{/* <a href={publicUrl+"assets/img/Allimgs/Picture38.webp"} data-rel="lightcase:myCollection">
								<img className="mb-30" src={publicUrl+"assets/img/Allimgs/Picture38.webp"} alt="Image" />
							</a> */}
						
							</div>
                        <div className="col-md-3"  >
							{/* <a href={publicUrl+"assets/img/Allimgs/Picture39.webp"} data-rel="lightcase:myCollection">
								<img className="mb-30" src={publicUrl+"assets/img/Allimgs/Picture39.webp"} alt="Image" />
							</a>
						 */}
							</div>
							
                        <div className="col-md-10" id='responsive-text-project-title' >
							{/* <a href={publicUrl+"assets/img/Allimgs/Picture40.webp"} data-rel="lightcase:myCollection">
								<img className="mb-30" src={publicUrl+"assets/img/Allimgs/Picture40.webp"} alt="Image" />
							</a> */}
						
							</div>






                            {/* <h4 className="title-2"   id='responsive-text-project-heading'>Kitchen /Color Lividus / Tranquility
                            </h4>

<p className="col-lg-10 col-md-12"  id='responsive-text-project-title'>The inspiration for our color palette for this space originated from the existing black granite countertop. The color Lividus, reminiscent of a sky gracefully transitioning between bluish and greenish tones, has been used as an accent for the top cabinets.T his evokes a sense of tranquility and sophistication while also adding a striking touch to the space.
</p> */}
                        {/* <p id='responsive-text-project-title' className="col-lg-10 col-md-12">This intentional contrast ensures that customers intuitively identify the transaction area, while also serving the functional need of a flat, stable surface essential for efficient transactions.   
 
                        </p>
                        <p className="col-lg-10 col-md-12" id='responsive-text-project-title'>Placement at the central axis enhances accessibility, making it a focal point for both customers and staff.

 
                        </p> */}
                        <div className="col-md-3"  id="responsive-text-project-heading">
							{/* <a href={publicUrl+"assets/img/Allimgs/Picture42.webp"} data-rel="lightcase:myCollection">
								<img className="mb-30" src={publicUrl+"assets/img/Allimgs/Picture42.webp"} alt="Image" />
							</a> */}
							
							</div>
                        <div className="col-md-3">
							{/* <a href={publicUrl+"assets/img/Allimgs/Picture43.webp"} data-rel="lightcase:myCollection">
								<img className="mb-30" src={publicUrl+"assets/img/Allimgs/Picture43.webp"} alt="Image" />
							</a> */}
							
							</div>
                        <div className="col-md-3">
							{/* <a href={publicUrl+"assets/img/Allimgs/Picture44.webp"} data-rel="lightcase:myCollection">
								<img className="mb-30" src={publicUrl+"assets/img/Allimgs/Picture44.webp"} alt="Image" />
							</a> */}
							
							</div>
                        <div className="col-md-10" id='responsive-text-project-title'>
							{/* <a href={publicUrl+"assets/img/Allimgs/Picture45.webp"} data-rel="lightcase:myCollection">
								<img className="mb-30" src={publicUrl+"assets/img/Allimgs/Picture45.webp"} alt="Image" />
							</a> */}
							
							</div>




                            {/* <h4 className="title-2"   id='responsive-text-project-heading'>Soft / Greige
                            Daughter’s Bedroom

                            </h4> */}


 
                      

                            {/* <h4 className="title-2"   id='responsive-text-project-heading'>Timeless Luxurious Interiors.

                            </h4> */}
                            {/* <p className="col-lg-10 col-md-12"  id='responsive-text-project-title'>Residential Interiors of  a 3bhk unit in Planet SKS, Kadri
</p> */}


 
                        {/* <div className="col-md-6">
							<a href={publicUrl+"assets/img/Allimgs/Picture47.webp"} data-rel="lightcase:myCollection">
								<img className="mb-30" src={publicUrl+"assets/img/Allimgs/Picture47.webp"} alt="Image" />
							</a>
							
							</div> */}
                        {/* <div className="col-md-6">
							<a href={publicUrl+"assets/img/Allimgs/Picture48.webp"} data-rel="lightcase:myCollection">
								<img className="mb-30" src={publicUrl+"assets/img/Allimgs/Picture48.webp"} alt="Image" />
							</a>
							
							</div> */}
                        {/* <div className="col-md-6">
							<a href={publicUrl+"assets/img/Allimgs/Picture49.webp"} data-rel="lightcase:myCollection">
								<img className="mb-30" src={publicUrl+"assets/img/Allimgs/Picture49.webp"} alt="Image" />
							</a>
							
							</div> */}
                        {/* <div className="col-md-6">
							<a href={publicUrl+"assets/img/Allimgs/Picture50.webp"} data-rel="lightcase:myCollection">
								<img className="mb-30" src={publicUrl+"assets/img/Allimgs/Picture50.webp"} alt="Image" />
							</a>
							
							</div> */}



                            {/* <div className="col-md-4">
							<a href={publicUrl+"assets/img/Allimgs/Picture51.webp"} data-rel="lightcase:myCollection">
								<img className="mb-30" src={publicUrl+"assets/img/Allimgs/Picture51.webp"} alt="Image" />
							</a>
							
							</div>   <div className="col-md-4">
							<a href={publicUrl+"assets/img/Allimgs/Picture52.webp"} data-rel="lightcase:myCollection">
								<img className="mb-30" src={publicUrl+"assets/img/Allimgs/Picture52.webp"} alt="Image" />
							</a>
							
							</div>   <div className="col-md-4">
							<a href={publicUrl+"assets/img/Allimgs/Picture53.webp"} data-rel="lightcase:myCollection">
								<img className="mb-30" src={publicUrl+"assets/img/Allimgs/Picture53.webp"} alt="Image" />
							</a>
							
							</div> */}


                            {/* <div className="col-md-6">
							<a href={publicUrl+"assets/img/Allimgs/Picture54.webp"} data-rel="lightcase:myCollection">
								<img className="mb-30" src={publicUrl+"assets/img/Allimgs/Picture54.webp"} alt="Image" />
							</a>
							
							</div> <div className="col-md-6">
							<a href={publicUrl+"assets/img/Allimgs/Picture55.webp"} data-rel="lightcase:myCollection">
								<img className="mb-30" src={publicUrl+"assets/img/Allimgs/Picture55.webp"} alt="Image" />
							</a>
                            <a href={publicUrl+"assets/img/Allimgs/Picture56.webp"} data-rel="lightcase:myCollection">
								<img className="mb-30" src={publicUrl+"assets/img/Allimgs/Picture56.webp"} alt="Image" />
							</a>
							
							
							</div>  */}

                            
                       

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

export default ShopDetails17