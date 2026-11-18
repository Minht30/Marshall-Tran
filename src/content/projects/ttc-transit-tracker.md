---
title: TTC Transit Tracker
tagline: Live TTC arrivals and alerts app
year: 2026
order: 1
group: coursework
context: TMU COE 892, Jan - Apr 2026
stack: [React, TypeScript, FastAPI, PostgreSQL, Supabase, GitHub Actions]
cover: ../../../Images/TTC_tracker/DashboardPage.png
coverAlt: TTC Transit Tracker dashboard with live system information and arrivals
links:
  - { label: Live app, href: 'https://ttc-app-tmu.web.app/' }
  - { label: Source code, href: 'https://github.com/Minht30/TTC_Tracker' }
role: 'Built the front end and the API, and set up the deployment'
highlights:
  - 'A React and TypeScript front end, a FastAPI back end and an async worker that pulls live TTC GTFS-Realtime data every 30 seconds into PostgreSQL.'
  - '13 REST endpoints for alerts, arrivals, analytics and route or station detail, with SQL joins, schema migrations and feed validation in Supabase.'
  - 'GitHub Actions run the worker on a schedule and deploy to Firebase Hosting and Render.'
  - 'Client-side caching and retry logic smooth over gaps between the live and static GTFS feeds.'
gallery:
  - { src: '../../../Images/TTC_tracker/DashboardPage.png', alt: 'TTC Transit Tracker dashboard with live system information and arrivals', caption: 'The live dashboard with system status and arrivals.' }
  - { src: '../../../Images/TTC_tracker/SubwayLines.png', alt: 'Subway line view with stations for each TTC line', caption: 'Browsing the subway lines and their stations.' }
  - { src: '../../../Images/TTC_tracker/Supabase table.png', alt: 'Supabase table of stored transit records', caption: 'The stored transit records behind the analytics.' }
---

A distributed transit app: a React and TypeScript front end, a FastAPI back end with 13 REST endpoints, and a worker that pulls live TTC GTFS-Realtime data every 30 seconds into PostgreSQL.
