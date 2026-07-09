const featuredCaseStudies = [
  {
    id: "cat-respiration",
    title: "Cat Respiration Lab",
    type: "Applied computer vision",
    summary:
      "A non-diagnostic phone-video pipeline that estimates cat respiration while refusing weak, moving, or conflicting signals.",
    problem:
      "Subtle thorax motion can be overwhelmed by camera movement, weak texture, compression, and disagreement between signal methods.",
    decision:
      "Combined video normalization, KLT optical flow, signal processing, and method consensus, then made quality gates return unmeasurable instead of forcing a rate from weak evidence.",
    verification:
      "Includes 22 Python tests, a public-release guard, and a one-command deterministic synthetic demo: a 24.0 breaths/min target returned 24.0 (0.0 error, 0.983 quality). Weak evidence still returns unmeasurable.",
    limits:
      "Non-diagnostic research prototype. It does not claim clinical accuracy, veterinary validation, or physical-device LiDAR validation.",
    learning:
      "Reliable measurement depends as much on rejecting weak evidence as it does on producing an estimate.",
    metrics: ["22 Python tests", "Synthetic demo: 0.0 error", "Fail-closed quality gates"],
    stack: ["Python", "OpenCV", "SciPy", "SwiftUI", "AVFoundation", "FFmpeg"],
  },
  {
    id: "centennial-operations",
    title: "Centennial Operations Dashboards",
    type: "Operational data systems",
    summary:
      "Public-safe schedule and issue-analysis surfaces that turn repeated support lookup into reviewable operational decisions.",
    problem:
      "Schedule and incident exports came from separate operational sources, contained missing metadata, and could not be exposed directly in a public portfolio.",
    decision:
      "Built precomputed, client-indexed views and governed review queues; enriched records only when exact source evidence existed and preserved unresolved values as unknown.",
    verification:
      "The schedule surface reconciles 10.7K events with 9.6K availability rows and passes 19 tests. Publication checks pass 18/18; categorical lineage keeps 77 upstream gaps and one source mismatch visible.",
    limits:
      "Sanitized aggregate description only. Seventy-seven metadata items remain unresolved rather than guessed; private schedules, ticket text, names, and internal URLs are excluded.",
    learning:
      "In operational data, preserving an unknown can be more trustworthy than filling it with a plausible answer; source lineage must travel with every change.",
    metrics: ["10.7K events", "19 dashboard tests", "18/18 publication checks"],
    stack: ["JavaScript", "Cloudflare", "Playwright", "Data validation"],
    links: [{ label: "Sanitized demo", href: "https://youtu.be/Qcq_9weiisU" }],
  },
  {
    id: "careflow",
    title: "CareFlow",
    type: "Backend system",
    summary:
      "A .NET and PostgreSQL backend for veterinary EMR-style workflows, records, lab reports, and reproducible local development.",
    problem:
      "Interconnected owners, pets, notes, reports, and lab results needed versioned schema changes and safe behavior when related records are deleted.",
    decision:
      "Modeled lifecycle rules in EF Core, aligned the migration snapshot with restrictive deletion policies, and added an in-memory HTTP owner/pet workflow instead of treating the schema as disconnected CRUD tables.",
    verification:
      "Local verification has 19 passing tests; the Release build reports zero warnings and zero errors, the migration model has no pending drift, and the NuGet audit reports zero known vulnerabilities.",
    limits:
      "Prototype and development evidence only. HTTP tests use EF InMemory, the alignment migration has not run on a real PostgreSQL dataset, and the latest local evidence is not yet published to the public repository.",
    learning:
      "A domain model includes data lifecycle and deletion policy, not just table shapes and API endpoints.",
    metrics: ["19 local tests", "0 Release warnings/errors", "0 NuGet vulnerabilities"],
    stack: [".NET", "C#", "PostgreSQL", "EF Core", "REST APIs"],
    links: [{ label: "GitHub", href: "https://github.com/Eddie000321/CareFlow" }],
  },
  {
    id: "docsearch",
    title: "DocSearch RAG System",
    type: "AI/search backend",
    summary:
      "A FastAPI and FAISS document-search MVP that ingests documents and returns ranked evidence with source labels.",
    problem:
      "Uploaded TXT, PDF, and DOCX files needed consistent chunking, indexing, validation, and reviewable answers.",
    decision:
      "Separated loaders, chunking, index lifecycle, and API validation; retained compatibility with the existing FAISS index instead of silently rebuilding away prior searchable units.",
    verification:
      "Five local tests pass with zero FAISS deprecation warnings, including compatibility with the existing 34-vector index; clean-install CI is configured to treat warnings as errors.",
    limits:
      "Local applied-search MVP. It does not claim production retrieval quality, multi-tenant security, authentication, or compliance readiness.",
    learning:
      "In a search system, ingestion consistency, index compatibility, and explicit failure boundaries matter as much as answer generation.",
    metrics: ["5 tests", "0 FAISS warnings", "34-vector index compatibility"],
    stack: ["Python", "FastAPI", "FAISS", "Docker"],
    links: [{ label: "GitHub", href: "https://github.com/Eddie000321/docSearch" }],
  },
];

const projects = [
  {
    title: "Cat Respiration Lab",
    category: "Computer Vision",
    featured: true,
    summary:
      "Quality-aware phone-video pipeline for non-diagnostic cat respiration estimation and iPhone data collection.",
    bullets: [
      "Built a non-diagnostic cat respiration pipeline that normalizes phone video, tracks thorax motion with KLT optical flow, and estimates rate by method consensus.",
      "Implemented fail-closed quality gates that return unmeasurable for weak, moving, or conflicting signals and preserve method estimates for review.",
      "Integrated a SwiftUI/AVFoundation iPhone collector with optional depth metadata and RGB fallback, plus Python waveform and JSON/CSV reports.",
      "Added 22 Python tests, a public-release guard, and a one-command deterministic synthetic demo where a 24.0 breaths/min target returned 24.0 with 0.0 error and 0.983 quality.",
    ],
    metrics: ["22 Python tests", "Synthetic demo: 0.0 error", "Explicit unmeasurable state"],
    stack: ["Python", "OpenCV", "SciPy", "SwiftUI", "AVFoundation", "FFmpeg"],
    filters: ["Featured", "Computer Vision", "Mobile", "Data", "QA/Testing"],
    privacy:
      "Private research/prototype repository; no public code link or unsupported clinical/LiDAR validation claim.",
  },
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
      "Added five network-free ETL tests for reviewed snapshots, deterministic reruns, standard columns, durations, and source provenance.",
    ],
    metrics: ["~410K records", "5 ETL tests", "Public data"],
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
      "Document-search MVP that chunks TXT/PDF/DOCX uploads and returns ranked evidence with source labels.",
    bullets: [
      "Created a FastAPI/FAISS search MVP that ingests TXT/PDF/DOCX files, chunks content, and returns ranked evidence with source labels.",
      "Implemented document loaders, chunking, index lifecycle, and API responses so uploads could be searched and cited consistently.",
      "Added file validation, 10 MB limits, PDF caps, five API tests, Docker packaging, and clean-install CI with warnings treated as errors.",
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
    title: "Express Entry Service",
    category: "Data",
    summary:
      "Flask and SQLite analytics dashboard for public Express Entry draw data and score comparison views.",
    bullets: [
      "Implemented a Flask/SQLite app that collects Express Entry draw data and shows trend dashboards and score comparison views.",
      "Added public-data refresh and aggregation workflows for repeatable cutoff, score trend, and applicant-view dashboards.",
      "Created Chart.js views for draw cadence, program mix, cutoff trends, invitations, and personal score comparison.",
      "Added 35 offline tests and a blocking schema, duplicate, null-rate, row-count, and freshness contract; a live read-only check covered 426 draws with zero null invitation or CRS fields.",
    ],
    metrics: ["35 offline tests", "426 live rows", "Data-quality contract"],
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
      "Added eight network-free tests for exact raw-to-CSV snapshots, byte-stable reruns, stage order, and fail-closed execution.",
    ],
    metrics: ["10 years of data", "8 network-free tests"],
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
      "Added five network-free tests for normalized snapshots, input immutability, byte-stable output, hybrid classification, and multi-page collection.",
    ],
    metrics: ["72 valid combinations", "5 network-free tests"],
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
      "Built a no-portal/no-database policy dry run that records seven hard-boundary decisions, rejects secret-like fields, and verifies deterministic replay and tamper-evident SHA-256 traces.",
    ],
    metrics: ["7 policy checks", "Deterministic replay", "Tamper evidence"],
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
    title: "Applied Computer Vision & Mobile",
    description: "Quality-aware video/signal processing paired with a focused iPhone collection workflow.",
    projects: ["Cat Respiration Lab"],
  },
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
    projects: ["CareFlow", "DocSearch RAG System", "Resume Match Dashboard Prototype"],
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
    title: "Computer Vision & Mobile",
    items: ["OpenCV", "SciPy", "Signal processing", "SwiftUI", "AVFoundation", "FFmpeg"],
  },
  {
    title: "Backend",
    items: ["FastAPI", ".NET / C#", "Node.js", "Express", "REST APIs", "Domain modelling"],
  },
  {
    title: "Data",
    items: ["Python", "SQL", "PostgreSQL", "SQLite", "ETL pipelines", "Data quality"],
  },
  {
    title: "Frontend",
    items: ["React", "TypeScript", "JavaScript", "HTML / CSS", "Chart.js", "Accessible UI"],
  },
  {
    title: "Automation",
    items: ["Chrome Extensions", "Playwright", "PowerShell", "Web Serial API", "Workflow tooling", "File processing"],
  },
  {
    title: "Testing & Review",
    items: ["Pytest / xUnit", "API tests", "Validation gates", "Review queues", "CI", "Evidence bundles"],
  },
];

const filters = ["All", "Vision", "Operations", "Data", "Backend", "Automation"];

const filterAliases = {
  Vision: ["Computer Vision", "Mobile"],
  Operations: ["Operations", "IT Operations"],
  Data: ["Data", "Database"],
  Backend: ["Backend", "AI/Search", "Full-Stack"],
  Automation: ["Automation", "Browser Automation"],
};

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

const slugify = (value) =>
  String(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const caseProjectAnchors = {
  "centennial-operations": "campus-schedule-operations-dashboard",
  careflow: "careflow",
  docsearch: "docsearch-rag-system",
};

function renderFeaturedCaseStudies() {
  const root = byId("featured-case-studies");
  const [lead, ...rest] = featuredCaseStudies;
  const renderCaseSections = (item) => `
    <dl class="case-sections">
      <div><dt>Problem</dt><dd>${escapeHtml(item.problem)}</dd></div>
      <div><dt>Engineering decision</dt><dd>${escapeHtml(item.decision)}</dd></div>
      <div><dt>Verification</dt><dd>${escapeHtml(item.verification)}</dd></div>
      <div><dt>Known limits</dt><dd>${escapeHtml(item.limits)}</dd></div>
      <div><dt>What I learned</dt><dd>${escapeHtml(item.learning)}</dd></div>
    </dl>
  `;
  const renderOutcomeLedger = (item, includeArchiveLink = false) => `
    <aside class="outcome-ledger" aria-label="${escapeHtml(item.title)} outcome ledger">
      <h4>Outcome ledger</h4>
      <div class="ledger-grid">
        ${item.metrics.map((metric) => `<div><strong>${escapeHtml(metric)}</strong><span>verified project evidence</span></div>`).join("")}
      </div>
      <div class="stack-row">${pills(item.stack, "stack-pill")}</div>
      ${item.links ? `<div class="link-row">${links(item.links)}</div>` : ""}
      ${
        includeArchiveLink
          ? `<div class="link-row"><a class="project-link" href="#project-${escapeHtml(caseProjectAnchors[item.id] || slugify(item.title))}">View in project archive</a></div>`
          : ""
      }
    </aside>
  `;

  root.innerHTML = `
    <article class="case-lead" id="case-${escapeHtml(lead.id)}" data-case-study="${escapeHtml(lead.id)}">
      <div class="case-lead-title">
        <div>
          <span class="case-index">01 · ${escapeHtml(lead.type)}</span>
          <h3>${escapeHtml(lead.title)}</h3>
          <p class="case-summary">${escapeHtml(lead.summary)}</p>
        </div>
        <div>
          <div class="metric-row">${pills(lead.metrics, "metric")}</div>
          <div class="stack-row">${pills(lead.stack, "stack-pill")}</div>
          ${lead.links ? `<div class="link-row">${links(lead.links)}</div>` : ""}
        </div>
      </div>
      <div class="case-lead-body">
        ${renderCaseSections(lead)}
        <aside class="outcome-ledger" aria-label="${escapeHtml(lead.title)} outcome ledger">
          <h4>Outcome ledger</h4>
          <div class="ledger-signal" aria-hidden="true">
            <svg viewBox="0 0 280 58">
              <path d="M0 31 L18 30 L29 27 L42 34 L58 25 L73 31 L91 29 L108 18 L124 32 L143 28 L158 36 L175 21 L194 30 L210 27 L228 33 L245 23 L262 29 L280 25" fill="none" stroke="currentColor" stroke-width="2" />
            </svg>
          </div>
          <div class="ledger-grid">
            ${lead.metrics.map((metric) => `<div><strong>${escapeHtml(metric)}</strong><span>verified project evidence</span></div>`).join("")}
          </div>
          <div class="stack-row">${pills(lead.stack, "stack-pill")}</div>
          ${lead.links ? `<div class="link-row">${links(lead.links)}</div>` : ""}
        </aside>
      </div>
    </article>
    <div class="case-rows">
      ${rest
        .map(
          (item, index) => `
            <details class="case-secondary" id="case-${escapeHtml(item.id)}" data-case-study="${escapeHtml(item.id)}" name="featured-case-study">
              <summary class="case-row">
                <span class="case-index">0${index + 2}</span>
                <span>
                  <h3>${escapeHtml(item.title)}</h3>
                  <span class="case-type">${escapeHtml(item.type)}</span>
                </span>
                <span class="case-row-metrics">${escapeHtml(item.metrics.join(" · "))}</span>
                <span class="case-row-link" aria-hidden="true"></span>
              </summary>
              <div class="case-lead-body">
                ${renderCaseSections(item)}
                ${renderOutcomeLedger(item, true)}
              </div>
            </details>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderSkills() {
  const root = byId("skills-grid");
  root.innerHTML = skills
    .map(
      (group) => `
        <article class="skill-card">
          <h3>${escapeHtml(group.title)}</h3>
          <ul class="skill-list">
            ${group.items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
          </ul>
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
      root.querySelectorAll("button").forEach((candidate) => {
        candidate.setAttribute("aria-pressed", String(candidate.dataset.filter === activeFilter));
      });
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

  const aliases = filterAliases[activeFilter] || [activeFilter];
  const filterMatch =
    activeFilter === "All" || aliases.some((alias) => (project.filters || []).includes(alias));
  const queryMatch = !query || haystack.includes(query.toLowerCase());
  return filterMatch && queryMatch;
}

function renderProjects() {
  const query = byId("project-search").value.trim();
  const visible = projects.filter((project) => projectMatches(project, query));
  const root = byId("project-grid");
  const count = byId("project-count");

  count.textContent = `${visible.length} / ${projects.length} projects`;

  if (!visible.length) {
    root.innerHTML = `<p class="empty-state">No projects match this search.</p>`;
    return;
  }

  root.innerHTML = visible
    .map(
      (project) => `
        <details class="project-item" id="project-${escapeHtml(slugify(project.title))}">
          <summary class="project-summary">
            <span class="project-title">${escapeHtml(project.title)}</span>
            <span class="project-domain">${escapeHtml(project.category)}</span>
            <span class="project-evidence">${escapeHtml((project.metrics || []).slice(0, 3).join(" · "))}</span>
            <span class="project-stack">${escapeHtml((project.stack || []).slice(0, 4).join(", "))}</span>
            <span class="project-toggle" aria-hidden="true"></span>
          </summary>
          <div class="project-details">
            <div>
              <p class="summary">${escapeHtml(project.summary)}</p>
              ${project.links ? `<div class="link-row">${links(project.links)}</div>` : ""}
              ${project.privacy ? `<p class="privacy-note">${escapeHtml(project.privacy)}</p>` : ""}
            </div>
            <ul>
              ${project.bullets.map((bullet) => `<li>${escapeHtml(bullet)}</li>`).join("")}
            </ul>
          </div>
        </details>
      `,
    )
    .join("");
}

function initNav() {
  const toggle = document.querySelector(".nav-toggle");
  const toggleLabel = toggle.querySelector(".sr-only");
  const linksRoot = byId("nav-links");
  toggle.addEventListener("click", () => {
    const next = toggle.getAttribute("aria-expanded") !== "true";
    toggle.setAttribute("aria-expanded", String(next));
    toggleLabel.textContent = next ? "Close navigation" : "Open navigation";
    linksRoot.classList.toggle("is-open", next);
  });

  linksRoot.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      toggle.setAttribute("aria-expanded", "false");
      toggleLabel.textContent = "Open navigation";
      linksRoot.classList.remove("is-open");
    });
  });
}

function init() {
  renderFeaturedCaseStudies();
  renderSkills();
  renderFilters();
  renderProjects();
  initNav();
  byId("project-search").addEventListener("input", renderProjects);
}

document.addEventListener("DOMContentLoaded", init);
