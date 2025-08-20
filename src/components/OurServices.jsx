import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function OurServices() {
  const [isMobile, setIsMobile] = useState(false);
  // Service data with titles, ids, and images
  const services = [
    {
      id: "faq-item-2-1",
      title: "Feasibility and Site Analysis",
      text:'Our feasibility and site analysis services lay the groundwork for your project with precision and care. We’ll thoroughly assess site conditions and overall project viability to identify challenges and opportunities, paving the way for a smooth, informed, and successful process.',
      image: "assets/img/updatates/ourServices/f&SA.jpg"
    },
    {
      id: "faq-item-2-2",
      title: "Interior Design & Detail",
      text:'We craft beautiful and functional interior architecture and design solutions that resonate with your brand’s identity and commitment to sustainability. By collaborating closely with you, we’ll transform your vision into reality with interiors that go beyond your expectations.',
      image: "assets/img/updatates/ourServices/ID&D.jpg"
    },
    {
      id: "faq-item-2-3",
      title: "Interior Construction & Fit-Out",
      text:'From inception to the final touches, our construction and fit-out specialists bring your space to life with exceptional craftsmanship. We’ll manage all aspects of the process with minimal disruptions, while incorporating environmentally conscious practices every step of the way.',
      image: "assets/img/updatates/ourServices/Constr.jpg"
    },
    {
      id: "faq-item-2-4",
      title: "FF&E (Furniture, Fixtures & Equipment)",
      text:'Our FF&E services seamlessly balance style, functionality, and sustainability. From design and selection to procurement and installation, we believe that every element should contribute to creating a space that’s as durable as it is distinctive.',
      image: "assets/img/updatates/ourServices/fe and e.jpg"
    },
    {
      id: "faq-item-2-5",
      title: "Lighting Design",
      text:'We design bespoke lighting solutions that elevate your environment, crafting an ambiance that’s both captivating and functional to create the perfect atmosphere for your space and enhance its aesthetic appeal.',
      image: "assets/img/updatates/ourServices/light.png"
    },
    {
      id: "faq-item-2-6",
      title: "MEP Design",
      text:'Combining creativity with technical expertise, we develop mechanical, electrical, and plumbing solutions with efficiency at their cores. All our designs are engineered to optimise energy use and ensure a smooth, efficient fit-out process.',
      image: "assets/img/updatates/ourServices/MEP.jpg"
    },
    {
      id: "faq-item-2-7",
      title: "Interior Wrapping",
      text:'Interior vinyl wrapping offers a quick, cost-effective way to refresh surfaces like wardrobes,kitchen cabinets, and walls. With a variety of textures and finishes, it enhances aesthetics while minimizing renovation time and disruption.',
      image: "assets/img/updatates/ourServices/wrap.jpg"
    },
  ];

  // State to hold the selected image
  const [selectedImage, setSelectedImage] = useState(services[0].image);

  return (
    <div className="ltn__faq-area" id='ltn__faq-area'>
      <h1
            style={{ 
              fontSize: isMobile ? "1.3rem" : "2.2rem", 
              fontWeight: "500", 
              textAlign: "center",
              marginBottom:"50px",
              
            }}
          >Full range of services<br/>
In the field of Interior Design</h1>
      <div className="container">
        <div className="row">
          {/* Left Side - Accordion */}
          <div className="col-lg-6">
            <div className="ltn__faq-inner ltn__faq-inner-2">
              <div id="accordion_2">
                {services.map((service, index) => (
                  <div
                    className="card"
                    key={service.id}
                    style={{
                      borderRadius:
                        index === 0
                          ? '0 0 0 0'
                          : index === services.length - 1
                          ? '0 0 0 0'
                          : '0'
                    }}
                  >
                    <h6
                      className="collapsed ltn__card-title"
                      data-bs-toggle="collapse"
                      data-bs-target={`#${service.id}`}
                      aria-expanded="false"
                      onClick={() => setSelectedImage(service.image)}
                      style={{ cursor: "pointer", fontWeight:"500"}}
                    >
                      {service.title}
                    </h6>
                    <div
                      id={service.id}
                      className="collapse"
                      data-bs-parent="#accordion_2"
                    >
                      <div className="card-body">
                        <p>
                         {service.text}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="col-lg-6">
            <aside className="sidebar-area ltn__right-sidebar">
              <div className="widget ltn__banner-widget go-top" id="imageChange">
                <img
                  src={selectedImage}
                  alt="Selected Service"
                  style={{
                    width: '100%',
                    marginTop:'30px',
                    // borderRadius: '0.5rem',
                    objectFit: 'cover',
                    maxHeight: '400px'
                  }}
                />
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurServices;
