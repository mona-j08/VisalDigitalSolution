import React from "react";

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  inverse?: boolean;
}

export default function Logo({ className = "h-10", iconOnly = false, inverse = false }: LogoProps) {
  // SVG Icon — V-shaped growth chart recolored with VisalMasterWeb palette
  const LogoIcon = (
    <svg
      viewBox="0 0 100 100"
      className="w-full h-full"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Stylized "V" base shape */}
      <path d="M22 30H36.5L48.5 68H34L22 30Z"       fill={inverse ? "#ffffff" : "#2C3D47"} />
      <path d="M48.5 68L56 44H41.5L48.5 68Z"         fill={inverse ? "#ffffff" : "#2C3D47"} />
      <path d="M48.5 68L63 30H48.5L42.5 48L48.5 68Z" fill={inverse ? "#ffffff" : "#2C3D47"} />

      {/* Accent gold trend lines */}
      <path d="M32 55L48 40" stroke="#E98C1A" strokeWidth="4.5" strokeLinecap="round" />
      <path d="M48 40L55 47" stroke="#E98C1A" strokeWidth="4.5" strokeLinecap="round" />

      {/* Magic pink rising arrow */}
      <path d="M48 40L59 22"        stroke="#CD6D8B" strokeWidth="4.5" strokeLinecap="round" />
      <path d="M52 21.5L59.5 21.5L59.5 29" stroke="#CD6D8B" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />

      {/* Primary deep-blue thick arrow */}
      <path d="M55 47L73 17"        stroke="#2C3D47" strokeWidth="5"   strokeLinecap="round" />
      <path d="M65.5 16.5L73.5 16.5L73.5 24.5" stroke="#2C3D47" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />

      {/* Trend dots */}
      <circle cx="32" cy="55" r="5.5" fill="#E98C1A" />
      <circle cx="48" cy="40" r="5.5" fill="#CD6D8B" />
      <circle cx="55" cy="47" r="5.5" fill="#CD6D8B" />
    </svg>
  );

  if (iconOnly) {
    return <div className={`${className} flex items-center justify-center shrink-0`}>{LogoIcon}</div>;
  }

  return (
    <div className={`flex items-center gap-3 shrink-0 ${className}`}>
      {/* Icon Frame */}
      <div className="w-10 h-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
        {LogoIcon}
      </div>

      {/* Text Branding — VisalMasterWeb */}
      <div className="flex flex-col leading-none">
        <span
          className={`font-display font-bold text-lg tracking-tight ${
            inverse ? "text-white" : "text-[#2C3D47]"
          }`}
        >
          Visal<span style={{ color: "#E98C1A" }}>Master</span><span style={{ color: "#CD6D8B" }}>Web</span>
        </span>
        <span
          className={`text-[8px] font-sans font-bold tracking-[0.20em] uppercase mt-0.5 ${
            inverse ? "text-slate-400" : "text-[#6B7280]"
          }`}
        >
          Digital Solutions
        </span>
      </div>
    </div>
  );
}
