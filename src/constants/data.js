import { servicesImgOne, servicesImgThree, servicesImgTwo } from "./mediaConstants";

export const navItems = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "About Us",
    link: "/about-us",
  },
  {
    label: "Services",
    link: "/services",
    subItems: [
      {
        label: "Website Advertising",
        link: "/website-adversiting",
      },
      {
        label: "Website Marketing",
        link: "/website-marketing",
      },
      {
        label: "Internet Advertising",
        link: "/internet-advertising",
      },
      {
        label: "Website Digital Advertising",
        link: "/website-digital-advertising",
      },
    ],
  },
  {
    label: "FAQ’s",
    link: "/faqs",
  },
  {
    label: "Packages",
    link: "/packages",
  },
  {
    label: "Contact",
    link: "/contact",
  },
  {
    label: "Schedule A Call",
    link: "/schedule-a-call",
    className: "btn primary-btn  start",
  },
];


export const footerLinks = [
  {
    label: 'Home',
    link: '/'
  },
  {
    label: 'About Us',
    link: '/about-us'
  },
  {
    label: 'Faqs',
    link: '/faqs'
  },
  {
    label: 'Packages',
    link: '/packages'
  },
  {
    label: 'Contact',
    link: '/contact'
  },
  {
    label: 'Terms & Conditions',
    link: '/terms-conditions'
  },
  {
    label: 'Privacy Policy',
    link: '/privacy-policy'
  },
]

export const contactInfo = [
  {
    label: '1234 ABC STREET, SUITE 234 A 2345, CA, USA',
    link: '/'
  },
  {
    label: '+1 234 567 8901',
    link: 'tel:+12345678901'
  },
  {
    label: 'info@yourwebsite.com',
    link: 'mailto:info@yourwebsite.com'
  },
]

export const servicesCardData = [
  {
    img: servicesImgOne,
    name: 'Search Engine Marketing'
  },
  {
    img: servicesImgTwo,
    name: 'Search Engine Optimization'
  },
  {
    img: servicesImgThree,
    name: 'Local Search Engine Optimization'
  },
]

export const testimonialsData = [
  {
    title: 'Game-Changer for Our Business',
    review: 'Choosing Top 100 Website Advertising for SEO services was a game-changer for our business. Within weeks, our website traffic soared, and we started seeing a noticeable increase in inquiries. Their expertise in SEO is unmatched, and the results speak for themselves. Highly recommended!',
    testimoni: 'Matt Lee, CEO XYZ Group'
  },
  {
    title: 'Delivered on Their Promise',
    review: 'We were skeptical about the claims of achieving top search engine rankings in 45 days, but Top 100 Website Advertising delivered on their promise. Our website now ranks on the first page, and our online visibility has never been better. Thank you for your exceptional SEO services!',
    testimoni: 'Matt Lee, CEO XYZ Group'
  },
  {
    title: 'Instrumental in Our Online Success',
    review: 'Top 100 Website Advertising has been instrumental in our online success. Their tailored SEO strategies have not only boosted our  s visibility but also increased our revenue significantly. Their dedication, professionalism, and results-driven approach are truly commendable.',
    testimoni: 'Matt Lee, CEO XYZ Group'
  },
  {
    title: 'Game-Changer for Our Business',
    review: 'Choosing Top 100 Website Advertising for SEO services was a game-changer for our business. Within weeks, our website traffic soared, and we started seeing a noticeable increase in inquiries. Their expertise in SEO is unmatched, and the results speak for themselves. Highly recommended!',
    testimoni: 'Matt Lee, CEO XYZ Group'
  },
]