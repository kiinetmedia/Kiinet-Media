export type SpendOption = { value: string; label: string };

export const spendOptions: SpendOption[] = [
  { value: "lt-25k", label: "Less than ₹25,000 (Testing phase)" },
  { value: "25k-50k", label: "₹25,000 – ₹50,000 (Starter growth)" },
  { value: "50k-1l", label: "₹50,000 – ₹1,00,000 (Scaling)" },
  { value: "1l-2l", label: "₹1,00,000 – ₹2,00,000 (Aggressive growth)" },
  { value: "2l-plus", label: "₹2,00,000+ (Market domination)" },
];
