import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import ContactForm from './contact-form';
import ContactPortal from '../ContactPortal';

class ContactInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPortal: false
        };
    }

    togglePortal = () => {
        this.setState(prevState => ({
            showPortal: !prevState.showPortal
        }));
    }

    render() {
        let publicUrl = process.env.PUBLIC_URL+'/'

        return (
            <div className="ltn__contact-address-area mb-1" style={{marginTop:'-200px', backgroundColor:'black', color:"white"}}>
                {/* Vendor Portal Button */}
                <div className="vendor-portal-btn-container" style={{textAlign: 'center', padding: '20px'}}>
                    <button 
                        onClick={this.togglePortal}
                        className="vendor-portal-btn"
                        style={{
                            padding: '12px 24px',
                            backgroundColor: '#fff',
                            color: '#000',
                            border: 'none',
                            borderRadius: '4px',
                            fontWeight: 'bold',
                            cursor: 'pointer',
                            fontSize: '16px'
                        }}
                    >
                        Vendor Portal
                    </button>
                </div>

                {/* Contact Portal Modal */}
               {this.state.showPortal && (
  <div className="modal-overlay">
    <div className="modal-content">
      <button 
        onClick={this.togglePortal}
        className="close-btn"
      >
        ×
      </button>
      <ContactPortal />
    </div>
  </div>
)}

                <div className="container">
                    <div className="row">
                        <div className="col-lg-12" id="responsive-text-project-heading"> 
                            <div id='contactinfo'>
                                <div className='contactline' >
                                    <p className='responsive-text-contact-detais text-white' id="contactstyle" >
                                        <a href="mailto:littleparadiseinteriors@gmail.com" id="contactstyle" >littleparadiseinteriors@gmail.com</a>
                                    </p>
                                </div>
                                <div className='contactline'>
                                    <p className='responsive-text-contact-detais text-white' id="contactstyle" >
                                        <a href="tel:+971525238899">+971525238899</a>
                                    </p>
                                </div>
                                
                            </div>
							<div className='contactline'>
                                    <p  className="responsive-text-contact-detais text-white  custom-padding"id='contactstyle'>
                                        Little Paradise Interiors LLC 
                                        office no: 27, 1804 
                                        18th Floor, One By Omniyat Bldg, Business Bay, Dubai, UAE.<br/>
                                        P.O Box: 251756
                                    </p>
                                </div>
                            <div className="ltn__property-details-gallery mb-30" id='responsive-text-project-title'>
                                <div className="row">
                                    <div className="col-md-10">
                                        <img className="mb-30" src={publicUrl+"assets/img/Allimgs/Picture28.webp"} alt="Image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
				<style>{`
					.custom-padding {
  padding-left: 50px;
}

/* Remove padding on small screens */
@media (max-width: 768px) {
  .custom-padding {
    padding-left: 0 !important;
  }
}
  {this.state.showPortal && (
  <div className="modal-overlay">
    <div className="modal-content">
      <button onClick={this.togglePortal} className="close-btn">×</button>
      <ContactPortal />
    </div>
  </div>
)}


  /* Overlay always covers full screen */
  .modal-overlay {
  position: fixed;
  inset: 0; /* covers full viewport */
  background-color: rgba(0,0,0,0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999; /* higher than navbar */
  padding: 10px;
}

.modal-content {
  background-color: #000;
  width: 100%;
  height: auto;
  max-height: 90vh;
  padding: 15px;
  border-radius: 6px;
  position: relative;
  overflow-y: auto;
  box-sizing: border-box;
  z-index: 10000; /* ensure modal box is above overlay too */
}


  /* Base (mobile-first) */
  .modal-content {
    background-color: #000;
    width: 100%;
    height: auto;
    max-height: 90vh;
    padding: 15px;
    border-radius: 6px;
    position: relative;
    overflow-y: auto;
    box-sizing: border-box;
  }

  .close-btn {
    position: absolute;
    top: 8px;
    right: 8px;
    background: transparent;
    border: none;
    font-size: 22px;
    cursor: pointer;
    color: #fff;
  }

  /* Tablet screens */
  @media (min-width: 600px) {
    .modal-content {
      width: 90%;
      max-width: 500px;
      padding: 20px;
    }
  }

  /* Medium desktop */
  @media (min-width: 992px) {
    .modal-content {
      width: 80%;
      max-width: 700px;
      padding: 25px;
    }
  }

  /* Large desktop */
  @media (min-width: 1200px) {
    .modal-content {
      width: 70%;
      max-width: 900px;
    }
  }

				`}</style>
            </div>
        );
    }
}

export default ContactInfo;