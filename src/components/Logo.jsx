export default function Logo({ className = "w-8 h-8" }) {
  return (
    <div className="flex items-center gap-3 group cursor-pointer">
      <svg 
        viewBox="0 0 60 60" 
        className={`${className} transition-transform duration-500 group-hover:scale-105`} 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="ekamone_gold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F2D888" />
            <stop offset="50%" stopColor="#C9A84C" />
            <stop offset="100%" stopColor="#80621B" />
          </linearGradient>
        </defs>

        <g transform="translate(14, 5) skewX(-15)">
          <rect x="0" y="0" width="10" height="50" fill="url(#ekamone_gold)" />
          <rect x="10" y="0" width="28" height="10" fill="url(#ekamone_gold)" />
          <rect x="10" y="20" width="16" height="10" fill="url(#ekamone_gold)" />
          <rect x="10" y="40" width="28" height="10" fill="url(#ekamone_gold)" />
        </g>
      </svg>
      <span className="font-sans font-bold text-xl tracking-tight leading-none mt-1 group-hover:text-white transition-colors">
        Ekamone
      </span>
    </div>
  );
}
