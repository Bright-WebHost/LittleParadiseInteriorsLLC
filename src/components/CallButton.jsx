import React, { useState } from 'react';

const CallButton = ({ className = '' }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const handleContactClick = (e, action) => {
    e.stopPropagation();
    console.log(`${action} clicked`);
    // Optional: setIsExpanded(false);
  };

  return (
    <>
      <style jsx>{`
        @import url('https://cdn-uicons.flaticon.com/2.0.0/uicons-regular-rounded/css/uicons-regular-rounded.css');
        @import url('https://cdn-uicons.flaticon.com/2.0.0/uicons-brands/css/uicons-brands.css');

        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(203,77,41,0.7); }
          70% { box-shadow: 0 0 0 10px rgba(203,77,41,0); }
          100% { box-shadow: 0 0 0 0 rgba(203,77,41,0); }
        }

        .call-button-container {
          position: fixed;
          bottom: 18px;
          right: 18px;
          z-index: 1000;
        }

        .contact-option {
          position: absolute;
          bottom: 0;
          right: 0;
          transition: all 0.3s ease-out;
          z-index: 20;
        }
        .contact-option.delay-1 { transition-delay: 50ms; }
        .contact-option.delay-2 { transition-delay: 100ms; }
        .contact-option.delay-3 { transition-delay: 150ms; }

        .contact-button {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          border: none;
          color: white;
          box-shadow: 0 4px 8px rgba(0,0,0,0.2);
          display: grid;
          place-items: center;
          cursor: pointer;
          transition: all 0.2s ease;
          padding: 0;
          margin: 0;
          text-decoration: none;
        }
        .contact-button:hover {
          box-shadow: 0 6px 12px rgba(0,0,0,0.3);
          transform: scale(1.1);
        }

        .download-button { background-color: #CB4D29; }
        .whatsapp-button { background-color: #25D366; }
        .chat-button     { background-color: #3498db; }

        .main-button {
          width: 60px;
          height: 60px;
          background-color: #CB4D29;
          border: none;
          color: white;
          border-radius: 50%;
          box-shadow: 0 4px 12px rgba(0,0,0,0.2);
          display: grid;
          place-items: center;
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 30;
          padding: 0;
          margin: 0;
          animation: pulse 2s infinite;
        }
        .main-button:hover {
          box-shadow: 0 6px 16px rgba(0,0,0,0.3);
          transform: scale(1.05);
          animation: none;
        }

        .flaticon-icon {
          font-style: normal;
          font-size: 22px;
          color: white;
          line-height: 1;
        }
        .main-flaticon-icon { font-size: 26px; }

        .backdrop {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          // background: rgba(0,0,0,0.1);
          z-index: 10;
        }
      `}</style>

      <div className={`call-button-container ${className}`}>
        {/* Download */}
        <div
          className="contact-option delay-1"
          style={{
            transform: isExpanded ? 'translateY(-140px)' : 'translateY(0)',
            opacity: isExpanded ? 1 : 0,
            pointerEvents: isExpanded ? 'auto' : 'none',
          }}
        >
          <a
            href="/assets/img/allimgLP/Brochure.pdf"
            className="contact-button download-button"
            aria-label="Download Brochure"
            download="Brochure.pdf"
            onClick={(e) => handleContactClick(e, 'download')}
          >
            <i className="fi fi-rr-download flaticon-icon"></i>
          </a>
        </div>

        {/* WhatsApp */}
        <div
          className="contact-option delay-2"
          style={{
            transform: isExpanded ? 'translateY(-210px)' : 'translateY(0)',
            opacity: isExpanded ? 1 : 0,
            pointerEvents: isExpanded ? 'auto' : 'none',
          }}
        >
          <a
            href="https://wa.me/+971525238899
"
            className="contact-button whatsapp-button"
            aria-label="Contact via WhatsApp"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => handleContactClick(e, 'whatsapp')}
          >
            <i className="fi fi-brands-whatsapp flaticon-icon"></i>
          </a>
        </div>

        {/* Call */}
        <div
          className="contact-option delay-3"
          style={{
            transform: isExpanded ? 'translateY(-70px)' : 'translateY(0)',
            opacity: isExpanded ? 1 : 0,
            pointerEvents: isExpanded ? 'auto' : 'none',
          }}
        >
          <a
            href="tel:+971525238899
"
            className="contact-button chat-button"
            aria-label="Make Phone Call"
            onClick={(e) => handleContactClick(e, 'call')}
          >
            <i className="fi fi-rr-phone-call flaticon-icon"></i>
          </a>
        </div>

        {/* Main Toggle Button */}
        <button
          className="main-button"
          onClick={toggleExpanded}
          style={{ transform: isExpanded ? 'rotate(45deg)' : 'rotate(0)' }}
          aria-label="Toggle contact options"
          aria-expanded={isExpanded}
        >
          <i className="fi fi-rr-messages main-flaticon-icon"></i>
        </button>

        {/* Backdrop - only visible when expanded */}
        {isExpanded && (
          <div 
            className="backdrop" 
            onClick={toggleExpanded}
            style={{ display: isExpanded ? 'block' : 'none' }}
          />
        )}
      </div>
    </>
  );
};

export default CallButton;