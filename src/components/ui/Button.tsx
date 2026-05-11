import type { ReactNode } from "react";
import { Link } from "react-router-dom";

type Variant = "primary" | "ghost";

type Props = {
  variant?: Variant;
  to?: string;
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  arrow?: string;
  type?: "button" | "submit";
  className?: string;
};

export default function Button({
  variant = "primary",
  to,
  href,
  onClick,
  children,
  arrow = "→",
  type = "button",
  className = "",
}: Props) {
  const cls = `btn btn-${variant} ${className}`.trim();
  const inner = (
    <>
      <span>{children}</span>
      <span className="btn-arrow">{arrow}</span>
    </>
  );

  if (to) {
    return (
      <Link to={to} className={cls} onClick={onClick}>
        {inner}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={cls} onClick={onClick}>
        {inner}
      </a>
    );
  }
  return (
    <button type={type} className={cls} onClick={onClick}>
      {inner}
    </button>
  );
}
