import { useEffect, useRef, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { openCalendly } from "../../lib/calendly";
import { services } from "../../data/services";

const links = [
  { to: "/services", label: "Services", hasDropdown: true },
  { to: "/process", label: "Process" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const closeTimer = useRef<number | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close any open menu on route change
  useEffect(() => {
    setServicesOpen(false);
    setMobileServicesOpen(false);
    setOpen(false);
  }, [location.pathname, location.hash]);

  const openServicesMenu = () => {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setServicesOpen(true);
  };
  // Small grace period so the cursor can travel from link to menu without closing it
  const closeServicesMenu = () => {
    closeTimer.current = window.setTimeout(() => setServicesOpen(false), 120);
  };

  return (
    <header className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-inner">
        <Link to="/" className="nav-logo" aria-label="KiiNet Media — Home">
          <img className="nav-logo-img" src="/logo.png" alt="KiiNet Media" />
        </Link>
        <nav className="nav-links" aria-label="Primary">
          {links.map((l) =>
            l.hasDropdown ? (
              <div
                key={l.to}
                className={`nav-dropdown ${servicesOpen ? "open" : ""}`}
                onMouseEnter={openServicesMenu}
                onMouseLeave={closeServicesMenu}
                onFocus={openServicesMenu}
                onBlur={closeServicesMenu}
              >
                <NavLink
                  to={l.to}
                  className={({ isActive }) =>
                    `nav-dropdown-trigger ${isActive ? "active" : ""}`
                  }
                  aria-haspopup="menu"
                  aria-expanded={servicesOpen}
                >
                  {l.label} <span className="nav-dropdown-chev" aria-hidden="true">▾</span>
                </NavLink>
                {servicesOpen && (
                  <ul className="nav-dropdown-menu" role="menu">
                    {services.map((s) => (
                      <li key={s.slug} role="none">
                        <Link
                          to={`/services#${s.slug}`}
                          className="nav-dropdown-item"
                          role="menuitem"
                        >
                          <span className="nav-dropdown-num">{s.number}</span>
                          <span className="nav-dropdown-title">{s.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {l.label}
              </NavLink>
            )
          )}
        </nav>
        <button type="button" className="btn btn-ghost nav-cta" onClick={openCalendly}>
          <span>Schedule a Call</span>
          <span className="btn-arrow">↗</span>
        </button>
        <button
          className={`nav-burger ${open ? "open" : ""}`}
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span></span>
          <span></span>
        </button>
      </div>

      <div className={`nav-mobile ${open ? "open" : ""}`}>
        {links.map((l) =>
          l.hasDropdown ? (
            <div key={l.to} className="nav-mobile-group">
              <div className="nav-mobile-row">
                <NavLink to={l.to} onClick={() => setOpen(false)}>
                  {l.label}
                </NavLink>
                <button
                  type="button"
                  className={`nav-mobile-toggle ${mobileServicesOpen ? "open" : ""}`}
                  aria-label={mobileServicesOpen ? "Hide services" : "Show services"}
                  aria-expanded={mobileServicesOpen}
                  onClick={() => setMobileServicesOpen((v) => !v)}
                >
                  ▾
                </button>
              </div>
              {mobileServicesOpen && (
                <ul className="nav-mobile-sublist">
                  {services.map((s) => (
                    <li key={s.slug}>
                      <Link to={`/services#${s.slug}`} onClick={() => setOpen(false)}>
                        {s.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ) : (
            <NavLink key={l.to} to={l.to} onClick={() => setOpen(false)}>
              {l.label}
            </NavLink>
          )
        )}
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            setOpen(false);
            openCalendly();
          }}
        >
          Schedule a Call ↗
        </button>
      </div>
    </header>
  );
}
