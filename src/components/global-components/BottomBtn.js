import React, { useState } from 'react';
import Download from '../Download';
import Whatsapp from './Whatsapp';
import { MessageCircleMore } from 'lucide-react';
import Calling from '../Calling';

const BottomBtn = () => {
  const [showPopup, setShowPopup] = useState(false);

  const keyframes = `
    // @keyframes pulse-btn {
    //   0% {
    //     // box-shadow: 0 0 0 0 red;
    //   }
    //   70% {
    //     box-shadow: 0 0 0 20px rgba(0, 200, 0, 0);
    //   }
    //   100% {
    //     box-shadow: 0 0 0 0 rgba(0, 200, 0, 0);
    //   }
    }

    .whatsapp-button {
      position: fixed;
      cursor: pointer;
      display: block;
      width: 60px;
      height: 60px;
      bottom: 130px;
      right: 30px;
      background-color: #CB4D29;
      color: white;
      border-radius: 50px;
      text-align: center;
      // transition: all 0.3s ease;
      // animation: pulse-btn 3s infinite;
      z-index: 9000;
    }

    .whatsapp-icon {
      position: relative;
      z-index: 20;
      top: 16px;
      font-size: 30px;
    }

    .social-popup {
      position: fixed;
      bottom: 130px;
      right: 5px;
      display: flex;
      flex-direction: column;
      gap: 15px;
      z-index: 9001;
      transition: all 0.3s ease;
      opacity: ${showPopup ? 1 : 0};
      visibility: ${showPopup ? 'visible' : 'hidden'};
      transform: translateY(${showPopup ? '0' : '20px'});
    }

    .social-icon {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 24px;
      cursor: pointer;
      transition: transform 0.3s ease;
    }

    .social-icon:hover {
      transform: scale(1.1);
    }

    .instagram-icon {
      // background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
    }

    .download-icon {
      background-color: #4285f4;
    }

    @media (max-width: 768px) {
      .whatsapp-button {
        width: 60px;
        height: 60px;
        bottom: 100px;
        right: 20px;
      }

      .whatsapp-icon {
        font-size: 25px;
        top: 16px;
      }

      .social-popup {
        bottom: 170px;
        right: 20px;
      }
    }

    @media (max-width: 480px) {
      .whatsapp-button {
        width: 50px;
        height: 50px;
        bottom: 100px;
        right: 15px;
      }

      .whatsapp-icon {
        font-size: 30px;
        top: 14px;
      }

      .social-popup {
        bottom: 90px;
        right: 0px;
      }

      .social-icon {
        width: 45px;
        height: 45px;
        font-size: 20px;
      }
    }
  `;

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <>
      <style>{keyframes}</style>
      <div
        className="whatsapp-button"
        onClick={togglePopup}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#CB4D29')}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#CB4D29')}
        style={{backgroundColor:'#CB4D29',marginBottom:'-90px'}}
      >
        <MessageCircleMore size={34} style={{marginTop:'12px'}} />
      </div>

      <div className="social-popup">
         <Calling/>
        <Download/>
        <Whatsapp />
        {/* <Calling/> */}
        {/* <a
          href="https://www.instagram.com/your-instagram" // Replace with your Instagram link
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon instagram-icon"
        >
          <i className="whatsapp-icon fab fa-whatsapp"></i>
        </a> */}
        {/* <a
          href="/your-download-file.pdf" // Replace with your download link
          download
          className="social-icon download-icon"
        >
          <i className="fas fa-download"></i>

        </a> */}
        
      </div>
    </>
  );
};

export default BottomBtn;