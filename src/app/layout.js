import "./globals.css";

export const metadata = {
  title: "SkillSync — Maharashtra Labour Market Intelligence & NSQF Curriculum Alignment Platform",
  description:
    "AI-powered public digital infrastructure for aligning vocational training programs with industry requirements across Maharashtra industrial corridors. SIH 2026 — Problem Statement SIH26134.",
  keywords: [
    "SkillSync",
    "SIH 2026",
    "Maharashtra",
    "NSQF",
    "ITI",
    "Vocational Training",
    "Curriculum Alignment",
    "NLP",
    "Government of Maharashtra",
    "DVET",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-canvas antialiased">
        {children}
      </body>
    </html>
  );
}
