export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  photo: string;
  socials?: { label: string; href: string }[];
};

export const team: TeamMember[] = [
  {
    name: "Jainam Mehta",
    role: "Founder · Creative & Brand Strategy",
    bio: "MBA, Sales & Marketing, SCMHRD Pune. Has 2M+ Spotify streams, 11.5K Instagram followers, and a theory that the best ad campaigns are just hit songs without the melody — same psychology, same hook, same obsession with making people feel something. Builds campaigns the same way he builds tracks: ruthlessly.",
    photo: "/founder-1.jpg",
    socials: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/jainam-mehta-1b5179146?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
      },
    ],
  },
  {
    name: "Kathan Gosar",
    role: "Founder · Growth, Performance & Strategy",
    bio: "MBA, Sales & Marketing, SCMHRD. Builds marketing strategies that feels less like advertising and more like a conversation. Combines data, creativity, and a bit of obsession to turn attention into action. Believes the best campaigns don't just get noticed — they get remembered.",
    photo: "/founder-2.jpg",
    socials: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/kathan-gosar-6abb59386" },
    ],
  },
];

export type Milestone = { year: string; label: string };

export const milestones: Milestone[] = [
  { year: "Q1 2026", label: "KiiNet Media founded by two founders. One rule: profit before proxy metrics." },
  { year: "Q1 2026", label: "Five-phase engagement model documented and deployed." },
  { year: "Q2 2026", label: "First active engagements onboarded across multiple verticals." },
  { year: "Q2 2026", label: "Average CTR on active accounts crossed 7% — roughly twice the cross-industry benchmark." },
  { year: "Today", label: "Still two founders. Still a deliberately small roster. Still measuring margin over vanity." },
];
