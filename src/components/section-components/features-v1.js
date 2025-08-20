import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class FeaturesV1 extends Component {

    render() {

    let publicUrl = process.env.PUBLIC_URL+'/'

    let customClass = this.props.customClass ? this.props.customClass :''

    return <div className={ customClass } >
			  <div className="container">
			    <div className="row">
			      <div className="col-lg-12">
			        <div className="section-title-area ltn__section-title-2--- text-center">
			          {/* <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">Our Services</h6> */}
			          <h1 className="section-title">Our Services</h1>
			        </div>
			      </div>
			    </div>
			    <div className="row ltn__custom-gutter--- justify-content-center go-top">
			      <div className="col-lg-4 col-sm-6 col-12">
			        <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
			          <div className="ltn__feature-icon">
			            <img src={publicUrl+"assets/img/icons/icon-img/21.png"} alt="#" />
			          </div>
			          <div className="ltn__feature-info">
			            <h3><Link to="#">Architecture</Link></h3>
			            <p>Crafting spaces that blend form and function. Bringing visionary designs to life</p>
			            {/* <Link className="ltn__service-btn" to="/service-details">Find A Home <i className="flaticon-right-arrow" /></Link> */}
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-4 col-sm-6 col-12">
			        <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1 active">
			          <div className="ltn__feature-icon">
			            <img src={publicUrl+"assets/img/icons/icon-img/22.png"} alt="#" />
			          </div>
			          <div className="ltn__feature-info">
			            <h3><Link to="#">Interior Design </Link></h3>
			            <p>Transforming interiors into beautiful, practical spaces. Elevating everyday environments.</p>
			            {/* <Link className="ltn__service-btn" to="/service-details">Find A Home <i className="flaticon-right-arrow" /></Link> */}
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-4 col-sm-6 col-12">
			        <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
			          <div className="ltn__feature-icon">
			            <img src={publicUrl+"assets/img/icons/icon-img/23.png"} alt="#" />
			          </div>
			          <div className="ltn__feature-info">
			            <h3><Link to="#">Consultation &Execution</Link></h3>
			            <p>Guiding projects from concept to completion. Ensuring seamless and precise results.</p>
			            {/* <Link className="ltn__service-btn" to="/service-details">Find A Home <i className="flaticon-right-arrow" /></Link> */}
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>
        }
}

export default FeaturesV1