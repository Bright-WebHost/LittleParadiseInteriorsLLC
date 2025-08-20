import React from 'react';
import Faqs from './Faqs';
import HomeNav from './global-components/HomeNav';
import Footer from './global-components/footer';
import NavbarV2 from './global-components/navbar-v2';
import PageHeader from './global-components/page-header';

const FaqPage = () => {
    return <div>
           {/* <Helmet>
        <link rel="canonical" href='https://thearchitecturecorporation.com/home/' />
      </Helmet> */}
          <NavbarV2/>
        <PageHeader headertitle="FAQs" />
      <Faqs/>
      
        <Footer/>
        {/* <MainFooter/> */}
    </div>
}

export default FaqPage

