import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import ProductSlider from './shop-components/product-slider-v1';
import ProductDetails from './shop-components/shop-details';
import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';
import ProductSliderV13 from './shop-components/product-slider-v13';
import ShopDetails3 from './shop-components/product-slider-v12';

const Product_Details3 = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle=" Layout Design" customclass="mb-0" />
        <ProductSliderV13/>
        <ShopDetails3 />
        <CallToActionV1 />
        <Footer />
    </div>
}

export default Product_Details3

