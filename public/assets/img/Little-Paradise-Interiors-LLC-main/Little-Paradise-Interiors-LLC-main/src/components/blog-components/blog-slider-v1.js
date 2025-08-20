import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './sidebar';

class BlogSlider extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL+'/'
    let customClass = this.props.customClass ? this.props.customClass :''
    let sectionClass = this.props.sectionClass ? this.props.sectionClass :''
    return (
		<div>

	
      <div className={ "ltn__blog-area pt-115--- pb-70 go-top "+ sectionClass} id="slidermobilehide">
		  <div className="container">
		    <div className="row">
		      <div className="col-lg-12">
		        <div className="section-title-area ltn__section-title-2--- text-center">
		          {/* <h6 className={"section-subtitle ltn__secondary-color "+customClass}>Latest  &amp; Works</h6> */}
		          <h1 className="section-title"  id="responsive-text-project-heading" >Featured Section</h1>
		        </div>
		      </div>
		    </div>
			{/* ltn__blog-slider-one-active */}
			{/* <div className="ltn__blog-btn " style={{textAlign:'end'}}>
		                <Link to="/our-projects">Read more</Link>
		              </div> */}
					  <br/>	
		    <div className="row   	ltn__blog-slider-one-active  slick-arrow-1 ltn__blog-item-3-normal " style={{textAlign:'center'}} id='responsive-text-project-title'>
		      {/* Blog Item */}
			  {/* <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/HospitalitySuite"><img src={publicUrl+"assets/img/Allimgs/Rohan Suite.webp"} alt="#"  style={{objectFit:'cover'}}/></Link>
		          </div>
		          <div className="ltn__blog-brief">
		           
		            <h3 className="ltn__blog-title" id='productText'><Link to="/HospitalitySuite">Hospitality - Suite</Link></h3>
		            
		          </div>
		        </div>
		      </div> */}
		      {/* <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/product-details"><img src={publicUrl+"assets/img/Allimgs/By the Valley.webp"} alt="#" /></Link>
		          </div>
		          <div className="ltn__blog-brief">
		          
		            <h3 className="ltn__blog-title" id='productText'><Link to="/product-details">By the Valley</Link></h3>
		           
		          </div>
		        </div>
		      </div> */}
			  <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/Sky"><img src={publicUrl+"assets/img/Allimgs/Sky.webp"} alt="#" /></Link>
		          </div>
		          <div className="ltn__blog-brief">
		           
		            <h3 className="ltn__blog-title" id='productText'><Link to="/Sky">Sky</Link></h3>
		            {/* <div className="ltn__blog-meta-btn">
		              <div className="ltn__blog-meta">
		           
		              </div>
		              <div className="ltn__blog-btn">
		                <Link to="product-details1">Read more</Link>
		              </div>
		            </div> */}
		          </div>
		        </div>
		      </div>
		      {/* Blog Item */}
			
		      {/* Blog Item */}
			  {/* <div className="col-lg-4" >
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/LayoutDesign"><img src={publicUrl+"assets/img/Allimgs/Rohan Hills.webp"} alt="#" /></Link>
		          </div>
		          <div className="ltn__blog-brief">
		          
		            <h3 className="ltn__blog-title" id='productText'><Link to="/LayoutDesign">Layout Design </Link></h3>
		          
		          </div>
		        </div>
		      </div> */}
			  <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/PERLIYAS"><img src={publicUrl+"assets/img/Allimgs/Picture112.webp"} alt="#"  style={{maxHeight:'390px',width:'400px'}}/></Link>
		          </div>
		          <div className="ltn__blog-brief">
		           
		            <h3 className="ltn__blog-title" id='productText'><Link to="/PERLIYAS">Hospital - Dialysis Center </Link></h3>
		            
		          </div>
		        </div>
		      </div>
			  	  <div className="col-lg-4">
							<div className="ltn__blog-item ltn__blog-item-3">
							  <div className="ltn__blog-img">
								<Link to="/Reva"><img src={publicUrl+"assets/img/allimgLP/reva/r2.jpg"} alt="#" /></Link>
							  </div>
							
							  <h3 className="ltn__blog-title mt-10"  id='productText'><Link to="/Reva">Reva
			  
			  </Link></h3>
							</div>
						  </div>



						  <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/Studio-Merano"><img src={publicUrl+"assets/img/allimgLP/studio/Studio1.jpg"} alt="#" /></Link>
		          </div>
		        
				  <h3 className="ltn__blog-title mt-10"  id='productText'><Link to="/Studio-Merano">Studio - Merano

</Link></h3>
		        </div>
		      </div>

			    <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/jamal"><img src={publicUrl+"assets/img/allimgLP/jamal/jamal1.jpeg"} alt="#" /></Link>
		          </div>
		        
				  <h3 className="ltn__blog-title mt-10"  id='productText'><Link to="/jamal">Jamal

</Link></h3>
		        </div>
		      </div>
			 

			 



			  <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/GamingRoom"><img src={publicUrl+"assets/img/Allimgs/The Gaming Room.webp"} alt="img" /></Link>
		          </div>
		          <div className="ltn__blog-brief">
		            
		            <h3 className="ltn__blog-title" id='productText'><Link to="/GamingRoom">The GamingRoom</Link></h3>
		          
		          </div>
		        </div>
		      </div>

			

			 



			  


			  
			 
		      
		    </div>



















			{/* ltn__blog-slider-one-active */}
			<div className="row   slick-arrow-1 ltn__blog-item-3-normal" style={{textAlign:'center'}}> 
		      {/* <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/product-details13"><img src={publicUrl+"assets/img/Allimgs/48.jpg"} alt="#" /></Link>
		          </div>
		          <div className="ltn__blog-brief">
		           
		            <h3 className="ltn__blog-title"><Link to="/product-details13">Rohan HILLS</Link></h3>
		            
		          </div>
		        </div>
		      </div> */}

			  {/* <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/product-details11"><img src={publicUrl+"assets/img/Allimgs/52 - Copy.jpg"} alt="#" /></Link>
		          </div>
		          <div className="ltn__blog-brief">
		           
		            <h3 className="ltn__blog-title"><Link to="/product-details11">Rohan / Mall</Link></h3>
		            <div className="ltn__blog-meta-btn">
		              <div className="ltn__blog-meta">
		           
		              </div>
		              <div className="ltn__blog-btn">
		                <Link to="product-details1">Read more</Link>
		              </div>
		            </div>
		          </div>
		        </div>
		      </div> */}
		      {/* <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/product-details12"><img src={publicUrl+"assets/img/Allimgs/45.jpg"} alt="#" /></Link>
		          </div>
		          <div className="ltn__blog-brief">
		            
		            <h3 className="ltn__blog-title"><Link to="/product-details12">Fathers Mullers University</Link></h3>
		          
		          </div>
		        </div>
		      </div> */}
		      
		    </div>

			<div className="row  slick-arrow-1 ltn__blog-item-3-normal" style={{textAlign:'center'}}>
		      {/* <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/product-details5"><img src={publicUrl+"assets/img/Allimgs/20.png"} alt="#" /></Link>
		          </div>
		          <div className="ltn__blog-brief">
		          
		            <h3 className="ltn__blog-title"><Link to="/product-details5">Opulent 
Liv-In</Link></h3>
		            
		          </div>
		        </div>
		      </div> */}

		      <div className="col-lg-4">
		        {/* <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/product-details6"><img src={publicUrl+"assets/img/Allimgs/23.png"} alt="#" /></Link>
		          </div>
		          <div className="ltn__blog-brief">
		           
		            <h3 className="ltn__blog-title"><Link to="/product-details6"> The Estate</Link></h3>
		          
		          </div>
		        </div> */}
		      </div>
		      {/* <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/product-details7"><img src={publicUrl+"assets/img/Allimgs/26.png"} alt="#" /></Link>
		          </div>
		          <div className="ltn__blog-brief">
		           
		            <h3 className="ltn__blog-title"><Link to="/product-details7">  The Dual</Link></h3>
		           
		          </div>
		        </div>
		      </div>
		      */}
			  {/* <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/product-details9"><img src={publicUrl+"assets/img/Allimgs/61.jpg"} alt="#" /></Link>
		          </div>
		          <div className="ltn__blog-brief">
		           
		            <h3 className="ltn__blog-title"><Link to="/product-details9"> Mannarkkad residence,Kerala</Link></h3>
		          
		          </div>
		        </div>
		      </div> */}
		      
		      
		    </div>




			
			<div className="row   slick-arrow-1 ltn__blog-item-3-normal" style={{textAlign:'center'}}>

			  {/* <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/product-details8"><img src={publicUrl+"assets/img/Allimgs/30.png"} alt="#" /></Link>
		          </div>
		          <div className="ltn__blog-brief">
		           
		            <h3 className="ltn__blog-title"><Link to="/product-details8">Nova</Link></h3>
		          
		          </div>
		        </div>
		      </div> */}

		      {/* <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/product-details9"><img src={publicUrl+"assets/img/Allimgs/61.jpg"} alt="#" /></Link>
		          </div>
		          <div className="ltn__blog-brief">
		           
		            <h3 className="ltn__blog-title"><Link to="/product-details9"> Mannarkkad residence,Kerala</Link></h3>
		          
		          </div>
		        </div>
		      </div> */}
		     
		     
		     
		      {/* Blog Item */}
		      
		      
		    </div>
		  </div>




		  
		</div>

















		   {/* .......................................hide laptop and system */}
		   
		   <div className={ "ltn__blog-area pt-115--- pb-70 go-top "+ sectionClass} id='hidelaptopandsytem'  style={{marginTop:'-100px'}}>
		  <div className="container">
		    <div className="row">
		      <div className="col-lg-12">
		        <div className="section-title-area ltn__section-title-2--- text-center">
		          {/* <h6 className={"section-subtitle ltn__secondary-color "+customClass}>Latest  &amp; Works</h6> */}
		          <h1 className="section-title">Featured Section</h1>
		        </div>
		      </div>
		    </div>
			{/* ltn__blog-slider-one-active */}
			{/* <div className="ltn__blog-btn " style={{textAlign:'end'}}>
		                <Link to="/our-projects">Read more</Link>
		              </div>
					  <br/>	 */}
		    <div className="row    slick-arrow-1 ltn__blog-item-3-normal " style={{textAlign:'center'}}>
		      {/* Blog Item */}
			  <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/Sky"><img src={publicUrl+"assets/img/Allimgs/Sky.webp"} alt="#"  style={{objectFit:'cover'}}/></Link>
		          </div>
		          <div className="ltn__blog-brief">
		           
		            <h3 className="ltn__blog-title" id='productText'><Link to="/Sky">Sky</Link></h3>
		            
		          </div>
		        </div>
		      </div>
		      <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/Reva"><img src={publicUrl+"assets/img/allimgLP/reva/r2.jpg"} alt="#" /></Link>
		          </div>
		          <div className="ltn__blog-brief">
		          
		            <h3 className="ltn__blog-title" id='productText'><Link to="/Reva">Reva</Link></h3>
		           
		          </div>
		        </div>
		      </div>
			  <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/Monreve"><img src={publicUrl+"assets/img/allimgLP/Monreve/Monreve2.jpg"} alt="#" /></Link>
		          </div>
		          <div className="ltn__blog-brief">
		           
		            <h3 className="ltn__blog-title" id='productText'><Link to="/Monreve">Monreve </Link></h3>
		            {/* <div className="ltn__blog-meta-btn">
		              <div className="ltn__blog-meta">
		           
		              </div>
		              <div className="ltn__blog-btn">
		                <Link to="product-details1">Read more</Link>
		              </div>
		            </div> */}
		          </div>
		        </div>
		      </div>
		      {/* Blog Item */}
			
		      {/* Blog Item */}
			
			  <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/PERLIYAS"><img src={publicUrl+"assets/img/Allimgs/Picture112.webp"} alt="#"  style={{maxHeight:'390px',width:'400px'}}/></Link>
		          </div>
		          <div className="ltn__blog-brief">
		           
		            <h3 className="ltn__blog-title" id='productText'><Link to="/PERLIYAS">Hospital - Dialysis Center</Link></h3>
		            
		          </div>
		        </div>
		      </div>
			 

			 



			  <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/GamingRoom"><img src={publicUrl+"assets/img/Allimgs/The Gaming Room.webp"} alt="#" /></Link>
		          </div>
		          <div className="ltn__blog-brief">
		            
		            <h3 className="ltn__blog-title" id='productText'><Link to="/GamingRoom">The GamingRoom</Link></h3>
		          
		          </div>
		        </div>
		      </div>

			

			 



			  


			  
			 
		      
		    </div>



















			{/* ltn__blog-slider-one-active */}
			<div className="row   slick-arrow-1 ltn__blog-item-3-normal" style={{textAlign:'center'}}> 
		      {/* <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/product-details13"><img src={publicUrl+"assets/img/Allimgs/48.jpg"} alt="#" /></Link>
		          </div>
		          <div className="ltn__blog-brief">
		           
		            <h3 className="ltn__blog-title"><Link to="/product-details13">Rohan HILLS</Link></h3>
		            
		          </div>
		        </div>
		      </div> */}

			  {/* <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/product-details11"><img src={publicUrl+"assets/img/Allimgs/52 - Copy.jpg"} alt="#" /></Link>
		          </div>
		          <div className="ltn__blog-brief">
		           
		            <h3 className="ltn__blog-title"><Link to="/product-details11">Rohan / Mall</Link></h3>
		            <div className="ltn__blog-meta-btn">
		              <div className="ltn__blog-meta">
		           
		              </div>
		              <div className="ltn__blog-btn">
		                <Link to="product-details1">Read more</Link>
		              </div>
		            </div>
		          </div>
		        </div>
		      </div> */}
		      {/* <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/product-details12"><img src={publicUrl+"assets/img/Allimgs/45.jpg"} alt="#" /></Link>
		          </div>
		          <div className="ltn__blog-brief">
		            
		            <h3 className="ltn__blog-title"><Link to="/product-details12">Fathers Mullers University</Link></h3>
		          
		          </div>
		        </div>
		      </div> */}
		      
		    </div>

			<div className="row  slick-arrow-1 ltn__blog-item-3-normal" style={{textAlign:'center'}}>
		      {/* <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/product-details5"><img src={publicUrl+"assets/img/Allimgs/20.png"} alt="#" /></Link>
		          </div>
		          <div className="ltn__blog-brief">
		          
		            <h3 className="ltn__blog-title"><Link to="/product-details5">Opulent 
Liv-In</Link></h3>
		            
		          </div>
		        </div>
		      </div> */}

		      <div className="col-lg-4">
		        {/* <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/product-details6"><img src={publicUrl+"assets/img/Allimgs/23.png"} alt="#" /></Link>
		          </div>
		          <div className="ltn__blog-brief">
		           
		            <h3 className="ltn__blog-title"><Link to="/product-details6"> The Estate</Link></h3>
		          
		          </div>
		        </div> */}
		      </div>
		      {/* <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/product-details7"><img src={publicUrl+"assets/img/Allimgs/26.png"} alt="#" /></Link>
		          </div>
		          <div className="ltn__blog-brief">
		           
		            <h3 className="ltn__blog-title"><Link to="/product-details7">  The Dual</Link></h3>
		           
		          </div>
		        </div>
		      </div>
		      */}
			  {/* <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/product-details9"><img src={publicUrl+"assets/img/Allimgs/61.jpg"} alt="#" /></Link>
		          </div>
		          <div className="ltn__blog-brief">
		           
		            <h3 className="ltn__blog-title"><Link to="/product-details9"> Mannarkkad residence,Kerala</Link></h3>
		          
		          </div>
		        </div>
		      </div> */}
		      
		      
		    </div>




			
			<div className="row   slick-arrow-1 ltn__blog-item-3-normal" style={{textAlign:'center'}}>

			  {/* <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/product-details8"><img src={publicUrl+"assets/img/Allimgs/30.png"} alt="#" /></Link>
		          </div>
		          <div className="ltn__blog-brief">
		           
		            <h3 className="ltn__blog-title"><Link to="/product-details8">Nova</Link></h3>
		          
		          </div>
		        </div>
		      </div> */}

		      {/* <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/product-details9"><img src={publicUrl+"assets/img/Allimgs/61.jpg"} alt="#" /></Link>
		          </div>
		          <div className="ltn__blog-brief">
		           
		            <h3 className="ltn__blog-title"><Link to="/product-details9"> Mannarkkad residence,Kerala</Link></h3>
		          
		          </div>
		        </div>
		      </div> */}
		     
		     
		     
		      {/* Blog Item */}
		      
		      
		    </div>
		  </div>




		  
		</div>
		   {/* .......................................hide laptop and system */}
		</div>
    )
  }
}

export default BlogSlider;
