export default function Marquee() {
  const items = [
    "D2C",
    "ECOMMERCE",
    "SAAS",
    "B2B",
    "HEALTHCARE",
    "LOCAL SERVICES",
    "HOME SERVICES",
    "EDUCATION",
    "FINTECH",
    "MARKETPLACES",
  ];
  return (
    <section className="marquee" aria-hidden="true">
      <div className="marquee-inner">
        <div className="marquee-track">
          {[...items, ...items].map((it, i) => (
            <span key={i}>
              {it}
              <span className="sep"> ◆ </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
