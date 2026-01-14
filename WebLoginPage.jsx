import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function WebLoginPage() {
  const navigate = useNavigate();

  const [mode, setMode] = useState("doctor"); // "doctor" | "family"
  const [doctorId, setDoctorId] = useState("");
  const [patientId, setPatientId] = useState("");
  const [patientName, setPatientName] = useState("");

  const isDoctor = mode === "doctor";

  const handleLogin = (e) => {
    e.preventDefault();
    if (isDoctor) {
      if (!doctorId) return;
      navigate("/doctor-app");    // ⭐ sang AppDoctorPage
    } else {
      if (!patientId || !patientName) return;
      navigate("/family-app");    // ⭐ sang AppFamilyPage
    }
  };

  return (
    <section style={styles.section}>
      <div style={styles.card}>
        <h1 style={styles.title}>RehabAI Web Login</h1>
        <p style={styles.subtitle}>
          Use the <strong>web version</strong> of RehabAI to access live EMG and
          posture monitoring. Log in with your{" "}
          <strong>Doctor ID</strong> (for doctors) or{" "}
          <strong>Patient ID + name</strong> (for family members).
        </p>

        <form onSubmit={handleLogin}>
          {isDoctor ? (
            <>
              <h2 style={styles.modeTitle}>Doctor</h2>

              <label style={styles.label}>Doctor ID</label>
              <input
                style={styles.input}
                placeholder="Enter Doctor ID"
                value={doctorId}
                onChange={(e) => setDoctorId(e.target.value)}
              />
            </>
          ) : (
            <>
              <h2 style={styles.modeTitle}>Family</h2>

              <label style={styles.label}>Patient ID</label>
              <input
                style={styles.input}
                placeholder="Enter Patient ID"
                value={patientId}
                onChange={(e) => setPatientId(e.target.value)}
              />

              <label style={styles.label}>Patient name</label>
              <input
                style={styles.input}
                placeholder="Enter Patient name"
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
              />
            </>
          )}

          <button
            type="submit"
            style={{
              ...styles.button,
              ...(isDoctor ? styles.buttonPrimary : styles.buttonSecondary),
              opacity: isDoctor
                ? doctorId
                  ? 1
                  : 0.5
                : patientId && patientName
                ? 1
                : 0.5,
            }}
            disabled={
              isDoctor ? !doctorId : !patientId || !patientName
            }
          >
            {isDoctor ? "Log in as Doctor" : "Log in as Family"}
          </button>
        </form>

        <p style={styles.switchText}>
          {isDoctor ? (
            <>
              Logging in as <strong>Doctor</strong>.{" "}
              <span
                style={styles.switchLink}
                onClick={() => setMode("family")}
              >
                Log in as Family instead
              </span>
            </>
          ) : (
            <>
              Login in as <strong>Family</strong>.{" "}
              <span
                style={styles.switchLink}
                onClick={() => setMode("doctor")}
              >
                Log in as Doctor instead
              </span>
            </>
          )}
        </p>

        <p style={styles.note}>
          Web demo — any ID/name will redirect you to the appropriate dashboard.
        </p>
      </div>
    </section>
  );
}

const styles = {
  section: {
    paddingTop: "140px",
    paddingBottom: "120px",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#f9fafb",
  },
  card: {
    width: "100%",
    maxWidth: "480px",
    background: "#ffffff",
    borderRadius: "16px",
    padding: "28px 28px 24px",
    boxShadow: "0 10px 30px rgba(15, 23, 42, 0.12)",
  },
  title: {
    fontSize: "26px",
    fontWeight: 800,
    marginBottom: "8px",
    textAlign: "center",
  },
  subtitle: {
    fontSize: "14px",
    opacity: 0.75,
    marginBottom: "24px",
    textAlign: "center",
    lineHeight: 1.5,
  },
  modeTitle: {
    fontSize: "18px",
    fontWeight: 700,
    marginBottom: "10px",
  },
  label: {
    fontSize: "13px",
    fontWeight: 600,
    marginBottom: "4px",
    display: "block",
  },
  input: {
    width: "100%",
    padding: "10px 12px",
    borderRadius: "10px",
    border: "1px solid #d1d5db",
    fontSize: "14px",
    marginBottom: "12px",
  },
  button: {
    width: "100%",
    padding: "11px 14px",
    borderRadius: "10px",
    fontSize: "15px",
    cursor: "pointer",
    border: "none",
    marginTop: "8px",
  },
  buttonPrimary: {
    background: "#4a6cf7",
    color: "#ffffff",
  },
  buttonSecondary: {
    background: "#ffffff",
    color: "#4a6cf7",
    border: "1px solid #4a6cf7",
  },
  switchText: {
    marginTop: "12px",
    fontSize: "13px",
    textAlign: "center",
    opacity: 0.8,
  },
  switchLink: {
    color: "#4a6cf7",
    cursor: "pointer",
    textDecoration: "underline",
  },
  note: {
    marginTop: "8px",
    fontSize: "12px",
    opacity: 0.65,
    textAlign: "center",
  },
};
