import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function BannerVideo() {
  const publicUrl = process.env.PUBLIC_URL + '/';

  // State to detect mobile
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <>
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0,
          }}
        >
          <source
            src={
              isMobile
                ? 'assets/img/Allimgs/lpi mdv.mp4' // 👉 Mobile video path
                : 'assets/img/allimgLP/Bay/1.mp4' // 👉 Desktop video path
            }
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Overlay Content */}
        <div
          className="content-overlay"
          style={{
            position: 'relative',
            zIndex: 1,
            padding: '4rem 1.5rem',
            color: 'white',
            fontFamily: 'sans-serif',
            textAlign: isMobile ? 'center' : 'left',
          }}
        >
          <style>{`
            .content-overlay ul {
              font-size: ${isMobile ? '1.2rem' : '2rem'};
              // line-height: ${isMobile ? '1.6' : '2'};
              padding-left: 0;
              margin: 0;
              list-style: none;
            }

            .content-overlay li {
              display: block;
              margin-bottom: 10px;
            }

            .content-overlay a {
              color: white;
              text-decoration: none;
              transition: color 0.3s;
            }

            .content-overlay a:hover {
              color: #CB4D29;
              // text-decoration: underline;
            }

            .site-logo img {
              width: ${isMobile ? '120px' : '150px'};
              height: auto;
              margin-bottom: 2rem;
            }
          `}</style>

          <div className="container">
            <div className="site-logo">
              <Link to="/">
                <img
                  src={publicUrl + 'assets/img/updatates/project/Logo LPI orange.png'}
                  alt="Logo"
                />
              </Link>
            </div>

            <ul>
              <li><Link to="/">Home →</Link></li>
              <li><Link to="/Interior">Projects →</Link></li>
              <li ><a href='#get'>Get a Quote →</a></li>
              <li><Link to="/Blogs">Pages →</Link></li>
              <li><Link to="/contact">Contact →</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
