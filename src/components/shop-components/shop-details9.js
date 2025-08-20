import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class ShopDetails9 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="ltn__shop-details-area pb-10">
				<div className="container">
				<div className="row">
					<div className="col-lg-12 col-md-12">
					<div className="ltn__shop-details-inner ltn__page-details-inner mb-60">
					
						{/* <h1> The Dual House</h1> */}
					 <label id='responsive-text-project-title'><span className="ltn__secondary-color"><img src='assets/img/Allimgs/pin.png'/></span>Kerala</label>
						{/* <h4 className="title-2" id='responsive-text-project-heading'>Mannarkkad residence</h4> */}



						<div className="ltn__property-details-gallery mb-30" id='responsive-text-project-title'>
<div className="row">
    <div className="col-md-12">
   
	{/* <a href={publicUrl+"assets/img/Allimgs/65.jpg"} data-rel="lightcase:myCollection"> */}
								<img className="mb-30" src={publicUrl+"assets/img/Allimgs/65.jpg"} alt="Image" />
							{/* </a> */}

    </div>
   
</div>
</div>
<p id='responsive-text-project-title'>It is built on a site owned by a single family for generations, designed to accommodate large gatherings of family and friends. Internally, the communal spaces are wide open and spacious, seamlessly flowing into the outdoor area, creating a transparency between indoors and outdoors. This design makes the internal spaces feel much larger with their undefined boundaries.</p>


<div className="ltn__property-details-gallery mb-30" id='responsive-text-project-title'>
<div className="row">
    <div className="col-md-6">
	{/* <a href={publicUrl+"assets/img/Allimgs/63.jpg"} data-rel="lightcase:myCollection"> */}
								<img className="mb-30" src={publicUrl+"assets/img/Allimgs/63.jpg"} alt="Image" />
							{/* </a> */}

    </div>
    <div className="col-md-6">
	{/* <a href={publicUrl+"assets/img/Allimgs/64.jpg"} data-rel="lightcase:myCollection"> */}
								<img className="mb-30" src={publicUrl+"assets/img/Allimgs/64.jpg"} alt="Image" />
							{/* </a> */}

    </div>
    <div className="col-md-12">
	{/* <a href={publicUrl+"assets/img/Allimgs/62.jpg"} data-rel="lightcase:myCollection"> */}
								<img className="mb-30" src={publicUrl+"assets/img/Allimgs/62.jpg"} alt="Image" />
							{/* </a> */}

    </div>
   
</div>
</div>



						{/* <div className="col-md-10" id='responsive-text-project-heading'>
							
							
							<a href={publicUrl+"assets/img/Allimgs/65.jpg"} data-rel="lightcase:myCollection">
								<img className="mb-30" src={publicUrl+"assets/img/Allimgs/65.jpg"} alt="Image" />
							</a>
							</div> */}
						
						{/* <p>To the left is the modern kitchen with central island, leading through to the unique breakfast family room which feature glass walls and doors out onto the garden and access to the separate utility room.</p> */}
						
						
						{/* <h4 className="title-2">From Our Gallery</h4> */}
						<div className="ltn__property-details-gallery mb-30">
						<div className="row">
							{/* <div className="col-md-12">
							<a href={publicUrl+"assets/img/Allimgs/61.jpg"} data-rel="lightcase:myCollection">
								<img className="mb-30" src={publicUrl+"assets/img/Allimgs/61.jpg"} alt="Image" />
							</a>
							
							</div> */}
							{/* <div className="col-md-10"   id='responsive-text-project-heading'>
							<a href={publicUrl+"assets/img/Allimgs/63.jpg"} data-rel="lightcase:myCollection">
								<img className="mb-30" src={publicUrl+"assets/img/Allimgs/63.jpg"} alt="Image" />
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

export default ShopDetails9