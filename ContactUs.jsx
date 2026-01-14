function ContactUs() {
  const handleSubmit = (e) => {
    e.preventDefault(); // không reload trang
    alert("We will contact you as soon as possible.");
    e.target.reset();   // clear input sau khi submit
  };

  return (
    <>
      <section className="contact-section">
        <h2 className="contact-title">CONTACT US</h2>

        <form className="contact-card" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            className="contact-input"
            placeholder="Your email"
          />

          <input
            type="text"
            name="problem"
            className="contact-input"
            placeholder="Your problem"
          />

          <button type="submit" className="contact-submit">
            SUBMIT
          </button>
        </form>
      </section>

      <style>{`
        .contact-section {
          width: 100%;
          background: #dde1e6;
          padding: 60px 24px 80px;
          border-radius: 40px;
          margin-top: 50px;
        }

        .contact-title {
          font-size: 32px;
          font-weight: 800;
          margin-bottom: 30px;
        }

        .contact-card {
          background: white;
          border-radius: 50px;
          padding: 40px 30px;
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .contact-input {
          width: 100%;
          padding: 22px 28px;
          font-size: 16px;
          border-radius: 40px;
          border: none;
          background: #5f6368;
          color: white;
          outline: none;
        }

        .contact-input::placeholder {
          color: rgba(255,255,255,0.65);
          font-size: 16px;
        }

        .contact-submit {
          width: 240px;
          padding: 16px 0;
          margin: 0 auto;
          border-radius: 40px;
          background: #5f6368;
          border: none;
          color: white;
          font-size: 18px;
          font-weight: 700;
          cursor: pointer;
          transition: transform 0.2s ease, font-weight 0.15s ease;
        }

        /* chữ đậm hơn + nhún nhẹ khi nhấn */
        .contact-submit:active {
          font-weight: 900;
          transform: scale(0.97);
        }

        @media (max-width: 800px) {
          .contact-card {
            border-radius: 30px;
          }
        }
      `}</style>
    </>
  );
}

export default ContactUs;
