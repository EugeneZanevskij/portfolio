export interface Skill {
  title: string;
  image: JSX.Element;
}

export interface HistoryItem {
  role: string;
  organisation: string;
  startDate: string;
  endDate: string;
  description: string;
  image: string;
}

export interface Project {
  title: string;
  imageSrc: string;
  description: string;
  skills: Array<string>;
  demo?: string;
  source: string;
}