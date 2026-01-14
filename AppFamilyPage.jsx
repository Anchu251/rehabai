import { useState } from "react";

export default function FamilyAppPage() {
  // Thông tin bệnh nhân (demo)
  const patientInfo = {
    id: "P001",
    name: "Nguyễn Văn A",
    age: 52,
    diagnosis: "Recovery after right knee replacemen",
    doctorName: "Dr. Nguyễn Minh Khoa",
  };

  // Thông tin bác sĩ điều trị (demo)
  const doctorInfo = {
    name: "Dr. Nguyễn Minh Khoa",
    specialty: "Physical Rehabilitation",
    phone: "0987 123 456",
    email: "dr.khoa.phcn@hospital.vn",
    hospital: "Rehab Department – Phenikaa Uni HospitalI",
  };

  // Thông tin buổi tập hôm nay (demo)
  const todaySession = {
    reps: "15 / 15 knee extensions",
    avgActivation: 65,
    fatigue: "Mild fatigue",
  };

  // Chat demo
  const [chatInput, setChatInput] = useState("");
  const [messages, setMessages] = useState([
    {
      from: "doctor",
      text: "Remember to complete all 15 reps today and rest if you feel too tired.",
    },
    {
      from: "patient",
      text: "Remember to complete all 15 reps today and rest if you feel too tired.",
    },
  ]);

  // AI feedback đơn giản
  let aiComment = "";
  let aiNext = "";

  if (todaySession.avgActivation < 40) {
    aiComment = "Muscle activation today is slightly low..";
    aiNext =
      "Next time, try slower reps but make sure to squeeze the quadriceps more clearly.";
  } else if (todaySession.avgActivation < 60) {
    aiComment = "Muscle activation is at a moderate level, suitable for rehab";
    aiNext =
      "You can keep the same number of reps, or increase by 2–3 if it feels comfortable";
  } else {
    aiComment = "Muscle activation is good and within an effective training range.";
    aiNext =
      "Maintain similar intensity. If you feel too fatigued, take longer breaks between sets.";
  }

  return (
    <div style={styles.appShell}>
      {/* Thanh tiêu đề app */}
      <div style={styles.appTitleBar}>
        <div style={styles.windowDots}>
          <span style={{ ...styles.dot, background: "#f87171" }} />
          <span style={{ ...styles.dot, background: "#facc15" }} />
          <span style={{ ...styles.dot, background: "#4ade80" }} />
        </div>
        <div style={styles.appTitle}>RehabAI Desktop – Patient</div>
        <div style={styles.appRight}>Patient ID: {patientInfo.id}</div>
      </div>

      {/* Thân app */}
      <div style={styles.appBody}>
        <main style={styles.main}>
          {/* Thông tin bệnh nhân */}
          <div style={styles.patientCard}>
            <div>
              <div style={styles.patientLabel}>Patient Name</div>
              <div style={styles.patientName}>{patientInfo.name}</div>
            </div>
            <div>
              <div style={styles.patientLabel}>ID</div>
              <div style={styles.patientValue}>{patientInfo.id}</div>
            </div>
            <div>
              <div style={styles.patientLabel}>Age</div>
              <div style={styles.patientValue}>{patientInfo.age}</div>
            </div>
            <div>
              <div style={styles.patientLabel}>Diagnosis</div>
              <div style={styles.patientDiag}>{patientInfo.diagnosis}</div>
            </div>
            <div>
              <div style={styles.patientLabel}>Treating Doctor</div>
              <div style={styles.patientValue}>{patientInfo.doctorName}</div>
            </div>
          </div>

          {/* Thông tin bác sĩ điều trị */}
          <div style={styles.card}>
            <h3>Doctor Information</h3>
            <p style={styles.rowText}>
              <strong>Full Name:</strong> {doctorInfo.name}
            </p>
            <p style={styles.rowText}>
              <strong>Specialty:</strong> {doctorInfo.specialty}
            </p>
            <p style={styles.rowText}>
              <strong>Facility:</strong> {doctorInfo.hospital}
            </p>
            <p style={styles.rowText}>
              <strong>Phonei:</strong> {doctorInfo.phone}
            </p>
            <p style={styles.rowText}>
              <strong>Email:</strong> {doctorInfo.email}
            </p>

            <p style={styles.note}>
              *If pain increases, swelling occurs, or you cannot tolerate the exercise — please contact your doctor.
            </p>

            <div style={{ marginTop: "8px" }}>
              <button
                style={styles.button}
                onClick={() => alert("Calling doctor...")}
              >
                📞 Call for Doctor
              </button>
              <button
                style={{ ...styles.button, marginLeft: "8px", background: "#10b981" }}
                onClick={() => alert("Opening email client ...")}
              >
                ✉️ Send Email
              </button>
            </div>
          </div>

          <h1 style={styles.pageTitle}>Today's Rehab Session</h1>
          <p style={styles.pageSubtitle}>
            Quadriceps strengthening – based on your rehab doctor’s instructions.
          </p>

          {/* Hàng trên: buổi tập + AI */}
          <div style={styles.topRow}>
            <div style={styles.card}>
              <h3>Section Detail</h3>
              <p style={styles.rowText}>
                <strong>Knee extensions:</strong> {todaySession.reps}
              </p>
              <p style={styles.rowText}>
                <strong>Average activation:</strong>{" "}
                {todaySession.avgActivation}%
              </p>
              <p style={styles.rowText}>
                <strong>Fatigue level:</strong> {todaySession.fatigue}
              </p>

              <div style={styles.note}>
                *If you feel sharp pain or swelling — stop exercising and contact your doctor.
              </div>

              <button
                style={styles.button}
                onClick={() =>
                  alert("Session marked as completed.")
                }
              >
                ✅ Mark session as completed
              </button>
            </div>

            <div style={styles.card}>
              <h3>Insights of RehabAI</h3>
              <p style={styles.aiText}>{aiComment}</p>
              <p style={styles.aiText}>
                <strong>Rcm for next session</strong> {aiNext}
              </p>
              <p style={styles.aiDisclaimer}>
                *This is an automated suggestion and does not replace medical advice.
              </p>
            </div>
          </div>

          {/* Bar mức co cơ */}
          <div style={styles.card}>
            <h3>Quadriceps Activation Level</h3>
            <p style={styles.rowText}>
              <strong>Current:</strong> {todaySession.avgActivation}%
            </p>
            <div style={styles.barOuter}>
              <div
                style={{
                  ...styles.barInner,
                  width: `${todaySession.avgActivation}%`,
                }}
              />
            </div>
            <p style={styles.note}>
              The longer the bar, the stronger the muscle activation.  
              If it stays high for long periods, you may feel more fatigue — take breaks when needed.
            </p>
          </div>

          {/* Chat với bác sĩ */}
          <div style={styles.card}>
            <h3>Chat with Doctor</h3>
            <div style={styles.chatBox}>
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  style={{
                    ...styles.chatMessage,
                    ...(msg.from === "patient"
                      ? styles.chatPatient
                      : styles.chatDoctor),
                  }}
                >
                  {msg.text}
                </div>
              ))}
            </div>

            <div style={styles.chatInputRow}>
              <input
                type="text"
                value={chatInput}
                placeholder="Nhập tin nhắn..."
                onChange={(e) => setChatInput(e.target.value)}
                style={styles.chatInput}
              />
              <button
                style={styles.chatSend}
                onClick={() => {
                  if (chatInput.trim() === "") return;
                  setMessages([
                    ...messages,
                    { from: "patient", text: chatInput },
                  ]);
                  setChatInput("");
                }}
              >
                Gửi
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

const styles = {
  appShell: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    marginTop: "80px",
    background: "#0f172a",
    position: "relative",
    zIndex: 20,
  },
  appTitleBar: {
    height: "36px",
    display: "flex",
    alignItems: "center",
    padding: "0 12px",
    background:
      "linear-gradient(90deg, rgba(15,23,42,1) 0%, rgba(59,130,246,1) 100%)",
    color: "#e5e7eb",
    fontSize: "13px",
  },
  windowDots: {
    display: "flex",
    gap: "6px",
    marginRight: "10px",
  },
  dot: {
    width: "10px",
    height: "10px",
    borderRadius: "999px",
  },
  appTitle: {
    fontWeight: "600",
  },
  appRight: {
    marginLeft: "auto",
    opacity: 0.8,
  },
  appBody: {
    flex: 1,
    background: "#f3f4f6",
    display: "flex",
    position:"relative",
    zIndex: 21,
  },
  main: {
    flex: 1,
    padding: "20px 24px",
    overflowY: "auto",
    paddingBottom:"40px",
  },

  // card thông tin bệnh nhân
  patientCard: {
    display: "grid",
    gridTemplateColumns: "1.3fr 0.8fr 0.5fr",
    gap: "16px",
    background: "#ffffff",
    borderRadius: "12px",
    padding: "12px 16px",
    boxShadow: "0 1px 4px rgba(0,0,0,0.12)",
    marginBottom: "16px",
    fontSize: "13px",
  },
  patientLabel: {
    fontSize: "11px",
    textTransform: "uppercase",
    letterSpacing: "0.04em",
    opacity: 0.6,
    marginBottom: "2px",
  },
  patientName: {
    fontSize: "16px",
    fontWeight: "700",
  },
  patientValue: {
    fontSize: "13px",
    fontWeight: "600",
  },
  patientDiag: {
    fontSize: "13px",
    fontWeight: "500",
  },

  pageTitle: {
    fontSize: "22px",
    fontWeight: "800",
    marginTop: "4px",
    marginBottom: "4px",
  },
  pageSubtitle: {
    fontSize: "13px",
    opacity: 0.7,
    marginBottom: "16px",
  },

  topRow: {
    display: "grid",
    gridTemplateColumns: "1.2fr 1.1fr",
    gap: "16px",
    marginBottom: "16px",
  },
  card: {
    background: "#ffffff",
    borderRadius: "12px",
    padding: "14px 16px",
    boxShadow: "0 1px 4px rgba(0,0,0,0.12)",
    marginBottom: "16px",
  },
  rowText: {
    fontSize: "14px",
    marginBottom: "4px",
  },
  note: {
    marginTop: "8px",
    fontSize: "12px",
    opacity: 0.7,
  },
  button: {
    marginTop: "10px",
    padding: "8px 14px",
    borderRadius: "999px",
    border: "none",
    background: "#4a6cf7",
    color: "#ffffff",
    fontSize: "13px",
    cursor: "pointer",
  },
  aiText: {
    fontSize: "14px",
    lineHeight: 1.6,
    marginBottom: "6px",
  },
  aiDisclaimer: {
    fontSize: "12px",
    opacity: 0.65,
    fontStyle: "italic",
    marginTop: "4px",
  },
  barOuter: {
    width: "100%",
    height: "14px",
    borderRadius: "999px",
    background: "#e5e7eb",
    overflow: "hidden",
    marginTop: "8px",
  },
  barInner: {
    height: "100%",
    borderRadius: "999px",
    background: "#22c55e",
  },

  // chat
  chatBox: {
    background: "#f3f4f6",
    borderRadius: "10px",
    padding: "10px",
    height: "160px",
    overflowY: "auto",
    marginBottom: "8px",
  },
  chatMessage: {
    padding: "8px 10px",
    borderRadius: "12px",
    marginBottom: "6px",
    maxWidth: "80%",
    fontSize: "12px",
  },
  chatDoctor: {
    background: "#e5e7eb",
    color: "#111827",
    marginRight: "auto",
  },
  chatPatient: {
    background: "#4a6cf7",
    color: "#ffffff",
    marginLeft: "auto",
  },
  chatInputRow: {
    display: "flex",
    gap: "8px",
  },
  chatInput: {
    flex: 1,
    padding: "8px 10px",
    borderRadius: "10px",
    border: "1px solid #d1d5db",
    fontSize: "13px",
  },
  chatSend: {
    padding: "8px 14px",
    borderRadius: "10px",
    border: "none",
    background: "#10b981",
    color: "white",
    cursor: "pointer",
    fontSize: "13px",
  },
};
