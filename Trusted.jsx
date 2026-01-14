import { useEffect, useRef, useState } from "react";
import { useI18n } from "../i18n/I18nProvider";

function Trusted() {
  const { t } = useI18n();

  const [count20, setCount20] = useState(0);
  const [count50, setCount50] = useState(0);
  const [count200, setCount200] = useState(0);

  const timersRef = useRef([]);

  const animateCount = (setter, target, duration = 1200) => {
    let start = 0;
    const stepTime = 16;
    const increment = target / (duration / stepTime);

    const counter = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(counter);
      }
      setter(Math.floor(start));
    }, stepTime);

    timersRef.current.push(counter);
  };

  const startAnimation = () => {
    // reset trước khi chạy
    setCount20(0);
    setCount50(0);
    setCount200(0);

    animateCount(setCount20, 20);
    animateCount(setCount50, 50);
    animateCount(setCount200, 200);
  };

  useEffect(() => {
    startAnimation();

    // sau khi chạy xong → đợi 5s → chạy lại
    const loop = setInterval(() => {
      startAnimation();
    }, 1200 + 5000); // thời gian chạy + 5s pause

    return () => {
      // cleanup
      clearInterval(loop);
      timersRef.current.forEach(clearInterval);
      timersRef.current = [];
    };
  }, []);

  return (
    <>
      <section className="trusted-section">
        <div className="trusted-title">{t("trusted.title")}</div>

        <div className="trusted-items">
          <div className="trusted-item">
            <div className="trusted-number">{count20}+</div>
            <div className="trusted-text">{t("trusted.hospitals")}</div>
          </div>

          <div className="trusted-divider"></div>

          <div className="trusted-item">
            <div className="trusted-number">{count50}+</div>
            <div className="trusted-text">{t("trusted.specialists")}</div>
          </div>

          <div className="trusted-divider"></div>

          <div className="trusted-item">
            <div className="trusted-number">{count200}+</div>
            <div className="trusted-text">{t("trusted.patients")}</div>
          </div>
        </div>
      </section>

      <style>{`
        .trusted-section {
          width: 100%;
          background: #c3c3c3;
          padding: 28px 0;
          margin-top: 0;
          border-radius: 0;
        }

        .trusted-title {
          font-size: 28px;
          font-weight: 700;
          padding-left: 32px;
        }

        .trusted-items {
          margin-top: 10px;
          display: flex;
          align-items: center;
          justify-content: space-evenly;
        }

        .trusted-item {
          text-align: center;
          padding: 0 18px;
        }

        .trusted-number {
          font-size: 42px;
          font-weight: 700;
          margin-bottom: 4px;
        }

        .trusted-text {
          font-size: 18px;
          font-weight: 400;
        }

        .trusted-divider {
          width: 2px;
          height: 60px;
          background: black;
        }

        @media (max-width: 780px) {
          .trusted-items {
            flex-direction: column;
            gap: 20px;
          }
          .trusted-divider {
            display: none;
          }
        }
      `}</style>
    </>
  );
}

export default Trusted;
