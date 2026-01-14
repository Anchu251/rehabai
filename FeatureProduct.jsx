import { useNavigate } from "react-router-dom";
import EMG1 from "../assets/Wearable EMG sensor.png"; // Wearable EMG Sensor
import FullSet from "../assets/Product.jpg";          // Full Set

function FeatureProduct() {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "Wearable EMG Sensor",
      price: "$75",
      img: EMG1,
      coming: false,
    },
    {
      id: 2,
      name: "RehabAI Full Set",
      price: "$300",
      img: FullSet,
      coming: false,
    },
    {
      id: 3,
      name: "Product 3",
      price: "Coming Soon",
      img: null,
      coming: true,
    },
    {
      id: 4,
      name: "Product 4",
      price: "Coming Soon",
      img: null,
      coming: true,
    },
  ];

  const handleClick = (p) => {
    if (p.coming) return; // sản phẩm chưa ra thì không cho click

    if (p.id === 1) {
      navigate("/wearable");        // ✅ tới trang wearable.jsx
    } else if (p.id === 2) {
      navigate("/full-set");        // ✅ tới trang full.jsx
    }
  };

  return (
    <>
      <section className="feature-section">
        <h2 className="feature-title">FEATURE PRODUCT</h2>

        <div className="feature-grid">
          {products.map((p) => (
            <div
              key={p.id}
              className={`feature-card ${p.coming ? "feature-card--disabled" : ""}`}
              onClick={() => handleClick(p)}
            >
              <div className="feature-image-wrap">
                {p.img ? (
                  <img src={p.img} alt={p.name} className="feature-image" />
                ) : (
                  <div className="placeholder-box"></div>
                )}

                {p.coming && (
                  <div className="coming-overlay">COMING SOON</div>
                )}
              </div>

              <div className="feature-info">
                <div className="feature-name">{p.name}</div>
                <div className="feature-price">{p.price}</div>
              </div>

            </div>
          ))}
        </div>
      </section>

      <style>{`
        .feature-section {
          width: 100%;
          background: #dde1e6;
          padding: 40px 24px 50px;
        }

        .feature-title {
          text-align: center;
          font-size: 28px;
          font-weight: 800;
          margin-bottom: 32px;
        }

        .feature-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          gap: 20px;
          flex-wrap: wrap;
        }

        .feature-card {
          flex: 1;
          min-width: 180px;
          max-width: 230px;
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
        }

        .feature-card--disabled {
          cursor: default;
        }

        .feature-card:hover {
          transform: scale(1.07);
        }

        .feature-card--disabled:hover {
          transform: none;
        }

        .feature-image-wrap {
          width: 100%;
          aspect-ratio: 1 / 1;
          border-radius: 40px;
          background: #5f6368;
          overflow: hidden;
          position: relative;
        }

        .feature-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.35s ease;
        }

        .feature-card:hover .feature-image {
          transform: scale(1.12);
        }

        .feature-card--disabled:hover .feature-image {
          transform: none;
        }

        .placeholder-box {
          width: 100%;
          height: 100%;
          background: #6a6a6a;
        }

        .coming-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          font-weight: 700;
          color: white;
          background: rgba(0, 0, 0, 0.35);
          backdrop-filter: blur(2px);
        }

        .feature-info {
          text-align: center;
          margin-top: 14px;
        }

        .feature-name {
          font-size: 18px;
          font-weight: 700;
        }

        .feature-price {
          margin-top: 4px;
          font-size: 18px;
          font-weight: 700;
        }

        @media (max-width: 900px) {
          .feature-grid {
            justify-content: center;
          }

          .feature-card {
            max-width: 45%;
          }
        }

        @media (max-width: 600px) {
          .feature-card {
            max-width: 100%;
          }
        }
      `}</style>
    </>
  );
}

export default FeatureProduct;
