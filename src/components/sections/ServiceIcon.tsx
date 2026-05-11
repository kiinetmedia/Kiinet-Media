import type { ReactElement } from "react";
import type { ServiceIconKey } from "../../data/services";

const paths: Record<ServiceIconKey, ReactElement> = {
  target: (
    <>
      <circle cx="16" cy="16" r="13" stroke="currentColor" strokeWidth="1.4" fill="none" />
      <circle cx="16" cy="16" r="7" stroke="currentColor" strokeWidth="1.4" fill="none" />
      <circle cx="16" cy="16" r="1.8" fill="currentColor" />
      <path d="M16 3v4M16 25v4M3 16h4M25 16h4" stroke="currentColor" strokeWidth="1.4" />
    </>
  ),
  trend: (
    <>
      <path d="M4 26L12 16l5 5 11-14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M22 7h6v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </>
  ),
  screen: (
    <>
      <rect x="4" y="6" width="24" height="16" rx="2" stroke="currentColor" strokeWidth="1.4" fill="none" />
      <path d="M4 12h24" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="8" cy="9" r="0.8" fill="currentColor" />
      <circle cx="11" cy="9" r="0.8" fill="currentColor" />
      <path d="M12 28h8" stroke="currentColor" strokeWidth="1.4" />
      <path d="M16 22v6" stroke="currentColor" strokeWidth="1.4" />
    </>
  ),
  chart: (
    <>
      <path d="M6 20l6-8 5 6 9-12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <rect x="4" y="24" width="24" height="4" rx="1" stroke="currentColor" strokeWidth="1.4" fill="none" />
      <circle cx="12" cy="12" r="1.6" fill="currentColor" />
      <circle cx="17" cy="18" r="1.6" fill="currentColor" />
    </>
  ),
  page: (
    <>
      <rect x="5" y="4" width="22" height="24" rx="2" stroke="currentColor" strokeWidth="1.4" fill="none" />
      <path d="M5 10h22" stroke="currentColor" strokeWidth="1.4" />
      <rect x="9" y="14" width="14" height="3" rx="0.6" stroke="currentColor" strokeWidth="1.3" fill="none" />
      <rect x="9" y="19" width="10" height="3" rx="0.6" stroke="currentColor" strokeWidth="1.3" fill="none" />
      <circle cx="22" cy="20.5" r="2.4" stroke="currentColor" strokeWidth="1.3" fill="none" />
    </>
  ),
  spark: (
    <>
      <path
        d="M16 4l2.4 7.2L26 14l-7.6 2.8L16 24l-2.4-7.2L6 14l7.6-2.8L16 4z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
        fill="none"
      />
      <path d="M24 4.5v3M22.5 6h3M7 24.5v2.5M6 25.5h2.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </>
  ),
  search: (
    <>
      <circle cx="14" cy="14" r="8" stroke="currentColor" strokeWidth="1.4" fill="none" />
      <path d="M20 20l7 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M10 14h8M14 10v8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </>
  ),
  mail: (
    <>
      <rect x="4" y="7" width="24" height="18" rx="2" stroke="currentColor" strokeWidth="1.4" fill="none" />
      <path d="M4 9l12 9 12-9" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" fill="none" />
      <path d="M4 24l8-7M28 24l-8-7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </>
  ),
};

export default function ServiceIcon({ icon }: { icon: ServiceIconKey }) {
  return <svg viewBox="0 0 32 32">{paths[icon]}</svg>;
}
