import React from 'react';
import Navbar from './global-components/navbar-v2';
import Banner from './section-components/banner-v2';
import Aboutv3 from './section-components/about-v3';
import Video from './section-components/video-v2';
import Features from './section-components/features-v1';
import UpComingProduct from './section-components/upcoming-product-v1';
import ApartmentV2 from './section-components/apartment-v2';
import ProductSlider from './section-components/product-slider-v2';
import Availability from './section-components/availability';
import Neighbour from './section-components/neighbour';
import Cateogory from './section-components/category-v2';
import Testimonial from './section-components/testimonial-v2';
import BlogSlider from './blog-components/blog-slider-v1';
import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';
import MainFooter from './global-components/mainfooter';
import Sponsor from './section-components/sponsor-v1';
import HomePage from './HomePage';
import BannerV2 from './section-components/banner';
import HomeBanner from './HomeBanner';
import AboutV2 from './section-components/about-v2';
import Mainpage from './section-components/Mainpage';
import SponsorV2 from './section-components/sponsor-v2';
import Slideshow from './Slideshow';
import WelcomeCard from './WelcomeCard';
import Imgslider from './Imgslider';
import ImageBanner from './ImageBanner';
import BannerV3 from './section-components/banner-v3';
import { Helmet } from 'react-helmet';
import Whatsapp from './global-components/Whatsapp';
import BannerVideo from './BannerVideo';
import HomeNav from './global-components/HomeNav';
import GetTouch from './section-components/GetTouch';

const Home_V2 = () => {
    return <div>
           <Helmet>
        <link rel="canonical" href='https://thearchitecturecorporation.com/home/' />
      </Helmet>
        <HomeNav />
        <BannerVideo/>
        {/* <Mainpage/> */}
        <HomePage/>
        
        {/* <ImageBanner/> */}
       
        {/* <WelcomeCard/> */}
        {/* <Imgslider/> */}
        {/* <Slideshow/> */}
        {/* <HomeBanner/> */}
        {/* <HomePage/> */}
        {/* <BannerV2/> */}
        {/* <Banner/> */}


        {/* tac2 */}
        {/* <BannerV3/> */}
   {/* tac2 */}

        {/* <Banner /> */}
        {/* <Aboutv3 /> */}
        {/* <br/> */}
        {/* <Video /> */}
        {/* <Features customClass="ltn__feature-area section-bg-1--- pt-115 pb-90 mb-120---"/> */}
        {/* <UpComingProduct /> */}
        {/* <ApartmentV2 /> */}
        {/* <ProductSlider /> */}
        {/* <Availability /> */}
        {/* <Neighbour /> */}
        {/* <Cateogory /> */}
        {/* <br/> */}
        {/* <Testimonial /> */}
        <BlogSlider />
        {/* <CallToActionV1 /> */}

         {/* mobile and desktop */}
        {/* <SponsorV2/>
        <Sponsor/> */}


         {/* mobile and desktop */}


        <Footer />
        {/* <MainFooter/> */}
    </div>
}

export default Home_V2

