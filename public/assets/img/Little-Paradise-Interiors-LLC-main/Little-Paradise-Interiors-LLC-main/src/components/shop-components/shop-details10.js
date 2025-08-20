import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class ShopDetails10 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="ltn__shop-details-area pb-10">
				<div className="container">
				<div className="row">
					<div className="col-lg-12 col-md-12">
					<div className="ltn__shop-details-inner ltn__page-details-inner mb-60">
					
						{/* <h1 id='responsive-text-project-heading'> Hospitality / Rohan Suite</h1> */}
					 <label id='responsive-text-project-title'><span className="ltn__secondary-color"><img src={publicUrl+"assets/img/Allimgs/pin.png"}/></span>Mangaluru, Karnataka</label>
						{/* <h4 className="title-2">Estate House</h4> */}
						<p id='responsive-text-project-title' > Nestled in the heart of the city, our suites are designed with elegant interiors and modern amenities, seamlessly blending style with functionality. Every detail, from the well-appointed rooms to the gourmet dining areas, reflects a commitment to excellence. The result is a space where guests, whether visiting for business or leisure, can enjoy personalized service and a host of top-tier facilities, all within a thoughtfully designed environment. Some of the key highlights in Hospitality - Suite.</p>
						<p id='responsive-text-project-title'>- Iconic :- Juxtaposition to its surroundings as a building that ‘breathes’</p>
						<p id='responsive-text-project-title'>- Luxury :- First open to sky clubhouse-terrace garden of the city</p>
						
						
						{/* <h4 className="title-2" id='responsive-text-project-heading'>From Our Gallery</h4> */}
						<div className="ltn__property-details-gallery mb-30" id='responsive-text-project-title'>
						<div className="row">
							<div className="col-md-6">
							<a href={publicUrl+"assets/img/Allimgs/41.jpg"} data-rel="lightcase:myCollection">
								<img className="mb-30" src={publicUrl+"assets/img/Allimgs/41.jpg"} alt="Image" />
							</a>
							{/* <a href={publicUrl+"assets/img/Allimgs/42.jpg"} data-rel="lightcase:myCollection">
								<img className="mb-30" src={publicUrl+"assets/img/Allimgs/42.jpg"} alt="Image" />
							</a> */}
							</div>
							<div className="col-md-6">
                            <a href={publicUrl+"assets/img/Allimgs/42.jpg"} data-rel="lightcase:myCollection">
								<img className="mb-30" src={publicUrl+"assets/img/Allimgs/42.jpg"} alt="Image" />
							</a>
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

export default ShopDetails10