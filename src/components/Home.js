import React from "react";

const Home = () => {
  return (
    <section className="home">
      
      <div className="container">

        <div className="tagline">
          <span className="tag-badge">New</span>
          <span className="tag-text">
            The YT Launchpad is for those ready to invest in a real asset and build semi-passive income through YouTube automation.
          </span>
        </div>

        <h1 className="hero-title">
          Apply for the YT Launchpad to build and scale a monetized channel that{" "}
          <span className="highlight">pays you every month</span>, in 90 days or less.
        </h1>

        <div className="step">
          <span className="step-badge">Step 1:</span>
          <span className="step-text">Watch this Video</span>
        </div>

        <div className="video-wrapper">
          <video controls preload="metadata" playsInline>
            <source src="/Assets/sample.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="step">
          <span className="step-badge">Step 2:</span>
          <span className="step-text">Apply for 1:1 Mentorship</span>
        </div>

        <p className="subtext">
          60-second form. If accepted, you'll book your onboarding call immediately.
        </p>

        <div className="form-card">
          <input placeholder="Full Name" />
          <input placeholder="Email Address" />
          <input placeholder="Phone Number" />
          <textarea placeholder="Why do you want to join?" />

          <button className="form-btn">
            Submit Inquiry
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
              <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
                <rect width="15" height="18.5" x="4.5" y="2.75" rx="3.5"/>
                <path d="M8.5 6.755h7m-7 4h7m-7 4H12"/>
              </g>
            </svg>
          </button>
        </div>

        <h2 className="results-title">Student Results</h2>
      </div>

      <div className="carousel">
        <div className="track">
          {[1,2,3,4,5,6].map((i) => (
            <div className="card" key={i}>
              <div className="card-img"></div>
              <p>$28k in less than 90 days</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .home {
          background: #f9fafb;
          padding: 60px 0;
          text-align: center;
        }

        .container {
          max-width: 1000px;
          margin: auto;
          padding: 0 16px;
        }

        .tagline {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          border: 1px solid #166534;
          border-radius: 999px;
          padding: 6px 14px 6px 6px;
          font-size: 13px;
          margin-bottom: 25px;
          background: #f0fdf4;
        }

        .tag-badge {
          background: #166534;
          color: #fff;
          width: 36px;
          height: 36px;
          min-width: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          font-size: 12px;
        }

        .tag-text {
          text-align: left;
          max-width: 600px;
          color: #166534;
        }

        .hero-title {
          font-size: 52px;
          font-weight: 700;
          line-height: 1.15;
          margin-bottom: 25px;
          color: #111;
        }

        .highlight {
          text-decoration: underline;
          text-decoration-color: #166534;
          text-decoration-thickness: 5px;
        }

        .step {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          font-size: 26px;
          font-weight: 700;
          margin: 30px 0 20px;
          flex-wrap: wrap;
        }

        .step-badge {
          background: #166534;
          color: #fff;
          padding: 6px 10px;
        }

        .video-wrapper {
          width: 100%;
          height: 520px;
          border-radius: 20px;
          overflow: hidden;
          margin-bottom: 40px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.15);
        }

        .video-wrapper video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .subtext {
          color: #4b5563;
          margin-bottom: 20px;
        }

        .form-card {
          background: #ffffff;
          padding: 25px;
          border-radius: 16px;
          max-width: 500px;
          margin: auto;
          display: flex;
          flex-direction: column;
          gap: 12px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
        }

        .form-card input,
        .form-card textarea {
          padding: 12px;
          border-radius: 8px;
          border: 1px solid #e5e7eb;
          background: #f9fafb;
        }

        .form-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: none;
          border: none;
          color: #166534;
          font-weight: 600;
          cursor: pointer;
          padding: 10px;
        }

        .results-title {
          font-size: 34px;
          font-weight: 700;
          margin: 50px 0 20px;
        }

        .carousel {
          overflow: hidden;
          margin-top: 20px;
        }

        .track {
          display: flex;
          gap: 30px;
          padding-left: 5%;
          animation: scroll 20s linear infinite;
        }

        .card {
          min-width: 420px;
          background: #ffffff;
          border-radius: 20px;
          padding: 20px;
          box-shadow: 0 8px 20px rgba(0,0,0,0.08);
        }

        .card-img {
          height: 220px;
          background: #e5e7eb;
          border-radius: 14px;
          margin-bottom: 12px;
        }

        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        @media (max-width: 768px) {
          .hero-title { font-size: 32px; }
          .video-wrapper { height: 300px; }
          .card { min-width: 85%; }
        }

        @media (max-width: 480px) {
          .hero-title { font-size: 26px; }
          .video-wrapper { height: 240px; }
        }
      `}</style>
    </section>
  );
};

export default Home;