import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class ShopDetails3 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="ltn__shop-details-area pb-10">
				<div className="container">
				<div className="row">
					<div className="col-lg-8 col-md-12">
					<div className="ltn__shop-details-inner ltn__page-details-inner mb-60">
					
						<h1>Farmhouse for an NRIss</h1>
					 <label><span className="ltn__secondary-color"><i className="flaticon-pin" /></span> Sheni, Kerala</label>
						{/* <h4 className="title-2">Farmhouse for an NRI</h4> */}
						<p> Farmhouse for an NRI. The space required to be an Escapade for a young family, whenever they came back to thier hometown. To feel connected to the outdoors.</p>
						{/* <p>To the left is the modern kitchen with central island, leading through to the unique breakfast family room which feature glass walls and doors out onto the garden and access to the separate utility room.</p> */}
						<h4 className="title-2">Property Detail</h4>  
						<div className="property-detail-info-list section-bg-1 clearfix mb-60">                          
						<ul>
							<li><label>Area :</label> <span>3760 sq. ft</span></li>
							<li><label>Location </label> <span> Sheni, Kerala</span></li>
							<li><label>Scope :</label> <span>Architecture + Architecture Interiors + Consultation</span></li>
							
						</ul>
						{/* <ul>
							<li><label>Lot Area:</label> <span>HZ29 </span></li>
							<li><label>Lot dimensions:</label> <span>120 sqft</span></li>
							<li><label>Beds:</label> <span>7</span></li>
							<li><label>Price:</label> <span>2</span></li>
							<li><label>Property Status:</label> <span>For Sale</span></li>
						</ul> */}
						</div>
						
						<h4 className="title-2">From Our Gallery</h4>
						<div className="ltn__property-details-gallery mb-30">
						<div className="row">
							<div className="col-md-6">
							<a href={publicUrl+"assets/img/Allmain/5.png"} data-rel="lightcase:myCollection">
								<img className="mb-30" src={publicUrl+"assets/img/Allmain/5.png"} alt="Image" />
							</a>
							<a href={publicUrl+"assets/img/others/15.jpg"} data-rel="lightcase:myCollection">
								<img className="mb-30" src={publicUrl+"assets/img/others/15.jpg"} alt="Image" />
							</a>
							</div>
							<div className="col-md-6">
							<a href={publicUrl+"assets/img/others/16.jpg"} data-rel="lightcase:myCollection">
								<img className="mb-30" src={publicUrl+"assets/img/others/16.jpg"} alt="Image" />
							</a>
							</div>
						</div>
						</div>
						
						
						<h4 className="title-2">Floor Plans</h4>
						{/* APARTMENTS PLAN AREA START */}
						<div className="ltn__apartments-plan-area product-details-apartments-plan mb-60">
						<div className="ltn__tab-menu ltn__tab-menu-3 ltn__tab-menu-top-right-- text-uppercase--- text-center---">
							<div className="nav">
							<a data-bs-toggle="tab" href="#liton_tab_3_1">First Floor</a>
							<a className="active show" data-bs-toggle="tab" href="#liton_tab_3_2">Second Floor</a>
							<a data-bs-toggle="tab" href="#liton_tab_3_3" >Third Floor</a>
							<a data-bs-toggle="tab" href="#liton_tab_3_4" >Top Garden</a>
							</div>
						</div>
						<div className="tab-content">
							<div className="tab-pane fade" id="liton_tab_3_1">
							<div className="ltn__apartments-tab-content-inner">
								<div className="row">
								<div className="col-lg-7">
									<div className="apartments-plan-img">
									<img src={publicUrl+"assets/img/others/10.png"} alt="#" />
									</div>
								</div>
								<div className="col-lg-5">
									<div className="apartments-plan-info ltn__secondary-bg--- text-color-white---">
									<h2>First Floor</h2>
									<p>Enimad minim veniam quis nostrud exercitation ullamco laboris.
										Lorem ipsum dolor sit amet cons aetetur adipisicing elit sedo
										eiusmod tempor.Incididunt labore et dolore magna aliqua.
										sed ayd minim veniam.</p>
									</div>
								</div>
								<div className="col-lg-12">
									<div className="product-details-apartments-info-list  section-bg-1">
									<div className="row">
										<div className="col-lg-6">
										<div className="apartments-info-list apartments-info-list-color mt-40---">
											<ul>
											<li><label>Total Area</label> <span>2800 Sq. Ft</span></li>
											<li><label>Bedroom</label> <span>150 Sq. Ft</span></li>
											</ul>
										</div>
										</div>
										<div className="col-lg-6">
										<div className="apartments-info-list apartments-info-list-color mt-40---">
											<ul>
											<li><label>Belcony/Pets</label> <span>Allowed</span></li>
											<li><label>Lounge</label> <span>650 Sq. Ft</span></li>
											</ul>
										</div>
										</div>
									</div>
									</div>
								</div>
								</div>
							</div>
							</div>
							<div className="tab-pane fade active show" id="liton_tab_3_2">
							<div className="ltn__product-tab-content-inner">
								<div className="row">
								<div className="col-lg-7">
									<div className="apartments-plan-img">
									<img src={publicUrl+"assets/img/others/10.png"} alt="#" />
									</div>
								</div>
								<div className="col-lg-5">
									<div className="apartments-plan-info ltn__secondary-bg--- text-color-white---">
									<h2>Second Floor</h2>
									<p>Enimad minim veniam quis nostrud exercitation ullamco laboris.
										Lorem ipsum dolor sit amet cons aetetur adipisicing elit sedo
										eiusmod tempor.Incididunt labore et dolore magna aliqua.
										sed ayd minim veniam.</p>
									</div>
								</div>
								<div className="col-lg-12">
									<div className="product-details-apartments-info-list  section-bg-1">
									<div className="row">
										<div className="col-lg-6">
										<div className="apartments-info-list apartments-info-list-color mt-40---">
											<ul>
											<li><label>Total Area</label> <span>2800 Sq. Ft</span></li>
											<li><label>Bedroom</label> <span>150 Sq. Ft</span></li>
											</ul>
										</div>
										</div>
										<div className="col-lg-6">
										<div className="apartments-info-list apartments-info-list-color mt-40---">
											<ul>
											<li><label>Belcony/Pets</label> <span>Allowed</span></li>
											<li><label>Lounge</label> <span>650 Sq. Ft</span></li>
											</ul>
										</div>
										</div>
									</div>
									</div>
								</div>
								</div>
							</div>
							</div>
							<div className="tab-pane fade" id="liton_tab_3_3">
							<div className="ltn__product-tab-content-inner">
								<div className="row">
								<div className="col-lg-7">
									<div className="apartments-plan-img">
									<img src={publicUrl+"assets/img/others/10.png"} alt="#" />
									</div>
								</div>
								<div className="col-lg-5">
									<div className="apartments-plan-info ltn__secondary-bg--- text-color-white---">
									<h2>Third Floor</h2>
									<p>Enimad minim veniam quis nostrud exercitation ullamco laboris.
										Lorem ipsum dolor sit amet cons aetetur adipisicing elit sedo
										eiusmod tempor.Incididunt labore et dolore magna aliqua.
										sed ayd minim veniam.</p>
									</div>
								</div>
								<div className="col-lg-12">
									<div className="product-details-apartments-info-list  section-bg-1">
									<div className="row">
										<div className="col-lg-6">
										<div className="apartments-info-list apartments-info-list-color mt-40---">
											<ul>
											<li><label>Total Area</label> <span>2800 Sq. Ft</span></li>
											<li><label>Bedroom</label> <span>150 Sq. Ft</span></li>
											</ul>
										</div>
										</div>
										<div className="col-lg-6">
										<div className="apartments-info-list apartments-info-list-color mt-40---">
											<ul>
											<li><label>Belcony/Pets</label> <span>Allowed</span></li>
											<li><label>Lounge</label> <span>650 Sq. Ft</span></li>
											</ul>
										</div>
										</div>
									</div>
									</div>
								</div>
								</div>
							</div>
							</div>
							<div className="tab-pane fade" id="liton_tab_3_4">
							<div className="ltn__product-tab-content-inner">
								<div className="row">
								<div className="col-lg-7">
									<div className="apartments-plan-img">
									<img src={publicUrl+"assets/img/others/10.png"} alt="#" />
									</div>
								</div>
								<div className="col-lg-5">
									<div className="apartments-plan-info ltn__secondary-bg--- text-color-white---">
									<h2>Top Garden</h2>
									<p>Enimad minim veniam quis nostrud exercitation ullamco laboris.
										Lorem ipsum dolor sit amet cons aetetur adipisicing elit sedo
										eiusmod tempor.Incididunt labore et dolore magna aliqua.
										sed ayd minim veniam.</p>
									</div>
								</div>
								<div className="col-lg-12">
									<div className="product-details-apartments-info-list  section-bg-1">
									<div className="row">
										<div className="col-lg-6">
										<div className="apartments-info-list apartments-info-list-color mt-40---">
											<ul>
											<li><label>Total Area</label> <span>2800 Sq. Ft</span></li>
											<li><label>Bedroom</label> <span>150 Sq. Ft</span></li>
											</ul>
										</div>
										</div>
										<div className="col-lg-6">
										<div className="apartments-info-list apartments-info-list-color mt-40---">
											<ul>
											<li><label>Belcony/Pets</label> <span>Allowed</span></li>
											<li><label>Lounge</label> <span>650 Sq. Ft</span></li>
											</ul>
										</div>
										</div>
									</div>
									</div>
								</div>
								</div>
							</div>
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
					<div className="col-lg-4">
					<aside className="sidebar ltn__shop-sidebar ltn__right-sidebar---">
						{/* Author Widget */}
						
						{/* Search Widget */}
						
						{/* Form Widget */}
						
						{/* Top Rated Product Widget */}
						<div className="widget ltn__top-rated-product-widget go-top">
						<h4 className="ltn__widget-title ltn__widget-title-border-2">Top Rated Product</h4>
						<ul>
							<li>
							<div className="top-rated-product-item clearfix">
								<div className="top-rated-product-img">
								<Link to="/product-details"><img src={publicUrl+"assets/img/product/1.png"} alt="#" /></Link>
								</div>
								<div className="top-rated-product-info">
								<div className="product-ratting">
									<ul>
									<li><a href="#"><i className="fas fa-star" /></a></li>
									<li><a href="#"><i className="fas fa-star" /></a></li>
									<li><a href="#"><i className="fas fa-star" /></a></li>
									<li><a href="#"><i className="fas fa-star" /></a></li>
									<li><a href="#"><i className="fas fa-star" /></a></li>
									</ul>
								</div>
								<h6><Link to="/shop">Layout Design In Greenville </Link></h6>
								<div className="product-price">
									<span>$30,000.00</span>
									<del>$35,000.00</del>
								</div>
								</div>
							</div>
							</li>
							<li>
							<div className="top-rated-product-item clearfix">
								<div className="top-rated-product-img">
								<Link to="/product-details"><img src={publicUrl+"assets/img/product/2.png"} alt="#" /></Link>
								</div>
								<div className="top-rated-product-info">
								<div className="product-ratting">
									<ul>
									<li><a href="#"><i className="fas fa-star" /></a></li>
									<li><a href="#"><i className="fas fa-star" /></a></li>
									<li><a href="#"><i className="fas fa-star" /></a></li>
									<li><a href="#"><i className="fas fa-star" /></a></li>
									<li><a href="#"><i className="fas fa-star" /></a></li>
									</ul>
								</div>
								<h6><Link to="/shop">Apartment with Subunits</Link></h6>
								<div className="product-price">
									<span>$30,000.00</span>
									<del>$35,000.00</del>
								</div>
								</div>
							</div>
							</li>
							<li>
							<div className="top-rated-product-item clearfix">
								<div className="top-rated-product-img">
								<Link to="/product-details"><img src={publicUrl+"assets/img/product/3.png"} alt="#" /></Link>
								</div>
								<div className="top-rated-product-info">
								<div className="product-ratting">
									<ul>
									<li><a href="#"><i className="fas fa-star" /></a></li>
									<li><a href="#"><i className="fas fa-star" /></a></li>
									<li><a href="#"><i className="fas fa-star" /></a></li>
									<li><a href="#"><i className="fas fa-star-half-alt" /></a></li>
									<li><a href="#"><i className="far fa-star" /></a></li>
									</ul>
								</div>
								<h6><Link to="/shop">3 Rooms Manhattan</Link></h6>
								<div className="product-price">
									<span>$30,000.00</span>
									<del>$35,000.00</del>
								</div>
								</div>
							</div>
							</li>
						</ul>
						</div>
						{/* Menu Widget (Category) */}
						
						{/* Popular Product Widget */}
						<div className="widget ltn__popular-product-widget">       
						<h4 className="ltn__widget-title ltn__widget-title-border-2">Popular Properties</h4>                     
						<div className="row ltn__popular-product-widget-active slick-arrow-1">
							{/* ltn__product-item */}
							<div className="col-12">
							<div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
								<div className="product-img go-top">
								<Link to="/shop"><img src={publicUrl+"assets/img/product-3/6.jpg"} alt="#" /></Link>
								<div className="real-estate-agent">
									<div className="agent-img">
									<Link to="/team-details"><img src={publicUrl+"assets/img/blog/author.jpg"} alt="#" /></Link>
									</div>
								</div>
								</div>
								<div className="product-info">
								<div className="product-price">
									<span>$349,00<label>/Month</label></span>
								</div>
								<h2 className="product-title"><Link to="/shop">New Apartment Nice View</Link></h2>
								<div className="product-img-location">
									<ul>
									<li>
										<Link to="/shop"><i className="flaticon-pin" /> Belmont Gardens, Chicago</Link>
									</li>
									</ul>
								</div>
								<ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
									<li><span>3 </span>
									Bedrooms
									</li>
									<li><span>2 </span>
									Bathrooms
									</li>
									<li><span>3450 </span>
									square Ft
									</li>
								</ul>
								</div>
							</div>
							</div>
							{/* ltn__product-item */}
							<div className="col-12">
							<div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
								<div className="product-img">
								<a href="product-details.html"><img src={publicUrl+"assets/img/product-3/4.jpg" }alt="#" /></a>
								<div className="real-estate-agent">
									<div className="agent-img">
									<Link to="/team-details"><img src={publicUrl+"assets/img/blog/author.jpg"} alt="#" /></Link>
									</div>
								</div>
								</div>
								<div className="product-info">
								<div className="product-price">
									<span>$349,00<label>/Month</label></span>
								</div>
								<h2 className="product-title"><a href="product-details.html">New Apartment Nice View</a></h2>
								<div className="product-img-location">
									<ul>
									<li>
										<a href="product-details.html"><i className="flaticon-pin" /> Belmont Gardens, Chicago</a>
									</li>
									</ul>
								</div>
								<ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
									<li><span>3 </span>
									Bedrooms
									</li>
									<li><span>2 </span>
									Bathrooms
									</li>
									<li><span>3450 </span>
									square Ft
									</li>
								</ul>
								</div>
							</div>
							</div>
							{/* ltn__product-item */}
							<div className="col-12">
							<div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
								<div className="product-img">
								<a href="product-details.html"><img src={publicUrl+"assets/img/product-3/5.jpg"} alt="#" /></a>
								<div className="real-estate-agent">
									<div className="agent-img">
									<Link to="/team-details"><img src={publicUrl+"assets/img/blog/author.jpg" }alt="#" /></Link>
									</div>
								</div>
								</div>
								<div className="product-info">
								<div className="product-price">
									<span>$349,00<label>/Month</label></span>
								</div>
								<h2 className="product-title"><a href="product-details.html">New Apartment Nice View</a></h2>
								<div className="product-img-location">
									<ul>
									<li>
										<a href="product-details.html"><i className="flaticon-pin" /> Belmont Gardens, Chicago</a>
									</li>
									</ul>
								</div>
								<ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
									<li><span>3 </span>
									Bedrooms
									</li>
									<li><span>2 </span>
									Bathrooms
									</li>
									<li><span>3450 </span>
									square Ft
									</li>
								</ul>
								</div>
							</div>
							</div>
							{/*  */}
						</div>
						</div>
						{/* Popular Post Widget */}
						<div className="widget ltn__popular-post-widget go-top">
						<h4 className="ltn__widget-title ltn__widget-title-border-2">Leatest Blogs</h4>
						<ul>
							<li>
							<div className="popular-post-widget-item clearfix">
								<div className="popular-post-widget-img">
								<Link to="/blog-details"><img src={publicUrl+"assets/img/team/5.jpg"} alt="#" /></Link>
								</div>
								<div className="popular-post-widget-brief">
								<h6><Link to="/blog-details">Lorem ipsum dolor sit
									cing elit, sed do.</Link></h6>
								<div className="ltn__blog-meta">
									<ul>
									<li className="ltn__blog-date">
										<a href="#"><i className="far fa-calendar-alt" />June 22, 2020</a>
									</li>
									</ul>
								</div>
								</div>
							</div>
							</li>
							<li>
							<div className="popular-post-widget-item clearfix">
								<div className="popular-post-widget-img">
								<Link to="/blog-details"><img src={publicUrl+"assets/img/team/6.jpg"} alt="#" /></Link>
								</div>
								<div className="popular-post-widget-brief">
								<h6><Link to="/blog-details">Lorem ipsum dolor sit
									cing elit, sed do.</Link></h6>
								<div className="ltn__blog-meta">
									<ul>
									<li className="ltn__blog-date">
										<a href="#"><i className="far fa-calendar-alt" />June 22, 2020</a>
									</li>
									</ul>
								</div>
								</div>
							</div>
							</li>
							<li>
							<div className="popular-post-widget-item clearfix">
								<div className="popular-post-widget-img">
								<Link to="/blog-details"><img src={publicUrl+"assets/img/team/7.jpg"} alt="#" /></Link>
								</div>
								<div className="popular-post-widget-brief">
								<h6><Link to="/blog-details">Lorem ipsum dolor sit
									cing elit, sed do.</Link></h6>
								<div className="ltn__blog-meta">
									<ul>
									<li className="ltn__blog-date">
										<a href="#"><i className="far fa-calendar-alt" />June 22, 2020</a>
									</li>
									</ul>
								</div>
								</div>
							</div>
							</li>
							<li>
							<div className="popular-post-widget-item clearfix">
								<div className="popular-post-widget-img">
								<Link to="/blog-details"><img src={publicUrl+"assets/img/team/8.jpg"} alt="#" /></Link>
								</div>
								<div className="popular-post-widget-brief">
								<h6><Link to="/blog-details">Lorem ipsum dolor sit
									cing elit, sed do.</Link></h6>
								<div className="ltn__blog-meta">
									<ul>
									<li className="ltn__blog-date">
										<a href="#"><i className="far fa-calendar-alt" />June 22, 2020</a>
									</li>
									</ul>
								</div>
								</div>
							</div>
							</li>
						</ul>
						</div>
						{/* Social Media Widget */}
						{/* <div className="widget ltn__social-media-widget">
						<h4 className="ltn__widget-title ltn__widget-title-border-2">Follow us</h4>
						<div className="ltn__social-media-2">
							<ul>
							<li><a href="#" title="Facebook"><i className="fab fa-facebook-f" /></a></li>
							<li><a href="#" title="Twitter"><i className="fab fa-twitter" /></a></li>
							<li><a href="#" title="Linkedin"><i className="fab fa-linkedin" /></a></li>
							<li><a href="#" title="Instagram"><i className="fab fa-instagram" /></a></li>
							</ul>
						</div>
						</div> */}
						{/* Tagcloud Widget */}
						
						{/* Banner Widget */}
						<div className="widget ltn__banner-widget d-none go-top">
						<Link to="/shop"><img src={publicUrl+"assets/img/banner/2.jpg"} alt="#" /></Link>
						</div>
					</aside>
					</div>
				</div>
				</div>
			</div>
        }
}

export default ShopDetails3