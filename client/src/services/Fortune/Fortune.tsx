import React, { useRef, useState } from "react";
import "./Fortune.scss";

const sectors = [
  { value: 100, color: "#f44336" },
  { value: 1, color: "#e91e63" },
  { value: 50, color: "#9c27b0" },
  { value: 0, color: "#673ab7" },
  { value: 0, color: "#3f51b5" },
  { value: 0, color: "#2196f3" },
  { value: 80, color: "#03a9f4" },
  { value: 200, color: "#00bcd4" },
  { value: 500, color: "#009688" },
  { value: 5000, color: "#4caf50" },
];

const Fortune: React.FC = () => {
  const wheelRef = useRef<SVGSVGElement | null>(null);
  const [selectedValue, setSelectedValue] = useState<number | null>(null);

  const radius = 150;
  const center = 160;
  const sectorCount = sectors.length;
  const sectorAngle = 360 / sectorCount;

  const spinWheel = () => {
    const randomIndex = Math.floor(Math.random() * sectorCount);
    const rotateDegree = 3600 + randomIndex * sectorAngle + sectorAngle / 2;


    if (wheelRef.current) {
      wheelRef.current.style.transition = "transform 4s cubic-bezier(0.25, 1, 0.5, 1)";
      wheelRef.current.style.transform = `rotate(${rotateDegree}deg)`;
    }


    setTimeout(() => {
      const value = sectors[randomIndex].value;
      setSelectedValue(value);
    }, 4000);
  };


  const describeArc = (
    x: number,
    y: number,
    radius: number,
    startAngle: number,
    endAngle: number
  ) => {
    const rad = Math.PI / 180;

    const x1 = x + radius * Math.cos(-startAngle * rad);
    const y1 = y + radius * Math.sin(-startAngle * rad);

    const x2 = x + radius * Math.cos(-endAngle * rad);
    const y2 = y + radius * Math.sin(-endAngle * rad);

    const largeArcFlag = endAngle - startAngle <= 180 ? 0 : 1;

    return `M ${x} ${y} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 0 ${x2} ${y2} Z`;
  };

  return (
    <div className="container-fortune">
      <div className="fortune">
        <div className="spinBtn" onClick={spinWheel}>
          Spin
        </div>

        <svg ref={wheelRef} width="320" height="320" className="wheel">
          {sectors.map((sector, i) => {
            const startAngle = i * sectorAngle;

            const endAngle = (i + 1) * sectorAngle;
            const path = describeArc(center, center, radius, startAngle, endAngle);

            const textAngle = startAngle + sectorAngle / 2;
            const textX = center + (radius / 2) * Math.cos((-textAngle * Math.PI) / 180);
            const textY = center + (radius / 2) * Math.sin((-textAngle * Math.PI) / 180);

            return (
              <g key={i}>
                <path d={path} fill={sector.color} stroke="#fff" strokeWidth="1" />
                <text
                  x={textX}
                  y={textY}
                  fill="#fff"
                  fontSize="16"
                  fontWeight="bold"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  transform={`rotate(${textAngle} ${textX} ${textY})`}
                >
                  {sector.value}
                </text>
              </g>
            );
          })}
        </svg>

        {selectedValue !== null && <h1>{selectedValue}</h1>}
      </div>
    </div>
  );
};

export default Fortune;
