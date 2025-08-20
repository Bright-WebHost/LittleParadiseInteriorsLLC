import React from 'react';
import PageHeader from './global-components/page-header';
import BlogGrid from './blog-components/blog-grid';
import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';
import NavbarV2 from './global-components/navbar-v2';

const BlogGridPage = () => {
    return <div>
        <NavbarV2 />
        <PageHeader headertitle="Our Projects" />
        <BlogGrid />
        {/* <CallToActionV1 /> */}
        <Footer />
    </div>
}

export default BlogGridPage

