import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import ProductSlider from './shop-components/product-slider-v1';
import ProductDetails from './shop-components/shop-details';
import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';
import ProductSliderV13 from './shop-components/product-slider-v13';
import ShopDetails3 from './shop-components/product-slider-v12';
import ProductSliderV16 from './shop-components/product-slider-v16';
import ShopDetails6 from './shop-components/shop-details6';
import NavbarV2 from './global-components/navbar-v2';

const Product_Details6 = () => {
    return <div>
        <NavbarV2 />
        <PageHeader headertitle=" The Estate"   customclass="mb-0" />
        {/* <ProductSliderV16/> */}
        <ShopDetails6 />
        {/* <CallToActionV1 /> */}
        <Footer />
    </div>
}

export default Product_Details6

