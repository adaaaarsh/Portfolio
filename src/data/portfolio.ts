export const personal = {
  name: "Adarsh Lal Anilal",
  suffix: "CSSGB",
  title: "Industrial Engineer | Manufacturing Engineer | Process Engineer",
  email: "work.adarshanilal@gmail.com",
  phone: "+1 (817)-822-8442",
  linkedin: "https://linkedin.com/in/adarsh-lal-anilal",
  location: "Arlington, TX",
  resumeFile: "/resume.pdf",
  profileImage: "/profile.jpg",
  bio: "Industrial Engineer with an MS in Industrial Engineering from the University of Texas at Arlington and a Certified Six Sigma Green Belt. I bring hands-on experience across manufacturing systems, production planning, process optimization, and quality engineering in high-volume automotive and industrial environments. My work spans Lean Manufacturing, Six Sigma DMAIC, simulation modeling, AI-powered manufacturing tools, and applied research — always focused on driving measurable improvements in safety, quality, delivery, throughput, and cost. I'm passionate about solving complex manufacturing challenges through data-driven decision-making and cross-functional collaboration.",
};

export const stats = [
  { value: 90, suffix: "%", label: "Defect Reduction", icon: "chart" },
  { value: 34, suffix: "%", label: "Output Increase", icon: "trending" },
  { value: 1, suffix: "", label: "Published Paper", icon: "doc" },
  { value: 12000, suffix: "", label: "Unit Capacity Designed", icon: "factory" },
];

export const education = [
  {
    degree: "Master of Science in Industrial Engineering",
    school: "University of Texas at Arlington (UTA)",
    location: "Arlington, TX",
    period: "Aug 2024 – May 2026",
    coursework:
      "Operations Research, Engineering Economy, Statistics & Probability, Linear Regression, Production & Inventory Control, Global Supply Chain Management, Quality Systems, Systems Engineering, Manufacturing Processes, AI in Industrial Applications",
  },
  {
    degree: "Bachelor of Technology in Automobile Engineering",
    school: "Manipal Institute of Technology (MIT)",
    location: "Manipal, India",
    period: "Aug 2019 – June 2023",
    coursework:
      "Manufacturing Engineering Technology, Automotive Engines, Ergonomics in Automotive Design, Finite Element Methods, Automotive Transmission Systems",
  },
];

export const experience = [
  {
    role: "Research Assistant",
    company: "University of Texas at Arlington",
    period: "Aug 2025 – May 2026",
    bullets: [
      "Developed agent-based simulation models using NetLogo and HubNet to evaluate horizontal collaboration in urban logistics",
      "Analyzed transportation cost, fleet utilization, service level, and operational trade-off metrics",
      "Designed an Agent-Based Model (ABM) with capacity constraints and trust dynamics to analyze transportation sharing trade-offs under demand stress",
      "Delivered analytical insights supporting logistics process improvement and strategic optimization decisions",
      "Collaborated with cross-functional teams to identify root causes, develop loss profiles, and deliver data-driven recommendations",
    ],
  },
  {
    role: "Service Advisor Intern",
    company: "Jawaher Gulf Garage W.L.L",
    location: "Sitra, Bahrain",
    period: "June 2023 – Jan 2024",
    bullets: [
      "Led customer complaint root cause and corrective action investigations through on-the-floor process reviews",
      "Identified process improvement opportunities and built stakeholder partnerships across operations",
    ],
  },
  {
    role: "Project Intern",
    company: "JCB India Limited",
    location: "Jaipur, Rajasthan",
    period: "Jan 2023 – Apr 2023",
    bullets: [
      "Increased production output by 34% through systematic bottleneck analysis, time-and-motion studies, line balancing, and assembly-line rebalancing for Backhoe Loader production",
      "Created and maintained work standards, SOPs, BOMs, and routings; designed plant and assembly-line layouts, material flow plans, tooling, and fixtures for a 12,000-unit annual capacity",
      "Conducted capacity analysis, work sampling, and process flow auditing using Lean Manufacturing including VSM, Kaizen, and 5S",
      "Reduced supply chain costs through strategic Make vs. Buy analysis on BOM components",
      "Collaborated cross-functionally with design engineering and suppliers",
    ],
  },
  {
    role: "Intern",
    company: "Nissan Motors",
    location: "Sitra, Bahrain",
    period: "May 2022 – June 2022",
    bullets: [
      "Applied Root Cause Analysis (RCA), FMEA, and Corrective & Preventive Action (CAPA) to diagnose and resolve complex quality and equipment failures",
      "Performed dimensional and functional inspection, troubleshooting, and diagnostics",
    ],
  },
];

export interface Project {
  title: string;
  category: string;
  tools: string;
  summary: string;
  hero?: boolean;
  problem?: string;
  methodology?: string;
  details?: string[];
  result?: string;
  github?: string;
  publication?: string;
}

export const projects: Project[] = [
  {
    title: "ShiftReport AI",
    category: "AI in Manufacturing",
    tools: "Python, GPT-4 (OpenAI API), Streamlit",
    summary:
      "AI-powered web app that converts unstructured supervisor notes into standardized shift-handover reports with machine IDs, severity classification, and pending action items.",
    hero: true,
    problem:
      "Manufacturing plants rely on unstructured handwritten or verbal shift-handover notes, leading to lost information, delayed follow-ups, and inconsistent reporting across shifts.",
    details: [
      "Engineered iterative prompt designs to extract structured data from messy supervisor input",
      "Implemented hallucination mitigation by restricting GPT-4 output to a predefined equipment list — the model cannot invent machine IDs that don't exist",
      "Validated output quality using a dual approach: human-in-the-loop rubric scoring AND LLM-as-a-Judge automated detection",
    ],
    result:
      "Demonstrates ability to build AI-powered tools that solve real manufacturing operations problems — a rare skill at entry level.",
    github: "https://shiftreport-ai-zkteaptguynjycs6k9ztwg.streamlit.app/",
  },
  {
    title: "Defect Reduction using Lean Six Sigma DMAIC",
    category: "Quality Engineering / Six Sigma",
    tools: "Statistical Process Control (SPC), p-charts, Pareto analysis, Process Mapping",
    summary:
      "Full DMAIC cycle reducing TV screen production line defect rate from 10% to under 1% — a 90% improvement.",
    hero: true,
    problem:
      "Television screen production line had a 10% defect rate, causing significant rework costs and customer dissatisfaction.",
    methodology: "Full DMAIC cycle",
    details: [
      "Define: Scoped the project within a Quality Management System (QMS) framework",
      "Measure: Analyzed 12 months of production data to establish baseline defect rate",
      "Analyze: Used p-charts, Pareto analysis, process mapping, and root cause analysis to identify major contributors (defective panels and sensor calibration issues)",
      "Improve: Implemented supplier quality controls, automated calibration systems, and standardized testing protocols; validated through 12 pilot lots",
      "Control: Applied SPC, TQM, and process capability evaluation to sustain performance",
    ],
    result:
      "Reduced defect rate from 10% to <1% — a 90% improvement. Sustained below 1% through ongoing statistical process control.",
  },
  {
    title: "Horizontal Logistics Collaboration Simulation",
    category: "Simulation Modeling / Operations Research",
    tools: "NetLogo, HubNet, Agent-Based Modeling",
    summary:
      "Networked, participatory agent-based simulation model evaluating horizontal collaboration benefits among competing logistics firms.",
    hero: true,
    problem:
      "How can competing logistics firms benefit from horizontal collaboration (sharing transportation resources) under dynamic demand and capacity constraints?",
    details: [
      "Designed agents with capacity constraints and trust dynamics",
      "Modeled transportation sharing trade-offs under demand stress scenarios",
      "Analyzed KPIs: transportation cost, fleet utilization, service level, empty miles",
    ],
    result:
      "Generated analytical insights supporting logistics process improvement and strategic optimization decisions. Led to published research.",
  },
  {
    title: "CO₂ Emissions Prediction — ML Research",
    category: "Applied Research / Data Science",
    tools: "Python, Machine Learning (Multiple Regression Techniques)",
    summary:
      "Compared multiple ML regression techniques to predict CO₂ emissions from light-duty vehicles. Published in IJCA.",
    problem:
      "Need for accurate, generalizable models to predict CO₂ emissions from light-duty vehicles for environmental policy and automotive engineering decisions.",
    details: [
      "Evaluated model accuracy, generalizability, and practical applicability across multiple regression techniques",
      "Compared performance metrics to identify the most suitable approach for emissions prediction",
    ],
    result:
      "Published research providing comparative evaluation of ML regression techniques for emissions prediction.",
    publication: "https://doi.org/10.5120/ijcaccdf069ed3ae",
  },
  {
    title: "FIFA AI Hackathon — Second Prize",
    category: "AI / Hackathon",
    tools: "AI/ML",
    summary:
      "Built an AI-powered solution at the Founder's Arena Arlington FIFA AI Hackathon, winning Second Prize.",
    result: "Second Prize at Founder's Arena Arlington FIFA AI Hackathon, June 2026.",
  },
  {
    title: "Inventory Optimization for Retail Operations",
    category: "Operations Research / Supply Chain",
    tools: "EOQ Modeling, Continuous Review (Q,r) Systems, Demand Forecasting",
    summary:
      "Engineered and evaluated EOQ-based vending and Continuous Review (Q,r) kiosk systems for retail inventory optimization.",
    details: [
      "Compared operational costs and financial risks between vending machine and kiosk system models",
      "Applied demand forecasting to optimize reorder points and order quantities",
    ],
    result:
      "Recommended a vending machine solution to reduce stockouts, automate tracking, and increase revenue through demand forecasting.",
  },
  {
    title: "Systems Requirements Modeling (SSM & SysML)",
    category: "Systems Engineering",
    tools: "SysML, Soft Systems Methodology (SSM)",
    summary:
      "Improved system clarity and requirements traceability per INCOSE/ISO 15288 standards using SSM and SysML.",
    details: [
      "Applied SSM to analyze an ambiguous socio-technical telecom problem and developed root-definition statements",
      "Built SysML artifacts including Use Case Diagrams, Requirements Diagrams",
      "Established full traceability across requirements, use cases, test cases, and subsystems",
    ],
  },
  {
    title: "Predictive Cost Modeling & Regression Analysis",
    category: "Data Analysis / Cost Engineering",
    tools: "SAS, Statistical Modeling",
    summary:
      "Built optimized regression models using SAS for cost estimation, validated with comprehensive statistical analysis.",
    details: [
      "Built Simple and Multiple Linear Regression models for cost estimation",
      "Validated with R-squared, ANOVA, residual analysis, and multicollinearity checks",
      "Applied hypothesis testing to derive actionable insights",
    ],
  },
  {
    title: "Engineering Economy & Capital Investment Analysis",
    category: "Engineering Economy",
    tools: "NPV, IRR, BCR Analysis, Sensitivity Analysis",
    summary:
      "Constructed a 15-year cash-flow model evaluating public infrastructure investments using NPV, IRR, and BCR analysis.",
    details: [
      "Evaluated public infrastructure investments against alternatives using NPV, IRR, and Benefit-Cost Ratio analysis",
      "Executed sensitivity and scenario analyses to support capital investment decision-making",
    ],
  },
];

export const publication = {
  title:
    "Comparative Evaluation of Machine Learning Regression Techniques for Predicting CO₂ Emissions in Light-Duty Vehicles",
  authors: "Anilal, A. L.; Leboulluec, A. K.",
  journal: "International Journal of Computer Applications (IJCA)",
  volume: "Vol. 187, No. 114, June 2026",
  doi: "https://doi.org/10.5120/ijcaccdf069ed3ae",
};

export const skills = {
  methodologies: [
    "Lean Manufacturing",
    "Lean Six Sigma (DMAIC)",
    "Kaizen",
    "Continuous Improvement",
    "Value Stream Mapping (VSM)",
    "5S",
    "Time Studies",
    "Time-and-Motion Studies",
    "Work Sampling",
    "Line Balancing",
    "Capacity Analysis",
    "Root Cause Analysis (RCA)",
    "FMEA/DFMEA/PFMEA",
    "Statistical Process Control (SPC)",
    "Design for Manufacturing (DFM/DFA)",
    "CAPA",
    "Total Quality Management (TQM)",
    "Process Flow Auditing",
    "JIT",
    "Kanban",
    "SOP Optimization",
  ],
  software: [
    "Python",
    "SAS",
    "MATLAB",
    "SAP",
    "NetLogo",
    "SolidWorks",
    "AutoCAD",
    "SysML",
    "Streamlit",
    "OpenAI API (GPT-4)",
    "Microsoft Excel (Advanced)",
    "Microsoft Access",
    "Microsoft Project",
    "ERP Systems",
  ],
  standards: [
    "ISO 9001",
    "Quality Management Systems (QMS)",
    "INCOSE/ISO 15288",
    "Standard Operating Procedures (SOPs)",
    "Standard Work",
    "Bill of Materials (BOM)",
    "Routings",
    "Technical Documentation",
    "Safety Compliance",
  ],
  core: [
    "Manufacturing Systems & Process Optimization",
    "Production Planning",
    "Quality Assurance & Control",
    "Process Improvement",
    "Cost Reduction",
    "Supply Chain Management",
    "Plant & Assembly Line Layout",
    "Material Flow Analysis",
    "KPI Analysis",
    "Data-Driven Decision Making",
    "Cross-Functional Collaboration",
    "Project Management",
  ],
};

export const awards = [
  {
    title: "Don Liles Endowed Scholarship",
    org: "University of Texas at Arlington",
    date: "March 2025",
  },
  {
    title: "Founder's Arena Arlington FIFA AI Hackathon — Second Prize",
    org: "Founder's Arena",
    date: "June 2026",
  },
];

export const certifications = [
  "Six Sigma Green Belt (CSSGB)",
  "McKinsey Forward Program",
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Publication", href: "#publication" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
