import FlowImg from "../assets/Flow.png";

function SmartTracking() {
  return (
    <>
      <section className="smart-section">
        <h2 className="smart-title">SMART TRACKING</h2>

        <div className="smart-wrapper">
          {/* ẢNH Ở GIỮA */}
          <img src={FlowImg} alt="Smart Tracking Flow" className="smart-image" />

          {/* 02 – TRÊN GIỮA */}
          <div className="bubble bubble-2">
            <h3>02. EMG Sensor</h3>
            <p>
              Sensor responds signals and <br />
              move it to real-time EMG <br />
              biofeedback
            </p>
          </div>

          {/* 01 – TRÁI GIỮA */}
          <div className="bubble bubble-1">
            <h3>01. EMG Electrode</h3>
            <p>Catches the random electrical activity of muscle</p>
          </div>

          {/* 03 – PHẢI GIỮA */}
          <div className="bubble bubble-3">
            <h3>03. RehabAI</h3>
            <p>
              ConSends processed muscle data <br />
              to both therapist and patient.
            </p>
          </div>

          {/* 06 – TRÁI DƯỚI */}
          <div className="bubble bubble-6">
            <h3>06. Continuous Monitoring &amp; Feedback</h3>
            <p>
              Tracks progress, detects issues, <br />
              and delivers real-time <br />
              recommendations.
            </p>
          </div>

          {/* 05 – DƯỚI GIỮA */}
          <div className="bubble bubble-5">
            <h3>05. Personalized Training Delivery</h3>
            <p>
              RehabAI sends tailored exercises <br />
              to the patient based on <br />
              the therapist’s adjustments.
            </p>
          </div>

          {/* 04 – PHẢI DƯỚI */}
          <div className="bubble bubble-4">
            <h3>04. Therapist Review</h3>
            <p>
              Clinicians review muscle data <br />
              and update the rehab plan as needed.
            </p>
          </div>
        </div>
      </section>

      <style>{`
        .smart-section {
          background: #d3d6db;
          padding: 20px 24px 80px;
          border-radius: 40px;
          margin-top: 40px;
        }

        .smart-title {
          text-align: center;
          font-size: 32px;
          font-weight: 800;
          margin-bottom: 52px;
          margin-top: 0px;
        }

        .smart-wrapper {
          max-width: 1100px;
          margin: 0 auto;
          position: relative;
          padding: 80px 0; /* chừa chỗ trên/dưới cho bubble */
        }

        .smart-image {
          display: block;
          margin: 0 auto;
          max-width: 520px;
          width: 100%;
          border-radius: 12px;
        }

        .bubble {
          position: absolute;
          background: #ffffff;
          border-radius: 22px;
          padding: 14px 20px;
          box-shadow: 0 4px 16px rgba(0,0,0,0.12);
          text-align: center;
          max-width: 270px;
        }

        .bubble h3 {
          font-size: 15px;
          font-weight: 700;
          margin-bottom: 6px;
        }

        .bubble p {
          font-size: 13px;
          line-height: 1.4;
        }

        /* VỊ TRÍ TƯƠNG ĐỐI GIỐNG HÌNH 2 */
        .bubble-2 {
          top: -40px;
          left: 50%;
          transform: translateX(-50%);
        }

        .bubble-1 {
          top: 160px;
          left: 20px;
        }

        .bubble-3 {
          top: 180px;
          right: 20px;
        }

        .bubble-6 {
          bottom: 70px;
          left: 20px;
        }

        .bubble-5 {
          bottom: -60px;
          left: 50%;
          transform: translateX(-50%);
        }

        .bubble-4 {
          bottom: 70px;
          right: 20px;
        }

        /* MOBILE: xếp dọc cho gọn, không bị loạn */
        @media (max-width: 900px) {
          .smart-section {
            border-radius: 24px;
          }

          .smart-wrapper {
            padding: 20px 0 0;
          }

          .smart-image {
            max-width: 100%;
          }

          .bubble {
            position: static;
            margin: 14px auto;
            width: 100%;
            max-width: 360px;
          }
        }
      `}</style>
    </>
  );
}

export default SmartTracking;
