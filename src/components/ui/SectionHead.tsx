import type { ReactNode } from "react";
import Reveal from "./Reveal";
import Eyebrow from "./Eyebrow";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  sub?: ReactNode;
  align?: "left" | "center";
};

export default function SectionHead({ eyebrow, title, sub, align = "left" }: Props) {
  return (
    <div className="section-head" style={align === "center" ? { textAlign: "center", marginInline: "auto" } : undefined}>
      {eyebrow && (
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
      )}
      <Reveal delay={0.08}>
        <h2 className="section-title">{title}</h2>
      </Reveal>
      {sub && (
        <Reveal delay={0.16}>
          <p className="section-sub">{sub}</p>
        </Reveal>
      )}
    </div>
  );
}
