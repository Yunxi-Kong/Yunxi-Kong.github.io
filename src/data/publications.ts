export type Publication = {
  title: string;
  authors: string;
  status: string;
  year: string;
  type: "Peer-reviewed" | "Preprint";
  links: { label: string; href: string }[];
  bibtex: string;
};

export const publications: Publication[] = [
  {
    title: "The Learning Analytics Value Chain",
    authors: "Charles Lang, Yunxi Kong, Geraldine Gray, and Jie Gao",
    status: "LAK 2026: 16th International Learning Analytics and Knowledge Conference, pp. 793-801. ACM.",
    year: "2026", type: "Peer-reviewed",
    links: [
      { label: "DOI", href: "https://doi.org/10.1145/3785022.3785058" },
      { label: "Open access", href: "https://arrow.tudublin.ie/itbinfo2ro/12/" },
      { label: "Project", href: "/projects/learning-analytics-value-chain/" }
    ],
    bibtex: `@inproceedings{lang2026valuechain,
  title = {The Learning Analytics Value Chain},
  author = {Lang, Charles and Kong, Yunxi and Gray, Geraldine and Gao, Jie},
  booktitle = {Proceedings of the 16th International Learning Analytics and Knowledge Conference},
  pages = {793--801},
  year = {2026},
  publisher = {ACM},
  doi = {10.1145/3785022.3785058}
}`
  },
  {
    title: "CyberNeuro: A Privacy-Preserving Agentic Workbench for Cohort-Scale Neuroimage and Clinical Data Analysis",
    authors: "Ran Ren, Junhong Tong, Yunxi Kong, Yiyao Chen, Yucheng Li, Kunhao Zhou, Shaoqi Wang, Yuxiang Tao, Shuheng Cao, Zhihao Fan, Marissa DiPiero, Tingting Dan, and Guorong Wu",
    status: "arXiv:2607.28841. Posted July 30, 2026. Not a peer-reviewed publication.",
    year: "2026", type: "Preprint",
    links: [
      { label: "arXiv", href: "https://arxiv.org/abs/2607.28841" },
      { label: "PDF", href: "https://arxiv.org/pdf/2607.28841" },
      { label: "Project", href: "/projects/cyberneuro/" }
    ],
    bibtex: `@misc{ren2026cyberneuro,
  title = {CyberNeuro: A Privacy-Preserving Agentic Workbench for Cohort-Scale Neuroimage and Clinical Data Analysis},
  author = {Ren, Ran and Tong, Junhong and Kong, Yunxi and Chen, Yiyao and Li, Yucheng and Zhou, Kunhao and Wang, Shaoqi and Tao, Yuxiang and Cao, Shuheng and Fan, Zhihao and DiPiero, Marissa and Dan, Tingting and Wu, Guorong},
  year = {2026},
  eprint = {2607.28841},
  archivePrefix = {arXiv},
  primaryClass = {cs.MA},
  url = {https://arxiv.org/abs/2607.28841}
}`
  }
];
