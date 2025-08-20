import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class AboutV3 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return  <div className="ltn__about-us-area pt-115 pb-100 ">
			  <div className="container">
			    <div className="row">
			      <div className="col-lg-6 align-self-center">
			        <div className="about-us-img-wrap about-img-left">
			          <img src={publicUrl+"assets/img/Allmain/first5.jpg"} alt="About Us Image" />
			          <div className="about-us-img-info about-us-img-info-2 about-us-img-info-3 d-none">
			            <div className="ltn__video-img ltn__animation-pulse1">
			              <img src={publicUrl+"assets/img/others/8.png"} alt="video popup bg image" />
			              <a className="ltn__video-icon-2 ltn__video-icon-2-border---" href="https://www.youtube.com/embed/X7R-q9rsrtU?autoplay=1&showinfo=0" data-rel="lightcase:myCollection">
			                <i className="fa fa-play" />
			              </a>
			            </div>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-6 align-self-center">
			        <div className="about-us-info-wrap">
			          <div className="section-title-area ltn__section-title-2--- mb-30">
			            <h6 className="section-subtitle section-subtitle-2--- ltn__secondary-color">About Us</h6>
			            <h1 className="section-title">Best Tailored
Architecture for You</h1>
			            <p style={{textAlign:'justify',textJustify:'inter-word'}}>We are a dedicated team committed to delivering innovative and sustainable solutions, with a focus on creativity and client satisfaction.

Our comprehensive range of services spans from conceptualization to project completion across industries such as residential, commercial, and industrial. We pride ourselves on offering personalized attention, tailoring each project to meet our clients unique needs and goals.</p>
			          </div>                        
			          <div className="ltn__feature-item ltn__feature-item-3">
			            <div className="ltn__feature-icon">
			              <span><i className="flaticon-house-4" /></span>
			            </div>
			            <div className="ltn__feature-info" style={{marginTop:'20px'}}>
			              <h4><a href="#">The Perfect Residency</a></h4>
			              {/* <p>Lorem ipsum dolor sit amet, consectetur adipisic do eiusmod tempor incididunt ut labore et</p> */}
			            </div>
			          </div>
			          <div className="ltn__feature-item ltn__feature-item-3">
			            <div className="ltn__feature-icon">
			              <span><i className="flaticon-call-center-agent" /></span>
			            </div>
			            <div className="ltn__feature-info" style={{marginTop:'20px'}}>
			              <h4><a href="#">Commercial Opportunity</a></h4>
			              {/* <p>Lorem ipsum dolor sit amet, consectetur adipisic do eiusmod tempor incididunt ut labore et</p> */}
			            </div>
			          </div>
			          <div className="ltn__feature-item ltn__feature-item-3">
			            <div className="ltn__feature-icon">
			              <span><i className="flaticon-maps-and-location" /></span>
			            </div>
			            <div className="ltn__feature-info" style={{marginTop:'20px'}}>
			              <h4><a href="#">Entrance Ideal For the Cafe</a></h4>
			              {/* <p>Lorem ipsum dolor sit amet, consectetur adipisic do eiusmod tempor incididunt ut labore et</p> */}
			            </div>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>
        }
}

export default AboutV3