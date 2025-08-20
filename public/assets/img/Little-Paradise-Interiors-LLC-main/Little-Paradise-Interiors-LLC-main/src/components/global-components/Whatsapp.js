import React from 'react';

const Whatsapp = () => {
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
      // background-color: #45C155;
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
        right: 20px;
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
        bottom: 100px;
        right: 15px;
      }

      .whatsapp-icon {
        font-size: 40px;
        top: 10px;
      }
    }
  `;

  return (
    <>
      <style>{keyframes}</style>
      <div
        className="whatsapp-button"
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#45C155')}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#45C155')}
      >
        <a
          href="https://wa.me/+971525238899
"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#fff' }}
        >
          <i className="whatsapp-icon fab fa-whatsapp" />
        </a>
      </div>
    </>
  );
};

export default Whatsapp;
