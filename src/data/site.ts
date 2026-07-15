export const site = {
  name: 'I Made Cakra Pustaka',
  shortName: 'Cakra',
  brand: 'Cakra.dev',
  role: 'Software Engineer',
  tagline: ['I build', 'reliable systems'],
  bio: "I'm a backend-focused developer who enjoys building scalable APIs, distributed systems, and clean developer experiences.",
  email: 'imadecakra20@gmail.com',
  cv: 'I_Made_Cakra_Pustaka_CV.pdf',
  location: 'Bali, Indonesia',
  social: {
    github: 'https://github.com/cakra17',
    linkedin: 'https://www.linkedin.com/in/i-made-cakra-pustaka',
  },
  nav: [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ],
} as const;

export type Site = typeof site;
