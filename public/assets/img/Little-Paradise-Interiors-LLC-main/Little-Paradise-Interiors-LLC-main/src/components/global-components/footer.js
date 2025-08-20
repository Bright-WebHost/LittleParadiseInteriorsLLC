import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Social from '../section-components/social';
import Copyright from './copyright';

class Footer_v1 extends Component {

    componentDidMount() {

    	const $ = window.$;
    	
        let publicUrl = process.env.PUBLIC_URL+'/'
        const minscript = document.createElement("script");
        minscript.async = true;
        minscript.src = publicUrl + "assets/js/main.js";

        document.body.appendChild(minscript);

         $('.go-top').find('a').on('click', function () {

			$(".quarter-overlay").fadeIn(1);

				$(window).scrollTop(0);

			setTimeout(function(){
			    	$(".quarter-overlay").fadeOut(300);
				}, 800);

        });


		$(document).on('click','.theme-btn-1 ', function(){ 
            $( 'div' ).removeClass( 'modal-backdrop' );
            $( 'div' ).removeClass( 'show' );
            $( 'div' ).removeClass( 'fade' );
			$('body').attr("style", "");
        });
    }

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = "Footer logo"

        return (
				<footer className="ltn__footer-area" >
					<style>{`
					  		.contactlinefooter{
							color:white;
							}

					  `}</style>
				  <div className="footer-top-area  section-bg-2 plr--5" style={{backgroundColor:"#CB4D29"}}>
				    <div className="container-fluid">
				      <div className="row">
				        <div className="col-xl-4 col-md-6 col-sm-6 col-12 mt-30">
				          <div className="footer-widget footer-about-widget">
						  {/* <h4 className="footer-title"  id='responsive-text-project-heading' style={{color:'white'}}>Contact Us</h4> */}
						  <div className="footer-logo" id='responsive-text-project-heading' >
				              <div className="site-logo">
				                <a href='/' target='_blank'><img src={publicUrl+"assets/img/allimgLP/logo.png"} alt="Logo" style={{height:'100px'}}  id="footeimg" /></a>
				              </div>
							  {/* <a href='/' target='_blank'>  <p id="footerstyle" className='mt-6'>Building Beyond</p></a>	 */}
				            </div>
				           
				            {/* <div className="footer-address">
				              <ul>
				                <li>
				                  <div className="footer-address-icon">
				                    <i className="icon-placeholder" />
				                  </div>
				                  <div className="footer-address-info">
				                    <p id="footerstyle">#305, 3rd Floor, Milestone25, <br/>Balmata Mangalore - 575002</p>
				                  </div>
				                </li>
				                <li>
				                  <div className="footer-address-icon">
				                    <i className="icon-call" />
				                  </div>
				                  <div className="footer-address-info">
				                    <p id="footerstyle"><a href="tel:+91 90362 68899">+91 90362 68899</a></p>
				                  </div>
				                </li>
				                <li>
				                  <div className="footer-address-icon">
				                    <i className="icon-mail" />
				                  </div>
				                  <div className="footer-address-info">
				                    <p id="footerstyle "  ><a href="mailto:thearchitecturecorporation.com">thearchitecturecorporation.com</a></p>
				                    <p id="footerstyle"><a href="mailto:design@thearchitecturecorporation.com">design@thearchitecturecorporation.com</a></p>
				                  </div>
				                </li>
				              </ul>
				            </div> */}
				            {/* <div className="ltn__social-media mt-20">
						    	<Social />
				            </div> */}
				          </div>
				        </div>
				        {/* <div className="col-xl-3 col-md-6 col-sm-6 col-12">
				          <div className="footer-widget footer-menu-widget clearfix">
				            <h4 className="footer-title">Our Pages</h4>
				            <div className="footer-menu go-top">
				              <ul>
				                <li><Link to="/">Home</Link></li>
				                <li><Link to="/about">About</Link></li>
				                <li><Link to="/blog-grid"> Products</Link></li>
				                <li><Link to="/contact">Contact</Link></li>
				               
				              </ul>
				            </div>
				          </div>
				        </div> */}
				      
				       
				        <div className="col-xl-4 col-md-6 col-sm-12 col-10 mt-30">
				          <div className="footer-widget footer-newsletter-widget">
				            {/* <h4 className="footer-title">Newsletter</h4> */}
						
							<div className="footer-address-info" >
				                    
				                    <p id="footerstyle" className='contactlinefooter mb-0' ><a href="mailto:design@thearchitecturecorporation.com">design@thearchitecturecorporation.com</a></p>
									{/* <p id="footerstyle" ><a href="mailto:thearchitecturecorporation.com">thearchitecturecorporation.com</a></p> */}
				                    
								  </div>
								  {/* <div className="footer-address-info">
				                    <p id="footerstyle"><a href="tel:+91 90362 68899">+91 90362 68899</a></p>
				                  </div> */}
								  
								 
				            {/* <p id="footerstyle">The Architecture Corporation</p> */}
				            {/* <div className="footer-newsletter">
				              <form action="#">
				                <input type="email" name="email" placeholder="Email*" />
				                <div className="btn-wrapper">
				                  <button className="theme-btn-1 btn" type="submit"><i className="fas fa-location-arrow" /></button>
				                </div>
				              </form>
				            </div> */}
				            {/* <h5 className="mt-30">We Accept</h5> */}
				            {/* <div className="ltn__social-media mt-20">
						    	<Social />
				            </div> */}
							{/* <br/>
							<p id="footerstyle" >© 2024 The Architecture Corporation,Mangalore <br/>Site By Bright Media</p> */}
				          </div>
				        </div>




						<div className="col-xl-4 col-md-6 col-sm-12 col-10 mt-30">
				          <div className="footer-widget footer-newsletter-widget">
							<div className="footer-address-info">
								<style>{`
					  		#footerstyle:hover{
							color:white;
							}

					  `}</style>
							<div className="footer-address-info" >
				                    <p id="footerstyle" className='contactfooter ml-30 '><a href="tel:+919036268899">+91 90362 68899</a></p>
									{/* <div className="ltn__social-media" > */}
									<p id="footerstyle"   className="footercss" style={{marginTop:'-20px',marginLeft:'30px'}}><a><Social/></a></p>
						    	{/* <Social /> */}
				            {/* </div> */}
				                  </div>
								 
				                  </div>
				          
				            
							
				          </div>
				        </div>

				      </div>
				    </div>
				  </div>
				  {/* <Copyright /> */}
				</footer>
        )
    }
}


export default Footer_v1