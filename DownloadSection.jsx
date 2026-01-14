import { useNavigate } from "react-router-dom";
import MobileApp from "../assets/MobileApp.png";

import WindowsBtn from "../assets/Windows.png";
import MacOSBtn from "../assets/MacOS.png";
import AndroidBtn from "../assets/Android.png";
import IOSBtn from "../assets/IOS.png";

function DownloadSection() {
  const navigate = useNavigate();

  const goToWebLogin = () => {
    navigate("/web-login");        // ⭐ Windows + macOS → Web Login
  };

  const goToIOSMockup = () => {
    navigate("/ios-mockup");       // ⭐ iOS + Android → iOS Mockup Page
  };

  return (
    <>
      <section className="download-section">
        <div className="download-card">

          {/* LEFT — phone mockup */}
          <div className="download-image-wrap">
            <img src={MobileApp} alt="RehabAI App" className="download-image" />
          </div>

          {/* RIGHT — text + buttons */}
          <div className="download-content">
            <h2 className="download-title">
              Seamless integration with the<br />RehabAI App
            </h2>

            <p className="download-desc">
              <strong>RehabAI</strong> delivers real-time sEMG data, intelligent
              analysis, and clear visual feedback to support accurate assessment,
              guided training, and data-driven rehabilitation decisions.
            </p>

            <h3 className="download-subtitle">DOWNLOAD APP FOR</h3>

            <div className="download-buttons">

              <div className="download-row">
                <img
                  src={WindowsBtn}
                  className="download-btn-img"
                  alt="Windows"
                  onClick={goToWebLogin}     // ⭐ Windows → Web Login
                />

                <img
                  src={MacOSBtn}
                  className="download-btn-img"
                  alt="macOS"
                  onClick={goToWebLogin}     // ⭐ macOS → Web Login
                />
              </div>

              <div className="download-row">
                <img
                  src={AndroidBtn}
                  className="download-btn-img"
                  alt="Android"
                  onClick={goToIOSMockup}    // ⭐ Android → iOS Mockup
                />

                <img
                  src={IOSBtn}
                  className="download-btn-img"
                  alt="iOS"
                  onClick={goToIOSMockup}    // ⭐ iOS → iOS Mockup
                />
              </div>

            </div>
          </div>
        </div>
      </section>

      <style>{`
        .download-section {
          width: 100%;
          background: #dde1e6;
          padding: 50px 24px 60px;
        }

        .download-card {
          max-width: 1200px;
          margin: 0 auto;
          background: #ffffff;
          border-radius: 40px;
          padding: 36px 32px;
          display: flex;
          gap: 32px;
        }

        .download-image-wrap {
          flex: 1;
        }

        .download-image {
          width: 100%;
          object-fit: contain;
          border-radius: 30px;
        }

        .download-content {
          flex: 1.1;
          padding-right: 24px;
        }

        .download-title {
          font-size: 30px;
          font-weight: 800;
          margin-bottom: 14px;
        }

        .download-desc {
          font-size: 16px;
          line-height: 1.5;
          margin-bottom: 26px;
        }

        .download-subtitle {
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 20px;
        }

        .download-buttons {
          display: flex;
          flex-direction: column;
          gap: 18px;
          max-width: 520px;
        }

        .download-row {
          display: flex;
          justify-content: space-between;
          gap: 18px;
        }

        .download-btn-img {
          width: 100%;
          max-width: 240px;
          cursor: pointer;
          transition: transform 0.25s ease;
          border-radius: 40px;
        }

        .download-btn-img:hover {
          transform: scale(1.05);
        }

        @media (max-width: 900px) {
          .download-card {
            flex-direction: column;
            padding: 28px 20px;
          }

          .download-content {
            padding-right: 0;
          }

          .download-buttons {
            max-width: 100%;
          }

          .download-row {
            flex-direction: column;
          }

          .download-btn-img {
            max-width: 100%;
          }
        }
      `}</style>
    </>
  );
}

export default DownloadSection;
