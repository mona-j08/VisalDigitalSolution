import React from "react";

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  inverse?: boolean;
}

export default function Logo({ className = "h-10", iconOnly = false, inverse = false }: LogoProps) {
  // SVG Icon representing the customized Visal Digital Solutions logo
  const LogoIcon = (
    <svg
      viewBox="0 0 100 100"
      className="w-full h-full"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Stylized dark navy "V" background shape */}
      <path
        d="M22 30H36.5L48.5 68H34L22 30Z"
        fill={inverse ? "#ffffff" : "#0f172a"}
      />
      <path
        d="M48.5 68L56 44H41.5L48.5 68Z"
        fill={inverse ? "#ffffff" : "#0f172a"}
      />
      <path
        d="M48.5 68L63 30H48.5L42.5 48L48.5 68Z"
        fill={inverse ? "#ffffff" : "#0f172a"}
      />

      {/* Connection Trend Lines (growth) */}
      <path
        d="M32 55L48 40"
        stroke="#2563eb"
        strokeWidth="4.5"
        strokeLinecap="round"
      />
      <path
        d="M48 40L55 47"
        stroke="#2563eb"
        strokeWidth="4.5"
        strokeLinecap="round"
      />

      {/* Light Blue Rising Arrow */}
      <path
        d="M48 40L59 22"
        stroke="#38bdf8"
        strokeWidth="4.5"
        strokeLinecap="round"
      />
      <path
        d="M52 21.5L59.5 21.5L59.5 29"
        stroke="#38bdf8"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Royal Blue Rising Arrow (thick) */}
      <path
        d="M55 47L73 17"
        stroke="#2563eb"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M65.5 16.5L73.5 16.5L73.5 24.5"
        stroke="#2563eb"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Interactive Trend Dots */}
      <circle cx="32" cy="55" r="5.5" fill="#2563eb" />
      <circle cx="48" cy="40" r="5.5" fill="#38bdf8" />
      <circle cx="55" cy="47" r="5.5" fill="#38bdf8" />
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
      
      {/* Text Branding */}
      <div className="flex flex-col">
        <span className={`font-display font-bold text-lg leading-none tracking-tight ${inverse ? "text-white" : "text-slate-900"}`}>
          VISAL
        </span>
        <span className={`text-[9px] font-sans font-bold tracking-[0.18em] uppercase ${inverse ? "text-slate-400" : "text-slate-500"}`}>
          DIGITAL SOLUTIONS
        </span>
      </div>
    </div>
  );
}
