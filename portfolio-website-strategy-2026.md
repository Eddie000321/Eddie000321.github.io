# Portfolio Website Strategy 2026

## Goal

Build a new personal portfolio website that presents Jaehyeok Lee as a practical software developer focused on workflow automation, internal tools, data dashboards, and backend systems.

The site should not feel like a generic student developer portfolio. It should feel like a case-study portfolio for someone who can turn messy real-world operations into reliable software.

## Core Positioning

Primary identity:

> Workflow Automation & Operations Software Developer

Core message:

> I turn messy operational workflows into reliable software.

Expanded version:

> I build internal tools, workflow automation, data dashboards, browser automation, and backend systems for real operational work.

## Target Audience

- Fall 2026 co-op and internship recruiters
- Software developer and backend developer recruiters
- Data engineering and analytics engineering teams
- ServiceNow, IT operations, and business systems teams
- Hiring managers who value practical problem solving, documentation, and operational reliability

## Search-Friendly Keywords

The website should naturally include these terms:

- Software Engineering Technology Co-op
- Fall 2026 co-op
- Software Developer Intern
- Backend Developer Intern
- Full-Stack Developer Intern
- Data Engineer Intern
- Data Analyst Intern
- ServiceNow Developer
- IT Operations
- Workflow Automation
- Internal Tools
- Data Dashboards
- Browser Automation
- Python
- SQL
- PostgreSQL
- JavaScript
- TypeScript
- React
- Node.js
- Express
- FastAPI
- .NET
- C#
- REST APIs
- Docker
- Git
- Chrome Extensions
- PowerShell
- Cloudflare Pages
- Workers KV

## First-Viewport Hero

The first screen should immediately communicate availability, identity, and direction.

Suggested hero copy:

```text
Jaehyeok Lee
Software Engineering Technology Co-op

I turn messy operational workflows into reliable software.

I build internal tools, workflow automation, data dashboards,
browser automation, and backend systems for real-world operations.

Seeking Fall 2026 Co-op · Toronto / GTA / Remote
```

Primary actions:

- View Case Studies
- Download Resume
- Contact Me

Secondary links:

- GitHub
- LinkedIn

## Visual Direction

The design should feel like a clean operations command center or technical case-study notebook.

Use:

- Calm, professional colors
- Clear typography
- Real screenshots or carefully anonymized project visuals
- Data points and evidence callouts
- Case-study sections instead of generic project cards
- A layout that feels structured, reliable, and easy to scan

Avoid:

- Generic "Hello, I am a developer" portfolio style
- Purple gradient hero sections
- Overly decorative cards
- Too many icons without substance
- Listing every project equally
- Showing private screenshots, internal URLs, names, ticket numbers, or asset data

## Site Structure

### 1. Hero

Purpose:

Make the visitor understand the personal brand in under 10 seconds.

Content:

- Name
- Co-op availability
- One-sentence identity
- 4 focus tags:
  - Internal Tools
  - Workflow Automation
  - Data Dashboards
  - Backend Systems

### 2. Featured Case Studies

This should be the strongest section. Each case study should use the same structure:

- Problem
- System Built
- Evidence
- Technologies
- Privacy or data note when needed

Recommended case studies:

#### Campus Schedule Operations Dashboard

Angle:

Campus operations, schedule data, room availability, work allocation, Excel reporting, Cloudflare deployment.

Evidence:

- 124 rooms
- 9,961 schedule events
- 9,300 availability rows
- Cloudflare Pages Worker APIs
- Workers KV preference storage

Suggested summary:

> Built a campus operations dashboard that combines class schedules and room-booking data into a unified planning tool for room availability, work allocation, map navigation, and Excel reporting.

#### ServiceNow Issue Analytics Dashboard

Angle:

IT operations analytics, privacy-safe incident processing, clustering, review queues, governance.

Evidence:

- 2,123 incident rows
- 136 published clusters
- 128 operational lanes
- 129 review queue items
- 17 action candidates blocked pending manual validation

Suggested summary:

> Built a privacy-safe ServiceNow incident analytics pipeline that transforms exported incidents into clusters, operational lanes, review queues, validation reports, and dashboard-ready aggregate outputs.

#### CareFlow / Veterinary EMR Prototype

Angle:

Backend and full-stack software development with domain modeling, APIs, PostgreSQL, and healthcare-style workflows.

Evidence:

- .NET 9 backend
- PostgreSQL
- EF Core migrations
- React / Express / Prisma evidence from VetChart
- Large development seed data where supported

Suggested summary:

> Built veterinary EMR systems and prototypes covering owners, pets, clinical notes, lab reports, appointments, billing, REST APIs, database modeling, and reproducible local development.

#### Document Search API

Angle:

Applied AI/search backend, document processing, FastAPI, FAISS, citation-backed answers.

Suggested summary:

> Built a FastAPI and FAISS document-search MVP that ingests TXT, PDF, and DOCX files, chunks documents into searchable units, and returns citation-backed answers.

#### OCR Asset Tag Automation

Angle:

Real operational automation, OCR, review workflows, Excel/HTML outputs.

Evidence:

- 80 images
- 40 photo pairs
- 35/40 service tag exact matches
- 33/40 asset tag exact matches

Suggested summary:

> Built a local OCR automation tool that pairs field photos, extracts asset and service tag values, and generates Excel and HTML review outputs for manual verification.

### 3. Project Map

Show projects grouped by problem type rather than as a flat list.

Groups:

- Operations Dashboards
- Browser Automation
- Data Pipelines
- Backend/API Systems
- Document and OCR Tools
- IT Operations Automation

Purpose:

Help visitors see that the projects are connected by a clear pattern instead of looking random.

### 4. How I Work

This section should express personality and engineering style.

Suggested copy:

```text
I like systems that are boring in the best way:
clear inputs, traceable outputs, safe defaults, useful logs,
and workflows people can actually repeat.
```

Supporting points:

- Start from the real workflow
- Separate private raw data from public outputs
- Prefer traceable data transformations
- Build review queues before risky automation
- Keep documentation close to the system
- Use tests and validation gates where the risk is real

### 5. Experience

Lead with current Centennial College ITS co-op.

Suggested summary:

> Currently working with Centennial College Information Technology Services, building ServiceNow and KACE-related workflow automation, internal operations dashboards, lab recovery tooling, shared-PC maintenance workflows, and documentation for repeatable IT support processes.

Keep prior office support and military service shorter. Use them as evidence of documentation, process discipline, records, access awareness, and communication.

### 6. Skills

Group skills by work type instead of one long list.

Suggested groups:

- Backend: Node.js, Express, FastAPI, .NET/C#, REST APIs
- Data: Python, SQL, PostgreSQL, ETL, dashboards, reporting
- Frontend: React, JavaScript, TypeScript, HTML, CSS
- Automation: Chrome Extensions, ServiceNow workflows, KACE workflows, PowerShell, Web Serial API
- Deployment and Tools: Docker, Git, Cloudflare Pages, Workers KV, GitHub Actions

### 7. Contact

Include:

- Email
- LinkedIn
- GitHub
- Resume PDF

The contact section should be simple and direct.

## Content Rules

### Use

- Real metrics when verified
- Anonymized screenshots
- Public-safe summaries
- Clear role and availability
- Project evidence and test results

### Avoid

- Internal URLs
- Raw ServiceNow tickets
- Caller names
- Assignee names
- Asset numbers
- Student or staff names
- Private screenshots
- Unsupported production/compliance claims
- Claiming advanced AI research when the work is applied search, automation, or analytics

## Recommended Tech Stack

Keep the first version simple.

Best option:

- Vite
- React
- TypeScript
- Plain CSS or CSS Modules
- Static JSON/Markdown-like case study data
- Deployed on Cloudflare Pages

Why:

- Fast to build
- Easy to deploy
- Matches existing Cloudflare experience
- No backend needed for the portfolio
- Easy to keep public-safe
- Recruiters can open it quickly

Alternative simple option:

- Astro static site

Why:

- Excellent for content-heavy case studies
- Very fast
- Good for SEO
- Less client-side JavaScript

Decision:

Use Vite + React if the design should feel interactive and dashboard-like. Use Astro if the site should feel more editorial and case-study focused.

Recommended first build:

> Vite + React + TypeScript deployed to Cloudflare Pages.

## Simple Deployment Plan

### Option A: Cloudflare Pages

Recommended.

Steps:

1. Create a GitHub repository, for example `portfolio-2026`.
2. Build the site locally with Vite + React + TypeScript.
3. Push the repository to GitHub.
4. Connect the repository to Cloudflare Pages.
5. Use this build configuration:
   - Build command: `npm run build`
   - Output directory: `dist`
6. Add a custom domain later if desired.
7. Keep resume PDF and screenshots in a public-safe `public/` folder.

Pros:

- Free and fast
- Simple GitHub-based deploys
- Good fit with existing Cloudflare Pages experience
- Easy custom domain support

### Option B: GitHub Pages

Good fallback.

Steps:

1. Create a GitHub repository.
2. Build the Vite site.
3. Use GitHub Actions to publish `dist`.
4. Enable Pages from the repository settings.

Pros:

- Very simple
- No extra hosting account needed
- Good for a static portfolio

Tradeoff:

- Cloudflare Pages is cleaner if using Cloudflare already.

### Option C: Netlify or Vercel

Good if Cloudflare setup becomes inconvenient.

Pros:

- Very fast setup
- Good previews
- Easy static hosting

Tradeoff:

- Less aligned with current project evidence than Cloudflare.

## First-Version Build Scope

The first version should be small and polished.

Must have:

- Hero section
- 4-5 featured case studies
- Project map
- Experience section
- Skills grouped by work type
- Resume / LinkedIn / GitHub / email links
- Responsive mobile layout
- Public-safe content

Nice to have:

- Search or filter by project type
- Tiny architecture diagrams
- Screenshot gallery
- Short case-study pages
- Dark mode

Not needed for version 1:

- CMS
- Database
- Login
- Blog
- Contact form backend
- Complex animations

## Case Study Template

Use this template for each featured project:

```text
Project Name
One-line summary

Problem
What real workflow or technical issue existed?

System Built
What did I build?

Evidence
What numbers, tests, validation, or outputs prove it?

Technologies
What tools and languages were used?

Privacy Note
What data was anonymized or excluded?
```

## Suggested Repository Plan

Repository name:

```text
portfolio-2026
```

Initial structure:

```text
portfolio-2026/
  src/
    components/
    data/
    styles/
    App.tsx
    main.tsx
  public/
    resume/
    screenshots/
  README.md
  package.json
```

Data file idea:

```text
src/data/caseStudies.ts
```

Keep project content in data objects so the layout stays clean and updates are easy.

## Success Criteria

The portfolio is successful if a recruiter can understand these points within one minute:

- Jaehyeok is seeking a Fall 2026 co-op.
- He is strongest in internal tools, automation, data dashboards, and backend systems.
- He has current ITS co-op experience.
- His projects have real metrics and operational context.
- He handles private data carefully.
- He can build practical software that supports real teams.

## Final Creative Direction

The site should leave this impression:

> This is not just a student with many projects. This is a practical builder who studies messy operational systems, finds the repeated pain, and turns it into software that people can actually use.

