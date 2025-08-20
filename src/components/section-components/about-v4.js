import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class AboutV4 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return  <div className="ltn__about-us-area pt-120--- pb-90 mt--30 go-top">
				<div className="container">
				<div className="row">
					<div className="col-lg-6 align-self-center">
					<div className="about-us-img-wrap about-img-left">
						<img src={publicUrl+"assets/img/Allimgs/About (1).jpg"} alt="About Us Image" />
						<div className="about-us-img-info about-us-img-info-2 about-us-img-info-3">
						<div className="ltn__video-img ltn__animation-pulse1">
							<img src={publicUrl+"assets/img/Allimgs/About 2.jpg"} alt="video popup bg image" />
							{/* <a className="ltn__video-icon-2 ltn__video-icon-2-border---" href="https://www.youtube.com/embed/0g7mrHt3OPw?si=OVGi3CLNZgUf7YRE" data-rel="lightcase:myCollection">
							<i className="fa fa-play" />
							</a> */}
						</div>
						</div>
					</div>
					</div>
					<div className="col-lg-6 align-self-center">
					<div className="about-us-info-wrap">
						<div className="section-title-area ltn__section-title-2--- mb-20">
						{/* <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">About Us</h6> */}
						<h1 className="section-title"  id='responsive-text-project-title'>Live In The Now, Design For The Future. We Design  Spaces That Seamlessly Adapt As Your Life Evolves<span>.</span></h1>
						

						<h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">Our story </h6>
						<div className="slide-brief animated">
				                    <p>In 2020, amidst the challenges posed by the peak of the pandemic, we embarked on our first pilot project, etching a significant chapter in our journey, our mission was to craft a GamingRoom within a  basement.</p>
									<p> We’ve come a long way since then, turning into a renaissance person- We've undertaken projects for home interior design, including 1.5 BHK, 2 BHK, 3 BHK, and 4 BHK residences, as well as residential home design, retail store design, jewelry store design, farmhouse design, landscape design, hospital design, educational institution design, hotel design, office design, and high-rise design for both commercial and residential purposes. Additionally, we've handled layout design, mall design, and luxury interior design, all of which embody contemporary and timeless aesthetics.</p>
				                  </div>
						<p  id='responsive-text-project-title'></p>
						<p  id='responsive-text-project-title'></p>
						</div>

					
						{/* <ul className="ltn__list-item-half clearfix">
						<li>
							<i className="flaticon-home-2" />
							Smart Home Design
						</li>
						<li>
							<i className="flaticon-mountain" />
							Beautiful Scene Around
						</li>
						<li>
							<i className="flaticon-heart" />
							Exceptional Lifestyle
						</li>
						<li>
							<i className="flaticon-secure" />
							Complete 24/7 Security
						</li>
						</ul> */}
						<div className="ltn__callout bg-overlay-theme-05  mt-30">
						<p>“In the course of our journey, we have curated a team dedicated to delivering excellence in project management, service, and design. Our unique approach is tailored to each client and site, challenging conventional assumptions to unlock innovative solutions. Through a collaborative process involving clients, consultants, fabricators, and builders, we foster open exploration, ensuring a comprehensive understanding of the most fitting and effective solutions.”</p>
						</div>
						<div className="btn-wrapper animated">
						<Link to="/blog-grid" className="theme-btn-1 btn btn-effect-1">OUR Projects </Link>
						</div>
					</div>
					</div>
				</div>
				</div>
			</div>
        }
}

export default AboutV4