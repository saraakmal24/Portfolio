export const socials = {
  email: 'sara.akmal.741@gmail.com',
  phone: '+92 347 497 8835',
  github: 'https://github.com/saraakmal24',
  linkedin: 'https://linkedin.com/in/sara-akmal2482',
  location: 'Lahore, Pakistan',
};

export const projects = [
  {
    title: 'NexaMed — AI Medical Triage System',
    tag: 'Capstone · Flagship',
    summary: 'Patient risk-stratification pipeline achieving sub-30-second triage via computer vision + agentic decision workflows.',
    bullets: ['FastAPI microservices with real-time Firebase sync powering a live React clinician dashboard.', 'End-to-end: CV inference → agentic routing → clinician UI.'],
    tech: ['Python', 'Agentic AI', 'Computer Vision', 'FastAPI', 'React', 'Firebase'],
    repo: 'https://github.com/saraakmal24/nexamed',
    featured: true,
  },
  {
    title: 'Agentic-SAM 2 — Spatio-Temporal Tracking',
    tag: 'Research · Computer Vision',
    summary: 'Extended Meta\u2019s SAM 2 with agentic workflows + XAI transparency for frame-level segmentation auditing.',
    bullets: ['Eliminated 100% of manual frame annotation.'],
    tech: ['Python', 'Meta SAM 2', 'GenAI', 'XAI', 'OpenCV'],
    repo: 'https://github.com/saraakmal24/agentic-sam2',
  },
  {
    title: 'AIML Bot with Neo4j Knowledge Graph',
    tag: 'Graph-RAG',
    summary: 'Graph-retrieval augmentation over a Neo4j knowledge graph — the RAG system of this portfolio\u2019s story.',
    bullets: ['+40% contextual answer precision vs keyword matching across 1,000+ benchmark queries.'],
    tech: ['Python', 'AIML', 'Neo4j', 'NLP', 'Prolog'],
    repo: 'https://github.com/saraakmal24/AIML-Bot-with-Prolog-and-Neo4j',
  },
  {
    title: 'FinCalc Pro — Smart Interest & Loan Planner',
    tag: 'Full-Stack Web',
    summary: 'Client-side financial analytics SPA: simple/compound interest, EMI algorithms, Chart.js visuals, PDF export.',
    bullets: ['LocalStorage history + Financial Health Scoring with 100% offline data privacy.'],
    tech: ['JavaScript (ES6+)', 'HTML5', 'CSS3', 'Chart.js', 'LocalStorage'],
    repo: 'https://github.com/saraakmal24/fincalc-pro',
  },
];

export const skills = [
  { icon: 'code', label: 'Languages', items: ['Python', 'C++', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'SQL', 'Bash'] },
  { icon: 'cpu', label: 'AI & ML', items: ['Machine Learning', 'Deep Learning', 'Computer Vision', 'NLP', 'Generative AI', 'Agentic AI', 'RAG / Graph-RAG', 'Scikit-learn', 'TensorFlow / Keras', 'OpenCV', 'NLTK', 'Pandas', 'NumPy'] },
  { icon: 'globe', label: 'Frameworks & Web', items: ['React', 'Next.js', 'Vite', 'FastAPI', 'Node.js', 'Express.js', 'Firebase', 'REST APIs', 'Chart.js'] },
  { icon: 'db', label: 'Tools & Databases', items: ['Git', 'GitHub', 'Jupyter', 'VS Code', 'Neo4j', 'MySQL', 'Weka', 'Power BI', 'Tableau'] },
];

export const experience = [
  {
    role: 'Teaching Assistant — AI & Mathematics', org: 'UMT Lahore', period: '2024 — Present',
    points: [
      'TA for Machine Learning, Deep Learning, Linear Algebra & Differential Equations.',
      'Run problem sessions connecting calculus & linear algebra to backprop, attention and optimization intuition.',
      'Mentor students through ML/DL labs, office hours and exam preparation.',
    ],
  },
  {
    role: 'Junior Web Developer', org: 'Kings Chiller Restaurant, Alipur', period: 'Jan — Jun 2023',
    points: [
      'Shipped 10+ UI features in HTML/CSS/JS, driving a 25% increase in online customer engagement.',
      'Ensured full cross-browser compatibility.',
    ],
  },
];

export const leadership = [
  { role: 'Academic Peer Tutor — Chinese', org: 'UMT Lahore', period: 'Feb — Jul 2026', points: ['Tutored 40+ undergraduates; improved average comprehension scores by 20%.'] },
  { role: 'Community Outreach Lead', org: 'Al-Khidmat Foundation', period: 'Jun — Sep 2024', points: ['Directed 15+ volunteers across 5+ drives serving 500+ residents.'] },
  { role: 'Youth Delegate', org: 'NSLA 2026 & Al-Khidmat Youth Gathering', period: 'Jan — May 2026', points: ['Selected among <50 national delegates for leadership forums in Lahore.'] },
];

export const certifications = [
  { name: 'Machine Learning with Python', issuer: 'IBM · Coursera' },
  { name: 'Google AI Essentials', issuer: 'Google · Coursera' },
  { name: 'Generative AI Fundamentals', issuer: 'Google Skills Boost' },
  { name: 'Claude 101 & Claude Code 101', issuer: 'Anthropic' },
  { name: 'Computer Vision Basics', issuer: 'Coursera' },
  { name: 'Azure AI Fundamentals', issuer: 'Microsoft Learn' },
  { name: 'Azure AI: Document Intelligence & Knowledge Mining', issuer: 'Microsoft Learn' },
  { name: 'Azure AI: Generative AI & AI Overview', issuer: 'Microsoft Learn' },
  { name: 'Data Analytics Job Simulation', issuer: 'Deloitte · Forage' },
  { name: 'Nexus AI Quiz Ignite 2026', issuer: 'Nexus · Unstop' },
];