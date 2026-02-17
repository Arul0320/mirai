
export interface NavItem {
  label: string;
  path: string;
  children?: NavItem[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  benefits: string[];
  approach: string;
  outcome: string;
}

export interface Industry {
  id: string;
  name: string;
  icon: string;
  description: string;
  details: string;
}

export interface CaseStudy {
  id: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  image: string;
}

export interface JobListing {
  id: string;
  title: string;
  location: string;
  type: string;
  category: string;
}

export interface Platform {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  features: string[];
}
