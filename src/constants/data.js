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
        link: "/service/1",
      },
      {
        label: "Website Marketing",
        link: "/service/2",
      },
      {
        label: "Internet Advertising",
        link: "/service/3",
      },
      {
        label: "Website Digital Advertising",
        link: "/service/4",
      },
    ],
  },
  {
    label: "FAQs",
    link: "/faqs",
  },
  {
    label: "Packages",
    link: "/packages",
  },
  {
    label: "Contact",
    link: "/contactus",
  },
  {
    label: "GET A QUOTE",
    link: "/get-quote",
    className: "btn primary-btn start",
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
    link: '/contactus'
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
    name: 'Website Advertising',
    para: "Our Mission is to be your unwavering partner on the journey to online success.",
    id: "1"
  },
  {
    img: servicesImgTwo,
    name: 'Website Marketing',
    para: "Our Mission is to be your unwavering partner on the journey to online success.",
    id: "2"
  },
  {
    img: servicesImgThree,
    name: 'Internet Advertising',
    para: "Our Mission is to be your unwavering partner on the journey to online success.",
    id: "3"
  },
]

export const testimonialsData = [
  {
    title: 'Game-Changer for Our Business',
    review: 'Choosing Top 100 Website Advertising for SEO services was a game-changer for our business. Within weeks, our website traffic soared, and we started seeing a noticeable increase in inquiries. Their expertise in SEO is unmatched, and the results speak for themselves. Highly recommended!',
    testimoni: "Victor Nolvasky, Owner of Victor's Limousine Service, Dallas Texas."
  },
  {
    title: 'Delivered on Their Promise',
    review: 'We were skeptical about the claims of achieving top search engine rankings in 45 days, but Top 100 Website Advertising delivered on their promise. Our website now ranks on the first page, and our online visibility has never been better. Thank you for your exceptional SEO services!',
    testimoni: "Tony Kootz, Owner of My Coach Leather, Union City California."
  },
  {
    title: 'Instrumental in Our Online Success',
    review: 'Top 100 Website Advertising has been instrumental in our online success. Their tailored SEO strategies have not only boosted our  s visibility but also increased our revenue significantly. Their dedication, professionalism, and results-driven approach are truly commendable.',
    testimoni: "Tracy Rogers, Owner of Candied Smoked Salmon, Klamath Falls, Oregon."
  },
  {
    title: 'Game-Changer for Our Business',
    review: 'Choosing Top 100 Website Advertising for SEO services was a game-changer for our business. Within weeks, our website traffic soared, and we started seeing a noticeable increase in inquiries. Their expertise in SEO is unmatched, and the results speak for themselves. Highly recommended!',
    testimoni: "Frank Munoz, Member of Prezcotts Pop Rock Band, Modesto, California."
  },
]