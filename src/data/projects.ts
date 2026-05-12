export type Project = {
  slug: string;
  title: string;
  year: string;
  category: string;
  role?: string;
  featured?: boolean;
  summary: string;
  context: string;
  contributions: string[];
  methods: string[];
  outcomes: string[];
  links?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    slug: "histy-ai-history-annotation",
    title: "Histy: AI History Annotation System",
    year: "2025-Present",
    category: "Human-centered AI / Learning Systems",
    featured: true,
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
    outcomes: [
      "Live deployed demo",
      "Basis for future HCI and AI-in-education research"
    ],
    links: [
      {
        label: "Live demo",
        href: "https://chronicle-history-annotation-940148600018.us-west1.run.app"
      },
      {
        label: "GitHub",
        href: "https://github.com/Yunxi-Kong/AI-History-Project-Annotation"
      }
    ]
  },
  {
    slug: "ai-history-storyboard-agent",
    title: "AI History Storyboard Agent",
    year: "2025",
    category: "LLM Agents / Multimodal Learning",
    featured: true,
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
    year: "2025-Present",
    category: "Learning Analytics / NLP",
    role: "Research Assistant to Prof. Charles Lang",
    featured: true,
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
      "Accepted paper at LAK 2026",
      "Approximately 90% validation accuracy on a human-coded sample reported in CV materials"
    ],
    links: [
      {
        label: "LAK 2026",
        href: "https://www.solaresearch.org/events/lak/lak26/"
      }
    ]
  },
  {
    slug: "multimodal-history-learning-prototype",
    title: "AI-Enhanced Multimodal History Learning Prototype",
    year: "2025",
    category: "AI in Education",
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
    outcomes: ["Live demo", "Duke AI Summit Showcase poster"],
    links: [
      {
        label: "Duke AI Summit Showcase",
        href: "https://ai.duke.edu/triangle-ai-summit/showcase/"
      },
      {
        label: "Prototype",
        href: "http://35.202.48.153:11636/static/index.html#/index"
      }
    ]
  },
  {
    slug: "adaptive-recommendations-ednet",
    title: "Causal Impact of Adaptive Recommendations in EdNet",
    year: "2025",
    category: "Causal Inference / Education Data",
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
      "Manuscript under review for ICLS 2026 in CV materials",
      "Heterogeneous gains reported for lower-proficiency students"
    ]
  },
  {
    slug: "education-resource-allocation-china",
    title: "Structural Patterns of Educational Opportunity in China",
    year: "2024",
    category: "Computational Social Science",
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
      "Manuscript under review for ICLS 2026 in CV materials",
      "Policy-oriented visual analysis of regional educational opportunity"
    ]
  },
  {
    slug: "gifted-education-ell-identification",
    title: "Equity in Gifted Education and ELL Identification",
    year: "2025",
    category: "Education Policy / Research Design",
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
