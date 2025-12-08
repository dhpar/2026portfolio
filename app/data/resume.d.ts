export interface Resume {
  name: string;
  title: string;
  location: string;
  openTo: string;
  contact: {
    email: string;
    linkedin: string;
  };
  summary: string;
  skills: {
    title: string;
    tech: string[];
  }[];
  experience: {
    company: string;
    role: string;
    start: string;
    end: string;
    highlights: string[];
  }[];
  education: {
    degree: string;
    link: string;
    institution: string;
    graduation_year: number;
    focus: string;
  };
}
