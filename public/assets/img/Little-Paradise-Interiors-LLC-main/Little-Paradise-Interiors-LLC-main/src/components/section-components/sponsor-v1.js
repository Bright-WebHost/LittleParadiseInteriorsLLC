import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Sponsor extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return<div className="ltn__shop-details-area " id='logoNone' style={{marginTop:'-220px'}}>
	<div className="container">
	<div className="row">
		<div className="col-lg-12 col-md-12" id='logoNone' >
		<div className="ltn__shop-details-inner ltn__page-details-inner mb-60">
		
			  {/* <div className="container-fluid" > */}
			  {/* <h1 className="section-title"  id="responsive-text-project-heading">Our Clients</h1> */}
			  <h1 className="section-title" id="responsive-text-project-heading">Our Clients</h1>
			    {/* <div className="row ltn__brand-logo-active" > */}
				<div className="ltn__property-details-gallery " id='logoNone'>
						<div className="row">
							<div className="col-md-12"   style={{display:'flex',justifyContent:'center',gap:'40px'}}>

			      {/* <div className="col-lg-2" id='responsive-text-project-heading'>
			        <div className="ltn__brand-logo-item">
			          <img src={publicUrl+"assets/img/Allimgs/logo1.png"} alt="Brand Logo" />
			        </div>
			      </div> */}
			      <div className="col-lg-2" id='responsive-text-project-heading'>
				  <div className="ltn__brand-logo-item">
			          <img src={publicUrl+"assets/img/Allimgs/hasmai.png"} alt="Brand Logo" />
			        </div>
			      </div>
				  {/* <div className="col-lg-2">
			        <div className="ltn__brand-logo-item">
			          <img src={publicUrl+"assets/img/Allimgs/hasmai.png"} alt="Brand Logo" />
			        </div>
			      </div> */}
			      <div className="col-lg-2">
			        <div className="ltn__brand-logo-item">
			          <img src={publicUrl+"assets/img/Allimgs/logo3.png"} alt="Brand Logo" />
			        </div>
			      </div>
			     
			      <div className="col-lg-2">
			        <div className="ltn__brand-logo-item">
			          <img src={publicUrl+"assets/img/Allimgs/logo5.png"} alt="Brand Logo" />
			        </div>
			      </div>
			      <div className="col-lg-2">
			        <div className="ltn__brand-logo-item">
			          <img src={publicUrl+"assets/img/Allimgs/logos6 (1).png"} alt="Brand Logo" />
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
        }
}

export default Sponsor