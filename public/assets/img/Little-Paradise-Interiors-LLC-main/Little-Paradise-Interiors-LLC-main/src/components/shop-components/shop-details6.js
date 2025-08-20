import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class ShopDetails6 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="ltn__shop-details-area pb-10">
				<div className="container">
				<div className="row">
					<div className="col-lg-12 col-md-12" style={{fontFamily:"GT Walsheim, sans-serif"}}>
					<div className="ltn__shop-details-inner ltn__page-details-inner mb-60">
					
						{/* <h1> The Estate House</h1> */}
					 <label id='responsive-text-project-title'><span className="ltn__secondary-color"><img src='assets/img/Allimgs/pin.png'/></span> Mangalore, Karnataka</label>
						{/* <h4 className="title-2" id='responsive-text-project-heading'>Estate House</h4> */}
						<p id='responsive-text-project-title'> The house is nestled deep within a coffee estate. It was required to have a clear view of the outside from within the house while creating a statement of the habitation of the coexistence of man with the wild.</p>
						{/* <p>To the left is the modern kitchen with central island, leading through to the unique breakfast family room which feature glass walls and doors out onto the garden and access to the separate utility room.</p> */}
						{/* <h4 className="title-2">Property Detail</h4>   */}
						<p id='responsive-text-project-title'><span>Area :   11,000 sq. ft </span><br/>
						<span>Location :    Chikmagaluru, Karnataka   </span><br/>
						<span>Scope :     Architecture + Architecture Interiors + Consultation  </span><br/></p>
						<div className="property-detail-info-list section-bg-1 clearfix mb-60">                          
						{/* <ul>
							<li><label>Area :</label> <span>11,000 sq. ft</span></li>
							<li><label>Location </label> <span> Chikmagaluru, Karnataka</span></li>
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
						
						{/* <h4 className="title-2">From Our Gallery</h4> */}
						<div className="ltn__property-details-gallery mb-30">
						<div className="row">
							<div className="col-md-5" id='responsive-text-project-heading'>
							{/* <a href={publicUrl+"assets/img/Allimgs/23.png"} data-rel="lightcase:myCollection"> */}
								<img className="mb-30" src={publicUrl+"assets/img/Allimgs/23.png"} alt="Image" />
							{/* </a> */}
							{/* <a href={publicUrl+"assets/img/Allimgs/24.png"} data-rel="lightcase:myCollection"> */}
								<img className="mb-30" src={publicUrl+"assets/img/Allimgs/24.png"} alt="Image" />
							{/* </a> */}
							</div>
							<div className="col-md-5" >
							{/* <a href={publicUrl+"assets/img/Allimgs/25.png"} data-rel="lightcase:myCollection"> */}
								<img className="mb-30" src={publicUrl+"assets/img/Allimgs/25.png"} alt="Image" />
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

export default ShopDetails6