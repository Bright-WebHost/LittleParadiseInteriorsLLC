import { useState, useEffect } from "react";

const Reviews = () => {
  const testimonials = [
    {
      id: 1,
      text: "Had stayed at one of the airbnb properties furnished and styled by them initially when I moved to Dubai. A phenomenal job by LPI, After which I got my rental unit furnished by them. They did a wonderful job in my unit in 1 Residence by Wasl. Would recommend them for your home furnishing and styling. They do an amazing job for the budget that I had in my mind.",
      name: "-Shaheer Hejmadi(Dubai based Influencer)",
    },
    {
      id: 2,
      text: "Loved the work done by little paradise interiors, had recommended them to a client for their home renovation before selling the property, the property value appreciated during the sale primarily because of the makeover. Luxe and elevated feeling. Value for every dirham spent by my client.",
      name: "-Numan Sheikh",
    },
    {
      id: 3,
      text: "Little Paradise Interiors was honestly such a great experience. From the first design ideas to the final touches, everything felt well-organized and easy. Shaz was the first person we met and helped us with the estimate, They kept things moving and always kept us in the loop, The Project Engineer on site was super reliable and detail-focused, and the design team absolutely nailed the design. It's rare to find a team that actually listens and delivers, but they did. Would happily work with them again.",
      name: "-Praba",
    },
    {
      id: 4,
      text: "Extremely satisfied with the service provided by Little Paradise Interiors. The team was very professional. The deliverables were on point. My dubai apartment looks modern yet unique explaining my personality in my space.",
      name: "-Muazin abubaker",
    },
    {
      id: 5,
      text: "Collaborated with LPI for interior design for my 1 Bedroom apartment. Had a wonderful experience. The designs submitted by Little Paradise Interiors were out of the box. They gave importance into curating my personal taste into the space. Would recommend them to anyone who has value to design and the way they ensure that what is designed. The execution comes to the same exact outcome as delivered in the design presentation.",
      name: "-Sheikh Mazeen",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [isMobile, setIsMobile] = useState(false);

  // Adjust items per view based on screen size
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      if (width < 576) {
        setItemsPerView(1);
      } else if (width < 992) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - itemsPerView);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
    }, 5000); // change slide every 5 seconds
    return () => clearInterval(interval);
  }, [maxIndex]);

  return (
    <div
      className="py-5"
      style={{
        backgroundColor: "white",
        marginTop: isMobile ? "-50px" : "-150px",
      }}
    >
      <div className="container position-relative">
        {/* Header */}
        <div className="text-center mb-5">
          <h1
            className="text-dark"
            style={{ 
              fontSize: isMobile ? "1.8rem" : "2.2rem", 
              fontWeight: "500", 
              marginTop: isMobile ? "100px" : "200px",
              padding: isMobile ? "0 15px" : "0"
            }}
          >
            What Our Clients Tell About Us
          </h1>
        </div>

        {/* Testimonials Grid */}
        <div className="row g-4 justify-content-center">
          {testimonials
            .slice(currentIndex, currentIndex + itemsPerView)
            .map((testimonial) => (
              <div 
                key={testimonial.id} 
                className={`col-12 ${itemsPerView >= 2 ? 'col-md-6' : ''} ${itemsPerView >= 3 ? 'col-lg-4' : ''}`}
              >
                <div
                  className="card h-100 border-0 shadow-sm d-flex flex-column mx-auto"
                  style={{ 
                    backgroundColor: "#fcd1d44f",
                    maxWidth: "400px"
                  }}
                >
                  <div className="card-body p-4 d-flex flex-column" style={{ flex: 1 }}>
                    <div className="mb-3">
                      <span className="fs-1 fw-bold" style={{ color: "#CB4D29" }}>
                        ❝
                      </span>
                    </div>
                    <p
                      className="mb-4 lh-base flex-grow-1"
                      style={{
                        color: "#6c757d",
                        fontSize: isMobile ? "0.9rem" : "0.95rem",
                        textAlign: "justify",
                        textJustify: "inter-word"
                      }}
                    >
                      {testimonial.text}
                    </p>
                    <div className="mt-auto">
                      <h6 
                        className="mb-1 fw-bold text-dark"
                        style={{ fontSize: isMobile ? "0.9rem" : "1rem" }}
                      >
                        {testimonial.name}
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;