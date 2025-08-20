import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class BannerV3 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return   <div className="ltn__slider-area ltn__slider-11  ltn__slider-11-slide-item-count-show--- ltn__slider-11-pagination-count-show--- section-bg-1" style={{backgroundColor:'white'}}>
	<div className="ltn__slider-11-inner" id="newbannermobileTop">
	  <div className="ltn__slider-11-active" id="responsive-text-project-title">
		{/* slide-item */}

		<div className="ltn__property-details-gallery mb-30" id='responsive-text-project-title'>
<div className="row">
    <div className="col-md-12">
		<div className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3-normal ltn__slide-item-3 ltn__slide-item-11" >
		  <div className="ltn__slide-item-inner">
			<div className="container">
			  <div className="row">
				<div className="align-self-center">
				  <div className="slide-item-info">
					<div className="slide-item-info-inner ltn__slide-animation">
					  <div className="slide-video mb-50 d-none">
						<a className="ltn__video-icon-2 ltn__video-icon-2-border" href="https://www.youtube.com/embed/tlThdr3O5Qo" data-rel="lightcase:myCollection">
						  <i className="fa fa-play" />
						</a>
					  </div>
					  {/* <h6 className="slide-sub-title white-color--- animated"><span><i className="fas fa-home" /></span> Real Estate Agency</h6> */}
					  <h1 className="slide-title animated " id='responsive-text-project-headingB-banner'>Home Interiors</h1>
					  <div className="slide-brief animated">
						<p id='responsive-text-project-titleB-banner'>Crafting contemporary, timeless spaces that stay stylish, ensuring your home feels fresh and inviting for years to come.</p>
					  </div>
					  {/* <div className="btn-wrapper animated">
						<Link to="/about" className="theme-btn-1 btn btn-effect-1">Make An Enquiry</Link>
						<a className="ltn__video-play-btn bg-white" href="https://www.youtube.com/embed/HnbMYzdjuBs?autoplay=1&showinfo=0" data-rel="lightcase">
						  <i className="icon-play  ltn__secondary-color" />
						</a>
					  </div> */}
					</div>
				  </div>
				 
				</div>
				<div className="slide-item-img " >
					<img src={publicUrl+"assets/img/Allimgs/99.webp"} alt="#" />
				  </div>
			  </div>
			</div>
		  </div>
		</div>
		</div>
		</div>
		</div>
		{/* slide-item */}
	
		{/* slide-item */}
		<div className="ltn__property-details-gallery mb-30" id='responsive-text-project-title'>
<div className="row">
    <div className="col-md-12">
		<div className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3-normal ltn__slide-item-3 ltn__slide-item-11">
		  <div className="ltn__slide-item-inner">
			<div className="container">
			  <div className="row">
				<div className="col-lg-12 align-self-center">
				  <div className="slide-item-info">
					<div className="slide-item-info-inner ltn__slide-animation">
					  <div className="slide-video mb-50 d-none">
						<a className="ltn__video-icon-2 ltn__video-icon-2-border" href="https://www.youtube.com/embed/tlThdr3O5Qo" data-rel="lightcase:myCollection">
						  <i className="fa fa-play" />
						</a>
					  </div>
					  {/* <h6 className="slide-sub-title white-color--- animated"><span><i className="fas fa-home" /></span> Real Estate Agency</h6> */}
					  <h1 className="slide-title animated " id='responsive-text-project-headingB-banner'>Residential Architecture <br />For Houses</h1>
					  <div className="slide-brief animated">
						<p id='responsive-text-project-titleB-banner'>Pushing Boundaries, Shaping the Future, and Transforming the Way We Experience Built Environments.</p>
					  </div>
					  {/* <div className="btn-wrapper animated">
						<Link to="/service" className="theme-btn-1 btn btn-effect-1">OUR SERVICES</Link>
						<Link to="/about" className="btn btn-transparent btn-effect-3">LEARN MORE</Link>
					  </div> */}
					</div>
				  </div>
				
				</div>
				<div className="slide-item-img">
					<img src={publicUrl+"assets/img/Allimgs/33.jpg"} alt="#" />
				  </div>
			  </div>
			</div>
		  </div>
		</div>
		</div>
		</div>
		</div>
		{/* slide-item */}


		<div className="ltn__property-details-gallery mb-30" id='responsive-text-project-title'>
<div className="row">
    <div className="col-md-12">
		<div className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3-normal ltn__slide-item-3 ltn__slide-item-11">
		  <div className="ltn__slide-item-inner">
			<div className="container">
			  <div className="row">
				<div className="col-lg-12 align-self-center">
				  <div className="slide-item-info">
					<div className="slide-item-info-inner ltn__slide-animation">
					  <div className="slide-video mb-50 d-none">
						<a className="ltn__video-icon-2 ltn__video-icon-2-border" href="https://www.youtube.com/embed/tlThdr3O5Qo" data-rel="lightcase:myCollection">
						  <i className="fa fa-play" />
						</a>
					  </div>
					  {/* <h6 className="slide-sub-title white-color--- animated"><span><i className="fas fa-home" /></span> Real Estate Agency</h6> */}
					  <h1 className="slide-title animated " id='responsive-text-project-headingB-banner'>Commercial Building Design <br/>& Property Development <br/>Design</h1>
					  <div className="slide-brief animated">
						<p id='responsive-text-project-titleB-banner'>
						Specialization in Designing hotels, Hospitals, Educational Institution, layout, Residential complex and other large scale Projects.</p>
					  </div>
					  {/* <div className="btn-wrapper animated" style={{display:'none'}}>
						<Link to="/service" className="theme-btn-1 btn btn-effect-1">OUR SERVICES</Link>
						<Link to="/about" className="btn btn-transparent btn-effect-3">LEARN MORE</Link>
					  </div> */}
					</div>
				  </div>
				  
				</div>
				<div className="slide-item-img">
					<img src={publicUrl+"assets/img/Allimgs/22.jpg"} alt="#"  />
				  </div>
			  </div>
			</div>
		  </div>
		</div>
		</div>
		</div>
		</div>



		<div className="ltn__property-details-gallery mb-30" id='responsive-text-project-title'>
<div className="row">
    <div className="col-md-12">
		<div className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3-normal ltn__slide-item-3 ltn__slide-item-11">
		  <div className="ltn__slide-item-inner">
			<div className="container">
			  <div className="row">
				<div className="col-lg-12 align-self-center">
				  <div className="slide-item-info">
					<div className="slide-item-info-inner ltn__slide-animation">
					  <div className="slide-video mb-50 d-none">
						<a className="ltn__video-icon-2 ltn__video-icon-2-border" href="https://www.youtube.com/embed/tlThdr3O5Qo" data-rel="lightcase:myCollection">
						  <i className="fa fa-play" />
						</a>
					  </div>
					  {/* <h6 className="slide-sub-title white-color--- animated"><span><i className="fas fa-home" /></span> Real Estate Agency</h6> */}
					  <h1 className="slide-title animated " id='responsive-text-project-headingB-banner'>Commercial Shop Interiors</h1>
					  <div className="slide-brief animated">
						<p id='responsive-text-project-titleB-banner'>Creating Spaces with strong  visual branding that tells the story of your brand, creating spaces that are  unique to yours.</p>
					  </div>
					  {/* <div className="btn-wrapper animated">
						<Link to="/service" className="theme-btn-1 btn btn-effect-1">OUR SERVICES</Link>
						<Link to="/about" className="btn btn-transparent btn-effect-3">LEARN MORE</Link>
					  </div> */}
					</div>
				  </div>
				 
				</div>
				<div className="slide-item-img">
					<img src={publicUrl+"assets/img/Allimgs/44.jpg"} alt="#" />
				  </div>
			  </div>
			</div>
		  </div>
		</div>
	  </div>
	  </div>
	  </div>
	  </div>
	  {/* slider-4-pagination */}
	  <div className="ltn__slider-11-pagination-count">
		<span className="count" />
		<span className="total" />
	  </div>
	  {/* slider-sticky-icon */}
	  {/* <div className="slider-sticky-icon-2">
		<ul>
		  <li><a href="#" title="Facebook"><i className="fab fa-facebook-f" /></a></li>
		  <li><a href="#" title="Twitter"><i className="fab fa-twitter" /></a></li>
		  <li><a href="#" title="Linkedin"><i className="fab fa-linkedin" /></a></li>
		</ul>
	  </div> */}
	  {/* slider-4-img-slide-arrow */}
	  <div className="ltn__slider-11-img-slide-arrow">
		<div className="ltn__slider-11-img-slide-arrow-inner">
		  <div className="ltn__slider-11-img-slide-arrow-active" id="smallImg" >
			<div className="image-slide-item">
			  <img src={publicUrl+"assets/img/Allimgs/33.jpg"} alt="Flower Image" />
			</div>
			<div className="image-slide-item">
			  <img src={publicUrl+"assets/img/Allimgs/99.webp"} alt="Flower Image" />
			</div>
			<div className="image-slide-item">
			  <img src={publicUrl+"assets/img/Allimgs/22.jpg"} alt="Flower Image" />
			</div>
			<div className="image-slide-item">
			  <img src={publicUrl+"assets/img/Allimgs/44.jpg"} alt="Flower Image" />
			</div>
		  </div>
		  {/* slider-4-slide-item-count */}
		  <div className="ltn__slider-11-slide-item-count">
			<span className="count" />
			<span className="total" />
		  </div>
		</div>
	  </div>
	</div>
  </div>

}
}

export default BannerV3