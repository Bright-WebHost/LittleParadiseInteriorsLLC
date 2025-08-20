import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import NavbarV2 from './global-components/navbar-v2';
import Page_header from './global-components/page-header';
import Footer from './global-components/footer';
class Alba extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div>
        <NavbarV2 />
        <Page_header headertitle="Alba"  customclass="mb-0" />
    <div className="ltn__shop-details-area pb-10">
                <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                    <div className="ltn__shop-details-inner ltn__page-details-inner mb-60">
{/*                     
                        <h2 id='responsive-text-project-heading'>  Villa Thamra
                        </h2> */}
                     <label id='responsive-text-project-title'><span className="ltn__secondary-color"><img src={publicUrl+"assets/img/Allimgs/pin.png"}/></span>Downtown Dubai, United Arab Emirates</label> 
                      <p   id='responsive-text-project-title'>This Dubai based interior design project blends modern elegance with warm, earthy
tones and floor to ceiling views of the Burj Khalifa. Designed by our expert team at
Little Paradise Interiors, the apartment features curated lighting, custom furniture,
and a timeless palette perfectly tailored for luxurious urban living in the UAE.</p>
    </div>
    </div>                

<div className="ltn__property-details-gallery mb-30" id='responsive-text-project-title'>
                        <div className="row">
                            <div className="col-md-11">
                            <a>
                                <img className="mb-30" src={publicUrl+"assets/img/allimgLP/Alba/albaH.PNG"} alt="Image" />
                                {/* <img className="mb-30" src={publicUrl+"assets/img/allimgLP/maz/maz2.jpg"} alt="Image" /> */}
                                <img className="mb-30" src={publicUrl+"assets/img/allimgLP/Alba/a1.PNG"} alt="Image" />
                                <img className="mb-30" src={publicUrl+"assets/img/allimgLP/Alba/a2.PNG"} alt="Image" />
                                
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

export default Alba