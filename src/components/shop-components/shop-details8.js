import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class ShopDetails8 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="ltn__shop-details-area pb-10">
				<div className="container">
				<div className="row">
					<div className="col-lg-12 col-md-12">
					<div className="ltn__shop-details-inner ltn__page-details-inner mb-60">
					
						{/* <h1> Nova House</h1> */}
					 <label id='responsive-text-project-title'><span className="ltn__secondary-color"><img src='assets/img/Allimgs/pin.png'/></span>Mangaluru, Karnataka</label>
						<h4 className="title-2" id='responsive-text-project-heading'> family home</h4>


						<div className="ltn__property-details-gallery mb-30" id='responsive-text-project-title'>
<div className="row">
    <div className="col-md-12">
	{/* <a href={publicUrl+"assets/img/Allimgs/30.png"} data-rel="lightcase:myCollection"> */}
								<img className="mb-30" src={publicUrl+"assets/img/Allimgs/30.png"} alt="Image" />
							{/* </a> */}

    </div>
   
</div>
</div>
<p id='responsive-text-project-title'>A home for a family of three, designed to stand the test of time and provide a nurturing environment for a child to grow up in. With its timeless aesthetic, durable construction materials, and thoughtful architectural elements, this residence is more than just a house—it's a space where memories are made and futures are shaped.</p>
<p id='responsive-text-project-title'><span>Area :      2790 sq. ft   </span><br/>
						<span>Location :    Mangaluru, Karnataka  </span><br/>
						<span>Scope :     Design Visualisation </span><br/></p>


						{/* <div className="col-md-10" id='responsive-text-project-heading'>
							<a href={publicUrl+"assets/img/Allimgs/30.png"} data-rel="lightcase:myCollection">
								<img className="mb-30" src={publicUrl+"assets/img/Allimgs/30.png"} alt="Image" />
							</a>
							
							</div> */}
					
						{/* <p>To the left is the modern kitchen with central island, leading through to the unique breakfast family room which feature glass walls and doors out onto the garden and access to the separate utility room.</p> */}
						{/* <h4 className="title-2">Property Detail</h4>   */}
						
						<div className="property-detail-info-list section-bg-1 clearfix mb-60">                          
						{/* <ul>
							<li><label>Area :</label> <span> 2790 sq. ft</span></li>
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
						</div>
						
						{/* <h4 className="title-2">From Our Gallery</h4> */}
						<div className="ltn__property-details-gallery mb-30">
						<div className="row">
							{/* <div className="col-md-12">
							<a href={publicUrl+"assets/img/Allimgs/30.png"} data-rel="lightcase:myCollection">
								<img className="mb-30" src={publicUrl+"assets/img/Allimgs/30.png"} alt="Image" />
							</a>
							
							</div> */}
							
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

export default ShopDetails8