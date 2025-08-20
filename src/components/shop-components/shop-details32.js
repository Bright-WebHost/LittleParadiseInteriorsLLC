// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// // import Sidebar from './sidebar';

// class ShopDetails32 extends Component {
//   render() {
//     let publicUrl = process.env.PUBLIC_URL+'/'
//     let customClass = this.props.customClass ? this.props.customClass :''
//     let sectionClass = this.props.sectionClass ? this.props.sectionClass :''
//     return (
// 		<div className="ltn__product-area ltn__product-gutter mb-100">
// 		<div className="container">
// 				<div className="row">
// 					<div className="col-lg-12">
// 					<div className="ltn__shop-options">
// 						<ul>
// 						<li>
							
// 							<div className="ltn__grid-list-tab-menu ">
// 							<div className="ltn__tab-menu ltn__tab-menu-3 ltn__tab-menu-top-right-- text-uppercase--- text-center---" >
// 							<div className="nav" id='responsive-text-project-heading'>
// 								{/* <a className="active show" data-bs-toggle="tab" href="#liton_product_grid" style={{fontFamily:'Poppins, sans-serif '}}>All Projects</a>
// 								<a  data-bs-toggle="tab" href="#Architecture" style={{fontFamily:'Poppins, sans-serif '}}>Architecture Design</a>
// 								<a  data-bs-toggle="tab" href="#Commercial" style={{fontFamily:'Poppins, sans-serif '}}> Interior Design</a> */}
// {/* 								
// 								<Link   to='/allprojects'>All Projects</Link>
// 								<Link  to='/Architecture'>Architecture Design</Link>
// 								<Link  to='/Interior' className="active show" style={{color:'#082A9D'}}> Interior Design</Link>
// 								 */}
// 								{/* <a data-bs-toggle="tab" href="#liton_product_list"><i className="fas fa-list" /></a> */}
// 							</div>
							
// 							</div>
// 							</div>
// 						</li>
						
						
// 						</ul>
// 						<div className="tab-content " >
// 						<div style={{ textAlign: 'start', marginTop: '-80px' }}>
//   <h5
//     id="responsive-text-project-heading"
//     style={{
//       marginTop: '-90px',
//       marginBottom: '20px',
//       position: 'relative',
//       display: 'inline-block',
//     }}
//   >
//     Check out some of Our works
//     {/* <span
//       style={{
//         content: '""',
//         position: 'absolute',
//         bottom: '-7px',
//         left: '50%',
//         transform: 'translateX(-90%)',
//         height: '2px',
//         width: '50%',
//         backgroundColor: '#00249A', 
//       }}
//     ></span> */}
//   </h5>
//   <style>
//     {`
//       #responsive-text-project-heading {
//         font-size: 35px;
//       }
//       @media (max-width: 768px) {
//         #responsive-text-project-heading {
//           font-size: 25px;
//         }
//       }
		
//     `}
	
//   </style>
// </div>


// 						<div className="tab-pane fade active show" id="Commercial">
// 								<div className="ltn__product-tab-content-inner " id='responsive-text-project-heading'>
// 									<div className="row">
// 									<div className="col-lg-12">
// 										{/* Search Widget */}
									
// 									</div>
// 									{/* ltn__product-item */}
// 									<div className="col-lg-4">
// 		        <div className="ltn__blog-item ltn__blog-item-3">
// 		          <div className="ltn__blog-img">
// 		            <Link to="/TWL"><img src={publicUrl+"assets/img/Allimgs/Picture95.webp"} alt="#" /></Link>
// 		          </div>
// 		          {/* <div className="ltn__blog-brief"> */}
		           
// 		            <h3 className="ltn__blog-title  mt-10"  id='productText'><Link to="/TWL"> TWL</Link></h3>
		          
// 		          {/* </div> */}
// 		        </div>
// 		      </div>

// 			   <div className="col-lg-4">
// 		        <div className="ltn__blog-item ltn__blog-item-3">
// 		          <div className="ltn__blog-img">
// 		            <Link to="/Aura"><img src={publicUrl+"assets/img/updatates/project/Aura.jpg"} alt="#" /></Link>
// 		          </div>
// 		          {/* <div className="ltn__blog-brief"> */}
		           
// 		            <h3 className="ltn__blog-title mt-10"  id='productText'><Link to="/SpecksDesk"> Aura</Link></h3>
		          
// 		          {/* </div> */}
// 		        </div>
// 		      </div>
// 			   <div className="col-lg-4">
// 		        <div className="ltn__blog-item ltn__blog-item-3">
// 		          <div className="ltn__blog-img">
// 		            <Link to="/Rue"><img src={publicUrl+"assets/img/updatates/project/rue1.jpg"} alt="#" /></Link>
// 		          </div>
// 		          {/* <div className="ltn__blog-brief"> */}
		           
// 		            <h3 className="ltn__blog-title mt-10"  id='productText'><Link to="/SpecksDesk"> Rué</Link></h3>
		          
// 		          {/* </div> */}
// 		        </div>
// 		      </div>

// 									<div className="col-lg-4">
// 		        <div className="ltn__blog-item ltn__blog-item-3">
// 		          <div className="ltn__blog-img">
// 		            <Link to="/Earthessence"><img src={publicUrl+"assets/img/Allimgs/Picture45.webp"} alt="#" /></Link>
// 		          </div>
		         
// 				  <h3 className="ltn__blog-title  mt-10"  id='productText'><Link to="/Earthessence"> Earthessence</Link></h3>
// 		        </div>
// 		      </div>

			 
// 			  <div className="col-lg-4">
// 		        <div className="ltn__blog-item ltn__blog-item-3">
// 		          <div className="ltn__blog-img">
// 		            <Link to="/Sky"><img src={publicUrl+"assets/img/Allimgs/Picture57.webp"} alt="#" /></Link>
// 		          </div>
// 		          {/* <div className="ltn__blog-brief"> */}
		           
// 		            <h3 className="ltn__blog-title  mt-10"  id='productText'><Link to="/Sky"> Sky</Link></h3>
		          
// 		          {/* </div> */}
// 		        </div>
// 		      </div>
// 			  <div className="col-lg-4">
// 		        <div className="ltn__blog-item ltn__blog-item-3">
// 		          <div className="ltn__blog-img">
// 		            <Link to="/LEGACY"><img src={publicUrl+"assets/img/Allimgs/Picture117.webp"} alt="#" /></Link>
// 		          </div>
// 		          {/* <div className="ltn__blog-brief"> */}
		           
// 		            <h3 className="ltn__blog-title mt-10"  id='productText'><Link to="/LEGACY">Legacy
// 					</Link></h3>
		          
// 		          {/* </div> */}
// 		        </div>
// 		      </div>
			  
// 			  <div className="col-lg-4">
// 		        <div className="ltn__blog-item ltn__blog-item-3">
// 		          <div className="ltn__blog-img">
// 		            <Link to="/Terra"><img src={publicUrl+"assets/img/Allimgs/Picture65.webp"} alt="#" /></Link>
// 		          </div>
// 		          {/* <div className="ltn__blog-brief"> */}
		           
// 		            <h3 className="ltn__blog-title  mt-10"  id='productText'><Link to="/Terra">assets/img/updatates/project/Aura.jpg</Link></h3>
		          
// 		          {/* </div> */}
// 		        </div>
// 		      </div>
// 			  <div className="col-lg-4">
// 		        <div className="ltn__blog-item ltn__blog-item-3">
// 		          <div className="ltn__blog-img">
// 		            <Link to="/GamingRoom"><img src={publicUrl+"assets/img/Allimgs/Picture34.webp"} alt="#" /></Link>
// 		          </div>
// 		          {/* <div className="ltn__blog-brief"> */}
		           
// 		            <h3 className="ltn__blog-title mt-10"  id='productText'><Link to="/GamingRoom">GamingRoom</Link></h3>
		          
// 		          {/* </div> */}
// 		        </div>
// 		      </div>
// 			  <div className="col-lg-4">
// 		        <div className="ltn__blog-item ltn__blog-item-3">
// 		          <div className="ltn__blog-img">
// 		            <Link to="/InGreen"><img src={publicUrl+"assets/img/Allimgs/Picture75.webp"} alt="#" /></Link>
// 		          </div>
// 		          {/* <div className="ltn__blog-brief"> */}
		           
// 		            <h3 className="ltn__blog-title mt-10"  id='productText'><Link to="/InGreen">In to the Green
// 					</Link></h3>
		          
// 		          {/* </div> */}
// 		        </div>
// 		      </div>
			
// 			  <div className="col-lg-4">
// 		        <div className="ltn__blog-item ltn__blog-item-3">
// 		          <div className="ltn__blog-img">
// 		            <Link to="/SpecksDesk"><img src={publicUrl+"assets/img/Allimgs/Picture91.webp"} alt="#" /></Link>
// 		          </div>
// 		          {/* <div className="ltn__blog-brief"> */}
		           
// 		            <h3 className="ltn__blog-title mt-10"  id='productText'><Link to="/SpecksDesk"> SpecksDesk</Link></h3>
		          
// 		          {/* </div> */}
// 		        </div>
// 		      </div>
			
			
// 			  <div className="col-lg-4">
// 		        <div className="ltn__blog-item ltn__blog-item-3">
// 		          <div className="ltn__blog-img">
// 		            <Link to="/Dreamy"><img src={publicUrl+"assets/img/Allimgs/Picture87.webp"} alt="#" /></Link>
// 		          </div>
// 		          {/* <div className="ltn__blog-brief"> */}
		           
// 		            <h3 className="ltn__blog-title  mt-10"  id='productText'><Link to="/Dreamy"> Dreamy</Link></h3>
		          
// 		          {/* </div> */}
// 		        </div>
// 		      </div>
			 
			 
			
			 
			 
// 			  <div className="col-lg-4">
// 		        <div className="ltn__blog-item ltn__blog-item-3">
// 		          <div className="ltn__blog-img">
// 		            <Link to="/Raw"><img src={publicUrl+"assets/img/Allimgs/Picture83.webp"} alt="#" /></Link>
// 		          </div>
// 		          {/* <div className="ltn__blog-brief"> */}
		           
// 		            <h3 className="ltn__blog-title mt-10"  id='productText'><Link to="/Raw"> Raw</Link></h3>
		          
// 		          {/* </div> */}
// 		        </div>
// 		      </div>
			 
			 
// 			  <div className="col-lg-4">
// 		        <div className="ltn__blog-item ltn__blog-item-3">
// 		          <div className="ltn__blog-img">
// 		            <Link to="/PERLIYAS"><img src={publicUrl+"assets/img/Allimgs/Picture111.webp"} alt="#" /></Link>
// 		          </div>
// 		          {/* <div className="ltn__blog-brief"> */}
		           
// 		            <h3 className="ltn__blog-title mt-10"  id='productText'><Link to="/PERLIYAS"> Hospital - Dialysis Center</Link></h3>
		          
// 		          {/* </div> */}
// 		        </div>
// 		      </div>
			

			




			 

			  


			 


			 

// 			  <div className="col-lg-4">
// 		        <div className="ltn__blog-item ltn__blog-item-3">
// 		          <div className="ltn__blog-img">
// 		            <Link to="/BACKtoBALANCE"><img src={publicUrl+"assets/img/Allimgs/Picture123.webp"} alt="#" /></Link>
// 		          </div>
		        
// 				  <h3 className="ltn__blog-title mt-10"  id='productText'><Link to="/LEGABACKtoBALANCECY">Back To Balance 

// </Link></h3>
// 		        </div>
// 		      </div>
// 			  <div className="col-lg-4">
// 		        <div className="ltn__blog-item ltn__blog-item-3">
// 		          <div className="ltn__blog-img">
// 		            <Link to="/ROLLS"><img src={publicUrl+"assets/img/allimgLP/rolls/c6.jpg"} alt="#" /></Link>
// 		          </div>
		        
// 				  <h3 className="ltn__blog-title mt-10"  id='productText'><Link to="/ROLLS">Rolls and Karak

// </Link></h3>
// 		        </div>
// 		      </div>
// 			  <div className="col-lg-4">
// 		        <div className="ltn__blog-item ltn__blog-item-3">
// 		          <div className="ltn__blog-img">
// 		            <Link to="/mbz-villa"><img src={publicUrl+"assets/img/allimgLP/maz/maz3.jpg"} alt="#" /></Link>
// 		          </div>
		        
// 				  <h3 className="ltn__blog-title mt-10"  id='productText'><Link to="/mbz-villa">MBZ Villa 

// </Link></h3>
// 		        </div>
// 		      </div>
// 			  <div className="col-lg-4">
// 		        <div className="ltn__blog-item ltn__blog-item-3">
// 		          <div className="ltn__blog-img">
// 		            <Link to="/Lounge"><img src={publicUrl+"assets/img/allimgLP/Lounge/l2.jpg"} alt="#" /></Link>
// 		          </div>
		        
// 				  <h3 className="ltn__blog-title mt-10"  id='productText'><Link to="/Lounge">The Lounge 

// </Link></h3>
// 		        </div>
// 		      </div>
// 			  <div className="col-lg-4">
// 		        <div className="ltn__blog-item ltn__blog-item-3">
// 		          <div className="ltn__blog-img">
// 		            <Link to="/Bay-Bites"><img src={publicUrl+"assets/img/allimgLP/Bay/b1.jpg"} alt="#" /></Link>
// 		          </div>
		        
// 				  <h3 className="ltn__blog-title mt-10"  id='productText'><Link to="/Bay-Bites">Bay Bites

// </Link></h3>
// 		        </div>
// 		      </div>
// 			  <div className="col-lg-4">
// 		        <div className="ltn__blog-item ltn__blog-item-3">
// 		          <div className="ltn__blog-img">
// 		            <Link to="/Reva"><img src={publicUrl+"assets/img/allimgLP/reva/r2.jpg"} alt="#" /></Link>
// 		          </div>
		        
// 				  <h3 className="ltn__blog-title mt-10"  id='productText'><Link to="/Reva">Reva

// </Link></h3>
// 		        </div>
// 		      </div>
			 
// 			  <div className="col-lg-4">
// 		        <div className="ltn__blog-item ltn__blog-item-3">
// 		          <div className="ltn__blog-img">
// 		            <Link to="/Studio-Merano"><img src={publicUrl+"assets/img/allimgLP/studio/Studio1.jpg"} alt="#" /></Link>
// 		          </div>
		        
// 				  <h3 className="ltn__blog-title mt-10"  id='productText'><Link to="/Studio-Merano">Studio - Merano

// </Link></h3>
// 		        </div>
// 		      </div>
// 			   <div className="col-lg-4">
// 		        <div className="ltn__blog-item ltn__blog-item-3">
// 		          <div className="ltn__blog-img">
// 		            <Link to="/Merano"><img src={publicUrl+"assets/img/allimgLP/Merano/Merano3.jpg"} alt="#" /></Link>
// 		          </div>
		        
// 				  <h3 className="ltn__blog-title mt-10"  id='productText'><Link to="/Merano">Merano

// </Link></h3>
// 		        </div>
// 		      </div>
// 			  <div className="col-lg-4">
// 		        <div className="ltn__blog-item ltn__blog-item-3">
// 		          <div className="ltn__blog-img">
// 		            <Link to="/jamal"><img src={publicUrl+"assets/img/allimgLP/jamal/jamal1.jpeg"} alt="#" /></Link>
// 		          </div>
		        
// 				  <h3 className="ltn__blog-title mt-10"  id='productText'><Link to="/jamal">Jamal

// </Link></h3>
// 		        </div>
// 		      </div>
// 			  <div className="col-lg-4">
// 		        <div className="ltn__blog-item ltn__blog-item-3">
// 		          <div className="ltn__blog-img">
// 		            <Link to="/Monreve"><img src={publicUrl+"assets/img/allimgLP/Monreve/Monreve2.jpg"} alt="#" /></Link>
// 		          </div>
		        
// 				  <h3 className="ltn__blog-title mt-10"  id='productText'><Link to="/jamal">Monreve

// </Link></h3>
// 		        </div>
// 		      </div>
			  


									
									
									
								
									
// 									</div>
// 								</div>
// 								</div>
// 						</div>
// 					</div>
// 					</div>
// 					</div>
// 					</div>
// 					</div>
//     )
//   }
// }

// export default ShopDetails32;


import React from 'react';
import { BrowserRouter , Router, Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Calendar, User } from 'lucide-react';

// Sample projects data with real Pexels images
const projects = [
  { 
    name: 'Thamra', 
    img: 'assets/img/allimgLP/thamra/thamraHome.jpeg',
     url:'Thamra'
  },
  // { 
  //   name: 'Rolls and Karak', 
  //   img: 'assets/img/Allimgs/Rolls & Karak.jpg',
  //    url:'ROLLS'
  // },
  { 
    name: 'The Lounge', 
    img: 'assets/img/allimgLP/Lounge/l3.webp',
     url:'Lounge'
  },
  { 
    name: 'Aura', 
    img: 'assets/img/updatates/project/Aura2.jpg',
     url:'Aura'
  },
  { 
    name: 'Mira', 
    img: 'assets/img/allimgLP/Mira/mirac.jpg',
     url:'Mira'
  },
  { 
    name: 'Villa Raaha', 
    img: 'assets/img/allimgLP/raaha/raahaCover.jpg',
     url:'Raaha'
  },
  { 
    name: 'Bay Bites', 
    img: 'assets/img/allimgLP/Bay/b1.jpg',
     url:'Bay-Bites'
  },
  { 
    name: 'Rué', 
    img: 'assets/img/updatates/project/rue1.jpg',
     url:'Rue'
  },
  { 
    name: 'Sky', 
    img: 'assets/img/Allimgs/sky/s-c.jpg',
     url:'Sky'
  },
  { 
    name: ' SpecksDesk', 
    img: 'assets/img/Allimgs/Picture91.webp',
     url:'SpecksDesk'
  },
  
  { 
    name: 'TWL', 
    img: 'assets/img/Allimgs/Picture95.webp',
    url:'TWL'
   
  },
  { 
    name: 'Earthessence', 
    img: 'assets/img/Allimgs/Picture39.webp',
     url:'Earthessence'
  },
  { 
    name: 'Nova', 
    img: 'assets/img/allimgLP/Nova/n1.webp',
     url:'Nova1'
  },
  { 
    name: 'Legacy', 
    img: 'assets/img/Allimgs/Picture117.webp',
    category: 'Hospitality',
     url:'LEGACY'
  },
  
  { 
    name: ' Illoura', 
    img: 'assets/img/Allimgs/Picture34.webp',
     url:'GamingRoom'
  },
  { 
    name: 'Terra', 
    img: 'assets/img/Allimgs/Picture65.webp',
     url:'Terra'
  },
  { 
    name: ' In To The Green', 
    img: 'assets/img/Allimgs/Picture77.webp',
     url:'InGreen'
  },
  
  // { 
  //   name: ' Dreamy', 
  //   img: 'assets/img/Allimgs/Picture80.webp',
  //    url:'Dreamy'
  // },
  // { 
  //   name: ' Raw', 
  //   img: 'assets/img/Allimgs/Picture82.webp',
  //    url:'Raw'
  // },
  { 
    name: 'Hospital - Dialysis Center', 
    img: 'assets/img/Allimgs/Picture111.webp',
     url:'PERLIYAS'
  },
  { 
    name: 'Alba', 
    img: 'assets/img/allimgLP/Alba/albaH.PNG',
     url:'Alba'
  },
  // { 
  //   name: 'Back To Balance', 
  //   img: 'assets/img/Allimgs/Picture123.webp',
  //    url:'BACKtoBALANCE'
  // },
  
  
  
  // { 
  //   name: 'MBZ Villa', 
  //   img: 'assets/img/allimgLP/maz/maz3.jpg',
  //    url:'mbz-villa'
  // },
  
  
  // { 
  //   name: 'Reva', 
  //   img: 'assets/img/allimgLP/reva/r2.jpg',
  //    url:'Reva'
  // },
  // { 
  //   name: 'Studio - Merano', 
  //   img: 'assets/img/allimgLP/studio/Studio1.jpg',
  //    url:'Merano'
  // },
  // { 
  //   name: 'Merano', 
  //   img: 'assets/img/allimgLP/Merano/Merano3.jpg',
  //    url:''
  // },
  // { 
  //   name: 'Jamal', 
  //   img: 'assets/img/allimgLP/jamal/jamal1.jpeg',
  //    url:'jamal'
  // },
  
];

// Header component
// const Header = () => {
//   return (
//     <header className="bg-white/95 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-6 py-4">
//         <div className="flex items-center justify-between">
//           <Link to="/" className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
//             Portfolio
//           </Link>
//           <nav className="hidden md:flex items-center space-x-8">
//             <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
//               Gallery
//             </Link>
//             <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
//               About
//             </a>
//             <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
//               Contact
//             </a>
//           </nav>
//         </div>
//       </div>
//     </header>
//   );
// };

// Project gallery component
const ShopDetails32 = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen" id='responsive-text-project-title'>
      {/* Projects Grid */}
      <section className="projects-section">
        <div className="projects-container">
          <div className="section-header">
            <h2 className="section-title">
              Our works
            </h2>
            <div className="section-divider"></div>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <Link to={`${project.url}`} key={index} className="project-card">
                <div>
                  <div className="project-image-container">
                    <img
                      src={project.img}
                      alt={project.name}
                      className="project-image"
                    />
                    <div className="project-overlay">
                      {/* <div className="project-category">
                        <span className="category-badge">
                          {project.category}
                        </span>
                      </div> */}
                    </div>
                  </div>
                  <div className="project-content">
                    <h3 className="project-title">
                      {project.name}
                    </h3>
                    {/* <p className="project-description">
                      {project.description.slice(0, 100)}...
                    </p> */}
                    {/* <div className="project-footer">
                      <span className="project-year">{project.year}</span>
                      <ExternalLink className="project-icon" />
                    </div> */}
                  </div> 
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
	  <style>{`
	 /* ProjectGallery Component Styles */

.gallery-container {
  background: linear-gradient(135deg, #f9fafb 0%, #eff6ff 100%);
  min-height: 100vh;
}

.hero-section {
  padding: 5rem 1.5rem;
}

.hero-content {
  max-width: 64rem;
  margin: 0 auto;
  text-align: center;
}

.hero-title {
  font-size: 3rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1.5rem;
  line-height: 1.1;
}

.hero-title-gradient {
  background: linear-gradient(135deg, #2563eb 0%, #9333ea 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.hero-description {
  font-size: 1.25rem;
  color: #6b7280;
  margin-bottom: 2rem;
  line-height: 1.6;
}

// .projects-section {
//   padding: 0rem 1.5rem;
// }

.projects-container {
  max-width: 70rem;
  margin: 0 auto;
}

.section-header {
  
  margin-bottom: 2rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 480;
  color:black;
  text-align:left;
}


.projects-grid {
  columns: 1;
  gap: 1.5rem;
  column-fill: balance;
}

.project-card {
  width: 100%;
  break-inside: avoid;
  // border-radius: 1rem;
  overflow: hidden;
  background: white;
  // box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transform: translateY(0);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  // margin-bottom: 1rem;
  display: block;
  text-decoration: none;
}

.project-card:hover {
  // box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  transform: translateY(-0.5rem);
}

.project-image-container {
  position: relative;
  overflow: hidden;
}

.project-image {
  width: 100%;
  object-fit: cover;
  transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
}

.project-card:hover .project-image {
  transform: scale(1.1);
}

.project-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.5) 0%, transparent 50%, transparent 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.project-category {
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  right: 1rem;
}

.category-badge {
  display: inline-block;
  padding: 0.5rem 0.75rem;
  background: rgba(255, 255, 255, 0.9);
  color: #374151;
  font-size: 0.875rem;
  font-weight: 500;
  border-radius: 9999px;
}

.project-content {
  padding: 1.5rem;
}

.project-title {
  font-size: 1.25rem;
  font-weight: 480;
  // text-align:center;
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;
}

.project-card:hover .project-title {
  // color: #2563eb;
}







.project-icon {
  width: 1rem;
  height: 1rem;
  color: #2563eb;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .project-icon {
  opacity: 1;
}

/* Responsive Design */
@media (min-width: 640px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .projects-grid {
    columns: 2;
  }
  
  .section-title {
    font-size: 2.5rem;
  }
}

@media (min-width: 1024px) {
  .projects-grid {
    columns: 3;
  }
}

@media (min-width: 1280px) {
  .projects-grid {
    columns: 3;
  }
} 
	  `}</style>
    </div>
  );
};
export default ShopDetails32


