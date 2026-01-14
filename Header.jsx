import videoHeading from "../assets/videoHeading.mov";
import MiniLogo from "../assets/MiniLogo.png";
import { useI18n } from "../i18n/I18nProvider";

function Header() {
  const { lang, setLang, t } = useI18n();

  const toggleLang = () => setLang(lang === "en" ? "vi" : "en");

  // render text có xuống dòng bằng \n
  const renderMultiline = (key) => {
    const lines = String(t(key)).split("\n");
    return (
      <>
        {lines.map((line, idx) => (
          <span key={idx}>
            {line}
            {idx !== lines.length - 1 && <br />}
          </span>
        ))}
      </>
    );
  };

  return (
    <>
      <section className="header-section">
        {/* Background Video */}
        <video
          className="header-video"
          src={videoHeading}
          autoPlay
          loop
          muted
          playsInline
        ></video>

        {/* Overlay Content */}
        <div className="header-overlay">
          {/* HEADER BAR */}
          <header className="header-bar">
            <div className="header-logo-pill">
              <img src={MiniLogo} alt="RehabAI" className="header-logo-img" />
              <span className="header-logo-text">RehabAI</span>
            </div>

            <nav className="header-nav">
              <button>{t("nav.service")} ▾</button>
              <button>{t("nav.product")} ▾</button>
              <button>{t("nav.download")}</button>
              <button>{t("nav.contact")}</button>
            </nav>

            <div className="header-actions">
              {/* Language switch */}
              <button className="lang-btn" onClick={toggleLang} title="Language">
                {lang === "en" ? "EN" : "VI"}
              </button>

              <button className="header-icon-btn">
                <span>🔍</span>
              </button>
            </div>
          </header>

          {/* FEATURE PILLS */}
          <div className="header-feature-row">
            <div className="feature-pill">
              <div className="pill-icon">💡</div>
              <div className="pill-text">{renderMultiline("header.pills.sensor")}</div>
            </div>

            <div className="feature-pill">
              <div className="pill-icon">⚙️</div>
              <div className="pill-text">{renderMultiline("header.pills.clinical")}</div>
            </div>

            <div className="feature-pill">
              <div className="pill-icon">➕</div>
              <div className="pill-text">{renderMultiline("header.pills.platform")}</div>
            </div>
          </div>
        </div>
      </section>

      {/* INLINE CSS */}
      <style>{`
        .header-section {
          position: relative;
          width: 100%;
          height: 520px;
          border-radius: 0;
          overflow: hidden;
          margin-top: 0;
        }

        .header-video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .header-overlay {
          position: absolute;
          inset: 0;
          padding: 24px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        /* HEADER BAR */
        .header-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(255, 255, 255, 0.75);
          backdrop-filter: blur(14px);
          padding: 12px 26px;
          border-radius: 60px;
          border: 1px solid rgba(0,0,0,0.1);
          gap: 16px;
        }

        .header-logo-pill {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 6px 16px;
          background: white;
          border-radius: 60px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }

        .header-logo-img {
          width: 32px;
          height: auto;
        }

        .header-logo-text {
          font-size: 18px;
          font-weight: 600;
        }

        .header-nav {
          display: flex;
          gap: 30px;
        }

        .header-nav button {
          background: transparent;
          border: none;
          font-size: 17px;
          cursor: pointer;
        }

        .header-nav button:hover {
          opacity: 0.7;
        }

        .header-actions{
          display:flex;
          align-items:center;
          gap: 10px;
        }

        .lang-btn{
          height: 46px;
          padding: 0 14px;
          border-radius: 999px;
          border: 1px solid rgba(0,0,0,0.35);
          background: rgba(255,255,255,0.9);
          cursor: pointer;
          font-weight: 700;
          letter-spacing: 0.5px;
        }
        .lang-btn:hover{
          background: #111;
          color: #fff;
          border-color: #111;
        }

        .header-icon-btn {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          border: 1px solid #111;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,0.9);
          cursor: pointer;
        }

        .header-icon-btn:hover {
          background: #111;
          color: #fff;
        }

        /* FEATURE PILLS */
        .header-feature-row {
          display: flex;
          justify-content: center;
          gap: 16px;
        }

        .feature-pill {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 14px 22px;
          background: rgba(0,0,0,0.5);
          border-radius: 28px;
          color: white;
          backdrop-filter: blur(10px);
        }

        .pill-icon {
          font-size: 22px;
        }

        .pill-text {
          font-size: 14px;
          font-weight: 500;
          line-height: 1.3em;
        }
      `}</style>
    </>
  );
}

export default Header;
