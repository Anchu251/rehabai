import WearableImg from "../assets/Wearable EMG sensor.png";

export default function Wearable() {
  return (
    <div className="wearable-container">
      <section className="wearable-content">

        {/* ----------------- TITLE ----------------- */}
        <h1 className="title">What is a Wearable EMG Sensor?</h1>

        <p className="text">
          Electromyography (EMG) sensors measure the electrical activity produced by 
          muscles during contraction and relaxation. These sensors detect and analyze 
          electrical signals to provide insight into muscle performance, fatigue, and 
          overall health. A <strong>wearable EMG sensor</strong> takes this concept 
          further by integrating EMG technology into a lightweight, portable device 
          that can be easily worn on the body.
        </p>

        <p className="text">
          Unlike traditional EMG systems that require bulky equipment and wires, 
          wearable EMG sensors provide real-time data collection without restricting 
          the user's movements. This makes them ideal for dynamic activities such as 
          sports training or physical rehabilitation, where unrestricted movement is 
          crucial.
        </p>

        {/* ----------------- IMAGE ----------------- */}
        <div className="image-wrapper">
          <img src={WearableImg} alt="Wearable EMG Sensor" className="main-image" />
        </div>

        {/* ----------------- APPLICATIONS ----------------- */}
        <h2 className="section-title">Applications of Wearable EMG Sensors</h2>

        <div className="grid-4">
          <div className="card">
            <h3>1. Healthcare And Rehabilitation</h3>
            <p>
              Wearable EMG sensors are used to monitor patients recovering from 
              injury or surgery. These devices allow healthcare providers to assess 
              muscle function and track recovery progress in real time.
            </p>
            <p>
              They provide valuable feedback for personalized treatment plans and 
              more effective rehabilitation strategies.
            </p>
          </div>

          <div className="card">
            <h3>2. Sports Performance And Training</h3>
            <p>
              Athletes and trainers use wearable EMG sensors to optimize performance. 
              By analyzing activation patterns, trainers can fine-tune workout 
              regimens, reduce injury risk, and enhance performance.
            </p>
          </div>

          <div className="card">
            <h3>3. Ergonomics And Workplace Safety</h3>
            <p>
              These sensors help monitor muscle strain and fatigue in real time, 
              reducing the risk of workplace injuries. Employers can use the data 
              to redesign tasks and improve safety.
            </p>
          </div>

          <div className="card">
            <h3>4. Research And Development</h3>
            <p>
              Researchers use wearable EMG sensors to study human movement and 
              biomechanics. They allow natural data collection without lab constraints.
            </p>
          </div>
        </div>

        {/* ----------------- FEATURES ----------------- */}
        <h2 className="section-title">
          Key Features of the Wearable EMG Sensor by 2M Engineering
        </h2>

        <p className="text">
          The <strong>HP212 Wireless EMG System</strong> by 2M Engineering is a 
          state-of-the-art wearable sensor designed for precision and ease of use.
        </p>

        <div className="feature-block">
          <h3>1. Wireless Connectivity / Streaming</h3>
          <p>
            The HP212 system is completely wireless, allowing users to move freely 
            while capturing accurate muscle data. Ideal for workouts, rehabilitation, 
            or industrial tasks.
          </p>
        </div>

        <div className="feature-block">
          <h3>2. Real-Time Data Collection</h3>
          <p>
            Provides instant feedback on muscle activity through wireless BLE 
            connection to smartphones, tablets, VR headsets, or computers.
          </p>
        </div>

        <div className="feature-block">
          <h3>3. High Precision And Sensitivity</h3>
          <p>
            Designed to capture even the smallest variations in muscle activity, 
            ensuring accurate and actionable data for medical and performance uses.
          </p>
        </div>

        <div className="feature-block">
          <h3>4. Ease Of Use</h3>
          <p>
            Compact and user-friendly, the HP212 system is easy to set up—even for 
            users with limited technical experience.
          </p>
        </div>

      </section>

      {/* ----------------- STYLE ----------------- */}
      <style>{`
        .wearable-container {
          width: 100%;
          padding: 40px 24px;
        }

        .wearable-content {
          max-width: 1200px;
          margin: 0 auto;
        }

        .title {
          color: #e74c3c;
          font-size: 42px;
          font-weight: 800;
          margin-bottom: 20px;
        }

        .text {
          font-size: 18px;
          line-height: 1.6;
          margin-bottom: 16px;
          color: #333;
        }

        .main-image {
          width: 100%;
          max-width: 580px;
          display: block;
          margin: 20px auto;
        }

        .section-title {
          color: #e74c3c;
          font-size: 36px;
          font-weight: 800;
          margin-top: 50px;
          margin-bottom: 20px;
        }

        .grid-4 {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          margin-bottom: 40px;
        }

        .card {
          font-size: 16px;
          line-height: 1.5;
        }

        .card h3 {
          font-size: 22px;
          font-weight: 700;
          margin-bottom: 8px;
        }

        .feature-block {
          margin-bottom: 32px;
        }

        .feature-block h3 {
          font-size: 26px;
          font-weight: 700;
          margin-bottom: 12px;
        }

        @media (max-width: 960px) {
          .grid-4 {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 600px) {
          .grid-4 {
            grid-template-columns: 1fr;
          }

          .title {
            font-size: 32px;
          }

          .section-title {
            font-size: 28px;
          }
        }
      `}</style>
    </div>
  );
}
