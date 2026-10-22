import type { Project } from "./projects";

export const recentProjects: Project[] = [
  {
    slug: "asnr-brain-atlas", title: "ASNR Interactive Brain Atlas",
    year: "2026", category: "Interactive systems / Medical learning",
    role: "System development and interface design at UNC ACMLab",
    featured: true, status: "Active development",
    thumbnail: "/assets/project-thumbnails/asnr.webp",
    caption: "The Atlas interface connects multiplanar images, anatomical markers, case material, and clinician-authored study cards. Development preview, October 2026.",
    summary: "A clinician-informed learning environment connecting brain images, anatomical annotations, case explanations, and editable teaching materials.",
    question: "How can an interactive system preserve expert knowledge while making the relationships between images, explanations, and learning activities easier to inspect?",
    context: "At UNC ACMLab, I contribute to the ASNR Interactive Brain Atlas in collaboration with clinicians. The work involves translating teaching requirements into an evolving software system: aligning image interactions with case explanations, supporting physician editing, and testing changes without disrupting existing teaching content.",
    contributions: [
      "Developed and iterated image-navigation and annotation interactions, including links between anatomical markers and explanatory text.",
      "Worked on editable case content, study cards, references, and teaching workflows in response to clinician feedback.",
      "Maintained an independent experimental release with separate editing data, explicit content comparison, and regression checks.",
      "Explored 3D and immersive prototypes as extensions to the browser-based learning experience."
    ],
    methods: ["Interactive visualization", "Clinician collaboration", "Content workflows", "Versioned releases"],
    decisions: [
      { title: "Keep the case in view", text: "Image navigation should preserve the learner's clinical context. Current development separates sequence selection from case selection, so inspecting another view does not require starting the case again." },
      { title: "Treat expert edits as part of the system", text: "Physicians continue to revise teaching content while interfaces change. Independent experimental data and explicit merges protect those edits; a successful software deployment is not a substitute for content integrity." },
      { title: "Connect evidence and explanation", text: "Markers, teaching text, supporting images, and references need to point to the same clinical concept. This makes their relationship inspectable instead of leaving the learner to reconstruct it across disconnected panels." }
    ],
    outcomes: ["An actively maintained browser-based Atlas and a separate experimental release.", "A continuing design and development process informed by clinician feedback."],
    limitations: "This is a teaching-system development project, not a clinically validated diagnostic product. AI-generated vignettes and literature summaries remain development directions; no learning-effectiveness claim is made here. Immersive prototypes are distinct from the deployed browser experience.",
    links: [{ label: "ACMLab", href: "https://www.acmlab.org/team" }]
  },
  {
    slug: "motiverse", title: "Motiverse: An Interactive Literary World",
    year: "2026", category: "Multi-agent systems / Interactive narrative",
    role: "System design, development, and archive analysis",
    featured: true, status: "Research in progress",
    thumbnail: "/assets/project-thumbnails/motiverse.webp",
    caption: "Interface figure from the Motiverse working manuscript: character conversation, a projected future, and a retrospective event record.",
    summary: "A literary environment based on Border Town that separates what characters say, what changes in the world, and what the system projects might happen next.",
    question: "When a visitor speaks to an AI character, what makes the resulting influence on a shared world traceable?",
    context: "Motiverse explores interaction within a world of characters with different knowledge and memories. Centralized and socially mediated implementations provide different routes from a visitor's input to a persistent event. The project connects interactive narrative with my emerging interest in multi-agent social environments.",
    contributions: ["Designed a distinction between dialogue, committed world events, and projected futures.", "Developed character interactions and event records for examining how information moves through the literary world.", "Prepared a manuscript, analysis code, and figures examining archived system execution and delivery failures."],
    methods: ["Multi-agent interaction", "Shared world state", "Execution provenance", "Archive analysis"],
    decisions: [
      { title: "Dialogue is not a state change", text: "A character promising to do something is different from the world recording that it happened. Keeping these records separate allows the system's claims to be checked." },
      { title: "A projected future is conditional", text: "Generated accounts of later life are presented separately from committed events. Missing or fallback outputs remain visible in the analysis instead of being counted as successful experiences." }
    ],
    outcomes: ["A working literary interaction system and a completed working manuscript.", "System-archive analysis with explicit limits on what execution traces establish."],
    limitations: "The current analysis examines system execution, not a controlled human-subject comparison. A next research step is to evaluate how people understand and trace consequences in the world. The separate visual showcase uses scripted character interactions, distinct from the research system's agent runtime.",
    links: [{ label: "Visual showcase", href: "https://biancheng-showcase.vercel.app/" }]
  },
  {
    slug: "cyberneuro", title: "CyberNeuro",
    year: "2026", category: "Agentic systems / Scientific workflows",
    role: "Co-author; visualization and tool-integration contributions",
    featured: true, status: "Public preprint",
    thumbnail: "/assets/project-thumbnails/cyberneuro.webp",
    caption: "System architecture from the CyberNeuro preprint, Ren et al. (2026). A collaborative ACMLab project; the diagram represents the full team's system.",
    summary: "A collaborative agentic workbench for neuroimaging and clinical-data workflows, with inspectable outputs and human review.",
    question: "How can an agent's proposed scientific workflow become an inspectable, reproducible sequence of tool executions?",
    context: "CyberNeuro brings natural-language requests, scientific tools, visualization, and quality review into a common workbench. My contributions focus on visualization and tool integration within the larger ACMLab collaboration.",
    contributions: ["Developed visualization-oriented skill packages around established scientific tools, with input validation and reproducible rendering workflows.", "Worked on connecting generated artifacts to inspection and interactive visualization.", "Co-authored the public CyberNeuro preprint."],
    methods: ["Tool integration", "Scientific visualization", "Artifact validation", "Agent workflows"],
    outcomes: ["A public co-authored preprint, posted July 30, 2026.", "Reusable tool-integration and visualization workflows."],
    limitations: "This is collaborative work reported in a public preprint. The architecture figure represents the team's full platform; my contributions focus on visualization and tool integration. Evaluation of scientific workflows is distinct from clinical validation.",
    links: [{ label: "Paper", href: "https://arxiv.org/abs/2607.28841" }, { label: "Project website", href: "https://wanda-cyberbench.com/" }]
  },
  {
    slug: "llm-evaluation-reliability", title: "Reliability of LLM-Based Evaluation",
    year: "2026", category: "Measurement / Computational social science",
    role: "Independent research project", status: "Research in progress",
    summary: "Investigating how agreement-based filtering changes the examples retained by an LLM evaluation pipeline, and what that means for calibration and downstream comparisons.",
    question: "If an evaluator keeps only judgments that agree under an option-order swap, is the remaining sample more informative, or merely more selective?",
    context: "This project examines evaluation as a measurement process. It studies the relationship between consistency, coverage, probability calibration, and ranking sensitivity, with particular attention to what model agreement can and cannot establish about human preferences.",
    contributions: ["Built versioned analysis workflows with frozen inputs, executable checks, and reproducible run records.", "Examined the effects of consistency filtering on retained samples and pairwise comparison pipelines.", "Used sensitivity analyses and failure audits to separate computational correctness from support for substantive claims."],
    methods: ["Calibration", "Selection effects", "Pairwise comparisons", "Reproducibility"],
    outcomes: ["An ongoing analysis pipeline and working manuscript materials."],
    limitations: "Analysis and sensitivity checks are ongoing. The next step is to establish which conclusions remain stable across filtering choices, comparison sets, and evaluation conditions."
  }
];
