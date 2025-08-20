import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class ShopDetails5 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="ltn__shop-details-area pb-10">
				<div className="container">
				<div className="row">
					<div className="col-lg-12 col-md-12">
					<div className="ltn__shop-details-inner ltn__page-details-inner mb-60">
					
						{/* <h1 id='responsive-text-project-heading'>Opulent Liv-In House</h1> */}
					 <label id='responsive-text-project-title'><span className="ltn__secondary-color"><img src='assets/img/Allimgs/pin.png'/></span> Mangalore, Karnataka</label>
						<h4 className="title-2" id='responsive-text-project-heading'> Family home</h4>



						<div className="ltn__property-details-gallery mb-30" id='responsive-text-project-title'>
<div className="row">
    <div className="col-md-12">
   
	{/* <a href={publicUrl+"assets/img/Allimgs/20.png"} data-rel="lightcase:myCollection"> */}
								<img className="mb-30" src={publicUrl+"assets/img/Allimgs/20.png"} alt="Image" />
							{/* </a> */}

    </div>
   
</div>
</div>
<p id='responsive-text-project-title'>  A house for a family of five is envisioned as a residence that transcends the trends of the moment, aiming to become a lasting legacy for generations to come. The design of this home is carefully crafted to embody a timeless aesthetic, utilizing durable construction materials and thoughtful architectural details. All elements have been chosen to withstand the test of time to be cherished by their descendants for many years.</p>
<p id='responsive-text-project-title'><span>Area :   4400 sq. ft </span><br/>
						<span>Location :   angalore, Karnatak    </span><br/>
						<span>Scope :     Architecture + Architecture Interiors + Consultation  </span><br/></p>




						<div className="ltn__property-details-gallery mb-30" id='responsive-text-project-title'>
<div className="row">
    <div className="col-md-6">
   
	{/* <a href={publicUrl+"assets/img/Allimgs/20.png"} data-rel="lightcase:myCollection"> */}
								<img className="mb-30" src={publicUrl+"assets/img/Allimgs/20.png"} alt="Image" />
							{/* </a> */}
							{/* <a href={publicUrl+"assets/img/Allimgs/21.png"} data-rel="lightcase:myCollection"> */}
								<img className="mb-30" src={publicUrl+"assets/img/Allimgs/21.png"} alt="Image" />
							{/* </a> */}
    </div>
    <div className="col-md-6">
	{/* <a href={publicUrl+"assets/img/Allimgs/19.png"} data-rel="lightcase:myCollection"> */}
								<img className="mb-30" src={publicUrl+"assets/img/Allimgs/19.png"} alt="Image" />
							{/* </a> */}

    </div>
    
   
</div>
</div>
<h4 className="title-2" id='responsive-text-project-heading'>Floor Plans</h4>



<div className="ltn__property-details-gallery mb-30" id='responsive-text-project-title'>
<div className="row">
    <div className="col-md-4">
	<img src={publicUrl+"assets/img/Allimgs/18.png"} alt="#" />

    </div>
   
</div>
</div>
						{/* <div className="col-md-10" id='responsive-text-project-heading'>
						
							<a href={publicUrl+"assets/img/Allimgs/20.png"} data-rel="lightcase:myCollection">
								<img className="mb-30" src={publicUrl+"assets/img/Allimgs/20.png"} alt="Image" />
							</a>
							</div> */}
						{/* <p id='responsive-text-project-title'>  A house for a family of five is envisioned as a residence that transcends the trends of the moment, aiming to become a lasting legacy for generations to come. The design of this home is carefully crafted to embody a timeless aesthetic, utilizing durable construction materials and thoughtful architectural details. All elements have been chosen to withstand the test of time to be  be cherished by their descendants for many years.</p> */}
						{/* <p>To the left is the modern kitchen with central island, leading through to the unique breakfast family room which feature glass walls and doors out onto the garden and access to the separate utility room.</p> */}
						{/* <h4 className="title-2">Property Detail</h4>   */}
						{/* <p id='responsive-text-project-title'><span>Area :   4400 sq. ft </span><br/>
						<span>Location :   angalore, Karnatak    </span><br/>
						<span>Scope :     Architecture + Architecture Interiors + Consultation  </span><br/></p> */}
						<div className="property-detail-info-list section-bg-1 clearfix mb-60">                          
						{/* <ul>
							<li><label>Area :</label> <span>4400 sq. ft</span></li>
							<li><label>Location </label> <span> Mangalore, Karnatak</span></li>
							<li><label>Scope :</label> <span>Planning & Design</span></li>
							
						</ul> */}
						{/* <ul>
							<li><label>Lot Area:</label> <span>HZ29 </span></li>
							<li><label>Lot dimensions:</label> <span>120 sqft</span></li>
							<li><label>Beds:</label> <span>7</span></li>
							<li><label>Price:</label> <span>2</span></li>
							<li><label>Property Status:</label> <span>For Sale</span></li>
						</ul> */}
						</div>
						
						{/* <h4 className="title-2">From Our Gallery</h4> */}
						{/* <div className="ltn__property-details-gallery mb-30">
						<div className="row">
							<div className="col-md-10" id='responsive-text-project-heading'>
							<a href={publicUrl+"assets/img/Allimgs/19.png"} data-rel="lightcase:myCollection">
								<img className="mb-30" src={publicUrl+"assets/img/Allimgs/19.png"} alt="Image" />
							</a>
							<a href={publicUrl+"assets/img/Allimgs/20.png"} data-rel="lightcase:myCollection">
								<img className="mb-30" src={publicUrl+"assets/img/Allimgs/20.png"} alt="Image" />
							</a>
							</div>
							<div className="col-md-10" id='responsive-text-project-heading'>
							<a href={publicUrl+"assets/img/Allimgs/21.png"} data-rel="lightcase:myCollection">
								<img className="mb-30" src={publicUrl+"assets/img/Allimgs/21.png"} alt="Image" />
							</a>
							</div>
						</div>
						</div> */}
						
						
						{/* <h4 className="title-2" id='responsive-text-project-heading'>Floor Plans</h4> */}
                        {/* <div className="col-lg-8" id='responsive-text-project-heading'>
									<div className="apartments-plan-img">
									<img src={publicUrl+"assets/img/Allimgs/18.png"} alt="#" />
									</div>
								</div> */}
						{/* APARTMENTS PLAN AREA START */}
						<div className="ltn__apartments-plan-area product-details-apartments-plan mb-60">
						<div className="ltn__tab-menu ltn__tab-menu-3 ltn__tab-menu-top-right-- text-uppercase--- text-center---">
							<div className="nav">
							{/* <a data-bs-toggle="tab" href="#liton_tab_3_1">First Floor</a> */}
							{/* <a className="active show" data-bs-toggle="tab" href="#liton_tab_3_2">Second Floor</a>
							<a data-bs-toggle="tab" href="#liton_tab_3_3" >Third Floor</a>
							<a data-bs-toggle="tab" href="#liton_tab_3_4" >Top Garden</a> */}
							</div>
						</div>
						<div className="tab-content">
							<div className="tab-pane fade" >
							<div className="ltn__apartments-tab-content-inner">
								<div className="row">
								{/* <div className="col-lg-7">
									<div className="apartments-plan-img">
									<img src={publicUrl+"assets/img/Allimgs/18.png"} alt="#" />
									</div>
								</div> */}
								
								</div>
							</div>
							</div>
						
							
							
						</div>
						</div>
						{/* APARTMENTS PLAN AREA END */}
						{/* <h4 className="title-2">Property Video</h4>
						<div className="ltn__video-bg-img ltn__video-popup-height-500 bg-overlay-black-50 bg-image mb-60" data-bs-bg={publicUrl+"assets/img/others/5.jpg"}>
						<a className="ltn__video-icon-2 ltn__video-icon-2-border---" href="https://www.youtube.com/embed/eWUxqVFBq74?autoplay=1&showinfo=0" data-rel="lightcase:myCollection">
							<i className="fa fa-play" />
						</a>
						</div> */}
						
					
					</div>
					</div>
					
				</div>
				</div>
			</div>
        }
}

export default ShopDetails5