import type { ReactNode } from "react";

export type ServiceIconKey =
  | "target"
  | "trend"
  | "screen"
  | "chart"
  | "page"
  | "spark"
  | "search"
  | "mail";

export type Service = {
  slug: string;
  number: string;
  icon: ServiceIconKey;
  title: string;
  short: string;
  tags: string[];
  featured?: boolean;
  wide?: boolean;
  long?: ReactNode;
  lead?: string;
  body?: string;
  deliverables?: string[];
  capabilities?: string[];
};

export const services: Service[] = [
  {
    slug: "paid-media",
    number: "/01",
    icon: "target",
    title: "Paid Media",
    short:
      "Search, social, programmatic, and display. Full-funnel architecture engineered against revenue and customer LTV — never against vanity click counts.",
    tags: ["SEARCH", "SOCIAL", "PROGRAMMATIC", "DISPLAY"],
    lead:
      "Full-funnel paid architecture across search, social, programmatic, and display. Engineered against revenue and customer lifetime value — never against vanity click counts.",
    body:
      "Most accounts we audit are forfeiting 30 to 40 percent of spend to broad-match drift, missing negative-keyword frameworks, and tracking gaps that obscure which campaigns actually drive revenue. We rebuild from the ground up — keyword taxonomy, bid strategy, conversion architecture, creative — and govern the account through a daily optimisation loop tied to your contribution margin. That discipline is what produces a 7% CTR on active accounts.",
    deliverables: [
      "Account audit + 90-day rebuild plan",
      "Keyword taxonomy + negative-keyword framework",
      "Bid strategy + budget allocation model",
      "Server-side conversion tracking setup",
      "Weekly revenue + CPA reporting",
    ],
    capabilities: ["SEARCH", "SOCIAL", "PROGRAMMATIC", "DISPLAY", "MEASUREMENT"],
  },
  {
    slug: "seo",
    number: "/02",
    icon: "search",
    title: "SEO",
    short:
      "Technical SEO, on-page, content strategy, and link acquisition that compounds. The kind of organic engine that continues to deliver long after paid budgets contract.",
    tags: ["TECHNICAL", "CONTENT", "LINKS"],
    lead:
      "Technical SEO, on-page, content strategy, and link acquisition that compounds. The kind of organic engine that continues to deliver long after paid budgets contract.",
    body:
      "Paid traffic is a faucet — close it, and the flow stops. SEO is a well: slower to dig, durable in return. We begin with a technical audit (crawl health, schema, Core Web Vitals, internal linking), then layer in keyword strategy, content cluster planning, and a link-acquisition framework that holds up to scrutiny. Quarterly reviews tied to organic revenue, not rankings alone.",
    deliverables: [
      "Technical SEO audit + remediation roadmap",
      "Keyword strategy + topic cluster plan",
      "On-page optimisation across priority pages",
      "Content production calendar",
      "Quarterly organic revenue reporting",
    ],
    capabilities: ["AUDIT", "KEYWORDS", "CONTENT", "LINKS", "REPORTING"],
  },
  {
    slug: "social",
    number: "/03",
    icon: "trend",
    title: "Social Media Management",
    short:
      "Organic strategy, content calendars, community management, and creative production. Engineered to compound with paid — because that is how social earns its place in a P&L.",
    tags: ["STRATEGY", "CONTENT", "COMMUNITY"],
    lead:
      "Organic strategy, content calendars, community management, and creative production. Engineered to compound with paid — because that is how social earns its place in a P&L.",
    body:
      "Most brands run social as a vanity exercise — daily posts, hopeful engagement, ignored numbers. We treat it as a funnel. Every post mapped to an audience signal; every signal feeding back into paid targeting. We build the strategy, produce the assets, ship the calendar, and respond in the comments — so the brand voice does not falter the week your in-house lead departs.",
    deliverables: [
      "Channel strategy + posting cadence",
      "Monthly content calendar",
      "Creative production (static + video)",
      "Community management + DM response",
      "Monthly performance review",
    ],
    capabilities: ["STRATEGY", "CONTENT", "COMMUNITY", "CREATIVE", "REPORTING"],
  },
  {
    slug: "email",
    number: "/04",
    icon: "mail",
    title: "Email & Lifecycle Marketing",
    short:
      "Welcome flows, abandoned cart, post-purchase, win-back. The highest-margin channel in your stack — and the one most brands underbuild until it's a quarterly fire drill.",
    tags: ["AUTOMATION", "LIFECYCLE", "SEGMENTATION"],
    lead:
      "Welcome flows, abandoned cart, post-purchase, win-back. The highest-margin channel in your stack — and the one most brands underbuild until it becomes a quarterly fire drill.",
    body:
      "Email is the most efficient revenue lever in digital and the easiest to half-build. We architect the lifecycle (every trigger, every flow, every segment), write the copy, design the templates, and tune deliverability. We then run weekly campaigns against a tested calendar. Most engagements see 20 to 35 percent of total revenue routed through email within 90 days.",
    deliverables: [
      "Lifecycle audit + flow architecture",
      "Core flows built (welcome, cart, browse, post-purchase, win-back)",
      "Weekly campaign calendar",
      "Segmentation + suppression strategy",
      "Deliverability monitoring",
    ],
    capabilities: ["AUTOMATION", "LIFECYCLE", "SEGMENTATION", "DELIVERABILITY", "REPORTING"],
  },
  {
    slug: "tracking",
    number: "/05",
    icon: "chart",
    title: "Conversion Tracking & Analytics",
    short:
      "Server-side tagging, enhanced conversions, attribution dashboards — calibrated for the iOS 17+ landscape, not 2019 assumptions. Reliable measurement is the foundation under every other lever.",
    tags: ["ATTRIBUTION", "TAGGING", "DASHBOARDS"],
    lead:
      "Server-side tagging, enhanced conversions, and attribution dashboards — calibrated for the iOS 17+ landscape, not 2019 assumptions. Reliable measurement is the foundation under every other lever.",
    body:
      "Most accounts arrive with one of three problems: tracking that broke after iOS updates and was never repaired, server-side architecture that was never deployed, or an analytics property reporting half the conversions paid platforms see. We repair the foundation first. Optimising on flawed data is expensive guesswork.",
    deliverables: [
      "Tracking audit + gap analysis",
      "Server-side tagging container",
      "Enhanced conversions + offline conversion imports",
      "Cross-domain + cross-device tracking",
      "Custom dashboard tied to revenue",
    ],
    capabilities: ["ATTRIBUTION", "TAGGING", "DASHBOARDS", "MEASUREMENT", "REPORTING"],
  },
  {
    slug: "cro",
    number: "/06",
    icon: "page",
    title: "Landing Pages & CRO",
    short:
      "Message-matched landing pages, above-the-fold rewrites, and disciplined experimentation that compounds the value of every paid click.",
    tags: ["CRO", "COPY", "UX"],
    lead:
      "Message-matched landing pages, above-the-fold rewrites, and disciplined experimentation that compounds the value of every paid click. The most cost-effective CTR optimisation is, often, a better page.",
    body:
      "A 7% CTR earns nothing if the destination requires a fourteen-field form. We rewrite, redesign, and test landing pages until the primary action is the path of least friction. Heuristic audit first; hypothesis-driven A/B testing second; learnings repository, always.",
    deliverables: [
      "Heuristic audit + hypothesis bank",
      "Copy & design directions",
      "Monthly A/B test plan",
      "Learnings repository (yours, in perpetuity)",
      "Conversion rate reporting",
    ],
    capabilities: ["AUDIT", "COPY", "DESIGN", "EXPERIMENTS", "REPORTING"],
  },
  {
    slug: "web-dev",
    number: "/07",
    icon: "screen",
    title: "Website Development",
    short:
      "Conversion-focused websites built on modern stacks. Core Web Vitals tuned, mobile-first, schema-marked — the kind of site search engines reward and visitors trust.",
    tags: ["BUILD", "OPTIMISE", "LAUNCH"],
    lead:
      "Conversion-focused websites built on modern stacks. Core Web Vitals tuned, mobile-first, schema-marked — destinations that earn search visibility and visitor trust.",
    body:
      "A four-second mobile load is paid spend on fire — and search engines notice. We build new sites or rebuild existing ones for brands that require speed, schema, and a checkout or booking flow that converts. Because the same team runs your media, handoff bugs do not survive.",
    deliverables: [
      "Full website build (or rebuild) on a modern stack",
      "Core Web Vitals tuned to green",
      "Schema markup for your category",
      "Conversion flow integration (checkout, booking, lead gen)",
      "Mobile-first responsive design",
    ],
    capabilities: ["BUILD", "OPTIMISE", "LAUNCH", "SCHEMA", "MOBILE"],
  },
  {
    slug: "brand",
    number: "/08",
    icon: "spark",
    title: "Brand Marketing",
    short:
      "Positioning, naming, and identity for brands ready to look the part. Performance-aware brand work — every choice connected to a behaviour we intend to drive.",
    tags: ["POSITIONING", "IDENTITY", "MESSAGING"],
    lead:
      "Positioning, naming, and identity for brands ready to look the part — without losing the warmth that earned the customer's first consideration.",
    body:
      "Performance ads put you in the consideration set. Brand decides whether you are remembered next quarter. We build positioning frameworks, messaging architecture, and identity systems — every choice connected to a behaviour we intend to drive in the funnel.",
    deliverables: [
      "Brand positioning + messaging framework",
      "Visual identity system (logo, palette, typography)",
      "Voice & tone guidelines",
      "Brand asset library",
      "Launch playbook",
    ],
    capabilities: ["POSITIONING", "IDENTITY", "MESSAGING", "GUIDELINES", "ASSETS"],
  },
];
