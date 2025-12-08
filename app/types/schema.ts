
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
    frontend: string[];
    backendAndAPIs: string[];
    cloudAndDevops: string[];
    databases: string[];
    testingAndAnalytics: string[];
    other: string[];
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
    institution: string;
    graduation_year: number;
    focus: string;
  };
}
