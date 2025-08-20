import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './sidebar';

class OurProjects extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL+'/'
    let customClass = this.props.customClass ? this.props.customClass :''
    let sectionClass = this.props.sectionClass ? this.props.sectionClass :''
    return (
      <div className={ "ltn__blog-area pt-115--- pb-70 go-top "+ sectionClass}>
		  <div className="container">
		    <div className="row">
		      <div className="col-lg-12 mt-4">
		        <div className="section-title-area ltn__section-title-2--- text-center">
		          {/* <h6 className={"section-subtitle ltn__secondary-color "+customClass}>Latest  &amp; Works</h6> */}
		          {/* <h1 className="section-title">Projects </h1> */}
		        </div>
		      </div>
		    </div>







{/* fiter by projects */}


{/* <h4 className="title-2" id='responsive-text-project-heading'>Plans</h4> */}
						{/* APARTMENTS PLAN AREA START */}
						
						






















						<div className="row   slick-arrow-1 ltn__blog-item-3-normal" >
		      {/* Blog Item */}
			  <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/HospitalitySuite"><img src={publicUrl+"assets/img/Allimgs/41.jpg"} alt="#"  /></Link>
		          </div>
		          <div className="ltn__blog-brief">
		          
		            <h3 className="ltn__blog-title"><Link to="/HospitalitySuite">Hospitality - Suite</Link></h3>
		          
		          </div>
		        </div>
		      </div>
		      {/* Blog Item */}
		      <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/Earthessence"><img src={publicUrl+"assets/img/Allimgs/Picture45.webp"} alt="#" /></Link>
		          </div>
		          <div className="ltn__blog-brief">
		           
		            <h3 className="ltn__blog-title"><Link to="/Earthessence"> Earthessence</Link></h3>
		          
		          </div>
		        </div>
		      </div>

		      <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/Dreamy"><img src={publicUrl+"assets/img/Allimgs/Picture87.webp"} alt="#" /></Link>
		          </div>
		          <div className="ltn__blog-brief">
		           
		            <h3 className="ltn__blog-title"><Link to="/Dreamy"> Dreamy</Link></h3>
		          
		          </div>
		        </div>
		      </div>
		     
		     
		     
		      {/* Blog Item */}
		      
		      
		    </div>
			<div className="row   slick-arrow-1 ltn__blog-item-3-normal" >
		      {/* Blog Item */}
			  <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/Sky"><img src={publicUrl+"assets/img/Allimgs/Picture57.webp"} alt="#" /></Link>
		          </div>
		          <div className="ltn__blog-brief">
		           
		            <h3 className="ltn__blog-title"><Link to="/Sky"> Sky</Link></h3>
		          
		          </div>
		        </div>
		      </div>
			  <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/Terra"><img src={publicUrl+"assets/img/Allimgs/Picture65.webp"} alt="#" /></Link>
		          </div>
		          <div className="ltn__blog-brief">
		           
		            <h3 className="ltn__blog-title"><Link to="/Terra">Terra</Link></h3>
		          
		          </div>
		        </div>
		      </div>
		      {/* Blog Item */}
		     

			  <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/TWL"><img src={publicUrl+"assets/img/Allimgs/Picture95.webp"} alt="#" /></Link>
		          </div>
		          <div className="ltn__blog-brief">
		           
		            <h3 className="ltn__blog-title"><Link to="/TWL"> TWL</Link></h3>
		          
		          </div>
		        </div>
		      </div>

		     
		     
		     
		      {/* Blog Item */}
		      
		      
		    </div>





			{/* ltn__blog-slider-one-active */}
		    <div className="row   slick-arrow-1 ltn__blog-item-3-normal " >
		      {/* Blog Item */}
			  <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/SpecksDesk"><img src={publicUrl+"assets/img/Allimgs/Picture91.webp"} alt="#" /></Link>
		          </div>
		          <div className="ltn__blog-brief">
		           
		            <h3 className="ltn__blog-title"><Link to="/SpecksDesk"> SpecksDesk</Link></h3>
		          
		          </div>
		        </div>
		      </div>
		      {/* Blog Item */}
			  <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/Lshaped"><img src={publicUrl+"assets/img/Allimgs/17.png"} alt="#" /></Link>
		          </div>
		          <div className="ltn__blog-brief">
		           
		            <h3 className="ltn__blog-title"><Link to="/Lshaped">L shaped </Link></h3>
		            
		          </div>
		        </div>
		      </div>
		      {/* Blog Item */}
			  <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/GamingRoom"><img src={publicUrl+"assets/img/Allimgs/Picture34.webp"} alt="#" /></Link>
		          </div>
		          <div className="ltn__blog-brief">
		           
		            <h3 className="ltn__blog-title"><Link to="/GamingRoom">GamingRoom</Link></h3>
		          
		          </div>
		        </div>
		      </div>
		      
		    </div>
			<div className="row   slick-arrow-1 ltn__blog-item-3-normal" >
		      {/* Blog Item */}
			  <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/InGreen"><img src={publicUrl+"assets/img/Allimgs/Picture75.webp"} alt="#" /></Link>
		          </div>
		          <div className="ltn__blog-brief">
		           
		            <h3 className="ltn__blog-title"><Link to="/InGreen">In to the Green
					</Link></h3>
		          
		          </div>
		        </div>
		      </div>
			  <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/PERLIYAS"><img src={publicUrl+"assets/img/Allimgs/Picture111.webp"} alt="#" /></Link>
		          </div>
		          <div className="ltn__blog-brief">
		           
		            <h3 className="ltn__blog-title"><Link to="/PERLIYAS"> Hospital - Dialysis Center</Link></h3>
		          
		          </div>
		        </div>
		      </div>
		      {/* Blog Item */}
		     <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/Raw"><img src={publicUrl+"assets/img/Allimgs/Picture83.webp"} alt="#" /></Link>
		          </div>
		          <div className="ltn__blog-brief">
		           
		            <h3 className="ltn__blog-title"><Link to="/Raw"> Raw</Link></h3>
		          
		          </div>
		        </div>
		      </div>

		      
		     
		     
		     
		      {/* Blog Item */}
		      
		      
		    </div>




			{/* ltn__blog-slider-one-active */}
			<div className="row   slick-arrow-1 ltn__blog-item-3-normal" > 
		      {/* Blog Item */}
		      <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/LayoutDesign"><img src={publicUrl+"assets/img/Allimgs/48.jpg"} alt="#" /></Link>
		          </div>
		          <div className="ltn__blog-brief">
		           
		            <h3 className="ltn__blog-title"><Link to="/LayoutDesign">Layout Design </Link></h3>
		            
		          </div>
		        </div>
		      </div>
		      {/* Blog Item */}
			  <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/Mall"><img src={publicUrl+"assets/img/Allimgs/52 - Copy.jpg"} alt="#" /></Link>
		          </div>
		          <div className="ltn__blog-brief">
		           
		            <h3 className="ltn__blog-title"><Link to="/Mall"> Mall</Link></h3>
		            
		          </div>
		        </div>
		      </div>
		      {/* Blog Item */}
		      <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/University"><img src={publicUrl+"assets/img/Allimgs/45.jpg"} alt="#" /></Link>
		          </div>
		          <div className="ltn__blog-brief">
		            
		            <h3 className="ltn__blog-title"><Link to="/University">Fathers Mullers University</Link></h3>
		          
		          </div>
		        </div>
		      </div>
		      
		    </div>

			<div className="row  slick-arrow-1 ltn__blog-item-3-normal" >
		      {/* Blog Item */}
		      <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/OpulentLiv-In"><img src={publicUrl+"assets/img/Allimgs/20.png"} alt="#" /></Link>
		          </div>
		          <div className="ltn__blog-brief">
		          
		            <h3 className="ltn__blog-title"><Link to="/OpulentLiv-In">Opulent 
Liv-In</Link></h3>
		            
		          </div>
		        </div>
		      </div>
		      {/* Blog Item */}
		      <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/TheEstate"><img src={publicUrl+"assets/img/Allimgs/23.png"} alt="#" /></Link>
		          </div>
		          <div className="ltn__blog-brief">
		           
		            <h3 className="ltn__blog-title"><Link to="/TheEstate"> The Estate</Link></h3>
		          
		          </div>
		        </div>
		      </div>
		      <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/TheDual"><img src={publicUrl+"assets/img/Allimgs/26.png"} alt="#" /></Link>
		          </div>
		          <div className="ltn__blog-brief">
		           
		            <h3 className="ltn__blog-title"><Link to="/TheDual">  The Dual</Link></h3>
		           
		          </div>
		        </div>
		      </div>
		     
		     
		      {/* Blog Item */}
		      
		      
		    </div>




			
			<div className="row   slick-arrow-1 ltn__blog-item-3-normal" >
		      {/* Blog Item */}
			  <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/Nova"><img src={publicUrl+"assets/img/Allimgs/30.png"} alt="#" /></Link>
		          </div>
		          <div className="ltn__blog-brief">
		           
		            <h3 className="ltn__blog-title"><Link to="/Nova">Nova</Link></h3>
		          
		          </div>
		        </div>
		      </div>
		      {/* Blog Item */}
		      <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/Mannarkkad-Residence"><img src={publicUrl+"assets/img/Allimgs/61.jpg"} alt="#" /></Link>
		          </div>
		          <div className="ltn__blog-brief">
		           
		            <h3 className="ltn__blog-title"><Link to="/Mannarkkad-Residence"> Mannarkkad residence,Kerala</Link></h3>
		          
		          </div>
		        </div>
		      </div>

		      <div className="col-lg-4 ">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/product-details" ><img src={publicUrl+"assets/img/Allimgs/7.png"} alt="#" /></Link>
		          </div>
		          <div className="ltn__blog-brief">
		          
		            <h3 className="ltn__blog-title"><Link to="/product-details">By the Valley</Link></h3>
		           
		          </div>
		        </div>
		      </div>
		     
		     
		     
		      {/* Blog Item */}
		      
		      
		    </div>



{/* new chapter */}







			

		



			<div className="row   slick-arrow-1 ltn__blog-item-3-normal" >
		      {/* Blog Item */}
			  <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/LEGACY"><img src={publicUrl+"assets/img/Allimgs/Picture117.webp"} alt="#" /></Link>
		          </div>
		          <div className="ltn__blog-brief">
		           
		            <h3 className="ltn__blog-title"><Link to="/LEGACY">LEGACY
					</Link></h3>
		          
		          </div>
		        </div>
		      </div>
			  <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/BACKtoBALANCE"><img src={publicUrl+"assets/img/Allimgs/Picture123.webp"} alt="#" /></Link>
		          </div>
		          <div className="ltn__blog-brief">
		           
		            <h3 className="ltn__blog-title"><Link to="/LEGABACKtoBALANCECY">BACK TO BALANCE

					</Link></h3>
		          
		          </div>
		        </div>
		      </div>
		      {/* Blog Item */}
		   

		      
		     
		     
		     
		      {/* Blog Item */}
		      
		      
		    </div>












		  </div>




		  
		</div>
    )
  }
}

export default OurProjects;
