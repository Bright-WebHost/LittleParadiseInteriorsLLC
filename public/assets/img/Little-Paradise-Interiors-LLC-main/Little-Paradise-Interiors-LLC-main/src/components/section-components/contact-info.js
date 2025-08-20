import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class ContactInfo extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="ltn__contact-address-area mb-1 " style={{marginTop:'-200px',backgroundColor:'black',color:"white"}}>
				<div className="container">
				<div className="row">
					<div className="col-lg-12" id="responsive-text-project-heading"> 
					<div id='contactinfo'>
					<div className='contactline' >
					<p className='responsive-text-contact-detais text-white' id="contactstyle" >
					<a href="mailto:design@thearchitecturecorporation.com" id="contactstyle" >design@thearchitecturecorporation.com</a></p>
					</div>
					<div className='contactline'>
					<p className='responsive-text-contact-detais text-white' id="contactstyle" ><a href="tel:+ 91 90362 68899">  +91 90362 68899</a></p>
					</div>
					{/* <div className='contactline'>
					<p className='responsive-text-contact-detais text-white' id="contactstyle" ><a href="#"> #305, 3rd Floor, Milestone25,Balmata Mangalore - 575002</a></p>
					</div> */}
					<div className='contactline'>
					<p className='responsive-text-contact-detais text-white' id="contactstyle"  >#305, 3rd Floor, Milestone25,Balmata Mangalore - 575002</p>
				
					</div>
					</div>
					<div className="ltn__property-details-gallery mb-30" id='responsive-text-project-title'>
						<div className="row">
							<div className="col-md-10">
							{/* <a href={publicUrl+"assets/img/Allimgs/41.jpg"} data-rel="lightcase:myCollection"> */}
								<img className="mb-30" src={publicUrl+"assets/img/Allimgs/Picture28.webp"} alt="Image" />
							{/* </a> */}
							</div>
								</div>
									</div>
					{/* <div className="col-md-10" id="responsive-text-project-heading">
							<a >
								<img className="mb-30" src={publicUrl+"assets/img/Allimgs/Picture28.webp"} alt="Image" style={{height:'450px',width:'100%'}} />
							</a>
							</div> */}





					{/* <div className="ltn__contact-address-item ltn__contact-address-item-3 ">
						<div className="ltn__contact-address-icon">
						<img src={publicUrl+"assets/img/Allimgs/Email.png"} alt="Icon Image" />
						</div>
						<h3 className='responsive-text-contact-detais '>Email Address</h3>
						<p className='responsive-text-contact-detais '><a href="mailto:admin@thearchitecturecorporation.com">admin@thearchitecturecorporation.com</a><br/>
					<a href="mailto:design@thearchitecturecorporation.com">design@thearchitecturecorporation.com</a></p>
					</div> */}
					</div>
					{/* <div className="col-lg-10" id="responsive-text-project-heading">
					<div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
						<div className="ltn__contact-address-icon">
						<img src={publicUrl+"assets/img/Allimgs/contact (1).png"} alt="Icon Image" />
						</div>
						<h3 className='responsive-text-contact-detais '>Phone Number</h3>
						<p className='responsive-text-contact-detais '><a href="tel:+ 91 90362 68899"> +91 90362 68899</a></p>
					</div>
					</div> */}
					{/* <div className="col-lg-10" id="responsive-text-project-heading">
					<div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
						<div className="ltn__contact-address-icon">
						<img src={publicUrl+"assets/img/Allimgs/Location.png"} alt="Icon Image" />
						</div>
						<h3 className='responsive-text-contact-detais '> Address</h3>
						<p className='responsive-text-contact-detais '>#305, 3rd Floor, Milestone25,  <br />
						Balmata Mangalore - 575002</p>
					</div>
					</div> */}
				</div>
				</div>
			</div>
        }
}


export default ContactInfo