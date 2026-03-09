"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const events = [
  {
    day: "APR 2 — DAY 0",
    title: "Arrival & Networking",
    desc: "Teams arrive, check into college accommodation. Informal networking with fellow entrepreneurs from across colleges.",
    side: "left",
  },
  {
    day: "APR 3 — DAY 1",
    title: "Discovery & Planning",
    desc: "Meet your investor-mentor. Present your idea, gather real feedback, refine your strategy. Deliverable: comprehensive product plan and development roadmap.",
    side: "right",
  },
  {
    day: "APR 4 — DAY 2",
    title: "Execution Sprint I",
    desc: "First 16-hour build cycle begins. Teams execute under watchful evaluators. First checkpoint assessment determines early standings.",
    side: "left",
  },
  {
    day: "APR 5 — DAY 3",
    title: "Sprint II + Finalist Selection",
    desc: "Second and third cycles. Based on cumulative performance, top 4 teams per domain (12 total) advance to the Shark Tank finals.",
    side: "right",
  },
  {
    day: "APR 6 — DAY 4",
    title: "Shark Tank Finals",
    desc: "Top 12 teams pitch to the investor panel. Live demos, business model, Q&A. Prizes announced. Investment discussions begin.",
    side: "left",
  },
];

export default function Timeline() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="timeline"
      ref={ref}
      style={{ background: "#0B0F1A", padding: "112px 5%" }}
    >
      <div className="max-w-5xl mx-auto">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p
            className="font-mono text-xs tracking-[0.3em] uppercase mb-4"
            style={{ color: "#9BE931" }}
          >
            // Event Schedule
          </p>
          <h2
            className="font-syne font-extrabold leading-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            4 Days. <span style={{ color: "#9BE931" }}>6 Stages.</span> 1 Shot.
          </h2>
        </motion.div>

        {/* ─────────────────────────────────────────────────────────
            MOBILE: horizontal scroll cards
        ───────────────────────────────────────────────────────── */}
        <div className="md:hidden -mx-5 px-5">
          {/* Scroll hint label */}
          <p
            className="font-mono text-[9px] tracking-widest mb-4 text-center"
            style={{ color: "rgba(155,233,49,0.35)" }}
          >
            ← SWIPE TO NAVIGATE →
          </p>

          {/* Horizontal scroll container with snap */}
          <div
            className="flex gap-4 overflow-x-auto pb-6"
            style={{
              scrollSnapType: "x mandatory",
              WebkitOverflowScrolling: "touch",
              scrollbarWidth: "none",        // Firefox
              msOverflowStyle: "none",       // IE
            }}
          >
            {events.map((ev, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
                style={{
                  scrollSnapAlign: "center",
                  flexShrink: 0,
                  width: "80vw",
                  maxWidth: 320,
                }}
              >
                <div
                  className="h-full rounded-2xl p-6 flex flex-col gap-4"
                  style={{
                    background: "rgba(22,28,42,0.8)",
                    border: "1px solid rgba(155,233,49,0.15)",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  {/* Step number */}
                  <div className="flex items-center justify-between">
                    <span
                      className="font-mono text-[9px] tracking-widest px-2 py-1 rounded"
                      style={{
                        color: "#9BE931",
                        background: "rgba(155,233,49,0.08)",
                        border: "1px solid rgba(155,233,49,0.2)",
                      }}
                    >
                      {ev.day}
                    </span>
                    <span
                      className="font-syne font-extrabold"
                      style={{
                        fontSize: "3.5rem",
                        color: "rgba(155,233,49,0.06)",
                        lineHeight: 1,
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Green accent line */}
                  <div
                    className="w-8 h-[2px] rounded-full"
                    style={{ background: "#9BE931", boxShadow: "0 0 8px rgba(155,233,49,0.5)" }}
                  />

                  {/* Title */}
                  <h3
                    className="font-syne font-bold text-lg leading-snug"
                    style={{ color: "#E6EDF3" }}
                  >
                    {ev.title}
                  </h3>

                  {/* Desc */}
                  <p
                    className="font-body text-sm leading-relaxed"
                    style={{ color: "rgba(230,237,243,0.45)" }}
                  >
                    {ev.desc}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Trailing spacer so last card snaps cleanly */}
            <div style={{ flexShrink: 0, width: "5vw" }} />
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-2">
            {events.map((_, i) => (
              <div
                key={i}
                className="rounded-full"
                style={{
                  width: 6, height: 6,
                  background: "rgba(155,233,49,0.25)",
                }}
              />
            ))}
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────
            DESKTOP: original vertical timeline (unchanged)
        ───────────────────────────────────────────────────────── */}
        <div className="relative hidden md:block">
          {/* Center line */}
          <div
            className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
            style={{
              background: "linear-gradient(to bottom, transparent, rgba(155,233,49,0.25), transparent)",
            }}
          />

          <div className="flex flex-col gap-12">
            {events.map((ev, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.15 + i * 0.12, duration: 0.6 }}
                className="relative grid grid-cols-[1fr_60px_1fr] items-start gap-0"
              >
                {ev.side === "left" ? (
                  <>
                    <div className="text-right pr-10">
                      <p
                        className="font-mono text-[10px] tracking-widest mb-1.5"
                        style={{ color: "#9BE931" }}
                      >
                        {ev.day}
                      </p>
                      <h3 className="font-syne font-bold text-lg mb-2 text-light">
                        {ev.title}
                      </h3>
                      <p
                        className="font-body text-sm leading-relaxed"
                        style={{ color: "rgba(230,237,243,0.45)" }}
                      >
                        {ev.desc}
                      </p>
                    </div>
                    <div className="flex justify-center pt-1.5 z-10">
                      <div
                        className="w-3.5 h-3.5 rounded-full border-2 flex-shrink-0"
                        style={{
                          background: "#0B0F1A",
                          borderColor: "#9BE931",
                          boxShadow: "0 0 12px rgba(155,233,49,0.4)",
                        }}
                      />
                    </div>
                    <div />
                  </>
                ) : (
                  <>
                    <div />
                    <div className="flex justify-center pt-1.5 z-10">
                      <div
                        className="w-3.5 h-3.5 rounded-full border-2 flex-shrink-0"
                        style={{
                          background: "#0B0F1A",
                          borderColor: "#9BE931",
                          boxShadow: "0 0 12px rgba(155,233,49,0.4)",
                        }}
                      />
                    </div>
                    <div className="pl-10">
                      <p
                        className="font-mono text-[10px] tracking-widest mb-1.5"
                        style={{ color: "#9BE931" }}
                      >
                        {ev.day}
                      </p>
                      <h3 className="font-syne font-bold text-lg mb-2 text-light">
                        {ev.title}
                      </h3>
                      <p
                        className="font-body text-sm leading-relaxed"
                        style={{ color: "rgba(230,237,243,0.45)" }}
                      >
                        {ev.desc}
                      </p>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}