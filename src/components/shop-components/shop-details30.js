import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import Sidebar from './sidebar';

class ShopDetails30 extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL+'/'
    let customClass = this.props.customClass ? this.props.customClass :''
    let sectionClass = this.props.sectionClass ? this.props.sectionClass :''
    return (
		<div className="ltn__product-area ltn__product-gutter mb-100">
		<div className="container">
				<div className="row">
					<div className="col-lg-12">
					<div className="ltn__shop-options">
						<ul>
						<li>
							<div className="ltn__grid-list-tab-menu ">
							<div className="ltn__tab-menu ltn__tab-menu-3 ltn__tab-menu-top-right-- text-uppercase--- text-center---" >
							<div className="nav" id='responsive-text-project-heading'>
								{/* <a className="active show" data-bs-toggle="tab" href="#liton_product_grid" style={{fontFamily:'Poppins, sans-serif '}}>All Projects</a>
								<a  data-bs-toggle="tab" href="#Architecture" style={{fontFamily:'Poppins, sans-serif '}}>Architecture Design</a>
								<a  data-bs-toggle="tab" href="#Commercial" style={{fontFamily:'Poppins, sans-serif '}}> Interior Design</a> */}
								
{/* 								
								<Link  to='/allprojects'  >All Projects</Link>
								<Link  to='/Architecture' className="active show" style={{color:'#082A9D'}}>Architecture Design</Link>
								<Link  to='/Interior'> Interior Design</Link> */}
								{/* <h5 class="slide-title" style={{textAlign:'center',fontSize:'40px'}}>Check out some of Our works</h5> */}
								{/* <h4 id='responsive-text-project-heading'>Check out some of Our works</h4> */}
								{/* <a data-bs-toggle="tab" href="#liton_product_list"><i className="fas fa-list" /></a> */}
							</div>
							</div>
							</div>
						</li>
						
						
						</ul>
						<div className="tab-content " >
						<div style={{ textAlign: 'start', marginTop: '-80px' }}>
  <h5
    id="responsive-text-project-heading"
    style={{
      marginTop: '-90px',
      marginBottom: '20px',
      position: 'relative',
      display: 'inline-block',
    }}
  >
    Check out some of Our works
    {/* <span
      style={{
        content: '""',
        position: 'absolute',
        bottom: '-7px',
        left: '50%',
        transform: 'translateX(-50%)',
        height: '2px',
        width: '50%',
        backgroundColor: '#00249A', // Change to your desired color
      }}
    ></span> */}
  </h5>
  <style>
    {`
      #responsive-text-project-heading {
        font-size: 35px;
      }
      @media (max-width: 768px) {
        #responsive-text-project-heading {
          font-size: 25px;
        }
      }
    `}
  </style>
</div>




							
						{/* Architecture */}
						{/* Architecture */}
<div className="tab-pane fade active show" id="Architecture">
								<div className="ltn__product-tab-content-inner ltn__product-grid-view" id='responsive-text-project-heading'>
									<div className="row">
									<div className="col-lg-12">
										{/* Search Widget */}
									
									</div>
									{/* ltn__product-item */}
									<div className="col-lg-4 col-sm-6 col-12">
									<div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/HospitalitySuite"><img src={publicUrl+"assets/img/Allimgs/41.jpg"} alt="#"  /></Link>
		          </div>
		          
				  <h3 className="ltn__blog-title mt-10" id='productText'><Link to="/HospitalitySuite">Hospitality - Suite</Link></h3>
		        </div>
									</div>

								

									
			  <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/LayoutDesign"><img src={publicUrl+"assets/img/Allimgs/Rohan Hills.webp"} alt="#" /></Link>
		          </div>
		          {/* <div className="ltn__blog-brief"> */}
		           
		            <h3 className="ltn__blog-title mt-10"  id='productText'><Link to="/LayoutDesign">Layout Design </Link></h3>
		            
		          {/* </div> */}
		        </div>
		      </div>

			  <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/Mall"><img src={publicUrl+"assets/img/Allimgs/52 - Copy.jpg"} alt="#" /></Link>
		          </div>
		          {/* <div className="ltn__blog-brief"> */}
		           
		            <h3 className="ltn__blog-title mt-10"  id='productText'><Link to="/Mall">Mall</Link></h3>
		            
		          {/* </div> */}
		        </div>
		      </div>



			  <div className="col-lg-4 ">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/product-details" ><img src={publicUrl+"assets/img/Allimgs/7.png"} alt="#" /></Link>
		          </div>
		          {/* <div className="ltn__blog-brief"> */}
		          
		            <h3 className="ltn__blog-title mt-10"  id='productText'><Link to="/product-details">By The Valley</Link></h3>
		           
		          {/* </div> */}
		        </div>
		      </div>
			  <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/Lshaped"><img src={publicUrl+"assets/img/Allimgs/17.png"} alt="#" /></Link>
		          </div>
		          {/* <div className="ltn__blog-brief"> */}
		           
		            <h3 className="ltn__blog-title mt-10"  id='productText'><Link to="/Lshaped">L Shaped </Link></h3>
		            
		          {/* </div> */}
		        </div>
		      </div>
			  <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/University"><img src={publicUrl+"assets/img/Allimgs/45.jpg"} alt="#" /></Link>
		          </div>
		          {/* <div className="ltn__blog-brief"> */}
		            
		            <h3 className="ltn__blog-title mt-10"  id='productText'><Link to="/University">University</Link></h3>
		          
		          {/* </div> */}
		        </div>
		      </div>

			  <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/Mannarkkad-Residence"><img src={publicUrl+"assets/img/Allimgs/61.jpg"} alt="#" /></Link>
		          </div>
		          {/* <div className="ltn__blog-brief"> */}
		           
		            <h3 className="ltn__blog-title mt-10"  id='productText'><Link to="/Mannarkkad-Residence"> Mannarkkad Residence,Kerala</Link></h3>
		          
		          {/* </div> */}
		        </div>
		      </div>









			  <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/OpulentLiv-In"><img src={publicUrl+"assets/img/Allimgs/20.png"} alt="#" /></Link>
		          </div>
		          {/* <div className="ltn__blog-brief"> */}
		          
		            <h3 className="ltn__blog-title mt-10"  id='productText'><Link to="/OpulentLiv-In">Opulent 
Liv-In</Link></h3>
		            
		          {/* </div> */}
		        </div>
		      </div>
			  <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/Nova"><img src={publicUrl+"assets/img/Allimgs/30.png"} alt="#" /></Link>
		          </div>
		          {/* <div className="ltn__blog-brief"> */}
		           
		            <h3 className="ltn__blog-title mt-10"  id='productText'><Link to="/Nova">Nova</Link></h3>
		          
		          {/* </div> */}
		        </div>
		      </div>




			  <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/TheEstate"><img src={publicUrl+"assets/img/Allimgs/23.png"} alt="#" /></Link>
		          </div>
		          {/* <div className="ltn__blog-brief"> */}
		           
		            <h3 className="ltn__blog-title mt-10"  id='productText'><Link to="/TheEstate"> The Estate</Link></h3>
		          
		          {/* </div> */}
		        </div>
		      </div>

			  <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/TheDual"><img src={publicUrl+"assets/img/Allimgs/26.png"} alt="#" /></Link>
		          </div>
		          {/* <div className="ltn__blog-brief"> */}
		           
		            <h3 className="ltn__blog-title mt-10"  id='productText'><Link to="/TheDual">  The Dual</Link></h3>
		           
		          {/* </div> */}
		        </div>
		      </div>

		

			

			 


			 


									
									
									
								
									
									</div>
								</div>
								</div>

{/* Architecture */}
						{/* Architecture */}



						</div>
					</div>
					</div>
					</div>
					</div>
					</div>
    )
  }
}

export default ShopDetails30;
