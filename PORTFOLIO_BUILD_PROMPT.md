# PORTFOLIO WEBSITE BUILD — ADARSH LAL ANILAL

Build a **stunning, production-ready personal portfolio website** from scratch. This is for an Industrial Engineering graduate actively job-hunting. The site must feel like a $5,000 freelancer build — immersive, interactive, and unforgettable. Not a template. Not "clean and minimal." This should make a recruiter stop scrolling and say *"this person is different."*

Deploy-ready as a static site (GitHub Pages compatible).

---

## TECH STACK (non-negotiable)

- **Next.js** (App Router) with **TypeScript**
- **Tailwind CSS** for styling
- `output: "export"` in next.config for static export
- `images: { unoptimized: true }` for GitHub Pages
- Fully responsive (mobile-first)
- Zero external runtime dependencies — no Framer Motion, no GSAP, no animation libraries. All animations are pure CSS + lightweight React hooks (IntersectionObserver, requestAnimationFrame). This keeps the bundle tiny and the site fast.

---

## DESIGN PHILOSOPHY

**Dark-mode-first hero, light sections below.** The hero is a cinematic dark experience. Everything after is clean white/gray with pops of color. The contrast between the immersive dark hero and the crisp light content sections creates visual drama.

### Color System
- **Primary navy:** `#2c3e50` — the soul of the brand, used in dark backgrounds and text
- **Navy light:** `#3d5166` — hover states, secondary elements
- **Navy dark:** `#1a252f` — hero background, footer
- **Accent blue:** `#3498db` — CTAs, highlights, interactive elements, links
- **Accent light:** `#5dade2` — hover states on dark backgrounds
- All other colors: Tailwind's gray scale, plus contextual greens (results/success), ambers (awards), purples (core competencies)

### Typography & Spacing
- Use Next.js `next/font/google` with **Geist** (sans) and **Geist Mono** fonts
- Generous whitespace — `py-28` on sections, never cramped
- Section headers: small uppercase tracking-widest accent-colored label above a large bold title

### Animation Rules
- Every section fades in + slides up on scroll (IntersectionObserver, 0.1 threshold, `translate-y-8` to `translate-y-0`, `opacity-0` to `opacity-100`, `duration-700`)
- Stagger children with `delay` prop (80-150ms increments)
- Hero has a mount animation (opacity + translate, `duration-1000`)
- Hover effects on EVERYTHING interactive — cards lift (`translateY(-6px)`) with deepening shadows, tags lift slightly (`translateY(-2px)`), buttons glow, icons rotate or shift
- Use `cubic-bezier(0.4, 0, 0.2, 1)` for all transitions — it feels premium
- Floating geometric shapes in hero: circles and rotated squares with `animation: float 6s ease-in-out infinite` at different speeds
- A subtle shimmer effect on the primary CTA (gradient sweep)
- NO janky, NO aggressive, NO distracting animations. Every animation should feel like butter.

---

## PERSONAL INFO

```
Name: Adarsh Lal Anilal, CSSGB
Title: Industrial Engineer | Manufacturing Engineer | Process Engineer
Email: work.adarshanilal@gmail.com
Phone: +1 (817)-822-8442
LinkedIn: https://linkedin.com/in/adarsh-lal-anilal
Location: Arlington, TX
Resume: /resume.pdf (placeholder file in public/)
```

**Bio:** Industrial Engineer with an MS in Industrial Engineering from the University of Texas at Arlington and a Certified Six Sigma Green Belt. I bring hands-on experience across manufacturing systems, production planning, process optimization, and quality engineering in high-volume automotive and industrial environments. My work spans Lean Manufacturing, Six Sigma DMAIC, simulation modeling, AI-powered manufacturing tools, and applied research — always focused on driving measurable improvements in safety, quality, delivery, throughput, and cost. I'm passionate about solving complex manufacturing challenges through data-driven decision-making and cross-functional collaboration.

---

## EDUCATION

1. **Master of Science in Industrial Engineering** — University of Texas at Arlington (UTA), Arlington, TX | Aug 2024 – May 2026
   - Coursework: Operations Research, Engineering Economy, Statistics & Probability, Linear Regression, Production & Inventory Control, Global Supply Chain Management, Quality Systems, Systems Engineering, Manufacturing Processes, AI in Industrial Applications

2. **Bachelor of Technology in Automobile Engineering** — Manipal Institute of Technology (MIT), Manipal, India | Aug 2019 – June 2023
   - Coursework: Manufacturing Engineering Technology, Automotive Engines, Ergonomics in Automotive Design, Finite Element Methods, Automotive Transmission Systems

---

## PROFESSIONAL EXPERIENCE

### 1. Research Assistant — University of Texas at Arlington (Aug 2025 – May 2026)
- Developed agent-based simulation models using NetLogo and HubNet to evaluate horizontal collaboration in urban logistics
- Analyzed transportation cost, fleet utilization, service level, and operational trade-off metrics
- Designed an Agent-Based Model (ABM) with capacity constraints and trust dynamics to analyze transportation sharing trade-offs under demand stress
- Delivered analytical insights supporting logistics process improvement and strategic optimization decisions
- Collaborated with cross-functional teams to identify root causes, develop loss profiles, and deliver data-driven recommendations

### 2. Service Advisor Intern — Jawaher Gulf Garage W.L.L, Sitra, Bahrain (June 2023 – Jan 2024)
- Led customer complaint root cause and corrective action investigations through on-the-floor process reviews
- Identified process improvement opportunities and built stakeholder partnerships across operations

### 3. Project Intern — JCB India Limited, Jaipur, Rajasthan (Jan 2023 – Apr 2023)
- Increased production output by 10% through systematic bottleneck analysis, time-and-motion studies, line balancing, and assembly-line rebalancing for Backhoe Loader production
- Created and maintained work standards, SOPs, BOMs, and routings; designed plant and assembly-line layouts, material flow plans, tooling, and fixtures for a 12,000-unit annual capacity
- Conducted capacity analysis, work sampling, and process flow auditing using Lean Manufacturing including VSM, Kaizen, and 5S
- Reduced supply chain costs through strategic Make vs. Buy analysis on BOM components
- Collaborated cross-functionally with design engineering and suppliers

### 4. Intern — Nissan Motors, Sitra, Bahrain (May 2022 – June 2022)
- Applied Root Cause Analysis (RCA), FMEA, and Corrective & Preventive Action (CAPA) to diagnose and resolve complex quality and equipment failures
- Performed dimensional and functional inspection, troubleshooting, and diagnostics

---

## PROJECTS (9 total — 3 are HERO projects)

### HERO PROJECT 1: ShiftReport AI — Intelligent Shift-Handover Report Generator
- **Category:** AI in Manufacturing
- **Tools:** Python, GPT-4 (OpenAI API), Streamlit
- **Problem:** Manufacturing plants rely on unstructured handwritten or verbal shift-handover notes, leading to lost information, delayed follow-ups, and inconsistent reporting across shifts.
- **What I Built:** An AI-powered web application that automatically converts unstructured supervisor notes into standardized shift-handover reports with machine IDs, severity classification, and pending action items.
- **Key Details:**
  - Engineered iterative prompt designs to extract structured data from messy supervisor input
  - Implemented hallucination mitigation by restricting GPT-4 output to a predefined equipment list — the model cannot invent machine IDs that don't exist
  - Validated output quality using a dual approach: human-in-the-loop rubric scoring AND LLM-as-a-Judge automated detection
- **Impact:** Demonstrates ability to build AI-powered tools that solve real manufacturing operations problems — a rare skill at entry level.
- **GitHub:** # (placeholder)

### HERO PROJECT 2: Defect Reduction using Lean Six Sigma DMAIC
- **Category:** Quality Engineering / Six Sigma
- **Tools:** Statistical Process Control (SPC), p-charts, Pareto analysis, Process Mapping
- **Problem:** Television screen production line had a 10% defect rate, causing significant rework costs and customer dissatisfaction.
- **Methodology:** Full DMAIC cycle
- **Key Details:**
  - Define: Scoped the project within a Quality Management System (QMS) framework
  - Measure: Analyzed 12 months of production data to establish baseline defect rate
  - Analyze: Used p-charts, Pareto analysis, process mapping, and root cause analysis to identify major contributors (defective panels and sensor calibration issues)
  - Improve: Implemented supplier quality controls, automated calibration systems, and standardized testing protocols; validated through 12 pilot lots
  - Control: Applied SPC, TQM, and process capability evaluation to sustain performance
- **Result:** Reduced defect rate from 10% to <1% — a 90% improvement. Sustained below 1% through ongoing statistical process control.

### HERO PROJECT 3: UTA Research — Horizontal Logistics Collaboration Simulation
- **Category:** Simulation Modeling / Operations Research
- **Tools:** NetLogo, HubNet, Agent-Based Modeling
- **Problem:** How can competing logistics firms benefit from horizontal collaboration (sharing transportation resources) under dynamic demand and capacity constraints?
- **What I Built:** A networked, participatory agent-based simulation model where multiple human players make logistics decisions in real-time, and the system evaluates collaboration outcomes.
- **Key Details:**
  - Designed agents with capacity constraints and trust dynamics
  - Modeled transportation sharing trade-offs under demand stress scenarios
  - Analyzed KPIs: transportation cost, fleet utilization, service level, empty miles
- **Impact:** Generated analytical insights supporting logistics process improvement and strategic optimization decisions. Led to published research.

### Project 4: CO₂ Emissions Prediction — Machine Learning Research (PUBLISHED)
- **Category:** Applied Research / Data Science
- **Tools:** Python, Machine Learning (Multiple Regression Techniques)
- **Summary:** Compared multiple ML regression techniques to predict CO₂ emissions from light-duty vehicles. Published in IJCA.
- **Publication DOI:** https://doi.org/10.5120/ijcaccdf069ed3ae

### Project 5: FIFA AI Hackathon — Second Prize (June 2026)
- **Category:** AI / Hackathon
- **Tools:** AI/ML
- **Result:** Second Prize at Founder's Arena Arlington FIFA AI Hackathon

### Project 6: Inventory Optimization for Retail Operations
- **Category:** Operations Research / Supply Chain
- **Tools:** EOQ Modeling, Continuous Review (Q,r) Systems, Demand Forecasting
- **Summary:** Engineered and evaluated EOQ-based vending and Continuous Review (Q,r) kiosk systems, comparing operational costs and financial risks. Recommended a vending machine solution to reduce stockouts, automate tracking, and increase revenue through demand forecasting.

### Project 7: Systems Requirements Modeling (SSM & SysML)
- **Category:** Systems Engineering
- **Tools:** SysML, Soft Systems Methodology (SSM)
- **Summary:** Improved system clarity and requirements traceability per INCOSE/ISO 15288 standards. Applied SSM to analyze an ambiguous socio-technical telecom problem. Built SysML artifacts including Use Case Diagrams, Requirements Diagrams, and established full traceability.

### Project 8: Predictive Cost Modeling & Regression Analysis
- **Category:** Data Analysis / Cost Engineering
- **Tools:** SAS, Statistical Modeling
- **Summary:** Built optimized Simple and Multiple Linear Regression models using SAS for cost estimation, validated with R-squared, ANOVA, residual analysis, and multicollinearity checks.

### Project 9: Engineering Economy & Capital Investment Analysis
- **Category:** Engineering Economy
- **Tools:** NPV, IRR, BCR Analysis, Sensitivity Analysis
- **Summary:** Constructed a 15-year cash-flow model evaluating public infrastructure investments against alternatives using NPV, IRR, and Benefit-Cost Ratio analysis.

---

## PUBLICATION

**Full Citation:** Anilal, A. L.; Leboulluec, A. K. "Comparative Evaluation of Machine Learning Regression Techniques for Predicting CO₂ Emissions in Light-Duty Vehicles." International Journal of Computer Applications (IJCA), Vol. 187, No. 114, June 2026.
**DOI:** https://doi.org/10.5120/ijcaccdf069ed3ae

---

## TECHNICAL SKILLS (grouped by category)

**Methodologies:** Lean Manufacturing, Lean Six Sigma (DMAIC), Kaizen, Continuous Improvement, Value Stream Mapping (VSM), 5S, Time Studies, Time-and-Motion Studies, Work Sampling, Line Balancing, Capacity Analysis, Root Cause Analysis (RCA), FMEA/DFMEA/PFMEA, Statistical Process Control (SPC), Design for Manufacturing (DFM/DFA), CAPA, Total Quality Management (TQM), Process Flow Auditing, JIT, Kanban, SOP Optimization

**Software & Tools:** Python, SAS, MATLAB, SAP, NetLogo, SolidWorks, AutoCAD, SysML, Streamlit, OpenAI API (GPT-4), Microsoft Excel (Advanced), Microsoft Access, Microsoft Project, ERP Systems

**Standards & Compliance:** ISO 9001, Quality Management Systems (QMS), INCOSE/ISO 15288, Standard Operating Procedures (SOPs), Standard Work, Bill of Materials (BOM), Routings, Technical Documentation, Safety Compliance

**Core Competencies:** Manufacturing Systems & Process Optimization, Production Planning, Quality Assurance & Control, Process Improvement, Cost Reduction, Supply Chain Management, Plant & Assembly Line Layout, Material Flow Analysis, KPI Analysis, Data-Driven Decision Making, Cross-Functional Collaboration, Project Management

---

## AWARDS
1. Don Liles Endowed Scholarship — University of Texas at Arlington, March 2025
2. Founder's Arena Arlington FIFA AI Hackathon — Second Prize — June 2026

## CERTIFICATIONS
1. Six Sigma Green Belt (CSSGB)
2. McKinsey Forward Program

---

## SITE STRUCTURE & INTERACTIVE FEATURES

### 1. NAVIGATION (sticky)
- Transparent on hero (white text), solid white with blur + shadow after scrolling past hero
- **Active section highlighting** — tracks scroll position, underlines current section in accent color
- Desktop: horizontal links + blue "Resume" button
- Mobile: animated hamburger (three lines morph to X) → fullscreen overlay with staggered slide-up links
- Clicking a nav link smooth-scrolls to the section
- Logo "Adarsh." in top-left — the dot is accent blue

### 2. HERO SECTION (dark, cinematic, full-screen)
- **Background:** Dark navy gradient (`from-navy-dark via-navy to-navy-dark`) with `animation: gradient-shift 8s ease infinite`
- **Grid overlay:** Subtle 60px grid lines at 4% opacity for depth
- **Floating shapes:** 5 geometric elements (circles, rotated squares) with staggered `float` animations at different speeds (6s and 8s), using borders and fills at very low opacity
- **Radial glow:** Large blurred accent-colored circle behind content for soft lighting
- **Content (centered, z-indexed above everything):**
  - Green pulsing dot + "Open to Opportunities" badge (glass-morphism: `bg-white/5 border-white/10 backdrop-blur-sm`)
  - Name in huge bold white text (4xl mobile → 7xl desktop)
  - **TYPING EFFECT** that cycles through: "Industrial Engineer", "Manufacturing Engineer", "Process Engineer", "Six Sigma Green Belt" — types character by character (80ms), pauses 2s, deletes (40ms), moves to next. Blinking cursor in accent color.
  - One-line bio summary in muted gray
  - Three CTAs: blue "Download Resume" (with shimmer animation), ghost "View Projects →", ghost "LinkedIn" with icon
- **Scroll indicator:** "SCROLL" text + animated mouse icon at bottom
- Mount animation: entire content block fades in + slides up over 1s on load

### 3. ABOUT SECTION (white background)
- Profile card: "AA" initials in gradient square (navy→accent) with green checkmark badge
- Full bio paragraph
- **ANIMATED STAT COUNTERS** — 4 cards that count up when scrolled into view:
  - 90% (Defect Reduction), 10% (Output Increase), 1 (Published Paper), 12,000 (Unit Capacity Designed)
  - Each card has an icon, the counter animates from 0 to the value over 2 seconds
  - Cards have hover glow effect with gradient background reveal
- Education sidebar: cards with gradient left-border accent, coursework details

### 4. EXPERIENCE SECTION (gray-50 background, dot pattern overlay)
- **INTERACTIVE ACCORDION TIMELINE**
  - Vertical gradient timeline line (accent → navy → accent/20)
  - Animated dots: active role has a glowing accent dot with white center, inactive dots have subtle navy border
  - **Click to expand/collapse** each role — bullet points slide open with `max-h` transition (500ms)
  - Chevron icon rotates 180° when expanded
  - Active card gets a ring highlight + shadow
  - First role expanded by default

### 5. PROJECTS SECTION (white background)
- Subtitle: "Click any project card to see the full breakdown"
- **HERO PROJECTS (3 cards, top row):**
  - Dark gradient background (navy-dark → navy), full-bleed
  - Animated corner accent circles that scale up on hover
  - "Featured" badge in accent
  - Arrow icon slides right on hover
  - Tool tags with glass-morphism style
  - Cards lift 6px on hover with deep shadow
- **OTHER PROJECTS (6 cards, grid below):**
  - White cards with subtle borders
  - Category tag, title, summary, tool tags
  - Arrow icon in corner, tags shift to accent color on hover
  - Cards lift on hover with shadow
- **PROJECT DETAIL MODAL:**
  - Opens on card click, closes on backdrop click or Escape key
  - Slides up with `animation: slide-up 0.6s ease-out`
  - **Gradient header** (navy → navy-light) with dot pattern overlay — category badge + title in white
  - Tool tags as accent-colored pills
  - Sections with icons: Problem (red warning icon), Methodology (gear icon), Key Details (numbered steps in accent circles), Result/Impact (green success card with gradient background)
  - GitHub and Publication link buttons
  - Body scroll locked while modal is open

### 6. PUBLICATION SECTION (dark section — navy gradient like hero)
- Dot pattern overlay at low opacity
- Radial glow in top-right corner
- Glass-morphism card (`bg-white/5 border-white/10 backdrop-blur-sm`)
- Book icon in accent circle
- Title, authors, journal, volume in white/muted text hierarchy
- Blue "View on DOI" button with shadow glow + icon rotation on hover

### 7. SKILLS SECTION (white background, dot pattern)
- **INTERACTIVE TABBED INTERFACE**
  - 4 tab buttons across the top, each with unique gradient:
    - Methodologies: navy → accent
    - Software & Tools: accent → accent-light
    - Standards & Compliance: green-600 → emerald-500
    - Core Competencies: purple-600 → violet-500
  - Active tab is filled with its gradient + white text + shadow
  - Inactive tabs are gray-100 background
  - Tab content panel: bordered rounded card with category icon in gradient circle, skill count, and **skill tags** as hoverable pills that lift slightly with shadow on hover, changing border and text color to match the category
- **Summary grid below:** 4 small cards showing skill count per category in gradient text, clickable to switch tabs

### 8. AWARDS & CERTIFICATIONS (gray-50 background)
- Two-column grid
- Awards card: amber/orange gradient trophy icon, cards with gradient left-border
- Certifications card: green gradient mortarboard icon, each cert with green checkmark circle

### 9. CONTACT SECTION (white, with subtle accent glow at top)
- "Let's Connect" heading with active-search messaging
- **4 contact cards** each with unique gradient icon that SCALES UP on hover:
  - Email: blue → cyan
  - Phone: green → emerald
  - LinkedIn: blue-600 → blue-700
  - Location: red → pink
- Large "Send Me an Email" CTA at bottom: navy→accent gradient with shimmer animation

### 10. FOOTER (dark navy)
- Logo, nav links (accent-colored on hover), social icons in glass-morphism squares
- Subtle divider, copyright

---

## CSS ANIMATIONS (define in globals.css)

```
float: translateY(0) → translateY(-20px) → translateY(0), 6s infinite
float-delayed: translateY(0) → translateY(-15px) → translateY(0), 8s infinite
gradient-shift: background-position 0%→100%→0%, 8s infinite, background-size 200%
pulse-ring: scale(0.95)→scale(1.05)→scale(0.95), 3s infinite
slide-up: translateY(30px) opacity(0) → translateY(0) opacity(1), 0.6s forwards
shimmer: background-position sweep -200% → 200%, 3s infinite (white gradient overlay)
```

Utility classes: `.project-card` (lift + shadow on hover, 0.4s cubic-bezier), `.skill-tag` (lift + shadow on hover, 0.3s), `.timeline-dot:hover .timeline-dot-inner` (scale 1.5 + ring shadow)

---

## FILE STRUCTURE

```
portfolio/
├── public/
│   ├── favicon.svg          (SVG: navy rounded rect with white "AA" text)
│   └── resume.pdf           (empty placeholder)
├── src/
│   ├── app/
│   │   ├── globals.css      (Tailwind import, @theme inline colors, all @keyframes, utility classes)
│   │   ├── layout.tsx       (metadata with OG tags, Geist fonts, favicon link)
│   │   └── page.tsx         (imports and renders all section components)
│   ├── components/
│   │   ├── Navigation.tsx   (client — scroll tracking, mobile menu, active section)
│   │   ├── Hero.tsx         (client — typing effect, mount animation)
│   │   ├── AnimateOnScroll.tsx (client — IntersectionObserver wrapper)
│   │   ├── AnimatedCounter.tsx (client — counts from 0 to value on scroll)
│   │   ├── About.tsx        (client — uses AnimatedCounter)
│   │   ├── Experience.tsx   (client — accordion state)
│   │   ├── Projects.tsx     (client — modal state, escape key handler)
│   │   ├── Publication.tsx  (server component)
│   │   ├── Skills.tsx       (client — tab state)
│   │   ├── Awards.tsx       (server component)
│   │   ├── Contact.tsx      (client — for AnimateOnScroll wrapper usage)
│   │   └── Footer.tsx       (server component)
│   └── data/
│       └── portfolio.ts     (ALL content — personal, education, experience, projects, skills, etc.)
├── .github/
│   └── workflows/
│       └── deploy.yml       (GitHub Pages auto-deploy via actions/deploy-pages)
├── next.config.ts           (output: "export", images: { unoptimized: true })
├── package.json
├── tsconfig.json
└── README.md                (setup + deploy instructions)
```

---

## CRITICAL REQUIREMENTS

1. **ALL text content lives in `src/data/portfolio.ts`** — components only import and render, never hardcode content
2. **Every component is complete** — no TODOs, no placeholders, no "implement this later"
3. **Responsive at every breakpoint** — test mental model: 375px (phone), 768px (tablet), 1280px (desktop)
4. **Static export works** — `npm run build` must succeed with `output: "export"`, no server-side features (no API routes, no server actions, no dynamic routes)
5. **Accessibility** — proper aria-labels on icon buttons, semantic HTML (nav, main, section, footer), keyboard-navigable modal (Escape to close)
6. **SEO** — `<title>Adarsh Lal Anilal | Industrial Engineer Portfolio</title>`, meta description, Open Graph tags, keywords
7. **Favicon** — SVG with "AA" initials on navy background, linked in layout.tsx
8. **GitHub Actions workflow** — auto-deploys `out/` to GitHub Pages on push to main

## WHAT SUCCESS LOOKS LIKE

When done, I should be able to:
1. `npm install && npm run dev` → see it locally, fully interactive
2. `npm run build` → clean static export, zero errors
3. Push to GitHub → auto-deploys to GitHub Pages
4. Share URL with recruiters → they're impressed, site feels premium and custom
5. Update any content by editing `src/data/portfolio.ts` — nothing else needs to change

**Build every file. Every component. Fully functional. Don't scaffold — finish.**
