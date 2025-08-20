import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class TeamDetails extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="ltn__team-details-area mb-120">
                <div className="container">
                <h5 className="slide-title"style={{textAlign:'center',fontSize:'60px'}}>Our Team</h5>
                <div className="row" >
                    <div className="col-lg-4">
                   
                    <div className="ltn__team-details-member-info text-center mb-40" id='responsive-text-project-title'>
                   
                        <div className="team-details-img">
                        <img src={publicUrl+"assets/img/Allimgs/ABDUL RAAZ.jpeg"} alt="Team Member Image" />
                        </div>
                        <h2 style={{fontFamily:'Poppins, sans-serif'}}>Abdul Raaz  </h2>
                        <h6 className="text-uppercase ltn__secondary-color" style={{fontFamily:'Poppins, sans-serif'}}>Co-Founder &  Architect</h6>
                        {/* <div className="ltn__social-media-3">
                        <ul>
                            <li><a href="#" title="Facebook"><i className="fab fa-facebook-f" /></a></li>
                            <li><a href="#" title="Twitter"><i className="fab fa-twitter" /></a></li>
                            <li><a href="#" title="Linkedin"><i className="fab fa-linkedin" /></a></li>
                        </ul>
                        </div> */}
                    </div>
                    </div>
                    <div className="col-lg-8" style={{textAlign:'justify',textJustify:'inter-word'}}>
                    <div className="ltn__team-details-member-info-details">
                        <p id='responsive-text-project-title'>Our dynamic creative force infusing boundless energy into our corporation. With a personality that bounces with enthusiasm, Raaz sees stories in every moment. Specializing in conceptualization, he effortlessly weaves ideas. His love for stories extends to capturing moments and creating photographs which are visual tales . Join us, where every concept and image is a celebration of creativity and storytelling.</p>
                       
                        <hr />
                        
                    </div>
                    
                    </div>
                </div>
   {/* section 2 */}
   <div className="row">
                    <div className="col-lg-4">
                   
                    <div className="ltn__team-details-member-info text-center mb-40"  id='responsive-text-project-title'>
                   
                        <div className="team-details-img" >
                        <img src={publicUrl+"assets/img/Allimgs/MOHAMMED SHAZ HUSAIN.jpg"} alt="Team Member Image" />
                        </div>
                        <h2 style={{fontFamily:'Poppins, sans-serif'}}>Mohammed Shaz Husain  </h2>
                        <h6 className="text-uppercase ltn__secondary-color" style={{fontFamily:'Poppins, sans-serif'}}>Co-Founder &  Architect</h6>
                        {/* <div className="ltn__social-media-3">
                        <ul>
                            <li><a href="#" title="Facebook"><i className="fab fa-facebook-f" /></a></li>
                            <li><a href="#" title="Twitter"><i className="fab fa-twitter" /></a></li>
                            <li><a href="#" title="Linkedin"><i className="fab fa-linkedin" /></a></li>
                        </ul>
                        </div> */}
                    </div>
                    </div>
                    <div className="col-lg-8" style={{textAlign:'justify',textJustify:'inter-word'}}>
                    <div className="ltn__team-details-member-info-details">
                        <p id='responsive-text-project-title'>The architectural maestro behind our Corporation’s vision. With an unwavering commitment to precision and a flair for captivating visualizations, Shaz transforms architectural concepts into breathtaking realities. Beyond his architectural prowess, Shaz stands as a person for all problems, a reliable figure capable of navigating multifaceted challenges with grace and expertise. Join us on a journey where architecture meets artistry.</p>
                       
                        <hr />
                        
                    </div>
                    </div>
                </div>

   <div className="row">
                    <div className="col-lg-4">
                   
                    <div className="ltn__team-details-member-info text-center mb-40"  id='responsive-text-project-title'>
                   
                        <div className="team-details-img">
                        <img src={publicUrl+"assets/img/Allimgs/MOHAMMED SHIHAM KHADER.jpg"} alt="Team Member Image" />
                        </div>
                        <h2 style={{fontFamily:'Poppins, sans-serif'}}>Mohammed Shiham Khader  </h2>
                        <h6 className="text-uppercase ltn__secondary-color" style={{fontFamily:'Poppins, sans-serif'}}>Co-Founder &  Architect</h6>
                        {/* <div className="ltn__social-media-3">
                        <ul>
                            <li><a href="#" title="Facebook"><i className="fab fa-facebook-f" /></a></li>
                            <li><a href="#" title="Twitter"><i className="fab fa-twitter" /></a></li>
                            <li><a href="#" title="Linkedin"><i className="fab fa-linkedin" /></a></li>
                        </ul>
                        </div> */}
                    </div>
                    </div>
                    <div className="col-lg-8" style={{textAlign:'justify',textJustify:'inter-word'}}>
                    <div className="ltn__team-details-member-info-details">
                        <p id='responsive-text-project-title'>A man whose silence resonates with profound thinking. In a realm where words are scarce but ideas abundant, Shiham is a meticulous planner, leaving no stone unturned in his quest for the optimum solution. Analyzing with precision and foresight, he unveils the elegance of simplicity in every challenge. Shiham’s strategic acumen transforms complexity into clarity, making him a silent maestro in the orchestration of effective solutions.</p>
                       
                        <hr/>
                        
                    </div>
                    </div>
                </div>



                </div>
            </div>
        }
}

export default TeamDetails