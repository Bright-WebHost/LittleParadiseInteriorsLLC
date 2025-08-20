import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class ShopDetails11 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="ltn__shop-details-area pb-10">
				<div className="container">
				<div className="row">
					<div className="col-lg-12 col-md-12">
					<div className="ltn__shop-details-inner ltn__page-details-inner mb-60">
					
						{/* <h1 id='responsive-text-project-heading'>Rohan / Mall</h1> */}
					 <label  id='responsive-text-project-title'><span className="ltn__secondary-color"><img src='assets/img/Allimgs/pin.png' /></span>Mangaluru, Karnataka</label>
						{/* <h4 className="title-2" id='responsive-text-project-heading'>Estatehouse</h4> */}
						<p id='responsive-text-project-title'> Our vision With Mall was to create a multi-functional, magnanimous space that serves as a social hotspot and networking hub. This mall is the first of its kind, designed to be a true community crossroad. It seamlessly blends retail, dining, and entertainment options to foster social interaction and community engagement. Every element, from the spacious atriums to the inviting communal areas, has been meticulously planned to enhance the user experience. The result is a vibrant, dynamic environment where people can shop, dine, socialize, and network, making Mall a cornerstone of the community.</p>
						<p id='responsive-text-project-title'>Multi-functional Networking Hub <span style={{color:'black',fontWeight:'bold'}}>: </span>
A vibrant multi-functional networking hub blending business, leisure, dining, and events for a dynamic community experience.</p>

							
					<div className="ltn__property-details-gallery mb-30" id='responsive-text-project-title'>
<div className="row">
    <div className="col-md-12">
	{/* <a href={publicUrl+"assets/img/Allimgs/52 - Copy.jpg"} data-rel="lightcase:myCollection"> */}
								<img className="mb-30" src={publicUrl+"assets/img/Allimgs/51.jpg"} alt="Image" />
							{/* </a> */}

    </div>
   
</div>
</div>	
						<p id='responsive-text-project-title'>Magnanimous First of its kind <span style={{color:'black',fontWeight:'bold'}}>: </span>
It is the first of its kind, offering unparalleled innovation, luxury, and community-focused amenities for an extraordinary lifestyle experience.</p>
						<p id='responsive-text-project-title'>Social hot spot Community crossroad <span style={{color:'black',fontWeight:'bold'}}>: </span>
Social hot spot and community crossroad, fostering connections, vibrant interactions, and diverse activities in a lively, inclusive environment.</p>





					<div className="ltn__property-details-gallery mb-30" id='responsive-text-project-title'>
<div className="row">
    <div className="col-md-12">
	{/* <a href={publicUrl+"assets/img/Allimgs/52 - Copy.jpg"} data-rel="lightcase:myCollection"> */}
								<img className="mb-30" src={publicUrl+"assets/img/Allimgs/52 - Copy.jpg"} alt="Image" />
							{/* </a> */}

    </div>
   
</div>
</div>	
						
						{/* <div className="ltn__property-details-gallery mb-30">
						<div className="row">
							
							<div className="col-md-10" id='responsive-text-project-heading'>
							<a href={publicUrl+"assets/img/Allimgs/52 - Copy.jpg"} data-rel="lightcase:myCollection">
								<img className="mb-30" src={publicUrl+"assets/img/Allimgs/52 - Copy.jpg"} alt="Image" />
							</a>
							</div>
						</div>
						</div> */}
						
						
						
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

export default ShopDetails11