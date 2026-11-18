// Source documents behind quotes and claims. PDFs live in /public/docs, first-page images in /Images/docs.
import endorsementPage from '../../Images/docs/city-of-brampton-endorsement.jpg';
import cleanDivorceFeedbackPage from '../../Images/docs/clean-divorce-riipen-feedback.jpg';
import cleanDivorceLetterPage from '../../Images/docs/clean-divorce-endorsement.jpg';
import ghsPage from '../../Images/docs/ghs-reunion-riipen-feedback.jpg';
import siteimprovePage from '../../Images/docs/siteimprove-certificate-2024.jpg';
import degreePage from '../../Images/docs/tmu-degree.jpg';
import salemPage from '../../Images/docs/salem-capstone-reference.jpg';
import metaPage from '../../Images/docs/meta-front-end-certificate.jpg';
import type { ImageMetadata } from 'astro';

export type DocKey =
  | 'bramptonEndorsement'
  | 'cleanDivorceFeedback'
  | 'cleanDivorceLetter'
  | 'ghsFeedback'
  | 'siteimproveCertificate'
  | 'tmuDegree'
  | 'salemReference'
  | 'metaCertificate';

export const docKeys = [
  'bramptonEndorsement',
  'cleanDivorceFeedback',
  'cleanDivorceLetter',
  'ghsFeedback',
  'siteimproveCertificate',
  'tmuDegree',
  'salemReference',
  'metaCertificate',
] as const;

export const docKeyFor = (pdf: string): DocKey | undefined =>
  (Object.keys(documents) as DocKey[]).find((k) => documents[k].pdf === pdf);

export const documents: Record<
  DocKey,
  { title: string; issuer: string; date: string; pdf: string; page: ImageMetadata }
> = {
  bramptonEndorsement: {
    title: "Employer's endorsement",
    issuer: 'Mara Garcia Lanz, Team Lead, Information Technology, City of Brampton',
    date: 'Jul 2025',
    pdf: '/docs/city-of-brampton-endorsement.pdf',
    page: endorsementPage,
  },
  cleanDivorceLetter: {
    title: 'Endorsement letter',
    issuer: 'Suzanne Winlove-Smith, Project Manager, The Clean Divorce',
    date: 'Mar 20, 2025',
    pdf: '/docs/clean-divorce-endorsement.pdf',
    page: cleanDivorceLetterPage,
  },
  cleanDivorceFeedback: {
    title: 'Riipen feedback, 5.0',
    issuer: 'Suzanne Winlove-Smith, founder, The Clean Divorce',
    date: 'Mar 2025',
    pdf: '/docs/clean-divorce-riipen-feedback.pdf',
    page: cleanDivorceFeedbackPage,
  },
  ghsFeedback: {
    title: 'Riipen feedback, 5.0',
    issuer: 'Satinder Sahota, GHS Reunion',
    date: 'Apr 2024',
    pdf: '/docs/ghs-reunion-riipen-feedback.pdf',
    page: ghsPage,
  },
  siteimproveCertificate: {
    title: 'Siteimprove Super User 2024',
    issuer: 'Siteimprove, top 5% of users',
    date: 'Dec 2024',
    pdf: '/docs/siteimprove-certificate-2024.pdf',
    page: siteimprovePage,
  },
  tmuDegree: {
    title: 'Bachelor of Engineering (Honours)',
    issuer: 'Toronto Metropolitan University',
    date: 'June 2026',
    pdf: '/docs/tmu-degree.pdf',
    page: degreePage,
  },
  salemReference: {
    title: 'Capstone supervisor reference',
    issuer: 'Dr. Meranda Salem, P.Eng., Capstone Projects Administrator',
    date: 'Apr 27, 2026',
    pdf: '/docs/salem-capstone-reference.pdf',
    page: salemPage,
  },
  metaCertificate: {
    title: 'Meta Front-End Developer certificate',
    issuer: 'Meta, on Coursera',
    date: 'Jan 22, 2024',
    pdf: '/docs/meta-front-end-certificate.pdf',
    page: metaPage,
  },
};
