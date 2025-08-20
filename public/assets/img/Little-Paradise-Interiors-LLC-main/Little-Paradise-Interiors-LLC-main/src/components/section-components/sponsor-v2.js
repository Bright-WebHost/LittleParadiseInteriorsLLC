import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class SponsorV2 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="ltn__brand-logo-area ltn__brand-logo-1 pt-80--- pb-110 plr--9" id='responsive-text-project-heading'>
				<div className="container-fluid" id='systemlogonone'>
				<h1 className="section-title" id="responsive-text-project-heading">Our Clients</h1>
				<div className="row ltn__brand-logo-active">

				{/* <div className="col-lg-2" >
			        <div className="ltn__brand-logo-item">
			          <img src={publicUrl+"assets/img/Allimgs/logo1.png"} alt="Brand Logo" />
			        </div>
			      </div> */}
			      <div className="col-lg-2">
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
        }
}

export default SponsorV2