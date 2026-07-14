import type { ProgramType } from "./programs";

export interface Opportunity {
  id: number;
  slug: string;
  title: string;
  organization: string;
  programType: ProgramType;
  status: string;
  expaLink: string;
}
