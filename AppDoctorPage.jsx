import { useEffect, useState, useMemo } from "react";

const PATIENTS = [
  {
    id: "P001",
    name: "Nguyễn Văn A",
    age: 52,
    diagnosis: "Post–right knee replacement rehabilitation",
    history: "Hypertension, long-standing knee osteoarthritis",
    allergies: "No documented drug allergies",
    meds: "Paracetamol, Celecoxib, Omeprazole (per prescription)",
    services:
      "Quadriceps rehab package – 3 sessions/week, knee extension + straight leg raise exercises",
    note: "Started the rehab program 2 weeks ago, responding well so far.",
    doctorName: "Dr. Nguyễn Minh Khoa",
    familyContact: "Wife: Trần Thị Hạnh",
    familyPhone: "0988 456 789",
  },
  {
    id: "P002",
    name: "Trần Thị B",
    age: 60,
    diagnosis: "Quadriceps weakness after stroke",
    history: "Ischemic stroke 6 months ago, type 2 diabetes",
    allergies: "NSAID allergy (abdominal discomfort)",
    meds: "Insulin, Amlodipine, antiplatelet therapy",
    services:
      "Lower-limb rehab – gait training with cane, quadriceps strengthening",
    note: "Monitor muscle fatigue closely during sessions to avoid overload.",
    doctorName: "Dr. Nguyễn Minh Khoa",
    familyContact: "Son: Lê Hoàng",
    familyPhone: "0903 123 111",
  },
  {
    id: "P003",
    name: "Lê Văn C",
    age: 35,
    diagnosis: "Anterior knee pain from sports overuse",
    history: "No chronic medical conditions reported",
    allergies: "None",
    meds: "Occasional Paracetamol when pain is severe",
    services:
      "Quadriceps rehab – correcting squat form and knee control exercises",
    note: "Pay close attention to exercise form, avoid excessive deep squats.",
    doctorName: "Dr. Nguyễn Minh Khoa",
    familyContact: "Wife: Nguyễn Thu Hà",
    familyPhone: "0912 987 555",
  },
];

export default function AppDoctorPage() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedPatient = PATIENTS[selectedIndex];

  const [emgHistory, setEmgHistory] = useState([]);
  const [loadStatus, setLoadStatus] = useState("Loading...");
  const [riskScore, setRiskScore] = useState(0);

  const [chatInput, setChatInput] = useState("");
  const [messages, setMessages] = useState([
    {
      from: "family",
      text: "Hi doctor, today patient A felt tired after exercising but not very painful.",
    },
    {
      from: "doctor",
      text: "That is acceptable. If the fatigue is still high tomorrow, reduce to 12 reps per set.",
    },
  ]);

  // Fake EMG streaming + “AI”
  useEffect(() => {
    const interval = setInterval(() => {
      setEmgHistory((prev) => {
        const next = [...prev];

        let value =
          35 +
          Math.random() * 15 +
          (Math.random() < 0.15 ? Math.random() * 50 : 0);

        value = Math.round(value);
        next.push(value);
        if (next.length > 40) next.shift();

        const last10 = next.slice(-10);
        const avg10 =
          last10.length > 0
            ? last10.reduce((a, b) => a + b, 0) / last10.length
            : 0;

        const score = Math.min(100, Math.max(0, (avg10 - 30) * 2));
        setRiskScore(Math.round(score));

        if (avg10 < 45) {
          setLoadStatus("Low / under-activated");
        } else if (avg10 < 60) {
          setLoadStatus("Effective training zone");
        } else {
          setLoadStatus("High load / possible fatigue");
        }

        return next;
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const currentEmg = emgHistory[emgHistory.length - 1] ?? "-";

  let aiSummary = "";
  if (riskScore < 40) {
    aiSummary =
      "Muscle activation is currently in a safe range — you may gradually increase exercise volume if clinically appropriate.";
  } else if (riskScore < 70) {
    aiSummary =
      "Load is in a moderate, rehab-friendly zone. Continue to monitor how the patient tolerates sessions.";
  } else {
    aiSummary =
      "High load and potential fatigue/overload — consider reducing repetitions, intensity, or adjusting technique.";
  }

  // ---------- EMG waveform path generator ----------
  // returns an SVG path string (smooth-ish polyline -> area)
  function buildWavePath(values, width = 720, height = 140, maxPoints = 40) {
    if (!values || values.length === 0) {
      // baseline flatline
      return {
        path: `M0 ${height} L0 ${height} L ${width} ${height} L ${width} ${height} Z`,
        strokePath: "",
      };
    }

    // we draw up to maxPoints (most recent), pad left if fewer
    const pts = values.slice(-maxPoints);
    const n = Math.max(1, maxPoints);
    const stepX = width / (n - 1 || 1);

    // Normalize values to a 0..1 range based on expected EMG range
    const minVal = 0;
    const maxVal = 110; // allow some headroom for spikes
    const mapY = (v) => {
      const clamped = Math.max(minVal, Math.min(maxVal, v));
      // invert for SVG (0 at top)
      const pct = (clamped - minVal) / (maxVal - minVal);
      return Math.round(height - pct * height);
    };

    // Build top polyline points
    const points = [];
    for (let i = 0; i < n; i++) {
      const x = i * stepX;
      // if pts shorter than n, pad with leftmost or baseline
      const v = i < n - pts.length ? minVal : pts[i - (n - pts.length)];
      const y = mapY(v);
      points.push({ x, y });
    }

    // Create a simple smooth path using quadratic Béziers between points
    let d = "";
    for (let i = 0; i < points.length; i++) {
      const p = points[i];
      if (i === 0) {
        d += `M ${p.x.toFixed(2)} ${p.y.toFixed(2)}`;
      } else {
        const prev = points[i - 1];
        const cx = ((prev.x + p.x) / 2).toFixed(2);
        const cy = ((prev.y + p.y) / 2).toFixed(2);
        d += ` Q ${prev.x.toFixed(2)} ${prev.y.toFixed(2)} ${cx} ${cy}`;
      }
    }
    // connect last point directly
    const last = points[points.length - 1];
    d += ` T ${last.x.toFixed(2)} ${last.y.toFixed(2)}`;

    // area path: from left-bottom -> top path -> right-bottom -> close
    const areaPath = `${d} L ${width} ${height} L 0 ${height} Z`;

    return { path: areaPath, strokePath: d };
  }

  // memoize path to avoid recalculating every render unnecessarily
  const svgWidth = 720; // viewbox width
  const svgHeight = 140; // viewbox height
  const { path: areaPath, strokePath } = useMemo(
    () => buildWavePath(emgHistory, svgWidth, svgHeight, 40),
    [emgHistory]
  );

  // threshold y for drawing a horizontal line (e.g., zone boundary)
  const thresholdValue = 60; // example threshold EMG value
  const thresholdY = Math.round(
    svgHeight - ((thresholdValue - 0) / (110 - 0)) * svgHeight
  );

  return (
    <div style={styles.appShell}>
      {/* Desktop-style app title bar */}
      <div style={styles.appTitleBar}>
        <div style={styles.windowDots}>
          <span style={{ ...styles.dot, background: "#f87171" }} />
          <span style={{ ...styles.dot, background: "#facc15" }} />
          <span style={{ ...styles.dot, background: "#4ade80" }} />
        </div>
        <div style={styles.appTitle}>RehabAI Desktop – Doctor</div>
        <div style={styles.appRight}>
          Doctor: {selectedPatient.doctorName} · Patient ID: {selectedPatient.id}
        </div>
      </div>

      <div style={styles.appBody}>
        {/* Patient sidebar */}
        <aside style={styles.sidebar}>
          <div style={styles.sidebarTitle}>My patients</div>
          <ul style={styles.patientList}>
            {PATIENTS.map((p, idx) => (
              <li
                key={p.id}
                style={{
                  ...styles.patientItem,
                  ...(idx === selectedIndex ? styles.patientItemActive : {}),
                }}
                onClick={() => setSelectedIndex(idx)}
              >
                <div style={styles.patientName}>{p.name}</div>
                <div style={styles.patientId}>{p.id}</div>
                <div style={styles.patientDiag}>{p.diagnosis}</div>
              </li>
            ))}
          </ul>
        </aside>

        {/* Main content */}
        <main style={styles.main}>
          {/* Patient info */}
          <div style={styles.patientCard}>
            <div style={styles.patientHeaderRow}>
              <div>
                <div style={styles.labelSmall}>Patient name</div>
                <div style={styles.patientNameBig}>{selectedPatient.name}</div>
              </div>
              <div>
                <div style={styles.labelSmall}>Patient ID</div>
                <div style={styles.patientValue}>{selectedPatient.id}</div>
              </div>
              <div>
                <div style={styles.labelSmall}>Age</div>
                <div style={styles.patientValue}>{selectedPatient.age}</div>
              </div>
              <div>
                <div style={styles.labelSmall}>Treating doctor</div>
                <div style={styles.patientValue}>
                  {selectedPatient.doctorName}
                </div>
                <div style={styles.patientSub}>
                  Contact: {selectedPatient.familyContact} ·{" "}
                  {selectedPatient.familyPhone}
                </div>
              </div>
            </div>

            <div style={styles.patientInfoGrid}>
              <div style={styles.infoBlock}>
                <div style={styles.infoTitle}>Current diagnosis</div>
                <div style={styles.infoText}>{selectedPatient.diagnosis}</div>
              </div>

              <div style={styles.infoBlock}>
                <div style={styles.infoTitle}>Medical history / allergies</div>
                <div style={styles.infoText}>{selectedPatient.history}</div>
                <div style={styles.infoSub}>
                  <strong>Allergies:</strong> {selectedPatient.allergies}
                </div>
              </div>

              <div style={styles.infoBlock}>
                <div style={styles.infoTitle}>Current medications</div>
                <div style={styles.infoText}>{selectedPatient.meds}</div>
              </div>

              <div style={styles.infoBlock}>
                <div style={styles.infoTitle}>Rehab service plan</div>
                <div style={styles.infoText}>{selectedPatient.services}</div>
              </div>

              <div style={{ ...styles.infoBlock, gridColumn: "1 / -1" }}>
                <div style={styles.infoTitle}>Notes</div>
                <div style={styles.infoText}>{selectedPatient.note}</div>
              </div>
            </div>
          </div>

          {/* KPIs */}
          <div style={styles.kpiRow}>
            <div style={styles.kpiCard}>
              <div style={styles.kpiLabel}>Current muscle activation</div>
              <div style={styles.kpiValue}>{currentEmg}</div>
              <div style={styles.kpiUnit}>simulated EMG units</div>
            </div>

            <div style={styles.kpiCard}>
              <div style={styles.kpiLabel}>Load status</div>
              <div
                style={{
                  ...styles.statusBadge,
                  ...(loadStatus === "Low / under-activated"
                    ? styles.statusLow
                    : loadStatus === "Effective training zone"
                    ? styles.statusOk
                    : styles.statusHigh),
                }}
              >
                {loadStatus}
              </div>
              <div style={styles.kpiUnit}>
                Based on moving average of the last 10 EMG samples
              </div>
            </div>

            <div style={styles.kpiCard}>
              <div style={styles.kpiLabel}>Fatigue / overload risk index</div>
              <div style={styles.kpiValue}>{riskScore}</div>
              <div style={styles.kpiUnit}>0–100 (demo)</div>
            </div>
          </div>

          {/* EMG + AI + Chat */}
          <div style={styles.grid}>
            <div style={styles.card}>
              <h3>Quadriceps EMG activity (simulated realtime)</h3>
              <p style={styles.cardDesc}>
                Each waveform shows recent EMG samples during quadriceps rehab.
                This is demo data to illustrate the software interface.
              </p>

              {/* ---------- SVG EMG Waveform ---------- */}
              <div style={styles.waveContainer}>
                <svg
                  viewBox={`0 0 ${svgWidth} ${svgHeight}`}
                  preserveAspectRatio="none"
                  style={styles.waveSvg}
                >
                  <defs>
                    <linearGradient id="emgFill" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopOpacity="0.28" stopColor="#6366f1" />
                      <stop offset="100%" stopOpacity="0.06" stopColor="#6366f1" />
                    </linearGradient>
                    <linearGradient id="emgStroke" x1="0" x2="1" y1="0" y2="0">
                      <stop offset="0%" stopColor="#4f46e5" />
                      <stop offset="100%" stopColor="#7c3aed" />
                    </linearGradient>
                  </defs>

                  {/* background grid lines */}
                  <g stroke="#e6e7ee" strokeWidth="0.6">
                    <line x1="0" y1={svgHeight * 0.25} x2={svgWidth} y2={svgHeight * 0.25} />
                    <line x1="0" y1={svgHeight * 0.5} x2={svgWidth} y2={svgHeight * 0.5} />
                    <line x1="0" y1={svgHeight * 0.75} x2={svgWidth} y2={svgHeight * 0.75} />
                  </g>

                  {/* threshold line */}
                  <line
                    x1="0"
                    y1={thresholdY}
                    x2={svgWidth}
                    y2={thresholdY}
                    stroke={riskScore >= 70 ? "#ef4444" : "#f59e0b"}
                    strokeDasharray="6 6"
                    strokeWidth="1"
                    opacity={0.9}
                  />

                  {/* filled area */}
                  <path d={areaPath} fill="url(#emgFill)" stroke="none" />

                  {/* stroke (top line) */}
                  <path
                    d={strokePath}
                    fill="none"
                    stroke="url(#emgStroke)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    opacity="0.95"
                  />

                  {/* small circles for most recent point */}
                  {emgHistory.length > 0 && (() => {
                    // draw a small marker at the last sample
                    const lastPts = emgHistory.slice(-40);
                    const idx = Math.max(0, lastPts.length - 1);
                    const n = 40;
                    const stepX = svgWidth / (n - 1 || 1);
                    const x = (n - lastPts.length + idx) * stepX;
                    const clamp = (v) => Math.max(0, Math.min(110, v));
                    const y = Math.round(svgHeight - ((clamp(lastPts[idx]) - 0) / 110) * svgHeight);
                    return (
                      <g>
                        <circle cx={x} cy={y} r="3.2" fill="#fff" opacity="0.9" />
                        <circle cx={x} cy={y} r="2.2" fill="#4f46e5" />
                      </g>
                    );
                  })()}
                </svg>
              </div>
            </div>

            <div style={styles.sideCol}>
              <div style={styles.card}>
                <h3>AI-assisted interpretation (demo)</h3>
                <p style={styles.aiText}>{aiSummary}</p>
                <ul style={styles.list}>
                  <li>
                    If <strong>risk &gt; 70</strong>: consider reducing
                    repetitions, increasing rest or modifying the exercise.
                  </li>
                  <li>
                    If <strong>risk 40–70</strong>: treat as an effective
                    training zone if the patient tolerates the workload.
                  </li>
                  <li>
                    If <strong>risk &lt; 40</strong>: load is still low – you
                    may gradually increase volume according to the rehab plan.
                  </li>
                </ul>
                <p style={styles.aiNote}>
                  *This logic is a demo of how an AI model might summarize EMG
                  patterns. It does not replace clinical judgement.
                </p>
              </div>

              <div style={styles.card}>
                <h3>Chat with patient&apos;s family</h3>
                <div style={styles.chatBox}>
                  {messages.map((msg, idx) => (
                    <div
                      key={idx}
                      style={{
                        ...styles.chatMessage,
                        ...(msg.from === "doctor"
                          ? styles.chatDoctor
                          : styles.chatFamily),
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
                    placeholder="Message the family..."
                    onChange={(e) => setChatInput(e.target.value)}
                    style={styles.chatInput}
                  />
                  <button
                    style={styles.chatSend}
                    onClick={() => {
                      if (chatInput.trim() === "") return;
                      setMessages([
                        ...messages,
                        { from: "doctor", text: chatInput },
                      ]);
                      setChatInput("");
                    }}
                  >
                    Send
                  </button>
                </div>

                <p style={styles.chatHint}>
                  *Demo only – messages are stored locally and not sent to a
                  server.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

// ---------- styles (kept mostly same; added waveform container) ----------
const styles = {
  appShell: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    marginTop: "80px", // keep space for web header
    background: "#0f172a",
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
    opacity: 0.85,
  },
  appBody: {
    flex: 1,
    display: "flex",
    background: "#f3f4f6",
  },

  sidebar: {
    width: "260px",
    background: "#020617",
    color: "#e5e7eb",
    padding: "16px 14px",
  },
  sidebarTitle: {
    fontSize: "14px",
    fontWeight: "700",
    marginBottom: "10px",
  },
  patientList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    fontSize: "12px",
  },
  patientItem: {
    padding: "8px 10px",
    borderRadius: "10px",
    cursor: "pointer",
    background: "rgba(15,23,42,0.8)",
    border: "1px solid transparent",
  },
  patientItemActive: {
    borderColor: "#4f46e5",
    background: "rgba(15,23,42,1)",
  },
  patientName: {
    fontWeight: "600",
  },
  patientId: {
    opacity: 0.7,
  },
  patientDiag: {
    opacity: 0.75,
    marginTop: "2px",
  },

  main: {
    flex: 1,
    padding: "20px 24px",
    overflowY: "auto",
  },

  patientCard: {
    background: "#ffffff",
    borderRadius: "12px",
    padding: "14px 16px",
    boxShadow: "0 1px 4px rgba(0,0,0,0.12)",
    marginBottom: "18px",
    fontSize: "13px",
  },
  patientHeaderRow: {
    display: "grid",
    gridTemplateColumns: "2fr 0.8fr 0.5fr 1.5fr",
    gap: "14px",
    marginBottom: "10px",
  },
  labelSmall: {
    fontSize: "11px",
    textTransform: "uppercase",
    letterSpacing: "0.04em",
    opacity: 0.6,
    marginBottom: "2px",
  },
  patientNameBig: {
    fontSize: "18px",
    fontWeight: "700",
  },
  patientValue: {
    fontSize: "13px",
    fontWeight: "600",
  },
  patientSub: {
    fontSize: "12px",
    opacity: 0.7,
    marginTop: "2px",
  },

  patientInfoGrid: {
    display: "grid",
    gridTemplateColumns: "1.4fr 1.6fr",
    gap: "12px",
    marginTop: "6px",
  },
  infoBlock: {
    background: "#f9fafb",
    borderRadius: "10px",
    padding: "10px 12px",
    fontSize: "13px",
  },
  infoTitle: {
    fontWeight: "600",
    marginBottom: "4px",
  },
  infoText: {
    opacity: 0.9,
  },
  infoSub: {
    marginTop: "4px",
    opacity: 0.8,
  },

  kpiRow: {
    display: "grid",
    gridTemplateColumns: "1.1fr 1.1fr 0.9fr",
    gap: "14px",
    marginBottom: "18px",
  },
  kpiCard: {
    background: "#ffffff",
    borderRadius: "12px",
    padding: "14px 16px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
  },
  kpiLabel: {
    fontSize: "13px",
    opacity: 0.7,
    marginBottom: "4px",
  },
  kpiValue: {
    fontSize: "24px",
    fontWeight: "800",
  },
  kpiUnit: {
    fontSize: "12px",
    opacity: 0.65,
    marginTop: "4px",
  },
  statusBadge: {
    display: "inline-block",
    padding: "6px 10px",
    borderRadius: "999px",
    fontSize: "13px",
    fontWeight: "600",
    marginTop: "4px",
  },
  statusLow: {
    background: "rgba(59,130,246,0.15)",
    color: "#1d4ed8",
  },
  statusOk: {
    background: "rgba(16,185,129,0.15)",
    color: "#047857",
  },
  statusHigh: {
    background: "rgba(239,68,68,0.15)",
    color: "#b91c1c",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "1.5fr 1.1fr",
    gap: "18px",
    marginBottom: "24px",
  },
  card: {
    background: "#ffffff",
    borderRadius: "12px",
    padding: "14px 16px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
  },
  cardDesc: {
    fontSize: "13px",
    opacity: 0.75,
    marginBottom: "10px",
  },

  // waveform container + svg
  waveContainer: {
    height: "160px",
    background: "#f9fafb",
    borderRadius: "8px",
    padding: "6px",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
  },
  waveSvg: {
    width: "100%",
    height: "100%",
    display: "block",
  },

  sideCol: {
    display: "flex",
    flexDirection: "column",
    gap: "14px",
  },
  aiText: {
    fontSize: "13px",
    marginBottom: "6px",
  },
  aiNote: {
    fontSize: "12px",
    opacity: 0.7,
    marginTop: "6px",
  },
  list: {
    fontSize: "13px",
    paddingLeft: "18px",
    marginTop: "4px",
  },

  chatBox: {
    background: "#f3f4f6",
    borderRadius: "10px",
    padding: "10px",
    height: "140px",
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
    background: "#4f46e5",
    color: "#ffffff",
    marginLeft: "auto",
  },
  chatFamily: {
    background: "#e5e7eb",
    color: "#111827",
    marginRight: "auto",
  },
  chatInputRow: {
    display: "flex",
    gap: "8px",
  },
  chatInput: {
    flex: 1,
    padding: "8px 10px",
    borderRadius: "10px",
    border: "1px solid ",
    background: "#d1d5db",
    fontSize: "13px",
  },
  chatSend: {
    padding: "8px 14px",
    borderRadius: "10px",
    border: "none",
    background: "#10b981",
    color: "#ffffff",
    cursor: "pointer",
    fontSize: "13px",
  },
  chatHint: {
    fontSize: "11px",
    opacity: 0.65,
    marginTop: "4px",
  },
};
