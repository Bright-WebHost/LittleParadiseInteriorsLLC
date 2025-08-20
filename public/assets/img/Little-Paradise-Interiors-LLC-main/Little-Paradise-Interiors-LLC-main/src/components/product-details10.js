import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import ProductSlider from './shop-components/product-slider-v1';
import ProductDetails from './shop-components/shop-details';
import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';
import ProductSliderV13 from './shop-components/product-slider-v13';
import ShopDetails3 from './shop-components/product-slider-v12';
import ShopDetails7 from './shop-components/shop-details7';
import ProductSliderV17 from './shop-components/product-slider-v17';
import ProductSliderV110 from './shop-components/product-slider-v110';
import ShopDetails10 from './shop-components/shop-details10';
import NavbarV2 from './global-components/navbar-v2';

const Product_Details10 = () => {
    return <div>
        <NavbarV2 />
        <PageHeader headertitle="Hospitality - Suite"   customclass="mb-0" />
        {/* <ProductSliderV110/> */}
        <ShopDetails10 />
        {/* <CallToActionV1 /> */}
        <Footer />
    </div>
}

export default Product_Details10
