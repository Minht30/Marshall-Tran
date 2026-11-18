// Site-wide facts. Edit here; every page reads from this file.
export const site = {
  name: 'Minh Marshall Tran',
  shortName: 'Minh Tran',
  resume: '/docs/minh-marshall-tran-resume.pdf',
  nickname: 'Marshall',
  role: 'Front-end developer and computer engineering graduate',
  url: 'https://minhcode.netlify.app',
  description:
    'Minh Tran: computer engineering graduate from Toronto Metropolitan University, front-end developer, and builder of accessible, real-world web and mobile products.',
  contact: {
    email: 'qminh30k3@gmail.com',
    github: 'https://github.com/Minht30',
    linkedin: 'https://www.linkedin.com/in/minht30/',
    discord: 'https://discord.com/users/761958890853498882',
  },
  nav: [
    { label: 'Education', href: '/#education' },
    { label: 'Experience', href: '/#experience' },
    { label: 'Projects', href: '/projects' },
    { label: 'Story', href: '/story' },
    { label: 'Credentials', href: '/credentials' },
    { label: 'Contact', href: '/#contact' },
  ],
  status: 'Open to front-end and full-stack roles',
  relocation: 'Open to relocating anywhere in Canada',
  languages: [
    { name: 'English', level: 'Native' },
    { name: 'Vietnamese', level: 'Native' },
    { name: 'French', level: 'Elementary' },
    { name: 'Japanese', level: 'Elementary' },
  ],
} as const;

// Source documents behind quotes and claims, served from /public/docs.
export const docs = {
  ghsFeedback: '/docs/ghs-reunion-riipen-feedback.pdf',
  cleanDivorceFeedback: '/docs/clean-divorce-riipen-feedback.pdf',
  bramptonEndorsement: '/docs/city-of-brampton-endorsement.pdf',
  siteimproveCertificate: '/docs/siteimprove-certificate-2024.pdf',
} as const;
