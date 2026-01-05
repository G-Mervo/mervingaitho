import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  python,
  omic,
  welbay,
  clickafrica,
  cfsk,
  finalvision,
  paysap,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Bio",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "services",
    title: "Services",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI/UX Design",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Junior Software Developer",
    company_name: "Paysap Technologies",
    icon: paysap,
    iconBg: "#383E56",
    date: "Apr 2017 - Jan 2018",
    points: [
      "Defining entities and relationship for database",
      "Designing user interface for three modules allocated to me(payment, student and transactions)",
      "Defining the user interactions for the modules given to me(transactions, messaging and student)",
      "Programming (developing or coding) modules that were allocated to me (login, transactions, payment, and student). The language we used were php, jquery, ajax, html, css and MySQL. Also we were using codeigniter framework.",
      "Maintaining and cleaning code from fellow colleagues",
      "Updating changes made to Database. Maintaining coherency and consistency in the database.",
    ],
  },
  {
    title: "ICT System Support",
    company_name: "Final Vision Ltd",
    icon: finalvision,
    iconBg: "#383E56",
    date: "June 2018 - Sept 2018",
    points: [
      "Customizing AIDDE (https://www.fvtelibrary.com & https://www.cfsk.fvtelibrary.com)",
      "Designing and drawing flow charts.",
      "Supporting CFSK Institute in using AIDDE",
      "Training teachers and Students in using AIDDE",
      "Liaising with the director Final Vision East Africa in improving AIDDE",
    ],
  },
  {
    title: "System Administration",
    company_name: "Computer For Schools Kenya (CFSK)",
    icon: cfsk,
    iconBg: "#383E56",
    date: "Oct 2018 - Jan 2019",
    points: [
      "Redesigning of WEEE Centre site (http://www.weeecentre.com).",
      "Developing a system for WEEE Centre and a mobile app.",
      "Digital marketing, analytics & boosting traffic flow.",
      "Regular update of all the sites. (http://www.cfsk.org, http://www.cfskinstitute.ac.ke & http://www.dpa.com)",
      "Security checks for all the sites and internal systems",
      "Regular updating and advising of the General Manager on matters to do with performance, traffic, security & marketing.",
    ],
  },
  {
    title: "Senior Software Developer",
    company_name: "Click Africa",
    icon: clickafrica,
    iconBg: "#E6DEDD",
    date: "Oct 2018 - Mar 2019",
    points: [
      "Web development of MyShuleApp system; https://myshuleapp.live",
      "Mobile development of MyShuleApp: parent and school apps",
      "Overall System Administration of the server and system",
      "Designing of the posters, flyers and other materials.",
      "Graphic design of the company’s materials.",
      "Research and evaluation of more products and ideas to implement",
      "Marketing the product",
      "Outsourcing of clients for MyShuleApp.",
    ],
  },
  {
    title: "IT Manager",
    company_name: "Welbay Stores",
    icon: welbay,
    iconBg: "#383E56",
    date: "Apr 2019 - Mar 2022",
    points: [
      "Overseeing all ICT related infrastructure.",
      "Maintaining of the IT Infrastructure in the company.",
      "Training staff on various ICT matters, trends and software.",
      "Supporting the company Inventory and POS Software",
      "Ensuring Company network security is safe at all times",
      "Developing internal software for automation and ease of the company activities.",
      "Routinely maintenance, cleaning and data backup.",
      "CCTV Monitoring",
      "Networking and improving current LAN network in the company",
      "Consulting in various ICT related matters",
      "Server administration and overall system administration of the Company.",
      "Email Hosting, security and backup",
      "Designing of the company promotional materials of the products.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Omic",
    icon: omic,
    iconBg: "#E6DEDD",
    date: "Aug 2022 - Present",
    points: [
      "Developed program logic for new applications based on fresh coding or revamped logic from existing applications",
      "Constructed prototypes of new features to test feasibility before beginning work on final product",
      "Developed and upgraded backend Python code and related functionality.",
      "Evaluated software to verify responsiveness and efficiency.",
      "Coded, tested, debugged, documented and implemented FastApi software applications.",
      "Built and maintained data integrations with internal and external sources.",
      "Applied feedback from code review and implemented changes to meet standards.",
      "Escalated issues and concerns to facilitate resolutions and avoid impacts to timelines.",
      "Remained current on latest technologies and tools by reading periodicals, speaking with experts and attending conferences.",
      "Checked web pages for compatibility with browsers, devices, and operating systems commonly used by customers.",
      "Wrote applications for interfacing with databases and tested code to verify functionality.",
      "Used SQLAlchemy to model data and draw entities in support of database DDL management.",
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Mervin proved me wrong.",
    name: "User 1",
    designation: "CFO",
    company: "Company random A",
    image: "https://randomuser.me/api/portraits/women/7.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Mervin does.",
    name: "User 2",
    designation: "COO",
    company: "Company random B",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    testimonial:
      "After Mervin optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "User 3",
    designation: "CTO",
    company: "Company random C",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
