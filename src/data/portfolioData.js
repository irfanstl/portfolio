// Static portfolio data fallback for standalone frontend deployment

export const staticSkills = [
  {
    title: 'Frontend Development',
    icon: 'Code',
    skills: [
      { name: 'React.js', pct: 90 },
      { name: 'JavaScript', pct: 85 },
      { name: 'HTML5/CSS3', pct: 95 },
      { name: 'Tailwind CSS', pct: 90 }
    ],
    tags: ['Vite', 'CSS Modules', 'WebSockets', 'Responsive UI', 'React Hooks']
  },
  {
    title: 'Backend & Databases',
    icon: 'Server',
    skills: [
      { name: 'Node.js', pct: 85 },
      { name: 'Express.js', pct: 80 },
      { name: 'MongoDB', pct: 75 },
      { name: 'MySQL', pct: 70 }
    ],
    tags: ['RESTful API', 'MERN Stack', 'Mongoose ODM', 'PL/SQL', 'Database Normalization']
  },
  {
    title: 'DevOps & Systems',
    icon: 'Wrench',
    skills: [
      { name: 'Ubuntu Server', pct: 80 },
      { name: 'Nginx', pct: 75 },
      { name: 'Firebase', pct: 85 },
      { name: 'Python', pct: 75 }
    ],
    tags: ['PM2', 'Cloudflare Tunnels', 'SSL Certification', 'Reverse Proxy', 'Linux Shell']
  }
];

export const staticEducation = [
  {
    degree: 'Bachelor of Engineering (B.E.) in Information Technology',
    institution: 'International Institute of Information Technology (I2IT)',
    period: '2022 - 2026',
    grade: 'Active Student',
    courses: [
      'Systems Analysis',
      'Software Engineering Methodologies',
      'Scalable Database Systems'
    ]
  }
];

export const staticProjects = [
  {
    id: 'proj-1',
    title: 'E-Commerce Platform',
    tagline: 'A secure, high-throughput online store featuring dynamic inventory, integrated payment pipelines, and automated bot prevention.',
    img: '/assets/project_ecom.png',
    desc: 'Implemented secure payment processing using the Razorpay API with robust webhook handling for transaction verification. Integrated Google reCAPTCHA on authentication and checkout routes to mitigate brute-force attacks and automated bot spam. Designed a relational architecture in MySQL / flexible document layout in MongoDB to manage complex product catalogs, user sessions, and order history.',
    stack: ['React', 'Node.js', 'Razorpay', 'reCAPTCHA', 'Tailwind CSS'],
    metrics: {
      performance: 'Razorpay API webhooks',
      conversion: 'Google reCAPTCHA bot mitigation',
      dbSpeed: 'MySQL relational structure'
    },
    challenge: 'Preventing automated bot spam during checkouts and establishing robust transaction validation.',
    solution: 'Configured Cloudflare DNS and reCAPTCHA score thresholds on Express endpoints alongside strict Razorpay webhook signatures.',
    github: 'https://github.com/irfanstl',
    demo: 'https://mangobite.irfan28.shop/'
  },
  {
    id: 'proj-2',
    title: 'Food Delivery Site',
    tagline: 'A real-time food delivery application with distinct user flows, state-managed shopping carts, and persistent backend storage.',
    img: '/assets/project_dashboard.png',
    desc: 'Engineered a seamless, lightning-fast frontend cart state using React Hooks and styled with Tailwind CSS. Utilized Firebase for rapid user authentication and real-time backend updates. Constructed a RESTful API with Express.js and Node.js to manage restaurant menus, order statuses, and user profiles.',
    stack: ['React', 'Express.js', 'Firebase', 'Tailwind CSS', 'MongoDB'],
    metrics: {
      dataHandling: 'React Hooks state engine',
      efficiency: 'Firebase User Authentication integration',
      uptime: 'Express menu router'
    },
    challenge: 'Constructing dynamic menu state updates alongside instant checkout response loops.',
    solution: 'Developed localized reducer structures inside React context to manage active cart updates without page refreshes.',
    github: 'https://github.com/irfanstl',
    demo: 'https://nexus.irfan28.shop/'
  }
];

export const staticGallery = [
  {
    id: 'gal-1',
    title: 'Community Engagement Exhibition',
    category: 'Certificates',
    img: '/assets/cert_community_engagement.jpg',
    desc: 'Certificate of Achievement for participating in the "Community Engagement Project Exhibition" organized by ITSA & ACM Student Chapter at I2IT.'
  },
  {
    id: 'gal-2',
    title: 'Introduction to Computer Networking',
    category: 'Certificates',
    img: '/assets/cert_computer_networking.jpg',
    desc: 'Certificate of Completion for the "Introduction to the Computer Networking" online course by Simplilearn SkillUp.'
  }
];
