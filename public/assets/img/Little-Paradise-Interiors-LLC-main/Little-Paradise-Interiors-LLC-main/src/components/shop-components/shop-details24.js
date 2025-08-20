import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class ShopDetails24 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="ltn__shop-details-area pb-10">
				<div className="container">
				<div className="row">
					<div className="col-lg-12 col-md-12">
					<div className="ltn__shop-details-inner ltn__page-details-inner mb-60">
					
						<h2 id='responsive-text-project-heading'> Dialysis Center /  Perliyas

                        </h2>
					 <label id='responsive-text-project-title'><span className="ltn__secondary-color"><img src='assets/img/Allimgs/pin.png'/></span>Mangalore</label> 


					 <div className="ltn__property-details-gallery mb-30" id='responsive-text-project-title'>
<div className="row">
    <div className="col-md-12">
	<a>
								<img className="mb-30" src={publicUrl+"assets/img/Allimgs/Picture111.webp"} alt="Image" />
							</a>

    </div>
   
</div>
</div>

<h4 className="title-2"  id='responsive-text-project-heading'>Clean/ light / Airy


</h4>

<div className="ltn__property-details-gallery mb-30" id='responsive-text-project-title'>
<div className="row">
    <div className="col-md-4">
	<a>
								<img className="mb-30" src={publicUrl+"assets/img/Allimgs/Picture112.webp"} alt="Image" />
							</a>

    </div>
   
    <div className="col-md-4">
	<a>
								<img className="mb-30" src={publicUrl+"assets/img/Allimgs/Picture113.webp"} alt="Image" />
							</a>

    </div>
   
    <div className="col-md-4">
	<a>
								<img className="mb-30" src={publicUrl+"assets/img/Allimgs/Picture114.webp"} alt="Image" />
							</a>
						

    </div>
   
    <div className="col-md-12">
	<a>
								<img className="mb-30" src={publicUrl+"assets/img/Allimgs/Picture115.webp"} alt="Image" />
							</a>

    </div>
   
</div>
</div>
<h4 className="title-2" id='responsive-text-project-heading'>International Style </h4>
						<p   id='responsive-text-project-title'>an architectural movement that emerged in the 1920s and 1930s, characterized by a minimalist aesthetic and a focus on functionality
 
 </p>
 <div className="ltn__apartments-plan-area product-details-apartments-plan mb-60" id='responsive-text-project-title'>
						<div className="ltn__tab-menu ltn__tab-menu-3 ltn__tab-menu-top-right-- text-uppercase--- text-center---" >
							<div className="nav" style={{display:"flex",justifyContent:'center'}}>
							<a data-bs-toggle="tab" href="#liton_tab_3_1">Simplicity & Clean lines
							</a>
							<a className="active show" data-bs-toggle="tab" href="#liton_tab_3_2">Rectilinear Forms
							</a>
							<a data-bs-toggle="tab" href="#liton_tab_3_3" >Use of Modern materials
							</a>
							<a data-bs-toggle="tab" href="#liton_tab_3_4" >Flat Roof
							</a>
							<a data-bs-toggle="tab" href="#liton_tab_3_5" >Open Planning
							</a>
							<a data-bs-toggle="tab" href="#liton_tab_3_6" >Function over form
							</a>
							</div>
						</div>
						<div className="tab-content" >
							<div className="tab-pane fade" id="liton_tab_3_1">
							<div className="ltn__apartments-tab-content-inner">
								<div className="row">
								<div className="col-lg-12">
									<div className="apartments-plan-img">
									<img src={publicUrl+"assets/img/Allimgs/Picture105.webp"} alt="#" />
									</div>
								</div>
								
								
								</div>
							</div>
							</div>
							<div className="tab-pane fade active show" id="liton_tab_3_2">
							<div className="ltn__product-tab-content-inner">
								<div className="row">
								<div className="col-lg-12">
									<div className="apartments-plan-img">
									<img src={publicUrl+"assets/img/Allimgs/Picture106.webp"} alt="#" />
									</div>
								</div>
								{/* <div className="col-lg-5">
									<div className="apartments-plan-info ltn__secondary-bg--- text-color-white---">
									<h2>First Floor</h2>
								
									</div>
								</div> */}
								
								</div>
							</div>
							</div>
							
							{/* <div className="tab-pane fade" id="liton_tab_3_3">
							<div className="ltn__product-tab-content-inner">
								<div className="row">
								<div className="col-lg-7">
									<div className="apartments-plan-img">
									<img src={publicUrl+"assets/img/Allimgs/4.png"} alt="#" />
									</div>
								</div>
								<div className="col-lg-5">
									<div className="apartments-plan-info ltn__secondary-bg--- text-color-white---">
									<h2>dramatic entrance</h2>
									
									</div>
								</div>
								
								</div>
							</div>
							</div> */}



							
							<div className="tab-pane fade" id="liton_tab_3_3">
							<div className="ltn__product-tab-content-inner">
								<div className="row">
								<div className="col-lg-12">
									<div className="apartments-plan-img">
									<img src={publicUrl+"assets/img/Allimgs/Picture107.webp"} alt="#" />
									</div>
									
								</div>
								
								</div>
							</div>
							</div>
							
							<div className="tab-pane fade" id="liton_tab_3_4">
							<div className="ltn__product-tab-content-inner">
								<div className="row">
								<div className="col-lg-12">
									<div className="apartments-plan-img">
									<img src={publicUrl+"assets/img/Allimgs/Picture108.webp"} alt="#" />
									</div>
									
								</div>
								
								</div>
							</div>
							</div>
							
							<div className="tab-pane fade" id="liton_tab_3_5">
							<div className="ltn__product-tab-content-inner">
								<div className="row">
								<div className="col-lg-12">
									<div className="apartments-plan-img">
									<img src={publicUrl+"assets/img/Allimgs/Picture109.webp"} alt="#" />
									</div>
									
								</div>
								
								</div>
							</div>
							</div>
							<div className="tab-pane fade" id="liton_tab_3_6">
							<div className="ltn__product-tab-content-inner">
								<div className="row">
								<div className="col-lg-12">
									<div className="apartments-plan-img">
									<img src={publicUrl+"assets/img/Allimgs/Picture110.webp"} alt="#" />
									</div>
									
								</div>
								
								</div>
							</div>
							</div>
							




						</div>
						</div>
{/* 
                     <div className="col-md-10"  id='responsive-text-project-heading'>
							<a>
								<img className="mb-30" src={publicUrl+"assets/img/Allimgs/Picture111.webp"} alt="Image" />
							</a>
						
							</div> */}
						{/* <h4 className="title-2">Estatehouse</h4>
						<p>Nestled within a scenic landscape, our double-sized house layout offers an enriched ecosystem and enhanced security. Planned around the natural contours, each residence enjoys privacy while fostering community engagement through landscaped areas, footpaths, and street lights.</p>
						<p>Residents also have access to a clubhouse featuring amenities such as a pool, indoor game area, and gym. These facilities provide opportunities for fun, stress relief, and quality time with loved ones.</p>
						{/* <p>Magnanimous First of its kind :-
                        It is the first of its kind, offering unparalleled innovation, luxury, and community-focused amenities for an extraordinary lifestyle experience.
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
                        {/* <h4 className="title-2"  id='responsive-text-project-heading'>Clean/ light / Airy


</h4> */}
						
						
						{/* plan */}
					
						{/* APARTMENTS PLAN AREA START */}
						
						{/* plan */}
						


						
						
					
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

export default ShopDetails24