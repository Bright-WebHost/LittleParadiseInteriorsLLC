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
import RollsPage from './shop-components/RollsPage';
import Mbzpage from './shop-components/Mbzpage';
import JamalPage from './shop-components/JamalPage';
import GetTouch from './section-components/GetTouch';

const GetTouchPage = () => {
    return <div>
        <NavbarV2 />
        <PageHeader headertitle=""  customclass="mb-0" />
        {/* <ProductSliderV115/> */}
        <GetTouch />
        {/* <CallToActionV1 /> */}
        <Footer />
    </div>
}

export default GetTouchPage