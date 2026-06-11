import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Ayoub",
  lastName: "BENCHAHLA",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Engineer | Founder, ORIZON",
  avatar: "/images/avatar/picofme (16).png",
  location: "Africa/Algiers", // IANA time zone for Algeria
  languages: ["English", "Arabic", "French"],
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      Insights on software engineering, AI, and tech innovation. Stay ahead with expert analysis and
      industry trends.
    </>
  ),
};

const social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Ayoub-Abdallah",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/ayoub-ben-chahla-6a8b482a0",
  },
  {
    name: "X",
    icon: "x",
    link: "https://x.com/_real_ayoub",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:ayoubabdallah.dev@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Software Engineer, Entrepreneur, and Founder of ORIZON — pioneering AI-driven decision systems.`,
  headline: <> {person.name} Software Engineer | Founder, ORIZON</>,
  subline: (
    <>
      Building cutting-edge software solutions, AI-driven applications, and intuitive user experiences.
      Passionate about merging technology with creativity.
    </>
  ),
};

const about = {
  label: "About",
  title: "About Me",
  description: `Discover more about ${person.name}, a Software Engineer and Founder of ORIZON, a company
    specializing in AI-driven enterprise decision systems.`,
  tableOfContent: { display: true, subItems: false },
  avatar: { display: true },
  calendar: { display: true, link: "https://cal.com" },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Full-Stack Software Engineer with 4+ years of experience designing and deploying scalable web architectures and AI-powered solutions. Expert in JavaScript/TypeScript, Node.js, React, MongoDB, and cloud-native best practices. Passionate about translating user needs into maintainable, high-impact applications that drive digital transformation.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Black and Yellow",
        timeframe: "2024 - Oct 2025",
        role: "Software Engineer",
        achievements: [
          <>Designed and launched enterprise software systems, PMS and CRM, driving a 40% increase in productivity and enhancing client satisfaction by 50% through better data management.</>,
          <>Led the development and delivery of real-time property and client data interfaces using Next.js and Redux, boosting user engagement, improving data accessibility, and increasing operational efficiency by 20%.</>,
          <>Collaborated with hotel management to design and implement custom features using C# and Agile methods, improving user satisfaction, streamlining operations, and raising hotel efficiency and guest experience quality.</>,
        ],
        images: [],
      },
      {
        company: "Massinissa International Academy",
        timeframe: "2024 - Present",
        role: "Computer Skills Trainer",
        achievements: [
          <>Led and delivered hands-on workshops in foundational computing and Microsoft Office, helping learners build practical digital skills and improve day-to-day workflow efficiency.</>,
          <>Designed and delivered a complete training curriculum for the Data Entry Agent certification, equipping students with strong data-management, formatting, and accuracy-focused competencies.</>,
          <>Provided clear, structured instruction through step-by-step lessons, practice modules, and guided exercises that improved learners' confidence and independence.</>,
          <>Supported learners through assessments and personalized feedback, helping them strengthen weak areas and progress steadily throughout the program.</>,
        ],
        images: [],
      },
      {
        company: "Independent",
        timeframe: "2020 - Present",
        role: "Freelance Full-Stack Developer",
        achievements: [
          <>Developed and implemented custom full-stack solutions for clients in healthcare, education, real estate, and tourism, leading to higher website traffic, greater user interaction, and streamlined daily operations.</>,
          <>Managed full development lifecycle—from architecture to deployment and maintenance—resulting in 40% faster release cycles and a 25% reduction in post-launch bugs.</>,
        ],
        images: [],
      },
      {
        company: "ORIZON",
        timeframe: "2025 - Present",
        role: "Founder",
        achievements: [
          <>Built an advanced AI decision system using Federated Learning.</>,
          <>Pioneered secure corporate intelligence and multi-modal risk analysis.</>,
        ],
        images: [
          { src: "/images/projects/project-orizon/dashboard_overview.png", alt: "Orizon Dashboard", width: 16, height: 9 }
        ],
      },
      {
        company: "SkillLab",
        timeframe: "2025 - Present",
        role: "Founder",
        achievements: [
          <>Founded an AI-powered, game-based learning platform to accelerate tech upskilling.</>,
          <>Achieved a 95% course completion rate by integrating personalized learning paths.</>,
        ],
        images: [
          { src: "/images/projects/project-skilllab/skilllab.png", alt: "SkillLab", width: 16, height: 9 }
        ],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "Master's Degree, Data Science & Artificial Intelligence",
        description: <>Pursuing a Master's Degree at the University of Constantine 2, focusing on advanced AI and data science (Sep 2024 - Present).</>,
      },
      {
        name: "Bachelor of Science in Computer Science",
        description: <>Earned a Bachelor's Degree in Computer Science, Specialization in Software Engineering, from the University of Constantine 2 (Sep 2021 - May 2024).</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Programming Languages & Frontend",
        description: <>Expert in JavaScript (ES6+), TypeScript, Python, Java, SQL, and C#. Frontend expertise includes React.js, Next.js, Angular, Redux, Tailwind CSS, HTML5/CSS3/SCSS, and Vue.js.</>,
        images: [],
      },
      {
        title: "Backend & Databases",
        description: <>Building scalable backends with Node.js, NestJS, Express.js, Django, Spring Boot, REST APIs, and WebSockets. Database management with MongoDB, MySQL, PostgreSQL, Firebase, Redis, and Elasticsearch.</>,
        images: [],
      },
      {
        title: "Machine Learning & DevOps",
        description: <>Developing AI models with TensorFlow, Keras, Scikit-learn, Pandas, and NumPy. Proficient in Git, Docker, GitHub Actions, Vercel, Postman, CI/CD, Figma, and Agile/Scrum methodologies.</>,
        images: [],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Tech, AI & Engineering",
  description: `Perspectives on AI, software development, and emerging technologies.`,
};

const work = {
  label: "Work",
  title: "Projects",
  description: `Innovative projects spanning AI, education, and scalable software solutions.`,
};

const gallery = {
  label: "Gallery",
  title: "My Photo Gallery",
  description: `Snapshots from my journey in tech and innovation.`,
  images: [
    { src: "/images/gallery/img-01.jpg", alt: "image", orientation: "vertical" },
    { src: "/images/gallery/img-02.jpg", alt: "image", orientation: "horizontal" },
    { src: "/images/gallery/img-03.jpg", alt: "image", orientation: "vertical" },
    { src: "/images/gallery/img-04.jpg", alt: "image", orientation: "horizontal" },
    { src: "/images/gallery/img-05.jpg", alt: "image", orientation: "horizontal" },
    { src: "/images/gallery/img-06.jpg", alt: "image", orientation: "vertical" },
    { src: "/images/gallery/img-07.jpg", alt: "image", orientation: "horizontal" },
    { src: "/images/gallery/img-08.jpg", alt: "image", orientation: "vertical" },
    { src: "/images/gallery/img-09.jpg", alt: "image", orientation: "horizontal" },
    { src: "/images/gallery/img-10.jpg", alt: "image", orientation: "horizontal" },
    { src: "/images/gallery/img-11.jpg", alt: "image", orientation: "vertical" },
    { src: "/images/gallery/img-12.jpg", alt: "image", orientation: "horizontal" },
    { src: "/images/gallery/img-13.jpg", alt: "image", orientation: "horizontal" },
    { src: "/images/gallery/img-14.jpg", alt: "image", orientation: "horizontal" },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
