import React from "react";

export default function IOSMockupPage() {
  // demo EMG samples (recent history) — bạn có thể thay bằng dữ liệu thật
  const emgSamples = [30, 35, 40, 55, 70, 65, 60, 58, 62, 80, 95, 70, 55, 48, 44, 50, 46, 40];

  // build simple smooth area + stroke path from samples
  function buildWavePath(values = [], width = 320, height = 80) {
    if (!values || values.length === 0) {
      return { area: `M0 ${height} L ${width} ${height} L ${width} ${height} L 0 ${height} Z`, stroke: "" };
    }

    const n = values.length;
    const stepX = width / Math.max(1, n - 1);
    const minVal = 0;
    const maxVal = 110; // allow headroom
    const mapY = (v) => {
      const clamped = Math.max(minVal, Math.min(maxVal, v));
      const pct = (clamped - minVal) / (maxVal - minVal);
      return (1 - pct) * height;
    };

    const points = values.map((v, i) => ({ x: i * stepX, y: mapY(v) }));

    // build smooth path using quadratic segments
    let d = `M ${points[0].x.toFixed(2)} ${points[0].y.toFixed(2)}`;
    for (let i = 1; i < points.length; i++) {
      const prev = points[i - 1];
      const curr = points[i];
      const cx = ((prev.x + curr.x) / 2).toFixed(2);
      const cy = ((prev.y + curr.y) / 2).toFixed(2);
      d += ` Q ${prev.x.toFixed(2)} ${prev.y.toFixed(2)} ${cx} ${cy}`;
    }
    // connect to last
    const last = points[points.length - 1];
    d += ` T ${last.x.toFixed(2)} ${last.y.toFixed(2)}`;

    // area: close to bottom
    const area = `${d} L ${width} ${height} L 0 ${height} Z`;

    return { area, stroke: d };
  }

  const { area: emgAreaPath, stroke: emgStrokePath } = buildWavePath(emgSamples, 320, 80);

  return (
    <div style={styles.page}>
      {/* Intro text */}
      <div style={styles.caption}>
        <div style={styles.badge}>📱 iOS app mockup</div>
        <h1 style={styles.title}>RehabAI – Mobile preview</h1>
        <p style={styles.subtitle}>
          Static mockups of how a future RehabAI iOS app might look on an
          iPhone 13 Pro – doctor view and family / patient view.
        </p>
      </div>

      {/* TWO PHONES SIDE BY SIDE */}
      <div style={styles.phoneOuter}>
        {/* ========== PHONE 1: DOCTOR VIEW ========== */}
        <div style={styles.phoneFrame}>
          <div style={styles.screen}>
            {/* Status bar + notch */}
            <div style={styles.topBar}>
              <span>9:41</span>
              <span style={styles.battery}>🔋 100%</span>
              <div style={styles.notch} />
            </div>

            {/* Header */}
            <div style={styles.appHeader}>
              <div>
                <div style={styles.appTitle}>RehabAI</div>
                <div style={styles.appSubtitle}>Doctor dashboard</div>
              </div>
              <div style={styles.avatar}>D</div>
            </div>

            {/* Tabs – doctor filters */}
            <div style={styles.tabRow}>
              <div style={{ ...styles.tab, ...styles.tabActive }}>Today</div>
              <div style={styles.tab}>All patients</div>
            </div>

            {/* Content (doctor-style) */}
            <div style={styles.scrollArea}>
              {/* today’s patients */}
              <div style={styles.card}>
                <div style={styles.cardLabel}>Today&apos;s patients</div>
                <div style={styles.cardTitle}>
                  Nguyen Van A – right knee rehab
                </div>
                <div style={styles.cardText}>
                  Home session completed · mild fatigue · no red-flag symptoms
                  reported by family.
                </div>
                <button style={styles.smallButton}>Open patient details</button>
              </div>

              {/* activation summary for this patient (REPLACED BY EMG WAVEFORM) */}
              <div style={styles.card}>
                <div style={styles.cardLabel}>
                  Muscle activation – Nguyen Van A (demo)
                </div>

                {/* EMG waveform container */}
                <div style={styles.waveContainer}>
                  <svg viewBox="0 0 320 80" preserveAspectRatio="none" style={styles.waveSvg}>
                    <defs>
                      <linearGradient id="gFill" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="#6366f1" stopOpacity="0.28" />
                        <stop offset="100%" stopColor="#6366f1" stopOpacity="0.06" />
                      </linearGradient>
                      <linearGradient id="gStroke" x1="0" x2="1" y1="0" y2="0">
                        <stop offset="0%" stopColor="#4f46e5" />
                        <stop offset="100%" stopColor="#22c55e" />
                      </linearGradient>
                    </defs>

                    {/* subtle grid lines */}
                    <g stroke="#0b1220" strokeWidth="0.6">
                      <line x1="0" y1="20" x2="320" y2="20" />
                      <line x1="0" y1="40" x2="320" y2="40" />
                      <line x1="0" y1="60" x2="320" y2="60" />
                    </g>

                    {/* area */}
                    <path d={emgAreaPath} fill="url(#gFill)" stroke="none" />

                    {/* stroke */}
                    <path
                      d={emgStrokePath}
                      fill="none"
                      stroke="url(#gStroke)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      opacity="0.98"
                    />
                  </svg>
                </div>

                <div style={styles.cardFootText}>
                  Average activation today: <strong>65%</strong> · within
                  effective training zone.
                </div>
              </div>

              {/* AI insight for doctor */}
              <div style={styles.card}>
                <div style={styles.cardLabel}>AI summary for this patient</div>
                <div style={styles.cardText}>
                  Load is currently in a safe training range. You can keep the
                  same protocol. If soreness persists for &gt; 48 hours, consider
                  reducing repetitions or adding an extra rest day.
                </div>
              </div>

              {/* messages from family */}
              <div style={styles.card}>
                <div style={styles.cardLabel}>Messages from family</div>
                <div style={styles.chatBubbleDoctor}>
                  &quot;He felt a little tired after the last set, but there was no
                  sharp pain.&quot;
                </div>
                <div style={styles.chatBubblePatient}>
                  &quot;That&apos;s fine. If he feels more pain tomorrow, let him rest
                  and reduce to 12 reps per set.&quot;
                </div>
                <button style={styles.smallGhostButton}>Open conversation</button>
              </div>
            </div>

            {/* Bottom nav */}
            <div style={styles.bottomNav}>
              <div style={styles.navItemActive}>Home</div>
              <div style={styles.navItem}>Patients</div>
              <div style={styles.navItem}>Messages</div>
              <div style={styles.navItem}>Profile</div>
            </div>
          </div>
        </div>

        {/* ========== PHONE 2: FAMILY / PATIENT VIEW ========== */}
        <div style={styles.phoneFrame}>
          <div style={styles.screen}>
            {/* Status bar + notch */}
            <div style={styles.topBar}>
              <span>9:41</span>
              <span style={styles.battery}>🔋 100%</span>
              <div style={styles.notch} />
            </div>

            {/* Header */}
            <div style={styles.appHeader}>
              <div>
                <div style={styles.appTitle}>RehabAI</div>
                <div style={styles.appSubtitle}>Family &amp; patient view</div>
              </div>
              <div style={styles.avatar}>P</div>
            </div>

            {/* Tabs */}
            <div style={styles.tabRow}>
              <div style={{ ...styles.tab, ...styles.tabActive }}>Today</div>
              <div style={styles.tab}>Progress</div>
            </div>

            {/* Content (patient-style) */}
            <div style={styles.scrollArea}>
              {/* session info */}
              <div style={styles.card}>
                <div style={styles.cardLabel}>Today&apos;s rehab</div>
                <div style={styles.cardTitle}>Quadriceps training</div>
                <div style={styles.cardText}>
                  15 / 15 knee extensions · mild fatigue · no sharp pain
                  reported.
                </div>
                <div style={styles.cardFootText}>
                  Doctor in charge: Dr. Nguyen Minh Khoa
                </div>
              </div>

              {/* activation bar */}
              <div style={styles.card}>
                <div style={styles.cardLabel}>Quadriceps activation</div>
                <div style={styles.cardText}>
                  Current (demo): <strong>65%</strong>
                </div>
                <div style={styles.progressOuter}>
                  <div style={{ ...styles.progressInner, width: "65%" }} />
                </div>
                <div style={styles.cardFootText}>
                  The longer the green bar, the stronger the muscle activation.
                  If it stays high for a long time, you may feel more fatigue –
                  take breaks between sets as needed.
                </div>
              </div>

              {/* chat preview */}
              <div style={styles.card}>
                <div style={styles.cardLabel}>Chat with your doctor</div>
                <div style={styles.chatBubbleDoctor}>
                  &quot;Today, please stop if you feel sharp pain or swelling.&quot;
                </div>
                <div style={styles.chatBubblePatient}>
                  &quot;I finished all reps, only light soreness in the front of the
                  knee.&quot;
                </div>
                <button style={styles.smallGhostButton}>Open chat</button>
              </div>
            </div>

            {/* Bottom nav */}
            <div style={styles.bottomNav}>
              <div style={styles.navItemActive}>Home</div>
              <div style={styles.navItem}>Exercises</div>
              <div style={styles.navItem}>Messages</div>
              <div style={styles.navItem}>Profile</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ================= STYLES ================= */

const styles = {
  page: {
    minHeight: "100vh",
    paddingTop: 80,
    paddingBottom: 40,
    background: "#e5e7eb", // grey background
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "#111827",
  },
  caption: {
    maxWidth: 640,
    textAlign: "center",
    marginBottom: 24,
    padding: "0 16px",
  },
  badge: {
    display: "inline-block",
    padding: "4px 12px",
    borderRadius: 999,
    border: "1px solid #6b7280",
    fontSize: 11,
    marginBottom: 8,
  },
  title: { fontSize: 24, fontWeight: 700, marginBottom: 6 },
  subtitle: { fontSize: 14, opacity: 0.7 },

  phoneOuter: {
    display: "flex",
    justifyContent: "center",
    gap: 32,
    flexWrap: "wrap",
    width: "100%",
  },

  phoneFrame: {
    width: 390,
    height: 844,
    borderRadius: 48,
    background: "#000",
    padding: 14,
    boxShadow: "0 30px 80px rgba(0,0,0,0.35)",
    position: "relative",
  },

  screen: {
    width: "100%",
    height: "100%",
    borderRadius: 40,
    background: "#0f172a",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    border: "1px solid #1e293b",
  },

  /* status bar + notch */
  notch: {
    position: "absolute",
    top: 14,
    left: "50%",
    transform: "translateX(-50%)",
    width: 180,
    height: 32,
    background: "#000",
    borderRadius: 20,
    zIndex: 10,
  },
  topBar: {
    position: "relative",
    height: 48,
    padding: "0 18px",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-between",
    fontSize: 14,
    color: "#f3f4f6",
    zIndex: 5,
  },
  battery: { fontSize: 11 },

  /* header */
  appHeader: {
    padding: "10px 18px 12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  appTitle: { fontSize: 18, fontWeight: 700, color: "#f8fafc" },
  appSubtitle: { fontSize: 12, color: "#94a3b8" },
  avatar: {
    width: 30,
    height: 30,
    background: "#475569",
    borderRadius: 999,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#f1f5f9",
    fontWeight: 600,
  },

  /* tabs */
  tabRow: { display: "flex", padding: "0 18px 10px", gap: 8 },
  tab: {
    flex: 1,
    padding: "6px 10px",
    fontSize: 12,
    borderRadius: 999,
    textAlign: "center",
    background: "#1e293b",
    color: "#94a3b8",
    border: "1px solid #334155",
  },
  tabActive: {
    background: "#6366f1",
    color: "#fff",
    borderColor: "#818cf8",
  },

  /* scroll content */
  scrollArea: {
    flex: 1,
    overflowY: "auto",
    padding: "4px 18px 12px",
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },
  card: {
    background: "#0f172a",
    border: "1px solid #1e293b",
    borderRadius: 16,
    padding: "12px 14px",
  },
  cardLabel: {
    fontSize: 11,
    letterSpacing: 1,
    color: "#64748b",
    textTransform: "uppercase",
    marginBottom: 4,
  },
  cardTitle: {
    fontSize: 15,
    color: "#f1f5f9",
    fontWeight: 600,
    marginBottom: 4,
  },
  cardText: { fontSize: 13, color: "#cbd5e1" },
  cardFootText: { marginTop: 6, fontSize: 12, color: "#94a3b8" },

  smallButton: {
    marginTop: 8,
    padding: "6px 10px",
    fontSize: 12,
    borderRadius: 999,
    background: "#4f46e5",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },
  smallGhostButton: {
    marginTop: 8,
    padding: "6px 10px",
    fontSize: 12,
    borderRadius: 999,
    background: "transparent",
    border: "1px solid #475569",
    color: "#cbd5e1",
    cursor: "pointer",
  },

  // old chartRow/bar styles are kept for reference but not used in doctor view
  chartRow: {
    display: "flex",
    alignItems: "flex-end",
    gap: 4,
    height: 80,
  },
  bar: {
    width: 7,
    borderRadius: 999,
    background: "linear-gradient(to top, #6366f1, #22c55e)",
  },

  // waveform styles
  waveContainer: {
    marginTop: 6,
    height: 88,
    background: "#071028",
    borderRadius: 10,
    padding: 8,
    overflow: "hidden",
  },
  waveSvg: {
    width: "100%",
    height: "100%",
    display: "block",
  },

  chatBubbleDoctor: {
    padding: "8px 10px",
    background: "#1e293b",
    color: "#f1f5f9",
    borderRadius: 12,
    marginBottom: 6,
    fontSize: 12,
  },
  chatBubblePatient: {
    padding: "8px 10px",
    background: "#6366f1",
    color: "#fff",
    borderRadius: 12,
    marginLeft: "auto",
    fontSize: 12,
  },

  /* patient-view progress bar */
  progressOuter: {
    marginTop: 8,
    width: "100%",
    height: 12,
    borderRadius: 999,
    background: "#111827",
    overflow: "hidden",
  },
  progressInner: {
    height: "100%",
    borderRadius: 999,
    background: "#22c55e",
  },

  /* bottom nav */
  bottomNav: {
    height: 48,
    borderTop: "1px solid #1e293b",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    color: "#64748b",
    fontSize: 12,
  },
  navItem: {},
  navItemActive: {
    padding: "4px 12px",
    background: "#fff",
    color: "#111827",
    borderRadius: 999,
    fontWeight: 600,
  },
};
