import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Mainpage extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="ltn__about-us-area pt-20 pb-10 ">
			  <div className="container">
			    <div className="row">
                <p id="responsive-text-project-bannerpage">Design that is <br/> guided  by  you,<br/>
tailored for you,<br/>
  and inspired by you,</p>
  
      <div className="btn-wrapper animated" id='responsive-text-project-title'>
						<Link to="/our-projects" className="buttons">Our Projects </Link>
						</div>
					
  {/* <div className="btn-wrapper animated" > */}
		{/* <div className="btn-wrapper animated " id='responsive-text-project-title' style={{marginTop:'-20px'}}>
						<Link to="/our-projects" className="buttons">Our Projects </Link> &#160; &#160;
						<Link to="/about" className="buttons">About</Link>
						</div> */}
						{/* </div> */}
  
			  
			      <div className="col-lg-6 align-self-center " style={{marginTop:'-60px'}}>
			        {/* <div className="about-us-img-wrap about-img-right">
			          <img src={publicUrl+"assets/img/Allimgs/Picture47.webp"} alt="About Us Image" />
			        </div> */}
                        {/* <div className="btn-wrapper animated" id='responsive-text-project-title'>
						<Link to="/our-projects" className="buttons">Our Projects </Link>
						</div> */}
					
			      </div>
				  
			    </div>
				{/* <div  style={{display:'flex'}}>
				                    
									<p id='responsive-text-project-title'>We’ve come a long way since then, turning into a renaissance person- We've undertaken projects for home interior design, including 1.5 BHK, 2 BHK, 3 BHK, and 4 BHK residences, as well as residential home design, retail store design, jewelry store design, farmhouse design, landscape design, hospital design, educational institution design, hotel design, office design, and high-rise design for both commercial and residential purposes. Additionally, we've handled layout design, mall design, and luxury interior design, all of which embody contemporary and timeless aestheticst</p>
								  
								  </div> */}
								  {/* <div className="ltn__callout   mt-30" id='responsive-text-project-heading'>
						<p id='responsive-text-project-title' >“In the course of our journey, we have curated a team dedicated to delivering excellence in project management, service, and design. Our unique approach is tailored to each client and site, challenging conventional assumptions to unlock innovative solutions. Through a collaborative process involving clients, consultants, fabricators, and builders, we foster open exploration, ensuring a comprehensive understanding of the most fitting and effective solutions.”</p>
						</div> */}
						{/* <div className="btn-wrapper animated" id='responsive-text-project-title'>
						<Link to="/our-projects" className="theme-btn-1 btn btn-effect-1">OUR Projects </Link>
						</div> old btn*/}
                        {/* <div className="btn-wrapper animated" id='responsive-text-project-title'>
						<Link to="/our-projects" className="buttons">Our Projects </Link>
						</div> */}
					

				

						
			  </div>
			</div>
        }
}

export default Mainpage