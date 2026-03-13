"use client";

export default function Footer() {
  return (
    <footer
      className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 px-8 md:px-12 py-10 flex-wrap"
      style={{
        background: "#0B0F1A",
        borderTop: "1px solid rgba(155,233,49,0.08)",
      }}
    >
      {/* Logo */}
      <div className="flex items-center gap-3">
        <span className="font-syne font-extrabold text-base tracking-widest text-light">
          EDWIN<span style={{ color: "#9BE931" }}>NOVA</span>
        </span>
      </div>

      {/* Event Info */}
      <div className="text-center">
        <p
          className="font-body text-xs"
          style={{ color: "rgba(230,237,243,0.3)" }}
        >
          Organized by Edwins Lab · Alvas Institute of Engineering and
          Technology
        </p>

        <p
          className="font-body text-xs mt-1"
          style={{ color: "rgba(230,237,243,0.2)" }}
        >
          Mangaluru, Karnataka · April 3–6, 2026
        </p>
      </div>

      {/* Contact Info */}
      <div className="flex flex-col text-xs font-body gap-1">
        <p style={{ color: "rgba(230,237,243,0.6)" }}>
          📧 edwins@aiet.org.in
        </p>
        <p style={{ color: "rgba(230,237,243,0.6)" }}>
          📞 +91 8951169155
        </p>
        <p style={{ color: "rgba(230,237,243,0.4)", maxWidth: "220px" }}>
          📍 Alvas Institute of Engineering and Technology, Mijjar,
          Moodbidre
        </p>
      </div>

      {/* Date */}
      <div
        className="font-mono text-xs"
        style={{ color: "#9BE931", letterSpacing: "0.1em" }}
      >
        APR 3–6, 2026
      </div>
    </footer>
  )
}