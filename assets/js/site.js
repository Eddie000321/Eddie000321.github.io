const featuredCaseStudies = [
  {
    title: "Campus Schedule Operations Dashboard",
    type: "Operations dashboard",
    summary:
      "A campus operations dashboard for room and lab availability, schedule lookup, exports, and work planning.",
    problem:
      "Support planning depended on repeated lookup across schedule, room, and availability sources.",
    system:
      "Created a static Cloudflare-style dashboard with precomputed snapshots, client-side indexes, filters, comparison views, and Excel/PDF exports.",
    evidence:
      "Reconciles 10.7K schedule events and 9.6K availability rows into reviewable planning outputs.",
    metrics: ["10.7K events", "9.6K rows", "Excel/PDF exports"],
    stack: ["JavaScript", "Cloudflare", "Workers KV", "Playwright"],
    links: [{ label: "Sanitized demo", href: "https://youtu.be/Qcq_9weiisU" }],
    privacy:
      "Sanitized summary only. Internal URLs, private schedules, names, and raw operational data are excluded.",
  },
  {
    title: "ServiceNow Issue Analytics Dashboard",
    type: "IT operations analytics",
    summary:
      "A privacy-safe incident analytics pipeline for recurring issue review, SLA-risk summaries, and governed decision support.",
    problem:
      "Incident exports needed to be converted into useful patterns without exposing ticket-level personal or operational details.",
    system:
      "Processed incident rows into aggregate clusters, operational lanes, review queues, validation checks, and dashboard-ready outputs.",
    evidence:
      "Processed about 2.1K incident rows into 100+ clusters, lanes, and review items while keeping low-confidence actions blocked for manual validation.",
    metrics: ["~2.1K incident rows", "100+ clusters", "100+ review items"],
    stack: ["JavaScript", "Data validation", "Dashboards", "Review queues"],
    privacy:
      "Aggregate summary only. Ticket numbers, raw descriptions, caller names, assignees, and internal URLs are excluded.",
  },
  {
    title: "CareFlow",
    type: "Backend system",
    summary:
      "A .NET and PostgreSQL backend for veterinary EMR-style workflows, records, lab reports, and reproducible local development.",
    problem:
      "The domain needed structured API boundaries, versioned database changes, and realistic development records for testing.",
    system:
      "Implemented REST APIs, EF Core domain modeling, Fluent API migrations, PostgreSQL persistence, and large development seeds.",
    evidence:
      "Includes development seeds for about 20K owners, 24K pets, and historical note/lab records.",
    metrics: ["~20K owners", "~24K pets", "Versioned migrations"],
    stack: [".NET", "C#", "PostgreSQL", "EF Core", "REST APIs"],
    privacy:
      "Prototype/development evidence only. This is not presented as a production clinical or compliance system.",
  },
  {
    title: "TTC Delay Insights",
    type: "Data analytics",
    summary:
      "A public-data analytics project that normalizes TTC delay records into PostgreSQL and exposes trend views.",
    problem:
      "Mixed Excel and CSV transit data needed normalization before it could support reliable trend analysis.",
    system:
      "Loaded bus, subway, and streetcar records into PostgreSQL, then built views, CTE queries, FastAPI endpoints, and React chart views.",
    evidence:
      "Loaded about 410K delay records and created validation, normalization, route trend, and quality-check queries.",
    metrics: ["~410K records", "PostgreSQL views", "FastAPI/React"],
    stack: ["Python", "SQL", "PostgreSQL", "FastAPI", "React"],
    links: [{ label: "GitHub", href: "https://github.com/Eddie000321/ttc-delay-insights" }],
    privacy: "Uses public transit data. No private operational data is included.",
  },
  {
    title: "DocSearch RAG System",
    type: "AI/search backend",
    summary:
      "A FastAPI and FAISS document-search MVP that ingests documents and returns citation-backed answers.",
    problem:
      "Uploaded TXT, PDF, and DOCX files needed consistent chunking, indexing, validation, and reviewable answers.",
    system:
      "Built document loaders, chunking, FAISS index lifecycle, file limits, API tests, Docker packaging, and health checks.",
    evidence:
      "Supports searchable units, citation-backed responses, 10 MB upload limits, PDF caps, and reproducible local review.",
    metrics: ["TXT/PDF/DOCX", "10 MB limits", "API tests"],
    stack: ["Python", "FastAPI", "FAISS", "Docker"],
    links: [{ label: "GitHub", href: "https://github.com/Eddie000321/docSearch" }],
    privacy: "Applied search MVP. No production RAG quality or compliance guarantee is claimed.",
  },
];

const projects = [
  {
    title: "Campus Schedule Operations Dashboard",
    category: "Operations",
    featured: true,
    summary:
      "Room and lab availability dashboard for lookup, exports, comparison, and work planning.",
    bullets: [
      "Created a campus schedule dashboard for room/lab availability, lookup, exports, and work planning across 10.7K events and 9.6K rows.",
      "Added timetable, map, Excel, and PDF exports that turn 9.6K rows into room/date and staff planning outputs.",
      "Designed a static Cloudflare app with precomputed JSON snapshots and client-side indexes for search, filters, comparison, and exports.",
      "Added Playwright PDF export that opens encoded timetable views, waits for render, and generates evidence bundles.",
    ],
    metrics: ["10.7K events", "9.6K rows", "Cloudflare"],
    stack: ["JavaScript", "Cloudflare Pages", "Workers KV", "Playwright"],
    filters: ["Featured", "Operations", "Data", "Automation", "Cloud"],
    links: [{ label: "Sanitized demo", href: "https://youtu.be/Qcq_9weiisU" }],
    privacy: "Anonymized campus operations summary. Private schedules and internal URLs are excluded.",
  },
  {
    title: "ServiceNow Issue Analytics Dashboard",
    category: "Data",
    featured: true,
    summary:
      "Privacy-safe incident analytics pipeline for clusters, lanes, review queues, and governed decisions.",
    bullets: [
      "Processed ~2.1K ServiceNow incident rows into privacy-safe dashboards for recurring issues, SLA risk, review queues, and governed decisions.",
      "Clustered ~2.1K tickets into 100+ clusters, lanes, and review items while blocking low-confidence actions until manual validation.",
      "Designed taxonomy checks for service object, symptom, resolution pattern, root cause, confidence, and review flags while excluding raw ticket details.",
    ],
    metrics: ["~2.1K rows", "100+ clusters", "Review queues"],
    stack: ["ServiceNow exports", "Data validation", "Dashboards"],
    filters: ["Featured", "Operations", "Data", "QA/Testing"],
    privacy: "Aggregate-only description. Raw ticket data and identifying details are excluded.",
  },
  {
    title: "CareFlow",
    category: "Backend",
    featured: true,
    summary:
      ".NET 9 and PostgreSQL backend for veterinary EMR-style owners, pets, clinical notes, lab reports, and lab results.",
    bullets: [
      "Implemented a .NET 9/PostgreSQL backend for a veterinary EMR, managing owners, pets, clinical notes, lab reports, and lab results through documented REST APIs.",
      "Modeled the medical-record domain with Entity Framework Core and Fluent API migrations to keep schema changes versioned and reproducible.",
      "Generated large development seeds for the veterinary EMR, including ~20K owners, ~24K pets, and historical note/lab records for testing.",
    ],
    metrics: ["~20K owners", "~24K pets", "REST APIs"],
    stack: [".NET", "C#", "PostgreSQL", "EF Core"],
    filters: ["Featured", "Backend", "Database", "QA/Testing"],
    privacy: "Prototype/development evidence only; no production clinical compliance claim.",
  },
  {
    title: "TTC Delay Insights",
    category: "Data",
    featured: true,
    summary:
      "Transit delay analytics project with normalized public datasets, PostgreSQL reporting, API views, and charts.",
    bullets: [
      "Normalized Excel/CSV transit data, loaded PostgreSQL, and exposed TTC delay results through FastAPI/React chart views.",
      "Loaded ~410K bus, subway, and streetcar delay records into PostgreSQL for trend analysis and SQL reporting.",
      "Designed PostgreSQL views, monthly counts, and CTE queries for validation, normalization, route trends, and quality checks.",
    ],
    metrics: ["~410K records", "SQL reporting", "Public data"],
    stack: ["Python", "PostgreSQL", "FastAPI", "React"],
    filters: ["Featured", "Data", "Database", "Backend"],
    links: [{ label: "GitHub", href: "https://github.com/Eddie000321/ttc-delay-insights" }],
    privacy: "Public-data project; no private records included.",
  },
  {
    title: "DocSearch RAG System",
    category: "AI/Search",
    featured: true,
    summary:
      "Document-search MVP that chunks TXT/PDF/DOCX uploads and returns citation-backed answers.",
    bullets: [
      "Created a FastAPI/FAISS search MVP that ingests TXT/PDF/DOCX files, chunks content, and returns citation-backed answers.",
      "Implemented document loaders, chunking, index lifecycle, and API responses so uploads could be searched and cited consistently.",
      "Added file validation, 10 MB limits, PDF caps, API tests, Docker packaging, and health checks for reproducible review.",
    ],
    metrics: ["TXT/PDF/DOCX", "10 MB limits", "Docker"],
    stack: ["Python", "FastAPI", "FAISS", "Docker"],
    filters: ["Featured", "AI/Search", "Backend", "QA/Testing"],
    links: [{ label: "GitHub", href: "https://github.com/Eddie000321/docSearch" }],
    privacy: "Applied search MVP; no production AI quality claim.",
  },
  {
    title: "OCR Asset Tag Automation",
    category: "Operations",
    summary:
      "Local OCR workflow that pairs field photos and creates reviewable Excel/HTML outputs.",
    bullets: [
      "Created local OCR automation that pairs field photos, extracts Asset/Service Tag values, and generates Excel/HTML review outputs.",
      "Processed 80 images across 40 photo pairs, measuring exact matches for 35/40 (87.5%) service tags and 33/40 (82.5%) asset tags.",
    ],
    metrics: ["80 images", "40 photo pairs", "87.5% service tag exact matches"],
    stack: ["OCR", "Excel", "HTML review outputs"],
    filters: ["Operations", "Automation", "QA/Testing", "Data"],
    privacy: "Asset photos, serial values, service tags, and private workbooks are excluded.",
  },
  {
    title: "ServiceNow Offboarding Automation Extension",
    category: "Automation",
    summary:
      "Chrome/Edge extension that turns cross-system offboarding lookup into review-ready outputs.",
    bullets: [
      "Created a Chrome/Edge extension for ServiceNow/KACE offboarding, turning manual lookup into review-ready notes, manager emails, and Excel rows.",
      "Generated reusable notes, email templates, and Excel rows so operators could review outputs instead of retyping the workflow.",
    ],
    metrics: ["Review-ready notes", "Email templates", "Excel rows"],
    stack: ["Chrome Extension", "ServiceNow", "KACE", "JavaScript"],
    filters: ["Operations", "Automation", "Browser Automation", "QA/Testing"],
    privacy: "Internal hostnames, real asset data, and private workflow details are excluded.",
  },
  {
    title: "Barcode Asset Validation Worksheet",
    category: "Operations",
    summary: "Excel worksheet for scanned-vs-existing asset and service tag validation.",
    bullets: [
      "Built a barcode asset-validation worksheet that normalized scanned vs. existing tags, flagged mismatches, and completed ~400 asset tasks.",
    ],
    metrics: ["~400 asset tasks", "Match/mismatch flags"],
    stack: ["Excel", "Barcode scanner", "Data validation"],
    filters: ["Operations", "Automation", "Data", "QA/Testing"],
    privacy: "Real asset tags, service tags, scanned values, and workbook data are excluded.",
  },
  {
    title: "Monitor Upgrade Tracking Workbook",
    category: "Operations",
    summary:
      "Excel-based monitor replacement workflow with Dell service API lookups and room completion tracking.",
    bullets: [
      "Created an Excel monitor-upgrade workflow using Dell API lookups across 100+ podium assets, identifying 29 rooms and tracking completion.",
    ],
    metrics: ["100+ podium assets", "29 rooms identified"],
    stack: ["Excel", "Dell API", "Data validation"],
    filters: ["Operations", "Data", "Automation"],
    privacy: "Real asset tags, service tags, room-level private schedules, and internal workbook data are excluded.",
  },
  {
    title: "P2214H Replacement Availability Tracker",
    category: "Operations",
    summary: "Schedule-aware Excel tracker for replacement availability and completion status.",
    bullets: [
      "Added availability views and completion tracking for P2214H replacement work using Excel lookup/count formulas.",
    ],
    metrics: ["Availability views", "Completion tracking"],
    stack: ["Excel", "INDEX/MATCH", "COUNTIFS"],
    filters: ["Operations", "Data", "Automation"],
    privacy: "Room-level private schedules, asset tags, and service tags are excluded.",
  },
  {
    title: "Reservation Operations Dashboard",
    category: "Operations",
    summary:
      "Operations dashboard and worker architecture for support lookup, reconciliation, logs, and debugging.",
    bullets: [
      "Created an operations dashboard to reduce support lookup friction across 10.7K schedule events and 9.6K availability rows.",
      "Designed local API/worker flows that separated live snapshots, archives, session history, and access events under API budget limits.",
      "Added booking archives, display caching, API logs, and history ledgers for investigation, replay, and debugging.",
      "Added access-event reconciliation across reservation, entry, and usage signals to classify support states.",
    ],
    metrics: ["10.7K events", "9.6K rows", "API budget controls"],
    stack: ["Local API", "Workers", "Dashboards"],
    filters: ["Operations", "Backend", "Data", "QA/Testing"],
    privacy: "Internal sources, URLs, sample data, screenshots, and operational identifiers are excluded.",
  },
  {
    title: "Web Serial Recovery Tool",
    category: "IT Operations",
    summary:
      "Offline browser utility for prompt-aware Cisco reset and recovery steps in networking lab workflows.",
    bullets: [
      "Created a browser recovery tool using the Web Serial API to automate Cisco reset/recovery steps in networking lab workflows.",
      "Reduced router recovery effort by ~60% with prompt-aware serial commands in an offline browser utility.",
    ],
    metrics: ["~60% less recovery effort"],
    stack: ["Web Serial API", "Browser APIs", "JavaScript"],
    filters: ["Operations", "Automation", "IT Operations", "QA/Testing"],
    privacy: "Internal network details are excluded; not presented as telecom design experience.",
  },
  {
    title: "Windows Lab Maintenance Automation",
    category: "IT Operations",
    summary:
      "Windows reset and reinstall workflow for shared lab PCs with deployment checks and logs.",
    bullets: [
      "Created Windows automation for lab resets and app reinstalls across 120+ shared PCs using USB deployment and Task Scheduler.",
      "Added date checks, mutex protection, and log history to make recurring reinstall jobs safer.",
    ],
    metrics: ["120+ shared PCs", "Task Scheduler", "Log history"],
    stack: ["PowerShell", "Windows", "Task Scheduler"],
    filters: ["Operations", "Automation", "IT Operations", "QA/Testing"],
    privacy: "Describes verified scripts/workflows only; no enterprise endpoint ownership claim.",
  },
  {
    title: "Veterinary EMR Prototype",
    category: "Full-Stack",
    summary:
      "VetChart prototype covering auth, patient records, appointments, billing, dashboards, and database performance checks.",
    bullets: [
      "Implemented a veterinary EMR prototype covering auth, patient records, appointments, billing, and dashboard workflows.",
      "Built and tested basic EMR endpoints to measure database latency and request performance under load; stress-tested with ~1M synthetic records.",
      "Logged and categorized observed anomalies, proposing indexing and SQL query-shaping improvements to reduce average latency.",
    ],
    metrics: ["~1M synthetic records", "Endpoint latency checks"],
    stack: ["React", "Express", "PostgreSQL", "Prisma", "Docker"],
    filters: ["Full-Stack", "Backend", "Database", "QA/Testing"],
    links: [{ label: "GitHub", href: "https://github.com/Eddie000321/vet-chart" }],
    privacy: "Prototype/system wording only; no production healthcare compliance claim.",
  },
  {
    title: "Express Entry Service",
    category: "Data",
    summary:
      "Flask and SQLite analytics dashboard for public Express Entry draw data and score comparison views.",
    bullets: [
      "Implemented a Flask/SQLite app that collects Express Entry draw data and shows trend dashboards and score comparison views.",
      "Added public-data refresh and aggregation workflows for repeatable cutoff, score trend, and applicant-view dashboards.",
      "Created Chart.js views for draw cadence, program mix, cutoff trends, invitations, and personal score comparison.",
    ],
    metrics: ["Public-data refresh", "Chart.js views"],
    stack: ["Python", "Flask", "SQLite", "Chart.js"],
    filters: ["Data", "Backend", "Full-Stack"],
    links: [{ label: "GitHub", href: "https://github.com/Eddie000321/expressEntryService" }],
    privacy: "Public-data analytics only; not immigration advice.",
  },
  {
    title: "Airline Booking System",
    category: "Database",
    summary:
      "Oracle and Express prototype for transactional booking, validation, seat availability, and audit behavior.",
    bullets: [
      "Created an Oracle/Express airline booking prototype for flight search, seat selection, booking, PNR lookup, seat changes, and cancellation.",
      "Designed a relational booking schema with stored procedures, triggers, indexes, and audit behavior for routes, flights, seats, and tickets.",
      "Implemented services that validate inputs, enforce seat availability, calculate fares, and coordinate transactional writes.",
    ],
    metrics: ["PL/SQL", "Triggers", "Transactional writes"],
    stack: ["Oracle", "PL/SQL", "Express", "SQL"],
    filters: ["Database", "Backend", "QA/Testing"],
    links: [{ label: "GitHub", href: "https://github.com/Eddie000321/AirlineSystem" }],
    privacy: "Academic/prototype database evidence, not production airline experience.",
  },
  {
    title: "PostgreSQL Schema Lab",
    category: "Database",
    summary:
      "Schema design and indexing lab with seeded tables, reset workflows, and query-plan comparison.",
    bullets: [
      "Designed a PostgreSQL schema lab with seeded tables, foreign keys, soft deletes, and indexing experiments.",
      "Created SQL/Makefile workflows to reset schemas, vary seed sizes, and compare query plans before/after indexing.",
    ],
    metrics: ["Query plans", "Seed workflows"],
    stack: ["PostgreSQL", "SQL", "Makefile"],
    filters: ["Database", "Backend", "QA/Testing"],
    privacy: "Lab evidence only; not presented as production data-platform ownership.",
  },
  {
    title: "Resume Match Dashboard Prototype",
    category: "Full-Stack",
    summary:
      "Protected dashboard prototype for PDF upload, job-description entry, parsing, storage, scoring, and suggestions.",
    bullets: [
      "Implemented a resume match prototype with React, Express, and MongoDB for PDF upload, JD entry, and protected review screens.",
      "Implemented JWT auth, cookie sessions, and protected routes for the resume analysis workflow.",
      "Added PDF text extraction and GridFS storage so uploaded resumes could feed the matching workflow.",
      "Verified match creation with a Node test covering local embedding fallback, heuristic scoring, and suggestions.",
    ],
    metrics: ["JWT auth", "GridFS", "Node test"],
    stack: ["React", "Express", "MongoDB", "GridFS"],
    filters: ["Full-Stack", "Backend", "AI/Search", "QA/Testing"],
    privacy: "Prototype only; no production ATS accuracy or hiring-decision automation claim.",
  },
  {
    title: "Portfolio CMS",
    category: "Full-Stack",
    summary:
      "MERN portfolio/admin CMS with authenticated CRUD, contact capture, GitHub integration, and Cypress smoke tests.",
    bullets: [
      "Implemented a MERN portfolio/admin CMS with JWT auth, contact capture, project management, and GitHub integration.",
      "Added authenticated admin CRUD so portfolio content could be managed without static file edits.",
      "Added Cypress smoke tests for page navigation and contact-form stubbing, preserving screenshots/video evidence.",
    ],
    metrics: ["JWT auth", "Cypress smoke tests"],
    stack: ["React", "Express", "MongoDB", "JWT", "Cypress"],
    filters: ["Full-Stack", "Backend", "QA/Testing"],
    privacy: "Admin credentials, contact data, Mongo URI, JWT secrets, and tokens are excluded.",
  },
  {
    title: "Bilingual Document Processing Pipeline",
    category: "AI/Search",
    summary:
      "Document pipeline that converts EPUB/PDF texts into bilingual outputs with traceable units and QA review.",
    bullets: [
      "Designed a document pipeline that converts EPUB/PDF texts into bilingual outputs while preserving order, chapters, tables, captions, code, and source traceability.",
      "Split books into traceable translation units with resumable processing and QA outputs for easier review.",
    ],
    metrics: ["Traceable units", "Resumable processing", "QA outputs"],
    stack: ["Python", "EPUB/PDF", "QA"],
    filters: ["AI/Search", "Data", "Automation", "QA/Testing"],
    privacy: "Private source texts and API credentials are excluded.",
  },
  {
    title: "EPUB Translation Pipeline",
    category: "AI/Search",
    summary:
      "EPUB translation workflow with block extraction, JSONL state, retry handling, and translated EPUB rendering.",
    bullets: [
      "Created an EPUB translation pipeline that extracts block units, uses Papago API, resumes from JSONL state, and renders translated EPUBs.",
      "Implemented chunk splitting, retries, and per-book summaries to make long translation jobs traceable.",
    ],
    metrics: ["JSONL state", "Retries", "Per-book summaries"],
    stack: ["Python", "EPUB", "JSONL", "Papago API"],
    filters: ["AI/Search", "Data", "Automation", "QA/Testing"],
    privacy: "Source texts and translation API secrets are excluded.",
  },
  {
    title: "Energy Usage Data Pipeline",
    category: "Data",
    summary:
      "Reproducible pipeline for 10 years of monthly Seoul energy data with CSV outputs and charts.",
    bullets: [
      "Created a data pipeline for 10 years of monthly Seoul energy data, producing analysis-ready CSV files and summary charts.",
      "Automated ingestion, preprocessing, and visualization so the full analysis reruns with one command.",
      "Separated raw payloads, processed datasets, and reports to make outputs reproducible and easier to validate.",
    ],
    metrics: ["10 years of data", "One-command rerun"],
    stack: ["Python", "pandas", "matplotlib", "Public API"],
    filters: ["Data", "Automation", "QA/Testing"],
    privacy: "API keys and private configuration are excluded.",
  },
  {
    title: "Timetable Ranking Pipeline",
    category: "Data",
    summary:
      "Course-section analysis pipeline that normalizes meetings, detects conflicts, and ranks valid schedules.",
    bullets: [
      "Created a timetable pipeline that normalized course meetings, detected conflicts, and ranked 72 valid schedule combinations.",
      "Combined ratings, modality, time windows, and risk tiers into Markdown, CSV, JSON, and SVG reports.",
    ],
    metrics: ["72 valid combinations", "CSV/JSON/SVG reports"],
    stack: ["Python", "CSV", "JSON", "Reporting"],
    filters: ["Data", "Automation", "QA/Testing"],
    privacy: "Decision-support project; no institutional use claim.",
  },
  {
    title: "Used-Car Evaluation Pipeline",
    category: "Data",
    summary:
      "Marketplace data pipeline for candidate filtering, drive-away cost estimates, ranking, and daily reports.",
    bullets: [
      "Automated a used-car evaluation pipeline that gathered marketplace listings, filtered weak candidates, estimated drive-away cost, and generated daily reports.",
      "Improved marketplace throughput with concurrency benchmarks, cutting per-vehicle automation runtime by ~61% in measured samples: 21.2s to 8.29s and 17.59s to 6.78s.",
      "Generated a verified daily report with ~1K raw vehicle records across 11 runs and 33 qualified candidates.",
      "Implemented Playwright/Chromium scrapers with retry handling, polite delays, and structured listing evidence.",
    ],
    metrics: ["~61% runtime cut", "~1K records", "33 candidates"],
    stack: ["Python", "Playwright", "Chromium", "Reporting"],
    filters: ["Data", "Automation", "Browser Automation", "QA/Testing"],
    privacy: "Personal analysis project; no professional valuation or automotive authority claim.",
  },
  {
    title: "Guarded Application Preparation CLI",
    category: "Automation",
    summary:
      "Local CLI that imports candidates, creates application workspaces, and generates tailored resume artifacts with guardrails.",
    bullets: [
      "Created a local CLI that imports SQLite candidates, creates application workspaces, and generates tailored resume artifacts from profile data.",
      "Designed guarded workflow tracking with section audits, upload checks, confirmation capture, and status sync before submission.",
    ],
    metrics: ["SQLite workflow state", "Section audits", "Status sync"],
    stack: ["Node.js", "SQLite", "LaTeX", "CLI"],
    filters: ["Automation", "Backend", "QA/Testing"],
    privacy: "Describes user-authorized guarded workflow only; secrets and portal credentials are excluded.",
  },
  {
    title: "JobApply Browser Automation Platform",
    category: "Browser Automation",
    summary:
      "Chrome extension and automation platform for job listing classification, workflow tracking, and guarded portal steps.",
    bullets: [
      "Implemented a Chrome extension that crawls job listings, classifies opportunities with rules, and tracks Workday application flows.",
      "Added guarded portal automation, blocker checks, status sync, and fixture tests to keep workflows traceable.",
    ],
    metrics: ["Crawler", "Blocker checks", "Fixture tests"],
    stack: ["Chrome Extension", "TypeScript", "Workday flows"],
    filters: ["Automation", "Browser Automation", "QA/Testing", "Full-Stack"],
    privacy: "No credential storage, unguarded submission, or unsupported portal claims.",
  },
];

const projectGroups = [
  {
    title: "Operations Dashboards",
    description: "Schedule, incident, room, and support-state views built for reviewable operations.",
    projects: [
      "Campus Schedule Operations Dashboard",
      "Reservation Operations Dashboard",
      "ServiceNow Issue Analytics Dashboard",
    ],
  },
  {
    title: "Browser Automation",
    description: "Chrome/Edge, Playwright, and browser utilities used where manual lookup was the bottleneck.",
    projects: [
      "ServiceNow Offboarding Automation Extension",
      "JobApply Browser Automation Platform",
      "Used-Car Evaluation Pipeline",
      "Web Serial Recovery Tool",
    ],
  },
  {
    title: "Data Pipelines",
    description: "Public and operational datasets normalized into reports, charts, rankings, and dashboards.",
    projects: [
      "TTC Delay Insights",
      "Energy Usage Data Pipeline",
      "Timetable Ranking Pipeline",
      "Express Entry Service",
    ],
  },
  {
    title: "Backend/API Systems",
    description: "REST APIs, domain models, authentication, storage, and reproducible local development.",
    projects: ["CareFlow", "Veterinary EMR Prototype", "DocSearch RAG System", "Resume Match Dashboard Prototype"],
  },
  {
    title: "Document and OCR Tools",
    description: "Pipelines for document chunking, bilingual outputs, citation search, and field-photo review.",
    projects: [
      "DocSearch RAG System",
      "Bilingual Document Processing Pipeline",
      "EPUB Translation Pipeline",
      "OCR Asset Tag Automation",
    ],
  },
  {
    title: "IT Operations Automation",
    description: "Workbooks, scripts, and utilities for repeatable support, asset, and lab maintenance workflows.",
    projects: [
      "Barcode Asset Validation Worksheet",
      "Monitor Upgrade Tracking Workbook",
      "P2214H Replacement Availability Tracker",
      "Windows Lab Maintenance Automation",
    ],
  },
];

const skills = [
  {
    title: "Backend",
    items: ["Node.js", "Express", "FastAPI", ".NET/C#", "REST APIs", "JWT auth"],
  },
  {
    title: "Data",
    items: ["Python", "SQL", "PostgreSQL", "SQLite", "ETL", "Dashboards", "Reporting"],
  },
  {
    title: "Frontend",
    items: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "Chart.js"],
  },
  {
    title: "Automation",
    items: ["Chrome Extensions", "Playwright", "PowerShell", "Web Serial API", "ServiceNow workflows"],
  },
  {
    title: "Testing & Review",
    items: ["Cypress", "API tests", "Validation checks", "Review queues", "Evidence bundles"],
  },
  {
    title: "Deployment & Tools",
    items: ["Docker", "Git", "GitHub Actions", "Cloudflare Pages", "Workers KV", "Postman"],
  },
];

const filters = [
  "All",
  "Featured",
  "Operations",
  "Automation",
  "Browser Automation",
  "Backend",
  "Database",
  "Data",
  "AI/Search",
  "Full-Stack",
  "IT Operations",
  "QA/Testing",
];

let activeFilter = "All";

const byId = (id) => document.getElementById(id);

const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const pills = (items, className) =>
  (items || []).map((item) => `<span class="${className}">${escapeHtml(item)}</span>`).join("");

const links = (items = []) =>
  items
    .map(
      (link) =>
        `<a class="project-link" href="${escapeHtml(link.href)}" target="_blank" rel="noreferrer">${escapeHtml(link.label)}</a>`,
    )
    .join("");

function renderFeaturedCaseStudies() {
  const root = byId("featured-case-studies");
  root.innerHTML = featuredCaseStudies
    .map(
      (item) => `
        <article class="case-card">
          <div>
            <div class="case-topline">
              <span class="case-type">${escapeHtml(item.type)}</span>
              <span class="privacy-note">Public-safe</span>
            </div>
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.summary)}</p>
            <div class="case-sections">
              <div><strong>Problem</strong>${escapeHtml(item.problem)}</div>
              <div><strong>System Built</strong>${escapeHtml(item.system)}</div>
              <div><strong>Evidence</strong>${escapeHtml(item.evidence)}</div>
            </div>
          </div>
          <div>
            <div class="metric-row">${pills(item.metrics, "metric")}</div>
            <div class="stack-row">${pills(item.stack, "stack-pill")}</div>
            ${item.links ? `<div class="link-row">${links(item.links)}</div>` : ""}
            <p class="privacy-note">${escapeHtml(item.privacy)}</p>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderProjectMap() {
  const root = byId("project-map-grid");
  root.innerHTML = projectGroups
    .map(
      (group) => `
        <article class="map-card">
          <h3>${escapeHtml(group.title)}</h3>
          <p>${escapeHtml(group.description)}</p>
          <ul>
            ${group.projects.map((project) => `<li>${escapeHtml(project)}</li>`).join("")}
          </ul>
        </article>
      `,
    )
    .join("");
}

function renderSkills() {
  const root = byId("skills-grid");
  root.innerHTML = skills
    .map(
      (group) => `
        <article class="skill-card">
          <h3>${escapeHtml(group.title)}</h3>
          <div class="stack-row">${pills(group.items, "stack-pill")}</div>
        </article>
      `,
    )
    .join("");
}

function renderFilters() {
  const root = byId("project-filters");
  root.innerHTML = filters
    .map(
      (filter) => `
        <button class="filter-button" type="button" data-filter="${escapeHtml(filter)}" aria-pressed="${filter === activeFilter}">
          ${escapeHtml(filter)}
        </button>
      `,
    )
    .join("");

  root.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      activeFilter = button.dataset.filter;
      renderFilters();
      renderProjects();
    });
  });
}

function projectMatches(project, query) {
  const haystack = [
    project.title,
    project.category,
    project.summary,
    ...(project.bullets || []),
    ...(project.metrics || []),
    ...(project.stack || []),
    ...(project.filters || []),
  ]
    .join(" ")
    .toLowerCase();

  const filterMatch = activeFilter === "All" || (project.filters || []).includes(activeFilter);
  const queryMatch = !query || haystack.includes(query.toLowerCase());
  return filterMatch && queryMatch;
}

function renderProjects() {
  const query = byId("project-search").value.trim();
  const visible = projects.filter((project) => projectMatches(project, query));
  const root = byId("project-grid");
  const count = byId("project-count");

  count.textContent = `${visible.length} of ${projects.length} projects shown`;

  if (!visible.length) {
    root.innerHTML = `<p class="section-copy">No projects match this filter yet.</p>`;
    return;
  }

  root.innerHTML = visible
    .map(
      (project) => `
        <article class="project-card">
          <div class="case-topline">
            <span class="case-type">${escapeHtml(project.category)}</span>
            ${project.featured ? '<span class="privacy-note">Featured</span>' : ""}
          </div>
          <h3>${escapeHtml(project.title)}</h3>
          <p class="summary">${escapeHtml(project.summary)}</p>
          <div class="metric-row">${pills(project.metrics, "metric")}</div>
          <div class="stack-row">${pills(project.stack, "stack-pill")}</div>
          ${project.links ? `<div class="link-row">${links(project.links)}</div>` : ""}
          <details>
            <summary>Evidence and implementation notes</summary>
            <ul>
              ${project.bullets.map((bullet) => `<li>${escapeHtml(bullet)}</li>`).join("")}
            </ul>
          </details>
          ${project.privacy ? `<p class="privacy-note">${escapeHtml(project.privacy)}</p>` : ""}
        </article>
      `,
    )
    .join("");
}

function initNav() {
  const toggle = document.querySelector(".nav-toggle");
  const linksRoot = byId("nav-links");
  toggle.addEventListener("click", () => {
    const next = toggle.getAttribute("aria-expanded") !== "true";
    toggle.setAttribute("aria-expanded", String(next));
    linksRoot.classList.toggle("is-open", next);
  });

  linksRoot.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      toggle.setAttribute("aria-expanded", "false");
      linksRoot.classList.remove("is-open");
    });
  });
}

function init() {
  renderFeaturedCaseStudies();
  renderProjectMap();
  renderSkills();
  renderFilters();
  renderProjects();
  initNav();
  byId("project-search").addEventListener("input", renderProjects);
}

document.addEventListener("DOMContentLoaded", init);
