import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class ShopDetails19 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="ltn__shop-details-area pb-10">
				<div className="container">
				<div className="row">
					<div className="col-lg-12 col-md-12">
					<div className="ltn__shop-details-inner ltn__page-details-inner mb-60">
					
						<h2 id='responsive-text-project-heading'> Airbnb/ Dreamy
                        </h2>
					 <label id='responsive-text-project-title'><span className="ltn__secondary-color"><img src='assets/img/Allimgs/pin.png'/></span>Bangalore</label> 
					 {/* <h4 className="title-2">Estatehouse</h4> */}
						<p   id='responsive-text-project-title'>This is a playful take on modern classic. A subtle Teal accent brightens up, making it lively. Elements inspired my the classic interior style where there is use of mouldings has been used on the walls and the ceiling which stand as a contrast  to the modern eclectic interior space which gives it a chic look.</p>


<h4 className="title-2"  id='responsive-text-project-heading'>Modern /Chic /Eclectic

</h4>

<p  id='responsive-text-project-title'>The design required it to be cost-effective and trendy, aiming to sell itself and attract more customers to stay. Keeping this in mind, we tried to create pretty nooks. One is greeted with a key holder at the entrance, a mirror wall element on the dining wall, and a bedroom that is reminiscent of a dreamy. The entire space follows the classic language in a new way.

 
                        </p>




						<div className="ltn__property-details-gallery mb-30" id='responsive-text-project-title'>
<div className="row">
    <div className="col-md-4">
	{/* <a href={publicUrl+"assets/img/Allimgs/Picture86.webp"} data-rel="lightcase:myCollection"> */}
								<img className="mb-30" src={publicUrl+"assets/img/Allimgs/Picture86.webp"} alt="Image" />
							{/* </a> */}

    </div>
    <div className="col-md-4">
	{/* <a href={publicUrl+"assets/img/Allimgs/Picture87.webp"} data-rel="lightcase:myCollection"> */}
								<img className="mb-30" src={publicUrl+"assets/img/Allimgs/Picture87.webp"} alt="Image" />
							{/* </a> */}

    </div>
    <div className="col-md-4">
	{/* <a href={publicUrl+"assets/img/Allimgs/88.webp"} data-rel="lightcase:myCollection"> */}
								<img className="mb-30" src={publicUrl+"assets/img/Allimgs/Picture88.webp"} alt="Image" />
							{/* </a> */}

    </div>
   
</div>
</div>
<h4 className="title-2"  id='responsive-text-project-heading'>Trendy/Economic Alternative to a Hotel

</h4>
<div className="ltn__property-details-gallery mb-30" id='responsive-text-project-title'>
<div className="row">
    <div className="col-md-7">
	{/* <a href={publicUrl+"assets/img/Allimgs/80.webp"} data-rel="lightcase:myCollection"> */}
								<img  className="mb-30" src={publicUrl+"assets/img/Allimgs/Picture80.webp"} alt="Image" />
							{/* </a> */}

    </div>
   
    <div className="col-md-4">
	<a>
								<img className="mb-30" src={publicUrl+"assets/img/Allimgs/Picture85.webp"} alt="Image" />
							</a>

    </div>
   
</div>
</div>
						{/* <p>Residents also have access to a clubhouse featuring amenities such as a pool, indoor game area, and gym. These facilities provide opportunities for fun, stress relief, and quality time with loved ones.</p> */}
						{/* <p>Magnanimous First of its kind :-
                        It is the first of its kind, offering unparalleled innovation, luxury, and community-focused amenities for an extraordinary lifestyle experience.
                        </p> 
                       
						{/* <h4 className="title-2">Property Detail</h4>   */}
						{/* <div className="property-detail-info-list section-bg-1 clearfix mb-60">                           */}
						{/* <ul>
							<li><label>Area :</label> <span>3760 sq. ft</span></li>
							<li><label>Location </label> <span> Mangaluru, Karnataka</span></li>
							<li><label>Scope :</label> <span>Design Visualisation</span></li>
							
						</ul> */}
						{/* <ul>
							<li><label>Lot Area:</label> <span>HZ29 </span></li>
							<li><label>Lot dimensions:</label> <span>120 sqft</span></li>
							<li><label>Beds:</label> <span>7</span></li>
							<li><label>Price:</label> <span>2</span></li>
							<li><label>Property Status:</label> <span>For Sale</span></li>
						</ul> */}
						{/* </div> */}
						
						{/* <h4 className="title-2" id='#responsive-text-project-heading '>From Our Gallery</h4> */}
						<div className="ltn__property-details-gallery mb-30">
						<div className="row">
							{/* <div className="col-md-8"  id="responsive-text-project-heading">
							<a>
								<img className="mb-30" src={publicUrl+"assets/img/Allimgs/Picture85.webp"} alt="Image" />
							</a>
						
							</div> */}
							{/* <div className="col-md-6">
							<a href={publicUrl+"assets/img/others/16.jpg"} data-rel="lightcase:myCollection">
								<img className="mb-30" src={publicUrl+"assets/img/others/16.jpg"} alt="Image" />
							</a>
							</div> */}

{/* 
<h4 className="title-2"  id='responsive-text-project-heading'>Modern /Chic /Eclectic

</h4>

<p className="col-lg-10 col-md-12"  id='responsive-text-project-title'>The design required it to be cost effective and trendy that would sell itself and attract more customers to the stay.Keeping this in mind, we tried to to create pretty nooks.Ine is greeted with a key holder at the entrance,  a mirror wall element on he dining wall and a bedroom that is reminiscent of a dreamy. The entire space follows the classic language in a new way.

 
                        </p> */}
                        {/* <p className="col-lg-10 col-md-12"  id='responsive-text-project-title'>The space required to be designed was a narrow long space. It needed to be broken down into smaller sections. The futuristic vision of the brand as well as the requirement of the space gave rise to the introduction of curves in the design. The curves broke the homogeneity of the space as well as it created pockets for displaying different ranges of eyewear. It guides the movement of the user. 
                        </p>
                        <p className="col-lg-10 col-md-12"  id='responsive-text-project-title'>Movement being an element of futurism, is also a metaphor for forward motion.
 
                        </p> */}
                        {/* <div className="col-md-3" id="responsive-text-project-heading">
							<a href={publicUrl+"assets/img/Allimgs/Picture86.webp"} data-rel="lightcase:myCollection">
								<img className="mb-30" src={publicUrl+"assets/img/Allimgs/Picture86.webp"} alt="Image" />
							</a>
							
							
							</div>

                        <div className="col-md-4">
                        <a href={publicUrl+"assets/img/Allimgs/Picture87.webp"} data-rel="lightcase:myCollection">
								<img className="mb-30" src={publicUrl+"assets/img/Allimgs/Picture87.webp"} alt="Image" />
							</a>
						
							</div>


                            <div className="col-md-3">
							<a href={publicUrl+"assets/img/Allimgs/88.webp"} data-rel="lightcase:myCollection">
								<img className="mb-30" src={publicUrl+"assets/img/Allimgs/Picture88.webp"} alt="Image" />
							</a>
							
							
							</div> */}
                            {/* <h4 className="title-2"  id='responsive-text-project-heading'>Trendy/economic Alternative to a hotel

</h4> */}

                           



                           
                {/* <p id='responsive-text-project-title' className="col-lg-10 col-md-12">This intentional contrast ensures that customers intuitively identify the transaction area, while also serving the functional need of a flat, stable surface essential for efficient transactions.   
 
                        </p>
                        <p className="col-lg-10 col-md-12" id='responsive-text-project-title'>Placement at the central axis enhances accessibility, making it a focal point for both customers and staff.

 
                        </p> */}
                      




                            

 
                       
                       


						</div>
						</div>
						
						
						
						
					
					</div>
					</div>
					<div className="col-lg-4">
					<aside className="sidebar ltn__shop-sidebar ltn__right-sidebar---">
						{/* Author Widget */}
						
						{/* Search Widget */}
						
						{/* Form Widget */}
						
						{/* Top Rated Product Widget */}
					
						{/* Menu Widget (Category) */}
						
						{/* Popular Product Widget */}
						
						{/* Popular Post Widget */}
						
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
						{/* <div className="widget ltn__banner-widget d-none go-top">
						<Link to="/shop"><img src={publicUrl+"assets/img/banner/2.jpg"} alt="#" /></Link>
						</div> */}
					</aside>
					</div>
				</div>
				</div>
			</div>
        }
}

export default ShopDetails19