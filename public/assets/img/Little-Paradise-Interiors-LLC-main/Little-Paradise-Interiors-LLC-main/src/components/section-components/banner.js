import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class 	Banner extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return    <div className="ltn__slider-area ltn__slider-3  section-bg-1 go-top" style={{backgroundColor:'white',marginTop:'-90px'}}>
		 
				  <div className="ltn__slide-one-active slick-slide-arrow-1 slick-slide-dots-1"
				  >
					
				    {/* ltn__slide-item */}
				    <div className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3-normal ltn__slide-item-3" >
				      <div className="ltn__slide-item-inner">
				        <div className="container">
				          <div className="row">
				            <div className="col-lg-10 align-self-center" >
				              <div className="slide-item-info">
				                <div className="slide-item-info-inner ltn__slide-animation">
				                  {/* <div className="slide-video mb-50 d-none">
				                    <a className="ltn__video-icon-2 ltn__video-icon-2-border" href="https://www.youtube.com/embed/tlThdr3O5Qo" data-rel="lightcase:myCollection">
				                      <i className="fa fa-play" />
				                    </a>
				                  </div> */}
				                  {/* <h6 className="slide-sub-title white-color--- animated"><span><i className="fas fa-home" /></span> Real Estate Agency</h6> */}
				                  <h1 className="slide-title animated"  id="responsive-text-project-heading">Residential Architecture <br />For Houses</h1>
				                  <div className="animated">
								  {/* slide-brief old animated front classname*/}
				                    <p id='responsive-text-project-title'>Pushing Boundaries, Shaping the Future, and Transforming the Way We Experience Built Environments</p>
				                  </div>
				                  {/* <div className="btn-wrapper animated ">
				                    	<Link to="/about" className="theme-btn-1 btn btn-effect-1 go-top">Make An Enquiry</Link>
				                    <a className="ltn__video-play-btn bg-white" href="https://www.youtube.com/embed/HnbMYzdjuBs?autoplay=1&showinfo=0" data-rel="lightcase">
				                      <i className="icon-play  ltn__secondary-color" />
				                    </a>
				                  </div> */}
				                </div>
								
				              </div>
				              <div className="slide-item-img" >
				                <img src={publicUrl+"assets/img/Allimgs/312.webp"} alt="#"  style={{marginTop:'-20px'}}/>
				              </div>
				            </div>
				          </div>
				        </div>
				      </div>
				    </div>



					<div className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3-normal ltn__slide-item-3">
				      <div className="ltn__slide-item-inner">
				        <div className="container">
				          <div className="row">
				            <div className="col-lg-12 align-self-center">
				              <div className="slide-item-info">
				                <div className="slide-item-info-inner ltn__slide-animation">
				                  {/* <div className="slide-video mb-50 d-none">
				                    <a className="ltn__video-icon-2 ltn__video-icon-2-border" href="https://www.youtube.com/embed/tlThdr3O5Qo" data-rel="lightcase:myCollection">
				                      <i className="fa fa-play" />
				                    </a>
				                  </div> */}
				                  {/* <h6 className="slide-sub-title white-color--- animated"><span><i className="fas fa-home" /></span> Real Estate Agency</h6> */}
				                  <h1 className="slide-title animated "  id="responsive-text-project-heading">Home Interiors</h1>
				                  <div className="animated">
				                    <p id='responsive-text-project-title'>Creating contemporary timeless spaces that never go out of style</p>
				                  </div>
				                  {/* <div className="btn-wrapper animated ">
				                    	<Link to="/about" className="theme-btn-1 btn btn-effect-1 go-top">Make An Enquiry</Link>
				                    <a className="ltn__video-play-btn bg-white" href="https://www.youtube.com/embed/HnbMYzdjuBs?autoplay=1&showinfo=0" data-rel="lightcase">
				                      <i className="icon-play  ltn__secondary-color" />
				                    </a>
				                  </div> */}
				                </div>
				              </div>
				              <div className="slide-item-img">
				                <img src={publicUrl+"assets/img/Allimgs/3 (1).webp"} alt="#" />
				              </div>
				            </div>
				          </div>
				        </div>
				      </div>
				    </div>

					<div className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3-normal ltn__slide-item-3">
				      <div className="ltn__slide-item-inner">
				        <div className="container">
				          <div className="row">
				            <div className="col-lg-12 align-self-center">
				              <div className="slide-item-info">
				                <div className="slide-item-info-inner ltn__slide-animation">
				                  {/* <div className="slide-video mb-50 d-none">
				                    <a className="ltn__video-icon-2 ltn__video-icon-2-border" href="https://www.youtube.com/embed/tlThdr3O5Qo" data-rel="lightcase:myCollection">
				                      <i className="fa fa-play" />
				                    </a>
				                  </div> */}
				                  {/* <h6 className="slide-sub-title white-color--- animated"><span><i className="fas fa-home" /></span> Real Estate Agency</h6> */}
				                  <h1 className="slide-title animated "  id="responsive-text-project-heading">Commercial Building <br/>Design & Property Development Design</h1>
				                  <div className="animated">
				                    <p id='responsive-text-project-title'>Specialization in Designing hotels, Hospitals, Educational Institution, layout, Residential complex and other large scale Projects </p>
				                  </div>
				                  {/* <div className="btn-wrapper animated ">
				                    	<Link to="/about" className="theme-btn-1 btn btn-effect-1 go-top">Make An Enquiry</Link>
				                    <a className="ltn__video-play-btn bg-white" href="https://www.youtube.com/embed/HnbMYzdjuBs?autoplay=1&showinfo=0" data-rel="lightcase">
				                      <i className="icon-play  ltn__secondary-color" />
				                    </a>
				                  </div> */}
				                </div>
				              </div>
				              <div className="slide-item-img">
				                <img src={publicUrl+"assets/img/Allimgs/2 (1).webp"} alt="#" />
				              </div>
				            </div>
				          </div>
				        </div>
				      </div>
				    </div>

					<div className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3-normal ltn__slide-item-3">
				      <div className="ltn__slide-item-inner">
				        <div className="container">
				          <div className="row">
				            <div className="col-lg-12 align-self-center">
				              <div className="slide-item-info">
				                <div className="slide-item-info-inner ltn__slide-animation">
				                  {/* <div className="slide-video mb-50 d-none">
				                    <a className="ltn__video-icon-2 ltn__video-icon-2-border" href="https://www.youtube.com/embed/tlThdr3O5Qo" data-rel="lightcase:myCollection">
				                      <i className="fa fa-play" />
				                    </a>
				                  </div> */}
				                  {/* <h6 className="slide-sub-title white-color--- animated"><span><i className="fas fa-home" /></span> Real Estate Agency</h6> */}
				                  <h1 className="slide-title animated "  id="responsive-text-project-heading">Commercial Shop Interiors</h1>
				                  <div className="animated">
				                    <p id='responsive-text-project-title'>Creating Spaces with strong  visual branding that tells the story of your brand, creating spaces that is  unique to yours.</p>
				                  </div>
				                  {/* <div className="btn-wrapper animated ">
				                    	<Link to="/about" className="theme-btn-1 btn btn-effect-1 go-top">Make An Enquiry</Link>
				                    <a className="ltn__video-play-btn bg-white" href="https://www.youtube.com/embed/HnbMYzdjuBs?autoplay=1&showinfo=0" data-rel="lightcase">
				                      <i className="icon-play  ltn__secondary-color" />
				                    </a>
				                  </div> */}
				                </div>
				              </div>
				              <div className="slide-item-img">
				                <img src={publicUrl+"assets/img/Allimgs/1 (1).webp"} alt="#" />
				              </div>
				            </div>
				          </div>
				        </div>
				      </div>
				    </div>







				   
					 
					
				  </div>
			</div>
        }
}

export default Banner