import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class ShopDetails12 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="ltn__shop-details-area pb-10">
				<div className="container">
				<div className="row">
			
					<div className="col-lg-12 col-md-12">
					<div className="ltn__shop-details-inner ltn__page-details-inner mb-60">
					
						{/* <h1 id='responsive-text-project-heading'> Fathers Mullers University</h1> */}
					 <h1 id='responsive-text-project-title'><img src='assets/img/Allimgs/pin.png' />Mangaluru, Karnataka</h1> 
						{/* <h4 className="title-2">Estatehouse</h4> */}
						<p  id='responsive-text-project-title'>Father Mullers charitable institution, is a long-standing and proud legacy of 150 years in the field of medicine. This year it completes a significant milestone in medical education. An idea that was sowed by our founders 25 years ago, has grown in strength and capability ever since. Our transformation from a caterpillar to a butterfly has been profound and impactful. One modest idea has grown exponentially into an authentic and trustworthy brand.</p>
						<div className="col-md-10" id='responsive-text-project-heading'>
							{/* <a href={publicUrl+"assets/img/Allimgs/4s.jpg"} data-rel="lightcase:myCollection"> */}
								<img className="mb-30" src={publicUrl+"assets/img/Allimgs/45.jpg"} alt="Image" />
							{/* </a> */}
						
							</div>
						<p id='responsive-text-project-title'>Today, as we celebrate our quarter-century anniversary in medical education, we look to the future with a desire for continued growth and innovation. A deemed future university - our perspective for the demanding future</p>
						<p id='responsive-text-project-title'>This magnificent structure is a glimpse into a different world of education that will lead the way in and beyond for future generations</p>
						{/* <h4 className="title-2">Property Detail</h4>  
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
						
						<div className="ltn__property-details-gallery mb-30">
						<div className="row">
							
							<div className="col-md-10"  id='responsive-text-project-heading'>
							{/* <a href={publicUrl+"assets/img/Allimgs/46.jpg"} data-rel="lightcase:myCollection"> */}
								<img className="mb-30" src={publicUrl+"assets/img/Allimgs/46.jpg"} alt="Image" />
							{/* </a> */}
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

export default ShopDetails12