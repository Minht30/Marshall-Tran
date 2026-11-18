import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

// Keys of the documents in src/data/docs.ts (kept in sync there).
const DOC_KEYS = [
  'bramptonEndorsement',
  'cleanDivorceFeedback',
  'cleanDivorceLetter',
  'ghsFeedback',
  'siteimproveCertificate',
  'tmuDegree',
  'salemReference',
  'metaCertificate',
] as const;

const link = z.object({ label: z.string(), href: z.string(), pdf: z.boolean().default(false) });

// More work: one Markdown file per project. The body is the summary shown when the row opens.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      tagline: z.string().max(60),
      year: z.number().int(),
      order: z.number(),
      group: z.enum(['coursework', 'brampton', 'client', 'personal']),
      context: z.string(),
      stack: z.array(z.string()).min(1),
      cover: image(),
      coverAlt: z.string().min(10),
      contain: z.boolean().default(false),
      links: z.array(link).default([]),
      status: z.enum(['completed', 'in-progress']).default('completed'),
      note: z.string().optional(),
      codeNote: z.string().optional(),
      role: z.string().optional(),
      highlights: z.array(z.string()).default([]),
      gallery: z.array(z.object({ src: image(), alt: z.string().min(10), caption: z.string() })).default([]),
    }),
});

// Flagship case studies: the card on the home page and the "next case study" band read from here.
const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      order: z.number(),
      context: z.string(),
      summary: z.string().max(220),
      role: z.string(),
      tags: z.array(z.string()).max(6),
      cover: image(),
      coverAlt: z.string().min(10),
      coverPosition: z.string().default('50% 30%'),
      status: z.enum(['completed', 'in-progress']).default('completed'),
      links: z.array(link).default([]),
      codeNote: z.string().optional(),
      metrics: z
        .array(z.object({ value: z.string(), label: z.string() }))
        .max(3)
        .default([]),
    }),
});

// The five-year story: one MDX file per chapter. Prose lives in the body, the structured parts in frontmatter.
const quote = z.object({
  text: z.string(),
  by: z.string(),
  proof: z.string().optional(),
  proofLabel: z.string().optional(),
});
const milestones = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/milestones' }),
  schema: ({ image }) =>
    z.object({
      order: z.number(),
      rail: z.object({ year: z.string(), label: z.string() }).optional(),
      label: z.string(),
      title: z.string(),
      variant: z.enum(['beginning', 'split', 'layered', 'city', 'capstone', 'ring', 'graduation']),
      bigDate: z.string().optional(),
      bigDateNote: z.string().optional(),
      tags: z.array(z.string()).default([]),
      quote: quote.optional(),
      facts: z
        .array(z.object({ value: z.string(), label: z.string(), proof: z.string().optional() }))
        .default([]),
      images: z
        .array(
          z.object({
            src: image(),
            alt: z.string(),
            caption: z.string().optional(),
            url: z.string().optional(),
          }),
        )
        .default([]),
      doc: z
        .object({
          src: image(),
          alt: z.string(),
          caption: z.string(),
          readerCaption: z.string(),
          label: z.string(),
        })
        .optional(),
      cta: z.object({ label: z.string(), href: z.string() }).optional(),
    }),
});

// Professional experience, in the order a recruiter scans it:
// organization, position, duration, responsibilities, skills, learning applied, impact.
const experience = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/experience' }),
  schema: z.object({
    order: z.number(),
    size: z.enum(['feature', 'standard', 'compact']),
    organization: z.string(),
    position: z.string(),
    type: z.string(),
    location: z.string(),
    start: z.string(),
    end: z.string(),
    length: z.string(),
    responsibilities: z.array(z.string()).min(1).max(6),
    skills: z.array(z.string()).default([]),
    learningApplied: z.string().optional(),
    impact: z.array(z.object({ value: z.string(), label: z.string() })).default([]),
    caseStudy: z.object({ label: z.string(), href: z.string() }).optional(),
    proof: z.enum(DOC_KEYS).optional(),
    live: z.string().optional(),
  }),
});

// Credentials page: one file per credential, grouped by kind.
const credentials = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/credentials' }),
  schema: ({ image }) =>
    z.object({
      order: z.number(),
      kind: z.enum(['degree', 'milestone', 'certification', 'recognition', 'reference']),
      title: z.string(),
      issuer: z.string(),
      date: z.string(),
      summary: z.string(),
      image: image().optional(),
      imageAlt: z.string().optional(),
      readerCaption: z.string().optional(),
      doc: z.enum(DOC_KEYS).optional(),
      courses: z.array(z.object({ title: z.string(), used: z.string() })).default([]),
      link: z.object({ label: z.string(), href: z.string() }).optional(),
      featured: z.boolean().default(false),
    }),
});

export const collections = { projects, work, milestones, experience, credentials };
