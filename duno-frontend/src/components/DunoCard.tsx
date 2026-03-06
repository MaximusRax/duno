import type { PowerCard } from "./types";

function DunoCard({
  no,
  color,
  powerCard,
}: {
  no?: number;
  color: string;
  powerCard?: PowerCard;
}) {
  const card = () => {
    if (!powerCard) {
      return (
        <g>
          <text
            x="100"
            y="185"
            fontFamily="Arial, sans-serif"
            fontWeight="bold"
            fontSize="120"
            fill={color}
            textAnchor="middle"
          >
            {no}
          </text>
          <text
            x="25"
            y="45"
            fontFamily="Arial, sans-serif"
            fontWeight="bold"
            fontSize="30"
            fill="white"
            textAnchor="middle"
          >
            {no}
          </text>
          <text
            x="175"
            y="280"
            fontFamily="Arial, sans-serif"
            fontWeight="bold"
            fontSize="30"
            fill="white"
            textAnchor="middle"
            transform="rotate(180, 175, 270)"
          >
            {no}
          </text>
        </g>
      );
    } else if (powerCard === "wild") {
      return (
        <>
          {/* Top Icon */}
          <g
            transform="skewX(15) translate(2,2) scale(0.2)"
            stroke="white"
            stroke-width="8"
          >
            <path d="M100 80 A50 70 0 0 1 150 150 L100 150 Z" fill="#FF5555" />
            <path d="M150 150 A50 70 0 0 1 100 220 L100 150 Z" fill="#0055AA" />
            <path d="M100 220 A50 70 0 0 1 50 150 L100 150 Z" fill="#FFAA00" />
            <path d="M50 150 A50 70 0 0 1 100 80 L100 150 Z" fill="#55AA55" />
          </g>
          {/* Middles Logo */}
          <g
            transform="skewX(15) translate(-79,-60) scale(1.4)"
            stroke="white"
            stroke-width="2"
          >
            <path d="M100 80 A50 70 0 0 1 150 150 L100 150 Z" fill="#FF5555" />
            <path d="M150 150 A50 70 0 0 1 100 220 L100 150 Z" fill="#0055AA" />
            <path d="M100 220 A50 70 0 0 1 50 150 L100 150 Z" fill="#FFAA00" />
            <path d="M50 150 A50 70 0 0 1 100 80 L100 150 Z" fill="#55AA55" />
          </g>
          {/* Bottom Icon */}
          <g
            transform="skewX(15) translate(80,235) scale(0.2)"
            stroke="white"
            stroke-width="8"
          >
            <path d="M100 80 A50 70 0 0 1 150 150 L100 150 Z" fill="#FF5555" />
            <path d="M150 150 A50 70 0 0 1 100 220 L100 150 Z" fill="#0055AA" />
            <path d="M100 220 A50 70 0 0 1 50 150 L100 150 Z" fill="#FFAA00" />
            <path d="M50 150 A50 70 0 0 1 100 80 L100 150 Z" fill="#55AA55" />
          </g>
        </>
      );
    } else if (powerCard === "wildDraw4") {
      return (
        <g>
          <rect
            x="140"
            y="80"
            width="60"
            height="90"
            rx="10"
            fill="#0055aa"
            stroke="white"
            stroke-width="3"
            transform="rotate(-30, 170, 320)"
          />
          <rect
            x="90"
            y="80"
            width="60"
            height="90"
            rx="10"
            fill="#55aa55"
            stroke="white"
            stroke-width="3"
            transform="rotate(-15, 210, 240)"
          />
          <rect
            x="90"
            y="110"
            width="60"
            height="90"
            rx="10"
            fill="#ff5555"
            stroke="white"
            stroke-width="3"
            transform="rotate(-2, 130, 240)"
          />
          <rect
            x="90"
            y="135"
            width="60"
            height="90"
            rx="10"
            fill="#ffaa00"
            stroke="white"
            stroke-width="3"
            transform="rotate(10, 230, 240)"
          />

          <text
            x="15"
            y="40"
            font-family="Arial, sans-serif"
            font-weight="bold"
            font-size="30"
            textAnchor="start"
            fill="white"
          >
            +4
          </text>
          <text
            x="50"
            y="50"
            font-family="Arial, sans-serif"
            font-weight="bold"
            font-size="30"
            fill="white"
            text-anchor="end"
            transform="rotate(180, 100, 155)"
          >
            +4
          </text>
        </g>
      );
    } else if (powerCard === "skip") {
      return (
        <>
          {/* Middle icon */}
          <g transform="translate(100, 150) scale(1.2)">
            <circle
              cx="0"
              cy="0"
              r="30"
              fill="none"
              stroke={color}
              stroke-width="8"
            />
            <line
              x1="-22"
              y1="22"
              x2="22"
              y2="-22"
              stroke={color}
              stroke-width="8"
            />
          </g>
          {/* Top icon */}
          <g transform="translate(25, 35) scale(0.4)">
            <circle
              cx="10"
              cy="-13"
              r="30"
              fill="none"
              stroke="white"
              stroke-width="10"
            />
            <line
              x1="-14"
              y1="8"
              x2="30"
              y2="-30"
              stroke="white"
              stroke-width="10"
            />
          </g>

          {/* Bottom Icon */}
          <g transform="translate(175, 265) scale(0.4) rotate(180)">
            <circle
              cx="10"
              cy="-10"
              r="30"
              fill="none"
              stroke="white"
              stroke-width="10"
            />
            <line
              x1="-11"
              y1="14"
              x2="33"
              y2="-36"
              stroke="white"
              stroke-width="10"
            />
          </g>
        </>
      );
    } else if (powerCard === "reverse") {
      return (
        <>
          <defs>
            <g id="uno-arrow">
              <path
                d="M -10,35 
               C -35,15 -15,-35 15,-35 
               L 15,-55 
               L 60,-15 
               L 15,25 
               L 15,-5 
               C 5,-5 -10,15 -10,35 Z"
                strokeLinejoin="round"
              />
            </g>

            <g id="reverse-icon">
              <g transform="rotate(-45)">
                {/* Shadows */}
                <use
                  href="#uno-arrow"
                  transform="translate(12, -12) translate(-5, 5)"
                  fill="black"
                  stroke="black"
                  strokeWidth="5"
                  strokeLinejoin="round"
                />
                <use
                  href="#uno-arrow"
                  transform="rotate(180) translate(12, -12) translate(-5, 5)"
                  fill="black"
                  stroke="black"
                  strokeWidth="5"
                  strokeLinejoin="round"
                />

                {/* Foreground Arrows - Now uses currentColor for dynamic styling */}
                <use
                  href="#uno-arrow"
                  transform="translate(12, -12)"
                  fill="currentColor"
                  stroke="black"
                  strokeWidth="4"
                  strokeLinejoin="round"
                />
                <use
                  href="#uno-arrow"
                  transform="rotate(180) translate(12, -12)"
                  fill="currentColor"
                  stroke="black"
                  strokeWidth="4"
                  strokeLinejoin="round"
                />
              </g>
            </g>
          </defs>

          {/* Top Left Corner - Set color to white */}
          <g transform="translate(25, 40) scale(0.25)" color="white">
            <use href="#reverse-icon" />
          </g>

          {/* Bottom Right Corner - Set color to white */}
          <g
            transform="translate(175, 260) scale(0.25) rotate(180)"
            color="white"
          >
            <use href="#reverse-icon" />
          </g>

          {/* Center Icon - Set color to the dynamic card color */}
          <g transform="translate(100, 150) scale(0.75)" color={color}>
            <use href="#reverse-icon" />
          </g>
        </>
      );
    }
  };
  return (
    <svg
      width="200"
      height="300"
      viewBox="0 0 200 300"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0"
        y="0"
        width="200"
        height="300"
        rx="15"
        fill="white"
        stroke="#ddd"
        strokeWidth="1"
      />
      <rect
        x="10"
        y="10"
        width="180"
        height="280"
        rx="10"
        fill={powerCard?.includes("wild") ? "black" : color}
      />
      ((powerCard!== "wild" && powerCard !== "wildDraw4") &&(
      <ellipse
        cx="100"
        cy="150"
        rx="70"
        ry="110"
        fill={powerCard?.includes("wild") ? "black" : "white"}
        transform="rotate(-25, 100, 150)"
      />
      ) ){card()}
    </svg>
  );
}

export default DunoCard;
