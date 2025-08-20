import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import NavbarV2 from './global-components/navbar-v2';
import Page_header from './global-components/page-header';
import Footer from './global-components/footer';
class Mira extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div >
        <NavbarV2 />
        <Page_header headertitle="Mira"  customclass="mb-0" />
    <div className="ltn__shop-details-area pb-10" >
                <div className="container" >
                <div className="row">
                    <div className="col-lg-12 col-md-12" >
                    <div className="ltn__shop-details-inner ltn__page-details-inner mb-60">
                    
                        {/* <h2 id='responsive-text-project-heading'>  Villa Thamra
                        </h2> */}
                     <label id='responsive-text-project-title'><span className="ltn__secondary-color"><img src={publicUrl+"assets/img/Allimgs/pin.png"}/></span> Business Bay, Dubai, United Arab Emirates</label> 
                      <p   id='responsive-text-project-title'>This 2BHK apartment interior design in Business Bay,
Dubai, combines modern elegance with cozy
comfort. Featuring soft neutral tones, layered
textures, and natural accents, the space is
thoughtfully planned for both functionality and style,
creating a calm, inviting home ideal for
contemporary city living in a vibrant urban setting.</p>
    </div>
    </div>                

<div className="ltn__property-details-gallery mb-30" id='responsive-text-project-title'>
                        <div className="row">
                            <div className="col-md-12">
                            <a>
                                <img className="mb-30" src={publicUrl+"assets/img/allimgLP/Mira/mirac.jpg"} alt="Image" />
                                {/* <img className="mb-30" src={publicUrl+"assets/img/allimgLP/maz/maz2.jpg"} alt="Image" /> */}
                                <img className="mb-30" src={publicUrl+"assets/img/allimgLP/Mira/m1.jpg"} alt="Image" />
                                <img className="mb-30" src={publicUrl+"assets/img/allimgLP/Mira/m2.jpg"} alt="Image" />
                                <img className="mb-30" src={publicUrl+"assets/img/allimgLP/Mira/m3.jpg"} alt="Image" />
                                <img className="mb-30" src={publicUrl+"assets/img/allimgLP/Mira/m4.jpg"} alt="Image" />
                                <img className="mb-30" src={publicUrl+"assets/img/allimgLP/Mira/m5.jpg"} alt="Image" />
                                <img className="mb-30" src={publicUrl+"assets/img/allimgLP/Mira/m6.jpg"} alt="Image" />
                                <img className="mb-30" src={publicUrl+"assets/img/allimgLP/Mira/m7.jpg"} alt="Image" />
                                
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

export default Mira