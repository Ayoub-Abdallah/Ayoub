import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Ayoub",
  lastName: "BENCHAHLA",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Engineer | CEO, Arbor",
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
  description: `Software Engineer, Entrepreneur, and Founder of Arbor — pioneering tech solutions in education.`,
  headline: <> {person.name} Software Engineer | CEO, Arbor</>,
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
  description: `Discover more about ${person.name}, a Software Engineer and CEO of Arbor, a company
    specializing in education technology solutions.`,
  tableOfContent: { display: true, subItems: false },
  avatar: { display: true },
  calendar: { display: true, link: "https://cal.com" },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I engineer scalable tech solutions, blending AI, full-stack development, and intuitive UI/UX
        design. Specializing in Python, JavaScript, React, and Next.js, I bring innovation to software
        development and product design.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Massinissa International Academy",
        timeframe: "2022 - Present",
        role: "Coach (Data Entry Agents)",
        achievements: [
          <>Optimized training programs, increasing efficiency by 25%.</>,
          <>Developed streamlined workflows for faster onboarding.</>,
        ],
        images: [],
      },
      {
        company: "Arbor",
        timeframe: "2021 - Present",
        role: "Founder & CEO",
        achievements: [
          <>Built a leading education technology company, delivering scalable solutions.</>,
          <>Developed software improving administration for 10+ schools.</>,
        ],
        images: [],
      },
      {
        company: "Freelance",
        timeframe: "2020 - Present",
        role: "Full-Stack Developer",
        achievements: [
          <>Delivered high-performance web & mobile apps across industries.</>,
          <>Built AI-integrated solutions using React.js, Next.js, and Python.</>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "Constantine 2 University",
        description: <>Specialized in AI, Machine Learning, and Data Science.</>,
      },
      {
        name: "Self-Study",
        description: <>Constantly refining expertise in full-stack and AI development.</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Full-Stack Development",
        description: <>Expert in Python, JavaScript, React, and Next.js for scalable software.</>,
        images: [],
      },
      {
        title: "Machine Learning & AI",
        description: <>Developing AI models with TensorFlow, PyTorch, and advanced data science techniques.</>,
        images: [],
      },
      {
        title: "UI/UX Design",
        description: <>Crafting seamless digital experiences with Figma and front-end development.</>,
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
