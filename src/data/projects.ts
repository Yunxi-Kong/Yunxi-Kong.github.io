import { recentProjects } from "./recent-projects";

export type Project = {
  slug: string;
  title: string;
  year: string;
  category: string;
  role?: string;
  featured?: boolean;
  thumbnail?: string;
  caption?: string;
  status?: string;
  question?: string;
  limitations?: string;
  decisions?: { title: string; text: string }[];
  summary: string;
  context: string;
  contributions: string[];
  methods: string[];
  outcomes: string[];
  links?: { label: string; href: string }[];
};

export const projects: Project[] = [
  ...recentProjects,
  {
    slug: "histy-ai-history-annotation",
    title: "Histy: AI History Annotation System",
    year: "2025-Present",
    status: "Active development",
    category: "Human-centered AI / Learning Systems",
    featured: false,
    thumbnail: "/assets/project-thumbnails/histy.jpg",
    caption: "An earlier Histy reading and annotation interface. The Vercel link opens the actively updated development preview.",
    summary:
      "An interactive history reading and annotation environment designed to make student thinking more visible during reading.",
    context:
      "Histy extends an earlier AI history learning prototype into a classroom-facing environment for reading, highlighting, line-anchored annotation, AI-supported questioning, and peer discussion.",
    contributions: [
      "Designed a web-based annotation workflow around evidence use, reflective reading, and interpretation of historical texts.",
      "Combined standard reading, immersive reading, line-anchored annotation, dialogue space, and teacher-facing inspection views.",
      "Positioned the system as both a learning tool and a potential research environment for studying student interaction and learning processes."
    ],
    methods: [
      "React/TypeScript prototyping",
      "AI-supported discussion",
      "Annotation interface design",
      "Learning sciences"
    ],
    outcomes: ["Actively updated Vercel development preview", "Earlier publicly accessible demo"],
    limitations: "The current Vercel development preview requires Vercel sign-in. An earlier public demo remains available below. The prototype is a research environment; learning outcomes have not been established through a controlled study.",
    links: [
      {
        label: "Development preview (Vercel sign-in)",
        href: "https://ai-history-project-annotation-pj31q5h12-yks-projects-6bdf723c.vercel.app/"
      },
      {
        label: "Earlier public demo",
        href: "https://chronicle-history-annotation-940148600018.us-west1.run.app"
      }
    ]
  },
  {
    slug: "ai-history-storyboard-agent",
    title: "AI History Storyboard Agent",
    year: "2025",
    category: "LLM Agents / Multimodal Learning",
    featured: false,
    thumbnail: "/assets/project-thumbnails/storyboard-agent.jpg",
    summary:
      "A multi-agent system that transforms a history passage into a comic-style sequence of scenes.",
    context:
      "The project explores how long-form historical text can be converted into structured visual experiences for learning.",
    contributions: [
      "Designed an agent workflow including narrative parsing, shot planning, prompt generation, image generation, and validation.",
      "Produced structured outputs such as panel plans, prompts, captions, images, and validation reports.",
      "Connected multimodal generation with learning goals such as engagement, interpretation, and historical perspective-taking."
    ],
    methods: [
      "LLM prompting",
      "Agent workflows",
      "Image generation",
      "Narrative segmentation"
    ],
    outcomes: ["Working GitHub project", "Reusable workflow for future project pages"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Yunxi-Kong/AI-History-Storyboard-Agent"
      }
    ]
  },
  {
    slug: "learning-analytics-value-chain",
    title: "Learning Analytics Value-Chain Classification",
    year: "2025-2026",
    category: "Learning Analytics / NLP",
    role: "Research Assistant to Prof. Charles Lang",
    featured: false,
    thumbnail: "/assets/project-thumbnails/value-chain.jpg",
    summary:
      "A computational classification project mapping 3,720 learning analytics publications across stages of the learning analytics value chain.",
    context:
      "This collaboration studies where learning analytics research concentrates across concept development, prototyping, evaluation, dissemination, and impact.",
    contributions: [
      "Helped curate and preprocess a corpus of 3,720 learning analytics publications from SoLAR and non-SoLAR sources.",
      "Implemented prompt-based and model-based classification workflows, including SciBERT baselines and Gemini rubric-based prompting.",
      "Contributed to iterative human-in-the-loop validation and diagnostic analysis of systematic classification errors."
    ],
    methods: [
      "NLP",
      "LLM prompting",
      "Corpus curation",
      "Human-in-the-loop evaluation"
    ],
    outcomes: [
      "Published in the LAK 2026 proceedings, pp. 793-801",
      "Open-access paper with operational definitions and a research-landscape analysis"
    ],
    links: [
      {
        label: "Paper",
        href: "https://doi.org/10.1145/3785022.3785058"
      }
    ]
  },
  {
    slug: "multimodal-history-learning-prototype",
    title: "AI-Enhanced Multimodal History Learning Prototype",
    year: "2025",
    category: "AI in Education",
    thumbnail: "/assets/project-thumbnails/multimodal-history.jpg",
    summary:
      "A prototype history learning platform combining cross-national textbook comparison, AI-generated visuals, and adaptive quiz generation.",
    context:
      "The project moved from educational analysis into the design of an AI-supported learning experience around history, perspective, and interpretation.",
    contributions: [
      "Designed a dual-pane reading interface comparing textbook excerpts from different national perspectives.",
      "Integrated retrieval-augmented generation, vetted curriculum content, AI-generated visuals, and grounded quiz generation.",
      "Presented the prototype at the Duke AI Summit Showcase to gather faculty and student feedback."
    ],
    methods: [
      "RAG",
      "Multimodal generation",
      "Interface prototyping",
      "AI question generation"
    ],
    outcomes: ["Interactive prototype", "Duke AI Summit Showcase poster"],
    links: [
      {
        label: "Duke AI Summit Showcase",
        href: "https://ai.duke.edu/triangle-ai-summit/showcase/"
      }
    ]
  },
  {
    slug: "adaptive-recommendations-ednet",
    title: "Causal Impact of Adaptive Recommendations in EdNet",
    year: "2025",
    category: "Causal Inference / Education Data",
    thumbnail: "/assets/project-thumbnails/ednet-causal.jpg",
    summary:
      "A causal inference study estimating how adaptive recommendations in a large-scale intelligent tutoring system affected later student accuracy.",
    context:
      "The project examines whether adaptive recommendation use in early platform activity predicted learning improvements in later activity.",
    contributions: [
      "Defined treatment as using at least 20 adaptive offers in days 0-30 and outcome as post-treatment accuracy in days 31-60.",
      "Built pre-treatment covariates including initial accuracy, engagement, platform use, and paid status.",
      "Estimated effects using propensity score modeling, inverse probability weighting, trimming, and causal forests."
    ],
    methods: [
      "XGBoost propensity scores",
      "IPW",
      "Causal forests",
      "Balance diagnostics"
    ],
    outcomes: [
      "Graduate research manuscript",
      "Observational analysis with balance diagnostics; interpretation depends on causal-identification assumptions"
    ]
  },
  {
    slug: "education-resource-allocation-china",
    title: "Structural Patterns of Educational Opportunity in China",
    year: "2024",
    category: "Computational Social Science",
    thumbnail: "/assets/project-thumbnails/china-education.jpg",
    summary:
      "A computational analysis of regional education resource allocation across 31 Chinese provinces.",
    context:
      "The project used provincial-level indicators to study educational equity as both a resource distribution and connectivity problem.",
    contributions: [
      "Analyzed 18 standardized indicators across 31 provinces.",
      "Used PCA to interpret resource intensity and distribution equity dimensions.",
      "Applied k-means, spectral clustering, similarity networks, community detection, and centrality analysis."
    ],
    methods: [
      "PCA",
      "K-means and spectral clustering",
      "Network analysis",
      "GeoPandas visualization"
    ],
    outcomes: [
      "Graduate research manuscript",
      "Policy-oriented visual analysis of regional educational opportunity"
    ]
  },
  {
    slug: "gifted-education-ell-identification",
    title: "Equity in Gifted Education and ELL Identification",
    year: "2025",
    category: "Education Policy / Research Design",
    thumbnail: "/assets/project-thumbnails/gifted-ell.jpg",
    summary:
      "A policy-oriented research proposal examining whether nonverbal assessments could improve gifted identification for ELL students.",
    context:
      "Developed in Economics of Education, this project connects educational inequality, identification barriers, and causal policy design.",
    contributions: [
      "Brought together district-level outcome data, policy documents, and a quasi-experimental design.",
      "Proposed differences-in-differences and event-study approaches for evaluating assessment policy changes.",
      "Framed the question around barriers to educational opportunity in real school systems."
    ],
    methods: [
      "Difference-in-differences",
      "Event-study design",
      "Policy analysis",
      "Education equity"
    ],
    outcomes: ["Selected course research project", "Foundation for future policy-oriented education work"]
  },
  {
    slug: "tutoring-dialogue-causal-analysis",
    title: "Teaching Strategies in Online Tutoring Dialogue",
    year: "2025",
    category: "Learning Analytics / Causal Analysis",
    thumbnail: "/assets/project-thumbnails/tutoring-dialogue.jpg",
    summary:
      "A short project using online tutoring dialogue data to examine how teaching strategies related to student learning success.",
    context:
      "The project extended economics and computation training into learning research using tutoring interaction data.",
    contributions: [
      "Used matching and inverse probability weighting to move beyond simple correlation.",
      "Compared ATT and ATE estimates for different teaching strategies.",
      "Created diagnostic plots including propensity score distributions, Love plots, and balance tests."
    ],
    methods: [
      "Matching",
      "IPTW",
      "Treatment effect estimation",
      "Learning analytics diagnostics"
    ],
    outcomes: ["LearnLab-connected exploratory project"],
    links: [
      {
        label: "LearnLab",
        href: "https://learnlab.org/"
      }
    ]
  }
];

export const featuredProjects = projects.filter((project) => project.featured);
