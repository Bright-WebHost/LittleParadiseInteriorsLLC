import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class BannerV2 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return  <div className="ltn__slider-area ltn__slider-11  ltn__slider-11-slide-item-count-show--- ltn__slider-11-pagination-count-show--- section-bg-1" style={{backgroundColor:'white'}} >
    {/* return  <div className="ltn__slider-area ltn__slider-11  ltn__slider-11-slide-item-count-show--- ltn__slider-11-pagination-count-show--- section-bg-1" style={{backgroundColor:'white'}} id='homeheaderbanner' old> */}
			  <div className="ltn__slider-11-inner" id='mobilebannertop'>
			  {/* <div className="ltn__slider-11-inner" id='mobilemargintop'>old */}
			    <div className="ltn__slider-11-active" id='tabSlider'>
			      {/* slide-item */}
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
			                    <h1 className="slide-title animated" id="responsive-text-project-heading">Residential Architecture <br />For Houses</h1>
			                    <div className="animated">
								<p id='responsive-text-project-title'>Pushing Boundaries, Shaping the Future, and Transforming the Way We Experience Built Environments</p>
			                    </div>
			                    {/* <div className="btn-wrapper animated">
			                      <Link to="/about" className="theme-btn-1 btn btn-effect-1">Make An Enquiry</Link>
			                      <a className="ltn__video-play-btn bg-white" href="https://www.youtube.com/embed/HnbMYzdjuBs?autoplay=1&showinfo=0" data-rel="lightcase">
			                        <i className="icon-play  ltn__secondary-color" />
			                      </a>
			                    </div> */}
			                  </div>
			                </div>
			                <div className="slide-item-img">
			                  <img src={publicUrl+"assets/img/Allimgs/1img.png"} alt="#" />
			                </div>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
			      {/* slide-item */}
			      
			      {/* slide-item */}
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
			                    <h1 className="slide-title animated " id="responsive-text-project-heading">Commercial Building <br/>Design & Property Development Design</h1>
			                    <div className=" animated">
								<p id='responsive-text-project-title'>Specialization in Designing hotels,<br/> Hospitals, Educational Institution, layout, <br/>Residential complex and other large scale Projects </p>
			                    </div>
			                    {/* <div className="btn-wrapper animated">
			                      <Link to="/service" className="theme-btn-1 btn btn-effect-1">OUR SERVICES</Link>
			                      <Link to="/about" className="btn btn-transparent btn-effect-3">LEARN MORE</Link>
			                    </div> */}
			                  </div>
			                </div>
			                <div className="slide-item-img">
			                  <img src={publicUrl+"assets/img/Allimgs/3img.png"} alt="#" />
			                </div>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
			      {/* slide-item */}
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
			                    <h1 className="slide-title animated " id="responsive-text-project-heading">Commercial Shop Interiors</h1>
			                    <div className="animated">
								<p id='responsive-text-project-title'>Creating Spaces with strong  visual branding that tells the story of your brand, creating spaces that is  unique to yours.</p>
			                    </div>
			                    {/* <div className="btn-wrapper animated">
			                      <Link to="/service" className="theme-btn-1 btn btn-effect-1">OUR SERVICES</Link>
			                      <Link to="/about" className="btn btn-transparent btn-effect-3">LEARN MORE</Link>
			                    </div> */}
			                  </div>
			                </div>
			                <div className="slide-item-img">
			                  <img src={publicUrl+"assets/img/Allimgs/4img.png"} alt="#" />
			                </div>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>




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
			                    <h1 className="slide-title animated" id="responsive-text-project-heading">Home Interiors</h1>
			                    <div className="animated">
								<p id='responsive-text-project-title'>Creating contemporary timeless spaces that never go out of style</p>
			                    </div>
			                    {/* <div className="btn-wrapper animated">
			                      <Link to="/service" className="theme-btn-1 btn btn-effect-1">OUR SERVICES</Link>
			                      <Link to="/about" className="btn btn-transparent btn-effect-3">LEARN MORE</Link>
			                    </div> */}
			                  </div>
			                </div>
			                <div className="slide-item-img">
			                  <img src={publicUrl+"assets/img/Allimgs/11.jpg"} alt="#" />
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
			        <div className="ltn__slider-11-img-slide-arrow-active">
			          <div className="image-slide-item">
			            <img src={publicUrl+"assets/img/Allimgs/1img.png"} alt="Flower Image" />
			          </div>
			          <div className="image-slide-item">
			            <img src={publicUrl+"assets/img/Allimgs/11.jpg"} alt="Flower Image" />
			          </div>
			          <div className="image-slide-item">
			            <img src={publicUrl+"assets/img/Allimgs/3img.png"} alt="Flower Image" />
			          </div>
			          <div className="image-slide-item">
			            <img src={publicUrl+"assets/img/Allimgs/4img.png"} alt="Flower Image" />
			          </div>
			        </div>
			      
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

export default BannerV2