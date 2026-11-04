/** Ilustração conceitual do produto; não representa uma tela ou logotipo oficial. */
export default function ProjectArtwork({ slug }: { slug: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      aria-hidden="true"
      className="absolute -right-3 bottom-0 h-44 w-44 text-white/25 transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-3"
    >
      {slug === "nponto" ? (
        <>
          <circle cx="112" cy="104" r="70" stroke="currentColor" />
          <circle
            cx="112"
            cy="104"
            r="54"
            stroke="currentColor"
            strokeDasharray="1 9"
            strokeWidth="3"
          />
          <path
            d="M112 65v39l26 17"
            stroke="white"
            strokeOpacity=".6"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <circle cx="112" cy="104" r="5" fill="white" fillOpacity=".8" />
          <path
            d="M24 30h44M24 42h28M154 177h34"
            stroke="currentColor"
            strokeLinecap="round"
          />
        </>
      ) : slug === "fieldis" ? (
        <>
          <rect
            x="35"
            y="32"
            width="130"
            height="146"
            rx="20"
            stroke="currentColor"
            transform="rotate(-8 100 100)"
          />
          <rect
            x="45"
            y="24"
            width="130"
            height="146"
            rx="20"
            fill="white"
            fillOpacity=".06"
            stroke="currentColor"
          />
          <circle
            cx="110"
            cy="77"
            r="18"
            stroke="white"
            strokeOpacity=".6"
            strokeWidth="2"
          />
          <path
            d="M77 126c0-17 15-29 33-29s33 12 33 29"
            stroke="white"
            strokeOpacity=".6"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M81 145h58"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </>
      ) : (
        <>
          <rect
            x="30"
            y="40"
            width="160"
            height="120"
            rx="16"
            stroke="currentColor"
          />
          <path
            d="M30 66h160M30 135h160M54 40v26m27-26v26m27-26v26m27-26v26m27-26v26M54 135v25m27-25v25m27-25v25m27-25v25m27-25v25"
            stroke="currentColor"
          />
          <path d="m96 85 27 16-27 16V85Z" fill="white" fillOpacity=".6" />
          <path
            d="m20 25 27-7m119 161 25-7"
            stroke="currentColor"
            strokeLinecap="round"
          />
        </>
      )}
    </svg>
  );
}
