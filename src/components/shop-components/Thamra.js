import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import NavbarV2 from '../global-components/navbar-v2';
import Page_header from '../global-components/page-header';
import Footer from '../global-components/footer';
class Thamra extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div>
        <NavbarV2 />
        <Page_header headertitle="Villa Thamra"  customclass="mb-0" />
    <div className="ltn__shop-details-area pb-10">
                <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                    <div className="ltn__shop-details-inner ltn__page-details-inner mb-60">
{/*                     
                        <h2 id='responsive-text-project-heading'>  Villa Thamra
                        </h2> */}
                     <label id='responsive-text-project-title'><span className="ltn__secondary-color"><img src={publicUrl+"assets/img/Allimgs/pin.png"}/></span>Abu Dhabi, United Arab Emirates</label> 
                      <p   id='responsive-text-project-title'>Luxury Villa Interior Design in Abu Dhabi – Contemporary Arabic
Minimalism

This luxury villa in Abu Dhabi blends contemporary Arabic interior
design with modern minimalism. Featuring custom made furniture,
marble surfaces, warm wood finishes, and refined lighting, the
home reflects elegance and cultural depth. 

Open layouts and curated materials create a bespoke, upscale
living experience in the UAE.


</p>
    </div>
    </div>                

<div className="ltn__property-details-gallery mb-30" id='responsive-text-project-title'>
                        <div className="row">
                            <div className="col-md-11">
                            <a>
                                <img className="mb-30" src={publicUrl+"assets/img/allimgLP/thamra/thamraHome.jpeg"} alt="Image" />
                                {/* <img className="mb-30" src={publicUrl+"assets/img/allimgLP/maz/maz2.jpg"} alt="Image" /> */}
                                <img className="mb-30" src={publicUrl+"assets/img/allimgLP/thamra/thamra1.jpg"} alt="Image" />
                                <img className="mb-30" src={publicUrl+"assets/img/allimgLP/thamra/thamra2.jpg"} alt="Image" />
                                
                            </a>
                        
                            </div>
                            </div>
                            </div>
                            
                    <div className="col-lg-4">
                    <aside className="sidebar ltn__shop-sidebar ltn__right-sidebar---">
                        
                    </aside>
                    </div>
                </div>
                </div>
            </div>
          <Footer/>
            </div>
        }
}

export default Thamra