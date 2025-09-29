import { RightArrowIcon, FacebookIcon, EmailIcon } from '../app/components/icons/IconPack';
import type { Project } from '@/types/project';

export const pages = [
  { name: "About", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Experience", href: "/experience" },
];

export const items = [
  {
    text: 'JSE2 - JavaScript Essentials 2',
    paragraph: 'Cisco & JS Institutee',
    image: '/certification/img-9.png',

  },
  {
    text: 'JSE - JavaScript Essentials 1',
    paragraph: 'Cisco & OpenEDJ Institute',
    image: '/certification/img-1.png',
  },
  {
    text: 'DevNet Associate',
    paragraph: 'Cisco Networking Academy',
    image: '/certification/img-2.png',
  },
  {
    text: 'Introduction to Cybersecurity',
    paragraph: 'Cisco Networking Academy',
    image: '/certification/img-5.png',
  },
];

export const recommendationsGroups = [
  [
    { image: '/testimonial/img-1.png', name: 'Hans Kristensen Esguerra', position: 'Technical Project Manager at Concentrix Philippines.', text: '“Lloyd is an impressive junior developer whose creativity and problem-solving abilities continuously surprise me. His dedication to producing high-quality work and his knack for tackling complex challenges make him a standout in any project. I’m confident he’ll excel in any development role he pursues.”' },
    { image: '/testimonial/img-2.png', name: 'Justin Louise Neypes', position: 'Professor at AMA University.', text: '“Lloyd combines a strong technical foundation with an eagerness to learn and explore new tools and methodologies. He also demonstrated a natural ability to collaborate, contributing significantly to team efforts. His passion for growth and problem-solving is evident in every project, showing a clear commitment to both personal and professional development.”' },
  ],
  [
    { image: '/testimonial/img-3.png', name: 'Myro Mera', position: 'Junior Programmer at TemaroTech', text: '“Lloyd is not only a brilliant programmer but also a dependable teammate. In every competition, he brings sharp logic, calm focus, and a positive attitude that lifts the whole team. Working with him has been both inspiring and fun.”' },
    { image: '/testimonial/img-4.png', name: 'King Dranreb Languido', position: 'Technical Project Manager at Collabera Digital.', text: '“Lloyd has been an invaluable asset on multiple successful projects. He brings strong technical skills, a proactive approach to problem-solving, and a dedication that drives results. I highly recommend his work and know he will excel in any future role.”' },
  ],
  [
    { image: '/testimonial/img-5.png', name: 'Ella Mariz Punzalan', position: 'Library Technician at AMA University', text: '“Although I have limited knowledge in IT, having Lloyd as my intern has significantly eased my clerical tasks. Whenever I need assistance, he is always there to help me. Moreover, I am grateful for his friendship, especially since I am new to AMA University. Thank you for your moral support, and congratulations on your well-deserved graduation!”' },
    { image: '/testimonial/img-6.png', name: 'Andrew Robin', position: 'Computer Programmer at LGU SJDM Bulacan', text: '“Lloyd is an excellent junior developer combines strong foundational skills with a growth mindset, quickly adapting to new technologies, writing clean and efficient code, and actively contributing to team success through collaboration and continuous learning.”' },
  ],

  [
    { image: '/testimonial/img-7.png', name: 'Steven John Alcera', position: 'Senior QA Tester at Fortune Pay Fintech', text: '“Lloyd is a dedicated developer who consistently delivers quality work on time. He shows great attention to detail and always ensures his code is clean and efficient. His works well with the team and contributes valuable ideas to improve projects.”' },
    { image: '/testimonial/img-8.png', name: 'Glen Raven Dayawon', position: 'Backend Developer at Fortune Pay Fintech', text: '“Lloyd is a skilled and reliable full stack developer. He writes clean, efficient code, communicates well with teammates, and consistently delivers quality work on both frontend and backend tasks. His problem-solving skills and proactive approach make him a valuable asset to any project.”' },
  ],
];

export const techStack = [
  {
    category: "Frontend",
    items: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Vite",
      "jQuery",
      "AJAX",
      "HTML5",
      "CSS3",
      "SCSS",
      "Tailwind",
      "Shadcn",
      "Bootstrap",
      "Material UI",
    ],
  },
  {
    category: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "PHP",
      "Laravel",
      "WAMP",
      "MERN",
      "RESTful",
      "OAuth",
      "JWT",
      "MySQL",
      "MongoDB",
      "SQLite",
    ],
  },
  {
    category: "Machine Learning / AI",
    items: [
      "Tensorflow.js",
      "Teachable Machine",
      "Open AI",
    ],
  },
  {
    category: "Testing & API",
    items: [
      "Jest.js",
      "Postman",
      "Swagger",
    ],
  },
  {
    category: "DevOps & Cloud",
    items: [
      "Vercel",
      "Netlify",
      "Hostinger",
      "GitHub",
      "Gitlab",
      "GitLab CI",
      "Git",
    ],
  },
  {
    category: "Security & Identity",
    items: [
      "AWS IAM",
      "Okta",
      "Auth0",
      "Cognito",
      "Keycloak",
    ],
  },
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
    text: 'JSE2 - JavaScript Essentials 2 ',
    paragraph: 'Cisco & JS Institutee',
    badgeImage: '/certification/img-9.png',
    badgeLink: 'https://www.credly.com/badges/75514c33-c55a-4ccf-a3b1-fb23d1f7ae08/public_url',
    downloadBtn: '/certification/JavaScript_Essentials_2_certificate.pdf'
  },
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
    date: 'Aug 2025',
    type: 'Fulltime',
    title: 'Fortune Pay Fintech',
    description: 'Full Stack Developer with expertise in Node.js, OAuth, AWS, Flutter, and MongoDB. Experienced in managing multiple projects, developing secure and scalable web and mobile applications, and ensuring efficient API integration and testing using Swagger and Jest.',
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
    description: "This web application streamlines dental appointment scheduling while integrating an AI-powered diagnostic feature. Using a Convolutional Neural Network (CNN) trained via Teachable Machine, the AI detects teeth images to detect common conditions such as decay, gingivitis, and malocclusion. Patients receive instant image-based dental insights, recommended actions, and service suggestions—enhancing both accessibility and early detection in oral healthcare.",
    image: ['./projects/Dental/img-1.png', './projects/Dental/img-2.png', './projects/Dental/img-3.png', './projects/Dental/img-4.png', './projects/Dental/img-5.png', './projects/Dental/img-6.png', './projects/Dental/img-7.png'],
    features: [
      "AI-Powered Dental Appointments: An all-in-one system for booking appointments and detecting dental issues a CNN-based image analysis trained with Teachable Machine.",
      "AI Dental Recommendations: Trained via Teachable Machine, the AI model detects dental conditions from images and automatically provides suitable service recommendations along with a suggested appointment date and time.",
      "CNN-Based Severity Classification: Beyond detecting whether a dental condition exists, the CNN model classifies the severity level (e.g., mild, moderate, severe) of decay, staining, or malocclusion—supporting more tailored treatment planning.",
      "Dynamic Time Slot Optimization: The system automatically adjusts available time slots based on dentist workload, real-time cancellations, and AI-predicted appointment durations depending on the complexity of detected conditions.",
      "Confidence-Based Classification Thresholding: To minimize false positives, the system classifies a condition only if the prediction confidence exceeds a set threshold (e.g., 85%). If confidence is low, the system may flag the case as “Uncertain” and prompt for a professional review.",
      "Dental Charting & Treatment Planning: Dentis can create and manage digital dental charts, document conditions, and plan treatments for each patient.",
      "Expense Tracking (Chart.js): Visualizes dental service expenses over time using Chart.js for better financial monitoring and transparency.",
      "Smart Notifications via SIM and Email: The system includes automated SMS (SIM-based) and email notifications. Patients receive real-time updates such as appointment confirmations, reminders, and rescheduling alerts—ensuring they are always informed and prepared. This feature reduces no-shows, improves clinic efficiency, and offers a more professional, reliable patient experience.",
    ],

    techStack: ["PHP", "Teachable Machine", "MySQL", "AJAX", "jQuery", "Bootstrap", "PHPMailer", "Chart.js", "Hostinger"],
    size: "large"
  },
  {
    id: 2,
    title: "RTU IPCRs",
    description: "The Individual Performance Commitment and Review (IPCR) System is a secure and dynamic platform designed to streamline performance evaluation processes within an organization. It automates the generation of IPCR records, sends real-time email notifications upon record updates, and provides live performance tracking for improved transparency. With dedicated access levels for HR personnel, Department Heads, Employees, and the Super Admin, the system ensures efficient management, accountability, and data integrity across all users.",
    image: ["./projects/Rtu/img-1.png", "./projects/Rtu/img-2.png", "./projects/Rtu/img-3.png", "./projects/Rtu/img-4.png", "./projects/Rtu/img-5.png", "./projects/Rtu/img-7.png", "./projects/Rtu/img-6.png", "./projects/Rtu/img-8.png", "./projects/Rtu/img-9.png"],
    features: [
      "PHPSpreadsheet for IPCR Record Handling: Enables efficient creation, formatting, and export of IPCR records in spreadsheet format. ",
      "Role-Based Access Control (RBAC): Separate dashboards and permissions for HR, Department Heads, Employees, and Super Admin to ensure secure and organized workflows.",
      "Live Performance Tracking: Monitor performance metrics and progress updates in real time to aid decision-making and transparency.",
      "Progress-Based Access Restrictions: Certain sections or actions unlock only after completing required steps (e.g., self-assessment before supervisor review), ensuring proper workflow sequence.",
      "Real-Time Notifications: Email alerts are automatically sent to relevant users whenever a record is added, updated, or reviewed.",
      "Audit Trail and Activity Logging: Tracks all user interactions and changes within the system, with complete logs and timestamps to ensure transparency, compliance, and accountability.",
      "Secure Login & Data Protection: Strong authentication system and encrypted data handling ensure information privacy and system integrity",
      "IPCR Status Monitoring: Tracks the status of IPCR submissions, approvals, and evaluations at each level.",
      "Centralized Record Management: Consolidates all IPCR records in a single, searchable database accessible by authorized users.",
      "Data Archiving, Comparison, and Export: Archives previous IPCR records while enabling users to compare past and current performance data. Includes export functionality for downloading reports in spreadsheet format for offline use and documentation."
    ],
    techStack: ["PHP", "MySQL", "AJAX", "jQuery", "Bootstrap", "PHPMailer", "PHPSpreadsheet", "Chart.js", "Hostinger"],
    size: "large"
  },
  {
    id: 3,
    title: "Subnet IPv4 Calculator",
    description: "Subnet IPv4 Calculator: Enter an IP address, desired hosts or subnets, and get detailed results including octets, binary format, network class, subnet mask, CIDR, borrowed bits, subnet increment, network ID, usable host range, broadcast address, and more — everything you need for accurate subnetting",
    image: "./projects/img-5.png",
    features: [
      "Accepts IPv4 input, required number of hosts and required number of subnets",
      "Calculates and displays the correct octets and shows binaryrepresentation of the IP address",
      "Identifies the Network Class (A, B, and C) and Displays New Subnet Binary Format ",
      "Computes the Maximum Number of Hosts per subnet and Maximum Number of Networks",
      "Calculates the Usable Hosts per subnet and displays the Subnet Increment value",
    ],
    techStack: ["Boostrap", "React", "Vite", "Netlify"],
    size: "small"
  },
  {
    id: 4,
    title: "Beautyshine",
    description: "Beautéshine cosmetics is a modern web-based application designed to bring you closer to your beauty goals with just a few clicks. Whether you're shopping for high-quality skincare, makeup essentials, or exclusive beauty bundles, BeautéShine offers a seamless, user-friendly experience tailored to your lifestyle. With integrated features like Stripe checkout, real-time product updates, and personalized recommendations, our platform makes beauty shopping smarter, faster, and more enjoyable. Discover, shop, and shine all in one place.",
    image: "./projects/img-2.png",
    features: [
      "Seamless Stripe Integration: Users can securely purchase beauty products using Stripe, providing a fast and hassle-free checkout experience.",
      "Wishlist and Favorites Feature: Shoppers can save their favorite products in a personal wishlist for future purchases or gift ideas.",
      "Promotional Banners & Discount Codes: Highlight ongoing sales or limited-time offers with eye-catching banners and support for user-applied discount codes at checkout.",
      "Loyalty Rewards Program: Registered customers earn points for every purchase, which can be redeemed for discounts or exclusive products",
      "Blog or Beauty Tips Section: Features articles on skincare routines, makeup tutorials, product spotlights, and seasonal beauty trends to engage users.",
      "Product Comparison Tool: Allows users to select multiple products and compare their ingredients, sizes, prices, and reviews side by side."
    ],
    techStack: ["Next.js", "Node.js", "MongoDB", "MUI", "Stripe", "Vercel",],
    size: "small"
  },
  {
    id: 5,
    title: "Gusstenberg",
    description: "The Gusstenberg system is a desktop-based application developed using Java, designed to streamline and automate payroll operations within an organization. It ensures accurate salary computation by integrating employee records, attendance data, tax rules, and government contributions. With built-in PDF payslip generation, the system simplifies payroll documentation and distribution.",
    image: ["./projects/Gusstenberg/img-1.png", "./projects/Gusstenberg/img-2.png", "./projects/Gusstenberg/img-3.png", "./projects/Gusstenberg/img-4.png", "./projects/Gusstenberg/img-5.png", "./projects/Gusstenberg/img-6.png", "./projects/Gusstenberg/img-7.png",],
    features: [
      "Role-Based Access Control: Admins, HR personnel, and managers have designated access levels to view or modify payroll data securely.",
      "Payroll Computation: Accurately calculates gross pay, deductions, benefits, taxes, and net pay based on employee data and attendance.",
      "PDF Payslip Generation & Export: Instantly generates detailed payslips in PDF format for each employee, ready for printing or digital distribution.",
      "Customizable Salary Structures: Supports various salary types (hourly, daily, monthly) and allows flexible benefit and deduction setup.",
      "One-Click Bulk Payroll Processing: Processes payroll for all employees in a department or the entire company with a single action.",
    ],
    techStack: ["Java", "SWT", "SQLite"],
    size: "small"
  },
  {
    id: 6,
    title: "QCA Foundation",
    description: "This web application, developed for the QCA Foundation, is designed to streamline the borrowing of school tools and equipment, while also offering a class scheduling feature for efficient resource and time management. The system aims to improve the overall organization and accessibility of academic materials, allowing students and teachers to borrow tools seamlessly through a digital platform. By integrating a user-friendly interface and real-time scheduling, the application ensures that tools are available when needed and that class schedules are well-organized and conflict-free. Whether it's reserving lab equipment or managing classroom use, this system supports the foundation's mission to enhance educational experiences through effective digital solutions.",
    image: ["./projects/QCA/img-1.png", "./projects/QCA/img-2.png", "./projects/QCA/img-3.png", "./projects/QCA/img-4.png", "./projects/QCA/img-5.png", "./projects/QCA/img-6.png", "./projects/QCA/img-7.png", "./projects/QCA/img-8.png",],
    features: [
      "Smart Borrowing System with Real-Time Availability: Students and teachers can view tool availability in real-time and request to borrow items. The system prevents double bookings by updating inventory instantly.",
      "Automated Class Scheduler with Conflict Detection: Faculty can create and manage class schedules, the system automatically detects scheduling conflicts for classrooms, tools, or instructors and suggests alternatives.",
      "Borrowing History and Usage Analytics: Admin can access borrowing logs with dates, duration, and item usage statistics to track frequently used tools.",
      "RBAC: Different user roles (Admin, Teacher, Staff) have customized dashboards and permissions, ensuring security and clarity in operations.",
      "Automated Notifications and Reminders: The system sends email reminders for upcoming return deadlines, overdue items, or upcoming scheduled classes involving borrowed tools."
    ],
    techStack: ["PHP", "MySQL", "FullCalendar.js", "AJAX", "jQuery", "Bootstrap", "PHPMailer", "Hostinger"],
    size: "small"
  },
  {
    id: 7,
    title: "Kōhī",
    description: "Kōhī is a web-based coffee ordering system designed to streamline the customer experience and enhance the efficiency of café operations. Through a user-friendly interface, customers can conveniently browse the menu, customize their orders, and place them online. he system integrates real-time order management, secure checkout, and responsive design, making it accessible across devices. Kōhī aims to modernize traditional coffee shop services by embracing digital solutions that cater to today's fast-paced, tech-driven lifestyle.",
    image: ["./projects/Kohi/img-1.png", "./projects/Kohi/img-2.png", "./projects/Kohi/img-3.png", "./projects/Kohi/img-4.png", "./projects/Kohi/img-5.png", "./projects/Kohi/img-6.png", "./projects/Kohi/img-7.png", "./projects/Kohi/img-8.png", "./projects/Kohi/img-9.png",],
    features: [
      "Real-Time Order Status Tracker: Once an order is placed, users can track its progress in real-time (e.g., 'Under process', 'Ready for Pickup', 'Out for Delivery').",
      "Dynamic Menu Management (Admin Panel): Admin can easily update menu items, prices, availability, and images through a secure backend—no coding required.",
      "Order History: Admin can view a comprehensive history of all customer orders, including details such as order items, payment method (e.g., PayPal), status, timestamps, and customer information. ",
      "Customer Feedback and Ratings: After every transaction, users can rate their drink and leave feedback, helping Kōhī improve product quality and service.",
    ],
    techStack: ["PHP", "MySQL", "AJAX", "jQuery", "Bootstrap", "PayPal SDK"],
    size: "large"
  },
];
