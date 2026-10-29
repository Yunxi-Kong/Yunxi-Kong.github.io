export const updated = "2026-10-29";
export const formatDate = (date: string) => new Intl.DateTimeFormat("en-US", {
  month: "long", day: "numeric", year: "numeric", timeZone: "UTC"
}).format(new Date(`${date}T12:00:00Z`));

export const profile = {
  name: "Yunxi Kong",
  role: "Research Assistant, ACMLab",
  affiliation: "University of North Carolina at Chapel Hill",
  lab: "https://www.acmlab.org/team",
  location: "North Carolina, USA",
  email: "yk290@duke.edu",
  github: "https://github.com/Yunxi-Kong",
  linkedin: "https://www.linkedin.com/in/yunxi-kong-737427251/",
  edtech: "https://ingeniusprime.com/",
  cv: "/cv/Yunxi_Kong_CV_2026-03-20.pdf",
  portrait: "/assets/yunxi-kong-headshot.jpg"
};

export const researchInterests = ["Societal computing", "Computational social science", "Human-AI interaction", "Multi-agent systems"];

export const methodGroups = [
  { title: "Build", items: ["Interactive research systems", "Agent workflows", "Scientific visualization", "React / TypeScript"] },
  { title: "Measure", items: ["Behavioral data analysis", "Causal inference", "NLP", "Model evaluation"] },
  { title: "Inspect", items: ["Execution provenance", "Human-in-the-loop review", "Reproducible analysis", "Interface evaluation"] }
];

export const news = [
  { date: "2026-10", text: "Continuing development of the ASNR Interactive Brain Atlas with clinician feedback, alongside 3D and immersive prototypes.", href: "/projects/asnr-brain-atlas/" },
  { date: "2026-09", text: "Completed a Motiverse manuscript and system-archive analysis, exploring conversation, persistent consequences, and counterfactual futures.", href: "/projects/motiverse/" },
  { date: "2026-07", text: "Our CyberNeuro preprint is available on arXiv.", href: "https://arxiv.org/abs/2607.28841" },
  { date: "2026-05", text: "Completed my M.S. in Economics and Computation at Duke University.", href: "/cv/" },
  { date: "2026-04", text: "The Learning Analytics Value Chain appeared in the LAK 2026 proceedings.", href: "https://doi.org/10.1145/3785022.3785058" }
];

export const education = [
  { logo: "/assets/schools/duke-university.png", logoAlt: "Duke University", institution: "Duke University", place: "Durham, NC", degree: "M.S. in Economics and Computation", period: "2024-2026", note: "Graduate training in computation, economics, and empirical research." },
  { logo: "/assets/schools/syracuse-university.svg", logoAlt: "Syracuse University", institution: "Syracuse University", place: "Syracuse, NY", degree: "B.S. in Economics; B.A. in Mathematics", period: "2022-2024", note: "Graduated cum laude; economics honors thesis on China's K-12 Double Reduction Policy." },
  { logo: "/assets/schools/carnegie-mellon-university.jpg", logoAlt: "Carnegie Mellon University", institution: "Carnegie Mellon University", place: "Pittsburgh, PA", degree: "LearnLab Summer Program", period: "2025", note: "Additional training in learning science and educational data research." }
];
