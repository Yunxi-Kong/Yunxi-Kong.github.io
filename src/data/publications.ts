export type Publication = {
  title: string;
  authors: string;
  status: string;
  year: string;
  type: "Accepted" | "Under Review" | "Selected Research";
  links?: { label: string; href: string }[];
};

export const publications: Publication[] = [
  {
    title: "The Learning Analytics Value Chain",
    authors: "Charles Lang, Yunxi Kong, Geraldine Gray, Jie Gao, and collaborators",
    status: "Accepted, International Conference on Learning Analytics & Knowledge (LAK 2026)",
    year: "2026",
    type: "Accepted",
    links: [
      {
        label: "LAK 2026",
        href: "https://www.solaresearch.org/events/lak/lak26/"
      }
    ]
  },
  {
    title:
      "Causal Effects of Adaptive Recommendations on Student Learning Outcomes: Evidence from a Large-Scale Intelligent Tutoring System",
    authors: "Yunxi Kong",
    status: "Manuscript under review, International Conference of the Learning Sciences (ICLS 2026)",
    year: "2026",
    type: "Under Review"
  },
  {
    title:
      "Uncovering Structural Patterns of Educational Opportunity: A Computational Analysis of Regional Learning Infrastructures in China",
    authors: "Yunxi Kong",
    status: "Manuscript under review, International Conference of the Learning Sciences (ICLS 2026)",
    year: "2026",
    type: "Under Review"
  },
  {
    title: "Equity in Gifted Education and ELL Identification",
    authors: "Yunxi Kong",
    status: "Policy-oriented research proposal developed in Economics of Education",
    year: "2025",
    type: "Selected Research"
  },
  {
    title: "Teaching Strategies in Online Tutoring Dialogue",
    authors: "Yunxi Kong",
    status: "Exploratory learning analytics project using online tutoring dialogue data",
    year: "2025",
    type: "Selected Research",
    links: [
      {
        label: "LearnLab",
        href: "https://learnlab.org/"
      }
    ]
  }
];
