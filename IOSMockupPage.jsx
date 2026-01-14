import React from "react";

export default function IOSMockupPage() {
  // ✅ Put your files in /public:
  // /public/emg.mov
  // /public/mpu.mov
  const EMG_SRC = "/emg.mov";

  const MPU_SRC = "/mpu.mov";

  return (
    <div style={styles.page}>
      {/* Intro text */}
      <div style={styles.caption}>
        <div style={styles.badge}>📱 iOS app mockup</div>
        <h1 style={styles.title}>RehabAI – Mobile preview</h1>
        <p style={styles.subtitle}>
          Static mockups of how a future RehabAI iOS app might look on an iPhone 13 Pro – doctor view
          and family / patient view.
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
                <div style={styles.cardTitle}>Nguyen Van A – right knee rehab</div>
                <div style={styles.cardText}>
                  Home session completed · mild fatigue · no red-flag symptoms reported by family.
                </div>
                <button style={styles.smallButton}>Open patient details</button>
              </div>

              {/* ✅ EMG VIDEO (replaces waveform) */}
              <div style={styles.card}>
                <div style={styles.cardLabel}>Muscle activation – EMG</div>

                <div style={styles.videoContainer}>
                  <video
                    style={styles.video}
                    src={EMG_SRC}
                    controls
                    playsInline
                    preload="metadata"
                  />
                </div>

                <div style={styles.cardFootText}>
                  Review EMG clip from today’s session.
                </div>
              </div>

              {/* ✅ MPU VIDEO (extra card for doctor) */}
              <div style={styles.card}>
                <div style={styles.cardLabel}>Motion sensor – MPU</div>

                <div style={styles.videoContainer}>
                  <video
                    style={styles.video}
                    src={MPU_SRC}
                    controls
                    playsInline
                    preload="metadata"
                  />
                </div>

                <div style={styles.cardFootText}>
                  Review movement clip / IMU visualization from today’s session.
                </div>
              </div>

              {/* AI insight for doctor */}
              <div style={styles.card}>
                <div style={styles.cardLabel}>AI summary for this patient</div>
                <div style={styles.cardText}>
                  Load is currently in a safe training range. You can keep the same protocol. If
                  soreness persists for &gt; 48 hours, consider reducing repetitions or adding an extra
                  rest day.
                </div>
              </div>

              {/* messages from family */}
              <div style={styles.card}>
                <div style={styles.cardLabel}>Messages from family</div>
                <div style={styles.chatBubbleDoctor}>
                  &quot;He felt a little tired after the last set, but there was no sharp pain.&quot;
                </div>
                <div style={styles.chatBubblePatient}>
                  &quot;That&apos;s fine. If he feels more pain tomorrow, let him rest and reduce to 12 reps
                  per set.&quot;
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
                  15 / 15 knee extensions · mild fatigue · no sharp pain reported.
                </div>
                <div style={styles.cardFootText}>Doctor in charge: Dr. Nguyen Minh Khoa</div>
              </div>

              {/* ✅ Patient can also watch EMG/MPU clips if you want */}
              <div style={styles.card}>
                <div style={styles.cardLabel}>Session clips</div>

                <div style={styles.videoGrid}>
                  <div>
                    <div style={styles.miniLabel}>EMG</div>
                    <div style={styles.videoContainerSmall}>
                      <video
                        style={styles.video}
                        src={EMG_SRC}
                        controls
                        playsInline
                        preload="metadata"
                      />
                    </div>
                  </div>

                  <div>
                    <div style={styles.miniLabel}>MPU</div>
                    <div style={styles.videoContainerSmall}>
                      <video
                        style={styles.video}
                        src={MPU_SRC}
                        controls
                        playsInline
                        preload="metadata"
                      />
                    </div>
                  </div>
                </div>

                <div style={styles.cardFootText}>
                  Watch short clips recorded during today’s rehab.
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
                  The longer the green bar, the stronger the muscle activation. If it stays high for a
                  long time, you may feel more fatigue – take breaks between sets as needed.
                </div>
              </div>

              {/* chat preview */}
              <div style={styles.card}>
                <div style={styles.cardLabel}>Chat with your doctor</div>
                <div style={styles.chatBubbleDoctor}>
                  &quot;Today, please stop if you feel sharp pain or swelling.&quot;
                </div>
                <div style={styles.chatBubblePatient}>
                  &quot;I finished all reps, only light soreness in the front of the knee.&quot;
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
    background: "#e5e7eb",
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

  // ✅ video styles
  videoContainer: {
    marginTop: 6,
    height: 190,
    background: "#071028",
    borderRadius: 12,
    padding: 8,
    overflow: "hidden",
    border: "1px solid #0b1b3a",
  },
  videoContainerSmall: {
    marginTop: 6,
    height: 140,
    background: "#071028",
    borderRadius: 12,
    padding: 6,
    overflow: "hidden",
    border: "1px solid #0b1b3a",
  },
  video: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
    display: "block",
    objectFit: "cover",
    background: "#000",
  },
  videoGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 10,
    marginTop: 6,
  },
  miniLabel: {
    fontSize: 11,
    color: "#94a3b8",
    marginTop: 2,
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
