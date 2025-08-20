import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import NavbarV2 from '../global-components/navbar-v2';
import Page_header from '../global-components/page-header';
import Footer from '../global-components/footer';
class VillaRaaha extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div>
        <NavbarV2 />
        <Page_header headertitle="Villa Raaha"  customclass="mb-0" />
    <div className="ltn__shop-details-area pb-10">
                <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12" >
                    <div className="ltn__shop-details-inner ltn__page-details-inner mb-60" >
                    
                        {/* <h2 id='responsive-text-project-heading'>  Villa Raaha
                        </h2> */}
                     <label id='responsive-text-project-title' ><span className="ltn__secondary-color"><img src={publicUrl+"assets/img/Allimgs/pin.png"}/></span>Al Furjan, Dubai, United Arab Emirates</label> 
    </div>
                      <p   id='responsive-text-project-title'>Elegant Al Furjan villa in Dubai showcases modern luxury with timeless design elements.</p>
                      <p   id='responsive-text-project-title'>This modern home interior in Dubai features a spacious layout, soft neutral tones,
and refined finishes. Designed for contemporary family living, it blends comfort
and sophistication seamlessly. Every element from materials to layout, enhances
functionality and style, making it ideal for one of Dubai’s premier residential communities.</p>
    </div>                

<div className="ltn__property-details-gallery mb-30" id='responsive-text-project-title'>
                        <div className="row">
                            <div className="col-md-11" >
                            <a>
                                <img className="mb-30" src={publicUrl+"assets/img/allimgLP/raaha/raahaCover.jpg"} alt="Image" />
                                <img className="mb-30" src={publicUrl+"assets/img/allimgLP/raaha/r1.jpg"} alt="Image" />
                                <img className="mb-30" src={publicUrl+"assets/img/allimgLP/raaha/r2.jpg"} alt="Image" />
                                <img className="mb-30" src={publicUrl+"assets/img/allimgLP/raaha/r2.jpg"} alt="Image" />
                                <img className="mb-30" src={publicUrl+"assets/img/allimgLP/raaha/r3.jpg"} alt="Image" />
                                
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

export default VillaRaaha