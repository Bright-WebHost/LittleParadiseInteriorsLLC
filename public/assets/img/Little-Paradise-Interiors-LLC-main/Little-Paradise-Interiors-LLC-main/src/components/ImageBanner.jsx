import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class ImageBanner extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="ltn__team-details-area mb-20" id='sliderBottom'>
                <div className="container">
                {/* <h5 className="slide-title"style={{textAlign:'center',fontSize:'60px'}}>Our Team</h5> */}
                {/* <div className="row" >
                    <div className="col-lg-4">
                   
                    <div className="ltn__team-details-member-info text-center mb-40" id='responsive-text-project-title'>
                   
                        <div className="team-details-img">
                        <img src={publicUrl+"assets/img/Allimgs/ABDUL RAAZ.jpeg"} alt="Team Member Image" />
                        </div>
                        <h2 style={{fontFamily:'Poppins, sans-serif'}}>Abdul Raaz  </h2>
                        <h6 className="text-uppercase ltn__secondary-color" style={{fontFamily:'Poppins, sans-serif'}}>Co-Founder &  Architect</h6>
                       
                    </div>
                    </div>
                    <div className="col-lg-8" style={{textAlign:'justify',textJustify:'inter-word'}}>
                    <div className="ltn__team-details-member-info-details">
                        <p id='responsive-text-project-title'>Our dynamic creative force infusing boundless energy into our corporation. With a personality that bounces with enthusiasm, Raaz sees stories in every moment. Specializing in conceptualization, he effortlessly weaves ideas. His love for stories extends to capturing moments and creating photographs which are visual tales . Join us, where every concept and image is a celebration of creativity and storytelling.</p>
                       
                        <hr />
                        
                    </div>
                    
                    </div>
                </div> */}
   {/* section 2 */}
   <div className="row" id="responsive-text-project-heading">

    
                    <div className="col-lg-12" >
                   
                   
   <div class="slider-one1">
  <div class="slider-one-image1">
  </div>
</div>
<div class="slider-two2">
  <div class="slider-two-image2">
  </div>
</div>
<div class="slider-three3">
  <div class="slider-three-image3">
  </div>
</div>
<div class="slider-four4">
  <div class="slider-four-image4">
  </div>
</div>


   



                </div>
            </div>

                </div>
            </div>
        }
}

export default ImageBanner