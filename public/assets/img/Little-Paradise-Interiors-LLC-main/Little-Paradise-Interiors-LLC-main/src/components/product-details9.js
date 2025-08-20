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
import ShopDetails9 from './shop-components/shop-details9';
import ProductSliderV19 from './shop-components/product-slider-v19';
import NavbarV2 from './global-components/navbar-v2';

const Product_Details9 = () => {
    return <div>
        <NavbarV2 />
        <PageHeader headertitle="Mannarkkad residence"   customclass="mb-0" />
        {/* <ProductSliderV19/> */}
        <ShopDetails9 />
        {/* <CallToActionV1 /> */}
        <Footer />
    </div>
}

export default Product_Details9

