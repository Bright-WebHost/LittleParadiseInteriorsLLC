import React from 'react';
// import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import ProductSlider from './shop-components/product-slider-v1';
import ProductDetails from './shop-components/shop-details';
import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';
import ProductSliderV13 from './shop-components/product-slider-v13';
import ShopDetails3 from './shop-components/product-slider-v12';
import ShopDetails7 from './shop-components/shop-details7';
import ProductSliderV17 from './shop-components/product-slider-v17';
import ProductSliderV112 from './shop-components/product-slider-v112';
import ShopDetails12 from './shop-components/shop-details12';
import ShopDetails13 from './shop-components/shop-details13';
import ProductSliderV113 from './shop-components/product-slider-v113';
import NavbarV2 from './global-components/navbar-v2';
import ProductSliderV115 from './shop-components/product-slider-v115';
import ShopDetails15 from './shop-components/shop-details15';
import ShopDetails18 from './shop-components/shop-details18';
import ShopDetails21 from './shop-components/shop-details21';
import ShopDetails23 from './shop-components/shop-details23';
import ShopDetails25 from './shop-components/shop-details25';
import ShopDetails26 from './shop-components/shop-details26';
import ShopDetails30 from './shop-components/shop-details30';
import ShopDetails31 from './shop-components/shop-details31';
import { Helmet } from 'react-helmet';

const Product_Details31 = () => {
    return <div>
           <Helmet>
        <link rel="canonical" href='https://thearchitecturecorporation.com/our-projects/' />
      </Helmet>
        <NavbarV2 />
        <PageHeader headertitle="Our Projects"  customclass="mb-0" />
        {/* <ProductSliderV115/> */}
        <ShopDetails31/>
        {/* <CallToActionV1 /> */}
        <Footer />
    </div>
}

export default Product_Details31