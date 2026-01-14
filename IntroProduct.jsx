import ProductImg from "../assets/product.jpg"; 

function IntroProduct() {
  return (
    <>
      <section className="intro-section">
        <div className="intro-card">
          {/* ẢNH BÊN TRÁI */}
          <div className="intro-image-wrap">
            <img src={ProductImg} alt="RehabAI Device" className="intro-image" />
          </div>

          {/* TEXT BÊN PHẢI */}
          <div className="intro-content">
            <h3 className="intro-eyebrow">ELEVATE YOUR REHAB PRACTICE</h3>
            <h2 className="intro-title">REHABAI BIOFEEDBACK SYSTEM</h2>

            <p>
              <strong>Smart rehabilitation powered by sEMG &amp; AI</strong>
              <br />
              Helps you visualize muscle activity in real time during exercises,
              reducing guesswork and improving clinical accuracy.
            </p>

            <p>
              <strong>Made for therapists, trusted by patients</strong>
              <br />
              Developed with rehabilitation specialists to address real challenges
              in monitoring and guiding patients.
            </p>

            <p>
              <strong>Motivate. Measure. Improve.</strong>
              <br />
              RehabAI turns rehab exercises into interactive sessions, keeping
              patients engaged and enhancing treatment effectiveness.
            </p>

            <p>
              <strong>Data-driven rehab outcomes</strong>
              <br />
              Clear data. Transparent progress. More effective recovery.
            </p>
          </div>
        </div>
      </section>

      <style>{`
        .intro-section {
          width: 100%;
          background: #d5d5d5;        /* nền xám nhạt như hình */
          padding: 40px 24px 60px;
        }

        .intro-card {
          max-width: 1200px;
          margin: 0 auto;
          background: #ffffff;
          border-radius: 40px;
          padding: 32px 40px;
          display: flex;
          gap: 32px;
        }

        .intro-image-wrap {
          flex: 1;
        }

        .intro-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 32px;
          display: block;
        }

        .intro-content {
          flex: 1;
        }

        .intro-eyebrow {
          font-size: 22px;
          font-weight: 700;
          color: #b0b0b0;
          letter-spacing: 1px;
          margin-bottom: 8px;
        }

        .intro-title {
          font-size: 32px;
          font-weight: 800;
          margin-bottom: 18px;
        }

        .intro-content p {
          font-size: 16px;
          line-height: 1.5;
          margin-bottom: 10px;
        }

        .intro-content p strong {
          font-weight: 700;
        }

        @media (max-width: 900px) {
          .intro-card {
            flex-direction: column;
            padding: 24px 20px;
            border-radius: 24px;
          }

          .intro-image {
            border-radius: 24px;
          }

          .intro-title {
            font-size: 26px;
          }

          .intro-eyebrow {
            font-size: 18px;
          }
        }
      `}</style>
    </>
  );
}

export default IntroProduct;
