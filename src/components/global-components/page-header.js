import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Page_header extends Component {

    render() {

        let HeaderTitle = this.props.headertitle;
		let sub=this.props.headersub
        let publicUrl = process.env.PUBLIC_URL+'/'
        let Subheader = this.props.subheader ? this.props.subheader : HeaderTitle
		let CustomClass = this.props.customclass ? this.props.customclass : ''
        let Img = this.props.Img ? this.props.Img :'14.jpg'

        return (

		<div className={"ltn__breadcrumb-area text-left bg-white "+CustomClass}  >
			<div className="container">
				<div className="row">
				<div className="col-lg-12">
					<div className="ltn__breadcrumb-inner">
					<h1 className='responsive-text-banner' style={{fontSize:'60px'}}>{ HeaderTitle }</h1>
					<h5 className="page-title " style={{color:'#082A9D'}}>{ sub }</h5>
					{/* <div className="ltn__breadcrumb-list">
						<ul>
						<li><Link to="/"><span className="ltn__secondary-color"><i className="fas fa-home" /></span> Home</Link></li>
						<li>{ Subheader }</li>
						</ul>
					</div> */}
					</div>
				</div>
				</div>
			</div>
		</div>


        )
    }
}


export default Page_header