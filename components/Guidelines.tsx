"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ProposalViewer from "@/components/proposalviewer";

const GUIDELINES = [
  "Team of exactly 5 members — 4 devs/designers + 1 PM/business lead",
  "Submit a detailed proposal with problem statement and market analysis",
  "Include GitHub profiles for all technical members",
  "Proposal must demonstrate clear market potential and viability",
];

export default function Guidelines() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="guidelines"
      ref={ref}
      style={{ background: "#0B0F1A", padding: "112px 5%" }}
      className="relative overflow-hidden"
    >
      {/* Background glow */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 500,
          height: 500,
          background:
            "radial-gradient(circle, rgba(155,233,49,0.04) 0%, transparent 70%)",
          top: "30%",
          left: "-10%",
        }}
      />

      {/* Top divider */}
      <motion.div
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{
          height: 1,
          background:
            "linear-gradient(to right, transparent, rgba(155,233,49,0.08) 20%, rgba(155,233,49,0.08) 80%, transparent)",
        }}
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
      />

      <div style={{ maxWidth: 900, margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Section label */}
        <motion.p
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: 11,
            letterSpacing: "0.3em",
            color: "#9BE931",
            marginBottom: 16,
          }}
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          // PROPOSAL GUIDELINES
        </motion.p>

        {/* Heading */}
        <div style={{ overflow: "hidden", marginBottom: 12 }}>
          <motion.h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              color: "#E6EDF3",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
            initial={{ y: "100%" }}
            animate={inView ? { y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          >
            What we&apos;re looking for
          </motion.h2>
        </div>

        {/* Description */}
        <motion.p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 15,
            color: "rgba(230,237,243,0.45)",
            lineHeight: 1.75,
            maxWidth: 600,
            marginBottom: 40,
          }}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Your proposal is your first impression. Review the guidelines
          carefully before submitting — strong proposals have a clear problem
          statement, market analysis, and a credible team.
        </motion.p>

        {/* Guidelines list */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 12,
            marginBottom: 48,
          }}
        >
          {GUIDELINES.map((item, i) => (
            <motion.div
              key={i}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 14,
                padding: "16px 20px",
                background: "rgba(155,233,49,0.03)",
                border: "1px solid rgba(155,233,49,0.08)",
                borderRadius: 12,
              }}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
            >
              <span
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: 10,
                  color: "rgba(155,233,49,0.4)",
                  letterSpacing: "0.1em",
                  flexShrink: 0,
                  marginTop: 2,
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 14,
                  color: "rgba(230,237,243,0.55)",
                  lineHeight: 1.6,
                }}
              >
                {item}
              </span>
            </motion.div>
          ))}
        </div>

        {/* PDF Viewer Button */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <ProposalViewer />
        </motion.div>
      </div>
    </section>
  );
}