import { RightArrowIcon, FacebookIcon, EmailIcon } from '../app/components/icons/IconPack';
import type { Project } from '@/types/project';

export const pages = [
  { name: "About", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Experience", href: "/experience" },
];

export const items = [
  { text: 'CPP - Advanced Programming in C++', paragraph: 'Cisco Networking Academy' },
  { text: 'CPA - Programming Essentials in C++', paragraph: 'Cisco Networking Academy' },
  { text: 'DevNet Associate', paragraph: 'Cisco Networking Academy' },
];

export const recommendationsGroups = [
  [
    { image: '/testimonial/img-1.png', name: 'Hans Kristensen Esguerra', position: 'Technical Project Manager at Concentrix Philippines.', text: '“Lloyd is an impressive junior developer whose creativity and problem-solving abilities continuously surprise me. His dedication to producing high-quality work and his knack for tackling complex challenges make him a standout in any project. I’m confident he’ll excel in any development role he pursues.”' },
    { image: '/testimonial/img-2.png', name: 'Justin Louise Neypes', position: 'Professor at AMA University.', text: '“Lloyd combines a strong technical foundation with an eagerness to learn and explore new tools and methodologies. He also demonstrated a natural ability to collaborate, contributing significantly to team efforts. His passion for growth and problem-solving is evident in every project, showing a clear commitment to both personal and professional development.”' },
  ],
  [
    { image: '/testimonial/img-3.png', name: 'Myro Mera', position: 'Junior Programmer at TemaroTech', text: '“Lloyd is not only a brilliant programmer but also a dependable teammate. In every competition, he brings sharp logic, calm focus, and a positive attitude that lifts the whole team. Working with him has been both inspiring and fun.”' },
    { image: '/testimonial/img-4.png', name: 'King Dranreb Languido', position: 'Lead Full Stack Engineer at Collabera Digital.', text: '“Lloyd has been an invaluable asset on multiple successful projects. He brings strong technical skills, a proactive approach to problem-solving, and a dedication that drives results. I highly recommend his work and know he will excel in any future role.”' },
  ],
  [
    { image: '/testimonial/img-5.png', name: 'Ella Mariz Punzalan ', position: 'Library Technician at AMA University', text: '“Although I have limited knowledge in IT, having Lloyd as my intern has significantly eased my clerical tasks. Whenever I need assistance, he is always there to help me. Moreover, I am grateful for his friendship, especially since I am new to AMA University. Thank you for your moral support, and congratulations on your well-deserved graduation!”' },
    { image: '/testimonial/img-6.png', name: 'Andrew Robin', position: 'Computer Programmer at LGU SJDM Bulacan', text: '“Lloyd is an excellent junior developer combines strong foundational skills with a growth mindset, quickly adapting to new technologies, writing clean and efficient code, and actively contributing to team success through collaboration and continuous learning.”' },
  ],
];

export const techStack = [
  "JavaScript",
  "React",
  "Vite",
  "Next.js",
  "TypeScript",
  "Node.js",
  "jQuery",
  "AJAX",
  "Tensorflow.js",
  "Teachable Machine",
  "PHP",
  "Laravel",
  "WAMP",
  "MySQL",
  "Tailwind",
  "Boostrap",
  "Material UI",
  "HTML5",
  "CSS3",
  "Vercel",
  "Netlify",
  "Figma",
  "GitHub",
  "Git"
];

export const contactOptions = [
  {
    label: 'lloydlanguido@gmail.com',
    href: 'mailto:lloydlanguido@gmail.com',
    textStyle: 'lowercase',
    fontSize: '0.7rem',
    showIcon: true,
    icon: <EmailIcon sx={{ fontSize: '1rem' }} />,
    subText: 'Feel free to ask.',
  },
  {
    label: 'Schedule a call.',
    href: 'https://calendly.com/lloydlanguido/30min',
    textStyle: 'none',
    fontSize: '0.7rem',
    showIcon: true,
    icon: <RightArrowIcon sx={{ fontSize: '1rem' }} />,
    subText: "Let's Talk",
  },
  {
    label:
      'Feel free to ask me anything about programming, web development, or my experiences in tech. Let me know how I can help.',
    href: 'mailto:lloydlanguido@gmail.com',
    textStyle: 'none',
    fontSize: '0.7rem',
    showIcon: false,
    icon: false,
    subText: 'Get in touch.',
  },
];

export const lazyOptions = [
  {
    label: 'harrri.lazydevs@gmail.com',
    href: 'mailto:harrri.lazydevs@gmail.com',
    textStyle: 'none',
    fontSize: '0.7rem',
    subText: 'Contact us.',
    showIcon: true,
    icon: <EmailIcon sx={{ fontSize: '1rem' }} />,
  },
  {
    label: 'Lazy Developers',
    href: 'https://www.facebook.com/profile.php?id=100069560336398',
    textStyle: 'none',
    fontSize: '0.7rem',
    subText: 'Facebook',
    showIcon: true,
    icon: <FacebookIcon sx={{ fontSize: '1rem' }} />,
  },
  {
    label: 'Lazy Developers, a small team focused on building and deploying small-scale web projects for real-world use, delivering functional apps and tools for clients and online users.',
    href: '#',
    textStyle: 'none',
    fontSize: '0.7rem',
    subText: "I'm a member of",
    showIcon: false,
    icon: false,
  },
];

export const certificate = [
  {
    text: 'CPP - Advanced Programming in C++',
    paragraph: 'Cisco Networking Academy',
    badgeImage: '',
    badgeLink: '',
    downloadBtn: '/certification/CPP - Advanced Programming in C++.pdf'
  },
  {
    text: 'CPA - Programming Essentials in C++',
    paragraph: 'Cisco Networking Academy',
    badgeImage: '',
    badgeLink: '',
    downloadBtn: '/certification/CPA - Programming Essentials in C++.pdf'
  },
  {
    text: 'DevNet Associate',
    paragraph: 'Cisco Networking Academy',
    badgeImage: '/certification/img-2.png',
    badgeLink: 'https://www.credly.com/badges/ca60dd11-f8bd-4f7b-8de5-a950db314e8b/public_url',
    downloadBtn: '/certification/DevNet Associate.pdf'
  },
  {
    text: 'CCNAv7: Introduction to Networks',
    paragraph: 'Cisco Networking Academy',
    badgeImage: '/certification/img-8.png',
    badgeLink: 'https://www.credly.com/badges/bae858a6-b85e-44bf-bb16-bddca0720e39/public_url',
    downloadBtn: '/certification/Introduction to Networks.pdf'
  },
  {
    text: 'Network Security',
    paragraph: 'Cisco Networking Academy',
    badgeImage: '/certification/img-7.png',
    badgeLink: 'https://www.credly.com/badges/7c20cadc-b942-47fa-9e57-fe8d4befa9bf/public_url',
    downloadBtn: '/certification/Network Security.pdf'
  },
  {
    text: 'Emerging Technologies Workshop - Model Driven Programmability',
    paragraph: 'Cisco Networking Academy',
    badgeImage: '',
    badgeLink: '',
    downloadBtn: '/certification/Emerging_Technologies_Workshop_-_Model_Driven_Programmability_certificate.pdf'
  },
  {
    text: 'JavaScript Essentials 1',
    paragraph: 'Cisco & OpenEDJ Institute',
    badgeImage: '/certification/img-1.png',
    badgeLink: 'https://www.credly.com/badges/3d46908c-feaa-4dcb-9924-5c756f45714b/public_url',
    downloadBtn: '/certification/JavaScript Essentials 1.pdf'
  },
  {
    text: 'Introduction to Cybersecurity',
    paragraph: 'Cisco Networking Academy',
    badgeImage: '/certification/img-5.png',
    badgeLink: 'https://www.credly.com/badges/fa8795ee-f246-492b-b658-343d958c28f4/public_url',
    downloadBtn: '/certification/Introduction to Cybersecurity.pdf'
  },
  {
    text: 'CCNAv7: Switching, Routing, and Wireless Essentials',
    paragraph: 'Cisco Networking Academy',
    badgeImage: '/certification/img-6.png',
    badgeLink: 'https://www.credly.com/badges/a87ee30c-0450-49c8-8a8d-d3d3365b793e/public_url',
    downloadBtn: '/certification/Switching, Routing, and Wireless Essentials.pdf'
  },
  {
    text: 'CCNA: Enterprise Networking, Security & Automation',
    paragraph: 'Cisco Networking Academy',
    badgeImage: '/certification/img-4.png',
    badgeLink: 'https://www.credly.com/badges/3b144662-b92a-46c0-9ef0-a5e996272736/public_url',
    downloadBtn: '/certification/Enterprise Networking, Security, and Automation.pdf'
  },
  {
    text: 'Cybersecurity Essentials',
    paragraph: 'Cisco Networking Academy',
    badgeImage: '/certification/img-3.png',
    badgeLink: 'https://www.credly.com/badges/c57eacd4-fcd9-444c-a608-3963290fbdd8/public_url',
    downloadBtn: '/certification/Cybersecurity Essentials.pdf'
  },

  {
    text: 'AMA University - Internship',
    paragraph: 'AMA University',
    badgeImage: '',
    badgeLink: '',
    downloadBtn: '/certification/OJT COC - LLOYD S. NIM .pdf'
  },
];

export const timelineData = [
  {
    date: 'May 2025',
    type: 'Collaborative Freelancing',
    title: 'Delta Xi-Upsilon (DXU)',
    description: 'Delta Xi-Upsilon (DXU) is a dynamic Sports Event Management and E-commerce platform built using Next.js framework. Designed to streamline club activities, event organization, and inter-club competitions, the system also integrates an efficient ordering system for merchandise and event-related products.',
  },
  {
    date: 'April 2025',
    type: 'Freelance',
    title: 'IPCR System for RTU Employees',
    description: 'Developed a web-based Individual Performance Commitment and Review system using PHP. Integrated PHPMailer for automated email notifications and PhpSpreadsheet for Excel report generation. Improved HR efficiency by digitizing submissions and performance tracking.',
  },
  {
    date: 'Feb 2025',
    type: 'Freelance',
    title: 'Quezon City Academy Foundation (QCA)',
    description: 'Developed a School Equipment Borrowing System for Quezon City Academy Foundation. The system allowed staff and students to request and track tool loans efficiently.',
  },
  {
    date: 'Nov 2024',
    type: 'Internship',
    title: 'AMA University',
    description: 'Developed and designed a School Library Management System to manage book inventory, borrowing, and returns. Handled both frontend and backend development, ensuring smooth user interaction and efficient data handling for library staff and students.',
  },

  {
    date: '2023',
    type: 'Competition',
    title: 'APPCON 2023',
    description: 'Led the backend development team in a competition project called Flood Monitor AI, a web application aimed at addressing flood-related challenges in the Philippines. Focused on building scalable backend infrastructure to support real-time data processing and community alerts, contributing to disaster preparedness and public safety.',
  },

  {
    date: '2022',
    type: 'Collaborative Freelancing',
    title: 'MLQU University',
    description: 'Worked as a front-end Developer under lazy developers, a School Management System for MLQU University. Focused on UI/UX design, developing clean and responsive user interfaces contributed to improving user experience and usability across key modules like student records, schedules, and admin dashboards.',
  },

  {
    date: '2021',
    type: 'Collaborative Freelancing',
    title: 'Lazy Developers',
    description: 'Collaborated with a team called Lazy devs, focused on creating and building small-scale web projects tailored for real-world use. Handled both development and deployment, contributing to building and selling functional apps and tools for clients and online users.',
  },
];

export const mockProjects: Project[] = [
  {
    id: 1,
    title: "Dental Appointment Scheduling System",
    description: "lorem ipsum",
    image: ['./projects/img-1.png', './projects/img-3.png'],
    techStack: ["PHP", "MySQL", "AJAX", "jQuery", "Bootstrap", "PHPMailer", "Chart.js", "Hostinger"],
    size: "large"
  },
  {
    id: 2,
    title: "RTU IPCRs",
    description: "lorem ipsum",
    image: "./projects/img-3.png",
    techStack: ["PHP", "MySQL", "AJAX", "jQuery", "Bootstrap", "PHPMailer", "PHPSpreadsheet", "Chart.js", "Hostinger"],
    size: "large"
  },
  {
    id: 3,
    title: "Subnet IPv4 Calculator",
    description: "lorem ipsum",
    image: "./projects/img-5.png",
    techStack: ["Boostrap", "React", "Vite", "Netlify"],
    size: "small"
  },
  {
    id: 4,
    title: "Beautyshine",
    description: "lorem ipsum",
    image: "./projects/img-2.png",
    techStack: ["Next.js", "Node.js", "MongoDB", "Tailwind", "Vercel",],
    size: "small"
  },
  {
    id: 5,
    title: "Gusstenberg",
    description: "lorem ipsum",
    image: "./projects/img-4.png",
    techStack: ["Java", "SWT", "SQLite"],
    size: "small"
  },
  {
    id: 6,
    title: "QCA Foundation",
    description: "lorem ipsum",
    image: "./projects/img-6.png",
    techStack: ["PHP", "MySQL", "AJAX", "jQuery", "Bootstrap", "PHPMailer", "Chart.js", "Hostinger"],
    size: "small"
  },
  {
    id: 7,
    title: "Kōhī",
    description: "lorem ipsum",
    image: "./projects/img-8.png",
    techStack: ["PHP", "MySQL", "AJAX", "jQuery", "Bootstrap", "PayPal SDK"],
    size: "large"
  },
  {
    id: 8,
    title: "Ti-Tech",
    description: "lorem ipsum",
    image: "./projects/img-7.png",
    techStack: ["PHP", "MySQL", "AJAX", "jQuery", "Tailwind", "PayPal SDK"],
    size: "large"
  },
];
