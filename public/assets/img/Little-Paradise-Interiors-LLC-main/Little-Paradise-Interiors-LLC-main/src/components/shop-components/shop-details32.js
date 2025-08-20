import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import Sidebar from './sidebar';

class ShopDetails32 extends Component {
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
								<Link   to='/allprojects'>All Projects</Link>
								<Link  to='/Architecture'>Architecture Design</Link>
								<Link  to='/Interior' className="active show" style={{color:'#082A9D'}}> Interior Design</Link>
								 */}
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
        transform: 'translateX(-90%)',
        height: '2px',
        width: '50%',
        backgroundColor: '#00249A', 
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


						<div className="tab-pane fade active show" id="Commercial">
								<div className="ltn__product-tab-content-inner ltn__product-grid-view" id='responsive-text-project-heading'>
									<div className="row">
									<div className="col-lg-12">
										{/* Search Widget */}
									
									</div>
									{/* ltn__product-item */}
									<div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/TWL"><img src={publicUrl+"assets/img/Allimgs/Picture95.webp"} alt="#" /></Link>
		          </div>
		          {/* <div className="ltn__blog-brief"> */}
		           
		            <h3 className="ltn__blog-title  mt-10"  id='productText'><Link to="/TWL"> TWL</Link></h3>
		          
		          {/* </div> */}
		        </div>
		      </div>

									<div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/Earthessence"><img src={publicUrl+"assets/img/Allimgs/Picture45.webp"} alt="#" /></Link>
		          </div>
		         
				  <h3 className="ltn__blog-title  mt-10"  id='productText'><Link to="/Earthessence"> Earthessence</Link></h3>
		        </div>
		      </div>

			 
			  <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/Sky"><img src={publicUrl+"assets/img/Allimgs/sky/s-c.jpg"} alt="#" /></Link>
		          </div>
		          {/* <div className="ltn__blog-brief"> */}
		           
		            <h3 className="ltn__blog-title  mt-10"  id='productText'><Link to="/Sky"> Sky</Link></h3>
		          
		          {/* </div> */}
		        </div>
		      </div>
			  <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/Thamra"><img src={publicUrl+"assets/img/allimgLP/thamra/thamraHome.jpeg"} alt="#" /></Link>
		          </div>
		          {/* <div className="ltn__blog-brief"> */}
		           
		            <h3 className="ltn__blog-title  mt-10"  id='productText'><Link to="/Thamra"> Thamra</Link></h3>
		          
		          {/* </div> */}
		        </div>
		      </div>
			  <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/LEGACY"><img src={publicUrl+"assets/img/Allimgs/Picture117.webp"} alt="#" /></Link>
		          </div>
		          {/* <div className="ltn__blog-brief"> */}
		           
		            <h3 className="ltn__blog-title mt-10"  id='productText'><Link to="/LEGACY">Legacy
					</Link></h3>
		          
		          {/* </div> */}
		        </div>
		      </div>
			  
			  <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/Terra"><img src={publicUrl+"assets/img/Allimgs/Picture65.webp"} alt="#" /></Link>
		          </div>
		          {/* <div className="ltn__blog-brief"> */}
		           
		            <h3 className="ltn__blog-title  mt-10"  id='productText'><Link to="/Terra">Terra</Link></h3>
		          
		          {/* </div> */}
		        </div>
		      </div>
			  <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/GamingRoom"><img src={publicUrl+"assets/img/Allimgs/Picture34.webp"} alt="#" /></Link>
		          </div>
		          {/* <div className="ltn__blog-brief"> */}
		           
		            <h3 className="ltn__blog-title mt-10"  id='productText'><Link to="/GamingRoom">GamingRoom</Link></h3>
		          
		          {/* </div> */}
		        </div>
		      </div>
			  <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/InGreen"><img src={publicUrl+"assets/img/Allimgs/Picture75.webp"} alt="#" /></Link>
		          </div>
		          {/* <div className="ltn__blog-brief"> */}
		           
		            <h3 className="ltn__blog-title mt-10"  id='productText'><Link to="/InGreen">In to the Green
					</Link></h3>
		          
		          {/* </div> */}
		        </div>
		      </div>
			
			  <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/SpecksDesk"><img src={publicUrl+"assets/img/Allimgs/Picture91.webp"} alt="#" /></Link>
		          </div>
		          {/* <div className="ltn__blog-brief"> */}
		           
		            <h3 className="ltn__blog-title mt-10"  id='productText'><Link to="/SpecksDesk"> SpecksDesk</Link></h3>
		          
		          {/* </div> */}
		        </div>
		      </div>
			
			
			  <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/Dreamy"><img src={publicUrl+"assets/img/Allimgs/Picture87.webp"} alt="#" /></Link>
		          </div>
		          {/* <div className="ltn__blog-brief"> */}
		           
		            <h3 className="ltn__blog-title  mt-10"  id='productText'><Link to="/Dreamy"> Dreamy</Link></h3>
		          
		          {/* </div> */}
		        </div>
		      </div>
			 
			 
			
			 
			 
			  <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/Raw"><img src={publicUrl+"assets/img/Allimgs/Picture83.webp"} alt="#" /></Link>
		          </div>
		          {/* <div className="ltn__blog-brief"> */}
		           
		            <h3 className="ltn__blog-title mt-10"  id='productText'><Link to="/Raw"> Raw</Link></h3>
		          
		          {/* </div> */}
		        </div>
		      </div>
			 
			 
			  <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/PERLIYAS"><img src={publicUrl+"assets/img/Allimgs/Picture111.webp"} alt="#" /></Link>
		          </div>
		          {/* <div className="ltn__blog-brief"> */}
		           
		            <h3 className="ltn__blog-title mt-10"  id='productText'><Link to="/PERLIYAS"> Hospital - Dialysis Center</Link></h3>
		          
		          {/* </div> */}
		        </div>
		      </div>
			

			




			 

			  


			 


			 

			  <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/BACKtoBALANCE"><img src={publicUrl+"assets/img/Allimgs/Picture123.webp"} alt="#" /></Link>
		          </div>
		        
				  <h3 className="ltn__blog-title mt-10"  id='productText'><Link to="/LEGABACKtoBALANCECY">Back TO Balance 

</Link></h3>
		        </div>
		      </div>
			  <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/ROLLS"><img src={publicUrl+"assets/img/allimgLP/rolls/c6.jpg"} alt="#" /></Link>
		          </div>
		        
				  <h3 className="ltn__blog-title mt-10"  id='productText'><Link to="/ROLLS">ROLLS AND KARAK 

</Link></h3>
		        </div>
		      </div>
			  <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/mbz-villa"><img src={publicUrl+"assets/img/allimgLP/maz/maz3.jpg"} alt="#" /></Link>
		          </div>
		        
				  <h3 className="ltn__blog-title mt-10"  id='productText'><Link to="/mbz-villa">MBZ Villa 

</Link></h3>
		        </div>
		      </div>
			  <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/Lounge"><img src={publicUrl+"assets/img/allimgLP/Lounge/l2.jpg"} alt="#" /></Link>
		          </div>
		        
				  <h3 className="ltn__blog-title mt-10"  id='productText'><Link to="/Lounge">The Lounge 

</Link></h3>
		        </div>
		      </div>
			  <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/Bay-Bites"><img src={publicUrl+"assets/img/allimgLP/Bay/b1.jpg"} alt="#" /></Link>
		          </div>
		        
				  <h3 className="ltn__blog-title mt-10"  id='productText'><Link to="/Bay-Bites">Bay Bites

</Link></h3>
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
		            <Link to="/Merano"><img src={publicUrl+"assets/img/allimgLP/Merano/Merano3.jpg"} alt="#" /></Link>
		          </div>
		        
				  <h3 className="ltn__blog-title mt-10"  id='productText'><Link to="/Merano">Merano

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
		            <Link to="/Monreve"><img src={publicUrl+"assets/img/allimgLP/Monreve/Monreve2.jpg"} alt="#" /></Link>
		          </div>
		        
				  <h3 className="ltn__blog-title mt-10"  id='productText'><Link to="/jamal">Monreve

</Link></h3>
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
					</div>
    )
  }
}

export default ShopDetails32;
