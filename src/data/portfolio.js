// ============================================================
//  Single source of truth for all portfolio content.
//  Edit values here to update the site — no component edits needed.
// ============================================================

export const profile = {
  name: 'Chandan',
  role: 'Full Stack Developer · Software Engineer',
  focus: 'AI / GenAI focus',
  tagline:
    'I build full-stack web apps and citation-grounded RAG systems — blending React, Node & FastAPI with modern GenAI.',
  location: 'Delhi, India',
  email: 'yadavchandan6103@gmail.com',
  phone: '+91-8448301584',
  resumeUrl: '/Chandan_Resume.pdf', // drop your PDF into /public with this name
  socials: {
    github: 'https://github.com/yadavchandan84',
    linkedin: 'https://www.linkedin.com/in/chandan-yadav-89aaa3253/',
    leetcode: 'https://leetcode.com/u/Chandan_8448/',
    email: 'mailto:yadavchandan6103@gmail.com',
  },
}

export const about = {
  heading: 'About Me',
  paragraphs: [
    'I\u2019m a B.Tech student at Delhi Technological University (DTU), majoring in Electronics with a minor in Computer Science (CGPA 7.58, 2022\u20132026).',
    'I\u2019m a full-stack developer experienced in building web apps with React.js, Node.js, and Express.js, with growing expertise in AI/GenAI and RAG-based systems. I enjoy turning complex retrieval and generation problems into clean, reliable products.',
    'When I\u2019m not shipping features, I\u2019m grinding algorithms \u2014 1000+ problems solved and a LeetCode Knight badge to show for it.',
  ],
  quickFacts: [
    { label: 'University', value: 'DTU (2022\u20132026)' },
    { label: 'Major', value: 'Electronics + CS Minor' },
    { label: 'CGPA', value: '7.58' },
    { label: 'Focus', value: 'Full Stack · GenAI / RAG' },
  ],
}

export const experience = [
  {
    company: 'Fivo Technology',
    role: 'Full Stack Intern',
    mode: 'Hybrid',
    period: 'Jul 2025 \u2013 Dec 2025',
    points: [
      'Developed and enhanced 10+ full-stack web features using React.js, Node.js, and Express.js.',
      'Built and integrated 15+ REST APIs for authentication, user workflows, and data management.',
      'Built responsive, reusable frontend components with React.js and Tailwind CSS, improving UX by 30%.',
      'Handled database management and full-stack integration, supporting 100+ users.',
      'Contributed to AI/GenAI and RAG-based apps, processing 10K+ documents (chunking, embeddings, vector search, LLMs), improving retrieval efficiency by 30%.',
    ],
  },
]

export const projects = [
  {
    name: 'Blogify',
    tagline: 'Full-stack blogging platform with secure auth & RBAC',
    featured: true,
    description:
      'A production-grade blogging platform with a secure authentication pipeline, role-based access control, and optimized cloud media storage.',
    highlights: [
      'Secure auth pipeline with JWT (HTTP-only cookies) + Google OAuth via Firebase.',
      'Role-Based Access Control (RBAC) \u2014 authors manage their own blogs; scalable admin moderation.',
      'Cloudinary + Multer for optimized, cloud-based media storage.',
    ],
    stack: [
      'React.js', 'Tailwind CSS', 'Flowbite-React', 'Node.js', 'Express.js',
      'MongoDB', 'JWT', 'Firebase', 'Cloudinary', 'Multer', 'Redux Toolkit',
    ],
    github: 'https://github.com/yadavchandan84',
    demo: '',
    accent: 'from-teal-400 to-cyan-500',
  },
  {
    name: 'LexScope-GraphRAG',
    tagline: 'End-to-end GraphRAG for legal & tax document research',
    featured: true,
    description:
      'A citation-grounded RAG system for legal and tax documents combining vector search, a knowledge graph, and cross-encoder reranking to minimize hallucinations.',
    highlights: [
      'End-to-end RAG for legal/tax research (FastAPI, Qdrant, Neo4j, Gemini) with citation-grounded Q&A from PDFs.',
      'Hybrid retrieval: BGE Embeddings, BM25, Reciprocal Rank Fusion (RRF), Cross-Encoder Reranking, graph-based citation expansion.',
      'Ingestion pipeline: PyMuPDF, structure-aware chunking, metadata extraction, citation verification guardrail to reduce hallucinations.',
    ],
    stack: [
      'Python', 'FastAPI', 'Qdrant', 'Neo4j AuraDB', 'Gemini API', 'PyMuPDF',
      'BGE Embeddings', 'BM25', 'RRF', 'Ragas', 'pytest',
    ],
    github: 'https://github.com/yadavchandan84',
    demo: '',
    accent: 'from-emerald-400 to-teal-500',
  },
  {
    name: 'Netflix Clone',
    tagline: 'Streaming UI clone with dynamic movie data',
    featured: true,
    description:
      'A responsive Netflix-style streaming interface featuring dynamic content rows, hero banners, and a polished browsing experience.',
    highlights: [
      'Pixel-inspired Netflix UI with hero banner, category rows, and hover previews.',
      'Dynamic movie/show data with responsive, mobile-first layouts.',
      'Reusable React components and smooth carousel interactions.',
    ],
    stack: ['React.js', 'JavaScript', 'CSS', 'REST APIs'],
    github: 'https://github.com/yadavchandan84',
    demo: '',
    accent: 'from-rose-500 to-red-600',
  },
  {
    name: 'Automatic Image Captioning',
    tagline: 'Deep learning image-to-text (Encoder\u2013Decoder)',
    featured: false,
    description:
      'A deep learning model that generates human-like captions for images using a CNN encoder and an LSTM decoder.',
    highlights: [
      'Encoder\u2013Decoder architecture: pretrained ResNet50 CNN + LSTM RNN.',
      'Processed the Flickr8k dataset (preprocessing, tokenization, vocabulary, padding).',
      'Achieved 92%+ validation accuracy on caption quality.',
    ],
    stack: ['Python', 'TensorFlow', 'Keras', 'NumPy', 'Pandas', 'NLTK', 'Matplotlib'],
    github: 'https://github.com/yadavchandan84',
    demo: '',
    accent: 'from-indigo-400 to-purple-500',
  },
  {
    name: 'Wafer Map Defect Classification',
    tagline: 'PyTorch CNN research \u00b7 IEEE IECS 2026',
    featured: false,
    description:
      'WaferCNN, a CNN classifier for semiconductor wafer-map defect patterns, accepted for oral presentation at IEEE IECS 2026.',
    highlights: [
      'CNN classifier on the WM-811K dataset reaching a macro F1 of 0.917.',
      'Class-weighted loss and targeted augmentation for severe class imbalance.',
      'Paper accepted for oral presentation at IEEE IECS 2026 (Paper ID 2328).',
    ],
    stack: ['Python', 'PyTorch', 'CNN', 'NumPy', 'Pandas'],
    github: 'https://github.com/yadavchandan84',
    demo: '',
    accent: 'from-amber-400 to-orange-500',
  },
]

export const skills = [
  {
    group: 'Languages',
    items: ['Python', 'C', 'C++', 'JavaScript', 'SQL'],
  },
  {
    group: 'Full Stack',
    items: ['React.js', 'Node.js', 'Express.js', 'FastAPI', 'REST APIs', 'Tailwind CSS', 'Redux Toolkit'],
  },
  {
    group: 'Databases',
    items: ['MySQL', 'MongoDB', 'Neo4j', 'Qdrant'],
  },
  {
    group: 'AI / GenAI / ML',
    items: [
      'TensorFlow', 'Keras', 'NumPy', 'Pandas', 'LangChain', 'RAG',
      'BGE Embeddings', 'BM25', 'RRF', 'Cross-Encoder Reranking', 'Gemini API',
    ],
  },
  {
    group: 'Cloud & Tools',
    items: ['Git', 'GitHub', 'Docker (basics)', 'AWS (basics)', 'Azure (basics)', 'Postman'],
  },
]

export const achievements = [
  {
    title: 'LeetCode Knight Badge',
    detail: 'Top ~5% \u00b7 Peak Rating 1874 \u00b7 1000+ problems solved across LeetCode, GFG, InterviewBit & CodeChef.',
    tag: 'Competitive',
  },
  {
    title: 'Rank 304 / 25,000+',
    detail: 'LeetCode Weekly Contest 493 \u2014 top-tier finish demonstrating strong DSA skills.',
    tag: 'Contest',
  },
  {
    title: 'HackerRank Certified',
    detail: 'Python & Problem Solving certifications.',
    tag: 'Certification',
  },
  {
    title: 'OCI Generative AI Professional',
    detail: 'Oracle Cloud Infrastructure 2025 Certified Generative AI Professional.',
    tag: 'Certification',
  },
  {
    title: 'OCI ML & Deep Learning Professional',
    detail: 'Oracle Cloud Infrastructure 2025 Certified Machine Learning & Deep Learning Professional.',
    tag: 'Certification',
  },
]

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
]
