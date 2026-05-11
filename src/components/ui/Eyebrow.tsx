import type { ReactNode } from "react";

export default function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <div className={`eyebrow ${light ? "light" : ""}`}>
      <span className="dot"></span>
      <span>{children}</span>
    </div>
  );
}
