import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  about1,
  about2,
  about3,
  about4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Home",
    url: "#hero",
  },
  {
    id: "1",
    title: "About Us",
    url: "#about",
  },
  {
    id: "2",
    title: "Services",
    url: "#services",
  },
  {
    id: "3",
    title: "FAQs",
    url: "#faqs",
  },
  {
    id: "4",
    title: "Careers",
    url: "#careers",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Contact Us",
    url: "#contact",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const about = [
  {
    id: "0",
    title: "Integrity",
    text: "A leading global provider of recruitment and consultancy solutions and we beleive in transparency and honesty in everything we do.",
    date: "May 2023",
    status: "done",
    imageUrl: about1,
    colorful: true,
  },
  {
    id: "1",
    title: "Excellence",
    text: "Striving for perfection we deliver the highest quality services and expert guidance and consultation for strategic workforce planning.",
    date: "May 2023",
    status: "progress",
    imageUrl: about2,
  },
  {
    id: "2",
    title: "Innovation",
    text: "We embrace technology and creativity to drive better results and technology driven tools for efficient payroll, recruitment, and employee management.",
    date: "May 2023",
    status: "done",
    imageUrl: about3,
  },
  {
    id: "3",
    title: "Partnership",
    text: "We work closely with our clients to understand and meet their unique needs.",
    date: "May 2023",
    status: "progress",
    imageUrl: about4,
    colorful: true,
  },
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "HR Management",
    text: "Efficiently manage your human resources with our comprehensive tools and solutions, tailored to meet the specific needs of your business. From onboarding to performance tracking, we simplify every aspect of HR management to help you focus on growth.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Payroll Solutions",
    text: "Ensure your payroll processes are smooth, accurate, and hassle-free with our secure and automated solutions. Our system is designed to save time, reduce errors, and keep your employees satisfied with prompt and precise payments.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Recruitment Services",
    text: "Finding the right talent has never been easier. Our expert recruitment services help you attract, hire, and retain the best candidates, ensuring your team is equipped with the skills and expertise needed to drive success.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Employee Engagement",
    text: "Build a motivated and loyal workforce with our innovative employee engagement programs. From recognition systems to feedback tools, we create strategies that foster a positive and productive work environment.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Workforce Planning",
    text: "Stay worry-free with our expert compliance support. We help you navigate complex labor laws and regulations, ensuring your business meets all legal requirements while minimizing risks.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Compliance Support",
    text: "Stay worry-free with our expert compliance support. We help you navigate complex labor laws and regulations, ensuring your business meets all legal requirements while minimizing risks.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];

export const footerLinks = [
  {
    id: "0",
    title: "Home",
    url: "#",
  },
  {
    id: "1",
    title: "About Us",
    url: "#",
  },
  {
    id: "2",
    title: "Services",
    url: "#",
  },
  {
    id: "3",
    title: "FAQ's",
    url: "#",
  },
  {
    id: "4",
    title: "Terms & Conditions",
    url: "#",
  },
  {
    id: "5",
    title: "Contact",
    url: "#",
  },
];
