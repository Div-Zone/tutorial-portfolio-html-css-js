import React, { useEffect, useRef, useState } from "react";
import "./CodePenLite.css";

interface CodePenLiteProps {
  slugHash?: string;
  user?: string;
  title?: string;
  height?: number;
}

export default function CodePenLite({
  slugHash = "LEVPVrE",
  user = "gabrielcodepen",
  title = "Code snnipet",
  height = 400,
}: CodePenLiteProps) {
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="code-pen-lite__wrapp"
      style={{ minHeight: `${height}px` }}
    >
      {visible && (
        <iframe
          height={height}
          style={{ width: "100%", border: 0 }}
          title={title}
          src={`https://codepen.io/${user}/embed/${slugHash}?default-tab=result`}
          loading="lazy"
          allowTransparency={true}
          allowFullScreen={true}
        ></iframe>
      )}
    </div>
  );
}
