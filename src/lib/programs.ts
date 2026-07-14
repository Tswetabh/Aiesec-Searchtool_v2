export type ProgramType = "Volunteer" | "Talent" | "Teacher" | "Other";

export const PROGRAM_META: Record<
  ProgramType,
  { label: string; accent: string; tint: string; blurb: string }
> = {
  Volunteer: {
    label: "Global Volunteer",
    accent: "var(--volunteer)",
    tint: "var(--volunteer-tint)",
    blurb: "Short-term impact projects with schools and communities.",
  },
  Talent: {
    label: "Global Talent",
    accent: "var(--talent)",
    tint: "var(--talent-tint)",
    blurb: "Paid professional internships with partner companies.",
  },
  Teacher: {
    label: "Global Teacher",
    accent: "var(--teacher)",
    tint: "var(--teacher-tint)",
    blurb: "Teaching placements in schools abroad and in India.",
  },
  Other: {
    label: "Other",
    accent: "var(--ink-soft)",
    tint: "var(--line)",
    blurb: "Opportunity listing.",
  },
};

export const PROGRAM_TYPES: ProgramType[] = ["Volunteer", "Talent", "Teacher"];
