import { DownloadIcon, Phone } from 'lucide-react';
import React from 'react'

function Calling() {
    const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/assets/img/allimgLP/Brochure.pdf';
    link.download = 'assets/img/allimgLP/Brochure.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
    const keyframes = `
    @keyframes pulse-btn {
      0% {
        box-shadow: 0 0 0 0 #45C155;
      }
      70% {
        box-shadow: 0 0 0 20px rgba(0, 200, 0, 0);
      }
      100% {
        box-shadow: 0 0 0 0 rgba(0, 200, 0, 0);
      }
    }

    .whatsapp-button {
      position: fixed;
      cursor: pointer;
      display: block;
      width: 60px;
      height: 60px;
      bottom: 130px;
      right: 30px;
      background-color: #45C155;
      color: white;
      border-radius: 50px;
      text-align: center;
      // transition-duration: 0.5s;
      // animation: pulse-btn 3s infinite;
      z-index: 9000;
    }

    .whatsapp-icon {
      position: relative;
      z-index: 20;
      top: 16px;
      font-size: 30px;
    }

    @media (max-width: 768px) {
      .whatsapp-button {
        width: 100px;
        height: 100px;
        bottom: 100px;
        right: 10px;
      }

      .whatsapp-icon {
        font-size: 25px;
        top: 12px;
      }
    }

    @media (max-width: 480px) {
      .whatsapp-button {
        width: 65px;
        height: 65px;
        bottom: 80px;
        right: 30px;
      }

      .whatsapp-icon {
        font-size: 40px;
        top: 10px;
      }
    }
  `;
  return (
    
    <div>
      <style>{keyframes}</style>
       <button 
        onClick={handleDownload}
        className=" whatsapp-button position-fixed btn btn-link p-3 "
        style={{ 
            top:'-280px',
          bottom: '30px', 
          
        //   zIndex: 1000,
          backgroundColor: '#CB4D29',
          border: '1px solid white',
          borderRadius: '50px',
        //   transition: 'all 0.3s ease'
        }}
        // onMouseEnter={(e) => {
        //   e.target.style.backgroundColor = 'rgba(179, 71, 217, 0.2)';
        //   e.target.style.transform = 'scale(1.05)';
        // }}
        // onMouseLeave={(e) => {
        //   e.target.style.backgroundColor = 'rgba(179, 71, 217, 0.1)';
        //   e.target.style.transform = 'scale(1)';
        // }}
      >
        <Phone size={24} color="white" />
      </button>
    </div>
  )
}

export default Calling
