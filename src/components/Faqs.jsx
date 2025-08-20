import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Page_header from './global-components/page-header';

function Faqs() {
  // Service data with titles, ids, and images
  const services = [
    {
      id: "faq-item-2-1",
      title: "1. What interior design services do you offer at Little Paradise Interiors LLC?",
      text:'We offer complete residential and commercial interior design services, including space planning, concept development, 3D visualization, furniture design, renovation, fit-outs, and turnkey project execution.',
      
    },
    {
      id: "faq-item-2-2",
      title: "2. How much does an interior design project cost?",
      text:'Interior design pricing depends on the project size, scope, and materials selected. We offer both premium and budget friendly interior design solutions tailored to your needs.',
      
    },
    {
      id: "faq-item-2-3",
      title: "3. How do I get started with your interior design services?",
      text:'Getting started is easy! Contact us for a consultation, and we’ll guide you through every step, from ideation to execution for your little paradise.',
      
    },
    {
      id: "faq-item-2-4",
      title: "4. How long does an interior design renovation or fit-out take?",
      text:'Timelines vary based on project complexity. On average, residential interior renovations take 4–10 weeks, and commercial fit-outs may range from 6-12 weeks.',
      
    },
    {
      id: "faq-item-2-5",
      title: "5. Do you assist with design approvals and permits?",
      text:'Yes, we assist with all required approvals and documentation through our trusted partners. Our collaborative approach ensures a smooth and compliant process, so you don’t have to worry about the paperwork or formalities.',
      
    },
    {
      id: "faq-item-2-6",
      title: "6. Can you design my home or office within a specific budget?",
      text:'Absolutely. We specialize in interior design solutions that balance aesthetic appeal and budget conscious planning, without compromising on quality.',
      
    },
    {
      id: "faq-item-2-7",
      title: "7. Do you offer turnkey interior design and fit-out services?",
      text:'Yes, we provide end-to-end turnkey solutions, from concept, civil work, and carpentry to styling and handover for a stress free experience.',
      
    },
    {
      id: "faq-item-2-8",
      title: "8. What makes Little Paradise Interiors LLC different from other interior designers?",
      text:'Our personalized approach, attention to detail, design innovation, and commitment to quality make us a trusted name in bespoke interior design.',
      
    },
    {
      id: "faq-item-2-9",
      title: "9. Do you provide custom furniture design and joinery services in Dubai?",
      text:'Yes, we design and manufacture custom furniture, wardrobes, kitchen cabinets, and built-ins through our in-house carpentry and joinery team.',
      
    },
    {
      id: "faq-item-2-10",
      title: "10. What types of spaces do you specialize in?",
      text:'We design homes, villas, offices, retail outlets, restaurants, and commercial spaces, with bespoke solutions that reflect each client’s vision and functionality.',
      
    },
    {
      id: "faq-item-2-11",
      title: "11. What’s the difference between interior design and turnkey fit-out?",
      text:'Interior design focuses on planning, styling, and visualization. Turnkey fit-out includes execution from civil work and electricals to final styling all managed by us.',
      
    },
    {
      id: "faq-item-2-12",
      title: "12. Do you offer sustainable or eco-friendly interior design options in Dubai?",
      text:'Yes! We’re committed to sustainable interior design using eco-friendly materials, energy-efficient lighting, and responsible sourcing whenever possible.',
      
    },
    {
      id: "faq-item-2-13",
      title: "13. Can I be involved in the design process?",
      text:'Definitely. We collaborate closely with you throughout the journey from the initial moodboard to material selection to ensure the space reflects your taste.',
      
    },
    {
      id: "faq-item-2-14",
      title: "14. Can you design interiors for Airbnb or short-term rental properties in the U.A.E?",
      text:'Absolutely. We specialize in Airbnb interior design that’s attractive, functional, and budget-friendly ideal for short-term rentals.',
      
    },
    {
      id: "faq-item-2-15",
      title: "15. Why should I choose Little Paradise Interiors LLC for my project in U.A.E?",
      text:'We’re known for our creative vision, technical excellence, and seamless project delivery. Whether you need a modern villa makeover or commercial fit-out, we deliver quality, on time.',
      
    },
    {
      id: "faq-item-2-16",
      title: "16. How can I contact Little Paradise Interiors LLC for a consultation in U.A.E?",
      text:'You can reach us via our website, email, phone, or WhatsApp. Visit our Contact page for full details.',
      
    },
  ];

  // State to hold the selected image
  const [selectedImage, setSelectedImage] = useState(services[0].image);

  return (
    <div className="ltn__faq-area" id='ltn__faq-area' style={{marginTop:"-150px"}}>
         
      <h1 className='h1-txt text-center pb-4 font-normal' style={{fontWeight:'500'}}>Frequently Asked Questions</h1>
      <div className="container">
        <div className="row">
          {/* Left Side - Accordion */}
          <div className="col-lg-12 font-normal">
            <div className="ltn__faq-inner ltn__faq-inner-2">
              <div id="accordion_2">
                {services.map((service, index) => (
                  <div
                    className="card"
                    key={service.id}
                    style={{
                      borderRadius:
                        index === 0
                          ? '1rem 1rem 0 0'
                          : index === services.length - 1
                          ? '0 0 1rem 1rem'
                          : '0'
                    }}
                  >
                    <h6
                      className="collapsed ltn__card-title"
                      data-bs-toggle="collapse"
                      data-bs-target={`#${service.id}`}
                      aria-expanded="false"
                      onClick={() => setSelectedImage(service.image)}
                      style={{ cursor: "pointer",fontWeight:"normal" }}
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

         
        </div>
      </div>
    </div>
  );
}

export default Faqs;
