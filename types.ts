
export interface CaseStudy {
  title: string;
  subtitle: string;
  role: string;
  challenge: string;
  process: string;
  outcome: string;
  acquired?: boolean;
}

export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export interface BlogPost {
  title: string;
  description: string;
}
