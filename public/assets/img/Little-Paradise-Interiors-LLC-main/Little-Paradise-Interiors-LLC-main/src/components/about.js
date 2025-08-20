import React from 'react';
import PageHeader from './global-components/page-header';
import AboutV4 from './section-components/about-v4';
import Features from './section-components/features-v1';
import Team from './section-components/team-v1';
import Testimonial from './section-components/testimonial-v1';
import BlogSlider from './blog-components/blog-slider-v1';
import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';
import NavbarV2 from './global-components/navbar-v2';
import TeamDetails from './section-components/team-details';
import AboutV2 from './section-components/about-v2';
import { Helmet } from 'react-helmet';



const About_v1 = () => {
    return <div>
         <Helmet>
        <link rel="canonical" href='https://thearchitecturecorporation.com/about/' />
      </Helmet>
        <NavbarV2/>
        <PageHeader headertitle="About Us" />
        {/* <AboutV4 /> */}
        <AboutV2/>
    
        {/* <Features  customClass="ltn__feature-area section-bg-1 pt-120 pb-90 mb-120---"/> */}
        {/* <Team /> */}
        {/* <Testimonial /> */}
        {/* <BlogSlider /> */}
        <TeamDetails/>
        {/* <CallToActionV1 /> */}
        <Footer />
    </div>
}

export default About_v1

