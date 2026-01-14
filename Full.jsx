import { Link } from "react-router-dom";
import FullImage from "../assets/Product.jpg";

function Full() {
  return (
    <>
      <section className="product-page">
        <div className="product-hero">
          <div className="product-image-wrap">
            <img
              src={FullImage}
              alt="RehabAI Full Set"
              className="product-image"
            />
          </div>

          <div className="product-hero-content">
            <h1 className="product-title">RehabAI Full Set</h1>
            <p className="product-price">$300</p>

            <p className="product-description">
              The RehabAI Full Set provides a complete smart rehabilitation 
              solution combining EMG sensors, a central controller, and 
              professional-grade electrode pads — designed for accurate muscle 
              activity tracking and guided recovery exercises.
            </p>

            <div className="product-highlight-box">
              <h3>Ideal For</h3>
              <ul>
                <li>Physical therapy & rehabilitation clinics</li>
                <li>Patients undergoing guided recovery training</li>
                <li>Research labs using EMG-controlled applications</li>
                <li>Muscle activation assessment and monitoring</li>
              </ul>
            </div>

            <div className="product-cta-row">
              <a href="#contact" className="product-primary-btn">
                Contact for Purchase
              </a>
              <Link to="/" className="product-secondary-btn">
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>

        <div className="product-section-grid">
          <div className="product-section-card">
            <h2>What’s Included</h2>
            <ul>
              <li>RehabAI Central Hub</li>
              <li>1 Wearable EMG Sensor Module</li>
              <li>Reusable electrode pads (multiple pieces)</li>
              <li>Premium shielding connection cables</li>
              <li>User guide & setup instructions</li>
            </ul>
          </div>

          <div className="product-section-card">
            <h2>Main Features</h2>
            <ul>
              <li>High-accuracy EMG data capturing</li>
              <li>Bluetooth real-time communication</li>
              <li>Lightweight and ergonomic sensor design</li>
              <li>Easy-to-use RehabAI mobile application</li>
              <li>Suitable for rehab, sports, and research</li>
            </ul>
          </div>

          <div className="product-section-card">
            <h2>Technical Specifications</h2>
            <ul>
              <li>Sampling Rate: 1000 Hz</li>
              <li>Wireless Range: up to 10 meters</li>
              <li>Battery Life: 8–10 hours</li>
              <li>Charging: USB-C Fast Charging</li>
              <li>Compatibility: iOS / Android</li>
            </ul>
          </div>
        </div>
      </section>

      <style>{`
        .product-page {
          width: 100%;
          padding: 40px 24px;
          background: #f1f3f4;
        }

        .product-hero {
          display: flex;
          flex-wrap: wrap;
          gap: 32px;
          max-width: 1200px;
          margin: 0 auto 60px;
        }

        .product-image-wrap {
          flex: 1;
          min-width: 280px;
          max-width: 450px;
          border-radius: 28px;
          overflow: hidden;
        }

        .product-image {
          width: 100%;
          height: auto;
          display: block;
        }

        .product-hero-content {
          flex: 1;
          min-width: 280px;
        }

        .product-title {
          font-size: 32px;
          font-weight: 800;
          margin-bottom: 10px;
        }

        .product-price {
          font-size: 26px;
          font-weight: 700;
          margin-bottom: 18px;
        }

        .product-description {
          font-size: 16px;
          line-height: 1.6;
          margin-bottom: 24px;
        }

        .product-highlight-box {
          background: white;
          padding: 20px;
          border-radius: 12px;
          margin-bottom: 24px;
          box-shadow: 0 3px 10px rgba(0,0,0,0.1);
        }

        .product-highlight-box h3 {
          margin-bottom: 10px;
          font-size: 18px;
        }

        .product-highlight-box ul li {
          margin-bottom: 6px;
        }

        .product-cta-row {
          display: flex;
          gap: 12px;
          margin-top: 20px;
        }

        .product-primary-btn {
          background: #007bff;
          color: white;
          padding: 10px 20px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 700;
        }

        .product-secondary-btn {
          color: #333;
          text-decoration: none;
          font-weight: 600;
          padding: 10px 20px;
        }

        .product-section-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 20px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .product-section-card {
          background: white;
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0 3px 10px rgba(0,0,0,0.08);
        }

        .product-section-card h2 {
          margin-bottom: 12px;
          font-size: 20px;
          font-weight: 700;
        }

        .product-section-card ul li {
          margin-bottom: 8px;
        }
      `}</style>
    </>
  );
}

export default Full;
