---
title: LearnWithMe
tagline: AI test generator for K-12 teachers
year: 2026
order: 0
group: personal
context: Personal product, Aug - Sep 2026
role: 'Designed, built and deployed it solo'
stack: [Next.js, TypeScript, Tailwind CSS, Supabase, Ollama, Vercel]
cover: ../../../Images/learnwithme/teachers.png
coverAlt: The LearnWithMe teacher page with the headline Tests, built for teachers and a grid of features
links:
  - { label: Live app, href: 'https://learn-with-me-liard.vercel.app' }
  - { label: Source code, href: 'https://github.com/Minht30/LearnWithME' }
highlights:
  - 'Teachers describe a test in plain English; an open-weight model writes curriculum-aligned questions, and the app exports a student PDF and a teacher PDF with the answer key.'
  - 'Students join with a class code to practise with a timer and notes; every submission lands in a review inbox with per-question feedback.'
  - 'Next.js and TypeScript on Supabase (Postgres, Auth, Storage), with Groq in production and Ollama for fully local development, switched by one setting.'
  - 'Fixed a production page hang with four stacked causes: a math parser that read dollar signs as formulas, per-question storage calls on serverless, an animation regression on React 19, and diverged git history.'
  - 'Built for accessibility: WCAG AA colours, keyboard navigation and a dyslexia-friendly font.'
gallery:
  - { src: '../../../Images/learnwithme/teachers.png', alt: 'The LearnWithMe teacher page with a features grid', caption: 'The teacher page: prompt-to-test, PDFs, a review inbox and more.' }
  - { src: '../../../Images/learnwithme/landing.png', alt: 'The LearnWithMe landing page with a teacher card and a student card', caption: 'The landing page, one door for teachers and one for students.' }
  - { src: '../../../Images/learnwithme/students.png', alt: 'The LearnWithMe student page', caption: 'The student page.' }
---

A K-12 Canadian curriculum test generator: teachers describe a test in plain English, students practise on it before exam day, and everyone leaves with a clean PDF. Built only on free tiers and open-weight models.
