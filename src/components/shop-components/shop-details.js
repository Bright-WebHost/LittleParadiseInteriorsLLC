import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class ShopDetails extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="ltn__shop-details-area pb-10">
				<div className="container">
				<div className="row">
					<div className="col-lg-12 col-md-12">
					<div className="ltn__shop-details-inner ltn__page-details-inner mb-60">
					
						<h1 id='responsive-text-project-heading'>Farmhouse for an NRI</h1>
					 <label  id='responsive-text-project-title'><span className="ltn__secondary-color"><img src='assets/img/Allimgs/pin.png'/></span> Sheni, Kerala</label>
						{/* <h4 className="title-2">Farmhouse for an NRI</h4> */}
						<p  id='responsive-text-project-title'	>Farmhouse for an NRI. The space needed to be an escapade for a young family whenever they came back to their hometown, allowing them to feel connected to the outdoors.</p>
						{/* <p>To the left is the modern kitchen with central island, leading through to the unique breakfast family room which feature glass walls and doors out onto the garden and access to the separate utility room.</p> */}
						{/* <h4 className="title-2" id='responsive-text-project-heading'>Property Detail</h4>   */}
						<p id='responsive-text-project-title'><span>Area :     3760 sq. ft    </span><br/>
						<span>Location :     Sheni, Kerala    </span><br/>
						<span>Scope :     Architecture + Architecture Interiors + Consultation  </span><br/></p>
						<div className="property-detail-info-list section-bg-1 clearfix mb-60"  style={{backgroundColor:'white'}} id='responsive-text-project-locaton-text'>  
							                
						{/* <ul  >
							<li><label>Area :</label> <span>3760 sq. ft</span></li>
							<li><label>Location </label> <span> Sheni, Kerala</span></li>
							<li><label>Scope :</label> <span>Architecture + Architecture Interiors + Consultation</span></li>
							
						</ul> */}
						{/* <ul>
							<li><label>Lot Area:</label> <span>HZ29 </span></li>
							<li><label>Lot dimensions:</label> <span>120 sqft</span></li>
							<li><label>Beds:</label> <span>7</span></li>
							<li><label>Price:</label> <span>2</span></li>
							<li><label>Property Status:</label> <span>For Sale</span></li>
						</ul> */}
						</div>
						

						<div className="ltn__property-details-gallery mb-30" id='responsive-text-project-title'>
<div className="row">
    <div className="col-md-12">
	{/* <a href={publicUrl+"assets/img/Allimgs/2.png"} data-rel="lightcase:myCollection"> */}
								<img className="mb-30" src={publicUrl+"assets/img/Allimgs/2.png"} alt="Image" />
							{/* </a> */}

    </div>
   
</div>
</div>
						<div className="ltn__property-details-gallery mb-30" id='responsive-text-project-title'>
<div className="row">
    <div className="col-md-6">
	{/* <a href={publicUrl+"assets/img/Allimgs/11.png"} data-rel="lightcase:myCollection"> */}
								<img className="mb-30" src={publicUrl+"assets/img/Allimgs/11.png"} alt="Image" />
							{/* </a> */}
							{/* <a href={publicUrl+"assets/img/Allimgs/10.png"} data-rel="lightcase:myCollection"> */}
								<img className="mb-30" src={publicUrl+"assets/img/Allimgs/10.png"} alt="Image" />
							{/* </a> */}

    </div>
    <div className="col-md-6">
	{/* <a href={publicUrl+"assets/img/Allimgs/7.png"} data-rel="lightcase:myCollection"> */}
								<img className="mb-30" src={publicUrl+"assets/img/Allimgs/7.png"} alt="Image" />
							{/* </a> */}
							{/* <a href={publicUrl+"assets/img/Allimgs/6.png"} data-rel="lightcase:myCollection"> */}
								<img className="mb-30" src={publicUrl+"assets/img/Allimgs/6.png"} alt="Image" />
							{/* </a> */}

    </div>
   
</div>
</div>






						{/* <h4 className="title-2" id='responsive-text-project-heading'>From Our Gallery</h4> */}
					
						
						
						<h4 className="title-2" id='responsive-text-project-heading'>Plans</h4>
						{/* APARTMENTS PLAN AREA START */}
						<div className="ltn__apartments-plan-area product-details-apartments-plan mb-60">
						<div className="ltn__tab-menu ltn__tab-menu-3 ltn__tab-menu-top-right-- text-uppercase--- text-center---" >
							<div className="nav" style={{display:"flex",justifyContent:'center'}}>
							<a data-bs-toggle="tab" href="#liton_tab_3_1">Ground  Floor Plan</a>
							<a className="active show" data-bs-toggle="tab" href="#liton_tab_3_2">First Floor Plan</a>
							<a data-bs-toggle="tab" href="#liton_tab_3_3" >Concept</a>
							{/* <a data-bs-toggle="tab" href="#liton_tab_3_4" >Grid Planning</a>
							<a data-bs-toggle="tab" href="#liton_tab_3_5" >Dramatic Entrance</a>
							<a data-bs-toggle="tab" href="#liton_tab_3_6" >Outword Looking</a> */}
							</div>
						</div>
						
						<div className="tab-content" id='responsive-text-project-heading'>
							<div className="tab-pane fade" id="liton_tab_3_1">
							<div className="ltn__apartments-tab-content-inner">
								<div className="row">
								<div className="col-lg-7">
									<div className="apartments-plan-img">
									<img src={publicUrl+"assets/img/Allimgs/8.png"} alt="#" />
									</div>
								</div>
								<div className="col-lg-5">
									<div className="apartments-plan-info ltn__secondary-bg--- text-color-white---">
									<h2>Ground  Floor </h2>
								
									</div>
								</div>
								
								</div>
							</div>
							</div>
							<div className="tab-pane fade active show" id="liton_tab_3_2">
							<div className="ltn__product-tab-content-inner">
								<div className="row">
								<div className="col-lg-7">
									<div className="apartments-plan-img">
									<img src={publicUrl+"assets/img/Allimgs/9.png"} alt="#" />
									</div>
								</div>
								<div className="col-lg-5">
									<div className="apartments-plan-info ltn__secondary-bg--- text-color-white---">
									<h2>First Floor</h2>
								
									</div>
								</div>
								
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
								<div className="col-lg-7">
									<div className="apartments-plan-img">
									<img src={publicUrl+"assets/img/Allimgs/axis.jpeg"} alt="#" />
									</div>
									<div className="apartments-plan-img">
									<img src={publicUrl+"assets/img/Allimgs/3.png"} alt="#" />
									</div>
								</div>
								
								<div className="col-lg-5">
									<div className="apartments-plan-img">
									<img src={publicUrl+"assets/img/Allimgs/5.png"} alt="#" />
									</div>
									<div className="apartments-plan-img">
									<img src={publicUrl+"assets/img/Allimgs/4.png"} alt="#" />
									</div>
								</div>
								
								
								</div>
							</div>
							</div>
							




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

export default ShopDetails