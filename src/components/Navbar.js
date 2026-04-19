import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="nav-container">

        <div className="nav-pill">

          <div className="logo">
            <img src="/Assets/logo.png" alt="logo" />
            <span>The Growth Room</span>
          </div>

          <div className="nav-links">
            {['About Us', 'Services', 'Portfolio', 'Contact', 'Careers'].map((item) => (
              <a key={item} href="#">{item}</a>
            ))}
          </div>

          <div className="right">
            <button className="cta">
              Submit Inquiry
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
                  <rect width="15" height="18.5" x="4.5" y="2.75" rx="3.5"/>
                  <path d="M8.5 6.755h7m-7 4h7m-7 4H12"/>
                </g>
              </svg>
            </button>

            {!isMenuOpen && (
              <button className="hamburger" onClick={() => setIsMenuOpen(true)}>
                ☰
              </button>
            )}
          </div>

        </div>
      </div>

      {isMenuOpen && (
        <div className="mobile-menu">
          <div className="mobile-header">
            <span>The Growth Room Media</span>
            <button onClick={() => setIsMenuOpen(false)}>✕</button>
          </div>

          <div className="mobile-links">
            {['About Us', 'Services', 'Portfolio', 'Contact', 'Careers'].map((item) => (
              <div key={item}>
                <span className="dot"></span>
                {item}
              </div>
            ))}
          </div>

          <button className="mobile-cta">
            Submit Inquiry
          </button>
        </div>
      )}

      <style>{`
        .nav {
          background: #166534;
          padding: 14px 0;
          position: sticky;
          top: 0;
          z-index: 1000;
        }

        .nav-container {
          max-width: 1300px;
          margin: auto;
          padding: 0 20px;
        }

        .nav-pill {
          background: #f3f4f6;
          border-radius: 60px;
          height: 70px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 25px;
        }

        /* 🔥 LOGO WITH IMAGE */
        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 20px;
          font-weight: 700;
          color: #166534;
          white-space: nowrap;
        }

       .logo img {
  height: 34px;
  width: auto;
  object-fit: contain;

  /* 🔥 make logo light black / muted */
  filter: brightness(0) invert(0.2);
  opacity: 0.85;
}

        .nav-links {
          display: flex;
          gap: 28px;
        }

        .nav-links a {
          text-decoration: none;
          color: #374151;
          font-size: 15px;
        }

        .right {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .cta {
          background: #166534;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 999px;
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 600;
          cursor: pointer;
        }

        .cta svg {
          stroke: white;
        }

        .hamburger {
          display: none;
          background: none;
          border: none;
          font-size: 26px;
          color: #166534;
        }

        .mobile-menu {
          margin: 12px 20px;
          background: #f3f4f6;
          border-radius: 20px;
          padding: 20px;
        }

        .mobile-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 15px;
          font-weight: 700;
          color: #166534;
        }

        .mobile-links {
          display: flex;
          flex-direction: column;
          gap: 15px;
          color: #374151;
        }

        .dot {
          width: 6px;
          height: 6px;
          background: #166534;
          border-radius: 50%;
          display: inline-block;
          margin-right: 10px;
        }

        .mobile-cta {
          margin-top: 15px;
          width: 100%;
          background: #166534;
          color: white;
          border: none;
          padding: 14px;
          border-radius: 999px;
          font-weight: 600;
        }

        @media (max-width: 900px) {
          .nav-links { display: none; }
          .cta { display: none; }
          .hamburger { display: block; }

          .logo span {
            font-size: 14px;
          }

          .logo img {
            height: 28px;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;