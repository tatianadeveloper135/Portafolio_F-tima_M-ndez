export type ProjectCategory =
  | "IA & Machine Learning"
  | "Algoritmos & Python"
  | "Robótica & Web";

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  weekOrTag: string;
  category: ProjectCategory;
  shortDescription: string;
  problem: string;
  objective: string;
  technologies: string[];
  solutionExplanation: string;
  results: string[];
  metrics?: ProjectMetric[];
  codeSnippet?: string;
  imagePath: string;
  repoOrColabUrl: string;
}

export interface ExperienceItem {
  role: string;
  organization: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface EducationItem {
  institution: string;
  title: string;
  period: string;
  details: string;
}

export interface MediaStoryItem {
  id: string;
  outlet: string;
  format: "Video" | "Reportaje" | "Entrevista";
  title: string;
  summary: string;
  url: string;
}