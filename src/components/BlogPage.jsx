import React from "react";
import { Link } from "react-router-dom";
import NavbarV2 from "./global-components/navbar-v2";
import Footer from './global-components/footer';
import Faqs from "./Faqs";

const BlogPage = () => {
  const blogItems = [
    {
      id: 1,
      title: "Digital Art",
      description: "Dubai's Color Forecast for 2025",
      image: "assets/img/updatates/Blogs/blg-home.jpg",
      path: "/Blog1"
    },
    {
      id: 2,
      title: "Nature",
      description: "Dubai' s 2025 Interior Design Trends",
      image: "assets/img/updatates/Blogs/b2-c.jpg",
      path: "/Blog2"
    },
    {
      id: 3,
      title: "Abstract",
      description: "Immerse in modern abstract compositions",
      image: "assets/img/updatates/Blogs/b3-c.jpg",
      path: "/Blog3"
    },
    {
      id: 4,
      title: "Cyberpunk",
      description: "Enter the neon-lit urban future",
      image: "assets/img/updatates/Blogs/b4-c.jpg",
      path: "/Blog4"
    }
  ];

  return (
    <div className="min-vh-100" style={{ backgroundColor: 'white' }}>
        <NavbarV2/>
      {/* Header */}
      <div className="text-center py-5">
        <h1 className="display-1 fw-normal mb-4" style={{fontSize:"56px"}}>
          Blogs
        </h1>
      </div>

      {/* Gallery Grid */}
      <div className="container-fluid px-4 pb-5" style={{marginBottom:"200px"}}>
        <div className="row g-4 justify-content-center" style={{ maxWidth: '72rem', margin: '0 auto' }}>
          {blogItems.map((item) => (
            <div key={item.id} className="col-12 col-md-6">
              <Link 
                to={item.path}
                className="d-block position-relative "
                style={{ 
                  backgroundColor: 'white',
                  transition: 'all 0.3s ease',
                  aspectRatio: '4/3'
                }}
                
              >
                <div className="position-relative overflow-hidden h-100">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-100 h-100"
                    style={{ 
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease'
                    }}
                    
                  />
                  
                </div>
                
                {/* Content Overlay */}
                <div className="position-relative  text-black " >
                  <p className="text-balck " style={{fontSize:"24px"}} >
                    {item.description}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Faqs/>
      <Footer/>
    </div>
  );
};

export default BlogPage;