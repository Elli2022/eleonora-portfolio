"use client";

import { useEffect, useMemo, useState } from "react";

type Project = {
  name: string;
  category: string;
  summary: string;
  impact: string[];
  stack: string[];
  href: string;
  cta: string;
  repoHref?: string;
  badge: string;
  previewHighlights: string[];
  preview: {
    gradient: string;
    surface: string;
    accent: string;
    highlight: string;
  };
};


type Language = "sv" | "en";

type FilterKey = "all" | "company" | "webapp" | "data" | "internship";

type ProjectFilter = {
  key: FilterKey;
  labelSv: string;
};

const projectFilters: ProjectFilter[] = [
  { key: "all", labelSv: "Alla" },
  { key: "company", labelSv: "Företag" },
  { key: "webapp", labelSv: "Webbapp" },
  { key: "data", labelSv: "Data" },
  { key: "internship", labelSv: "Praktik" },
];

const filterBadgeMap: Record<Exclude<FilterKey, "all">, string[]> = {
  company: ["Företag", "Juridik", "Produkt", "Organisation"],
  webapp: ["Webbapp", "Spel", "AI"],
  data: ["Data"],
  internship: ["Praktik"],
};

const translations = {
  sv: {
    nav: {
      projects: "Projekt",
      approach: "Process",
      reference: "Referens",
      contact: "Kontakt",
    },
    languageToggleLabel: "Välj språk",
    hero: {
      eyebrow: "Frilans · Webb & frontend",
      title:
        "Webb för företag och organisationer som vill ha tydlig kommunikation, trygg leverans och modern frontend – jag tar ansvar från struktur till launch.",
      lead:
        "Jag tar er från kartläggda behov till en lanserad webb eller webbapp med genomtänkt struktur, vässad frontend och rimliga förväntningar på innehåll och CMS. Efter launch finns plan för överlämning, prestanda och vidare utveckling.",
      primaryCta: "Se referenser och case",
      secondaryCta: "Diskutera ert projekt",
      stats: [
        { value: "14", label: "Case ni kan granska" },
        { value: "1–2 v", label: "Återkoppling på förfrågan" },
        { value: "Next + WP", label: "Typ av leveranser" },
      ],
    },
    projects: {
      eyebrow: "Utvalda projekt",
      title: "Utvalda case med tydlig riktning och affärsnytta.",
      intro:
        "När ni utvärderar en leverantör behöver ni se bredd: landningssidor, företagswebbar, webbappar i Next/React, API‑driven backend, live‑data‑ och mobilappar samt dataverktyg – och CMS‑arbete i WordPress där det passar. Märkta praktikcase visar hur jag jobbat i byråmiljö med äkta krav. Jag tar ägarskap för lösningen vi gemensamt landar och kan bygga vidare när ni lanserar nästa steg.",
      hoverCue: "Öppna case",
      impactLabel: "Det här projektet visar",
      stackLabel: "Stack och fokus",
      repoLabel: "Se repo",
      filterLabels: {
        all: "Alla",
        company: "Företag",
        webapp: "Webbapp",
        data: "Data",
        internship: "Praktik",
      },
    },
    approach: {
      eyebrow: "Arbetssätt",
      title: "Tydlig riktning från första intryck till rätt nästa steg.",
      principles: [
        {
          title: "Tydlig riktning",
          description:
            "Varje layout utgår från vad besökaren ska känna, förstå och göra direkt på sidan.",
        },
        {
          title: "Design med nerv",
          description:
            "Jag gillar att skapa uttryck som känns genomtänkta, levande och anpassade till projektets tonalitet.",
        },
        {
          title: "Modern frontend",
          description:
            "Byggt i en aktuell stack som är snabb att utveckla i, enkel att underhålla och trygg att deploya.",
        },
      ],
      stackEyebrow: "Aktuell stack",
      stackTitle: "Modern och stabil stack för snabb, trygg leverans.",
      stackLead:
        "Teknikvalen är gjorda för snabb utveckling, trygg deploy och enkel vidareutveckling när nya behov uppstår.",
    },
    collaboration: {
      eyebrow: "Samarbete",
      title: "Så jobbar jag med er som kund.",
      lead:
        "Ni får förutsägbar scope, skriftlig offert, avstämda milstolpar och löpande kommunikation – så att leveransen matchar budget, tid och kvalitetskrav hela vägen.",
      bullets: [
        "Kickoff där vi samlar mål, målgrupp, budskap och tekniska förutsättningar",
        "Offert och leveranslista med milstoplar – ni vet vad som ingår och när det levereras",
        "Produktion med återkommande demos och avstämding innan nästa steg går i produktion",
        "Launch med överlämning: dokumentation, intro till drift/innehåll och plan för vidareförvaltning",
      ],
    },
    reference: {
      eyebrow: "Referens",
      title: "Bekräftad praktik från Capace Media",
      lead:
        "Under LIA på Capace Media Group i Malmö (27 nov 2023 – 1 feb 2024) arbetade jag med headless WordPress, WPGraphQL och React/Next.js — samma period som praktikcaset Sveriges offentliga kockar i projektlistan.",
      quote:
        "Eleonoras tekniska kompetens och problemlösning har varit på en hög nivå. Hennes självständighet och förmåga att ta till sig rätt information och implementera det på rätt sätt visar att hon kan leverera i byråmiljö.",
      attribution: "Rick Centerhall, Lead Developer",
      org: "Capace Media Group AB · Malmö",
      period: "LIA 27 nov 2023 – 1 feb 2024",
      pdfLabel: "Ladda ner LIA-intyg (PDF)",
      agencyLabel: "Capace Media",
      agencyHref: "https://capace.se/",
    },
    contact: {
      eyebrow: "Kontakt",
      title: "Ny sajt, förnya befintlig eller starta ett konkret uppdrag?",
      lead:
        "Maila en kort beskrivning av mål, tid och budgetram – jag återkopplar inom rimlig tid med förslag på nästa steg eller ett första möte. Passar det för er kan vi ta fram scope och offert innan produktion startar.",
    },
    footerTail: "Portfolio byggd med Next.js, React och Tailwind CSS.",
    ctaFallbacks: {
      openLiveSite: "Öppna livesajt",
      openNewsPage: "Öppna nyhetssidan",
      openCase: "Öppna case",
    },
  },
  en: {
    nav: {
      projects: "Projects",
      approach: "Process",
      reference: "Reference",
      contact: "Contact",
    },
    languageToggleLabel: "Select language",
    hero: {
      eyebrow: "Freelance · Web & frontend",
      title:
        "Web solutions for companies and organizations that need clear communication, dependable delivery, and modern frontend execution — I take ownership from structure to launch.",
      lead:
        "I take you from mapped needs to a launched website or web app with thoughtful structure, sharp frontend, and realistic expectations for content and CMS. After launch, there is a clear plan for handover, performance, and further development.",
      primaryCta: "View references and cases",
      secondaryCta: "Discuss your project",
      stats: [
        { value: "14", label: "Cases you can review" },
        { value: "1–2 w", label: "Response time on inquiry" },
        { value: "Next + WP", label: "Delivery profile" },
      ],
    },
    projects: {
      eyebrow: "Selected projects",
      title: "Selected cases with clear direction and business value.",
      intro:
        "When evaluating a supplier, you need range: landing pages, company websites, Next/React web apps, API-driven backend work, live-data and mobile apps, and data tools — plus WordPress CMS work where relevant. Marked internship cases show how I work in agency environments with real requirements. I take ownership of the solution we agree on and can continue building as you launch the next phase.",
      hoverCue: "Open case",
      impactLabel: "This project demonstrates",
      stackLabel: "Stack and focus",
      repoLabel: "View repo",
      filterLabels: {
        all: "All",
        company: "Company",
        webapp: "Web app",
        data: "Data",
        internship: "Internship",
      },
    },
    approach: {
      eyebrow: "Approach",
      title: "Clear direction from first impression to the right next step.",
      principles: [
        {
          title: "Clear direction",
          description:
            "Each layout starts with what the visitor should feel, understand, and do right away.",
        },
        {
          title: "Design with character",
          description:
            "I like building visual expressions that feel intentional, vibrant, and aligned with each project's tone.",
        },
        {
          title: "Modern frontend",
          description:
            "Built with a modern stack that is fast to develop in, easy to maintain, and safe to deploy.",
        },
      ],
      stackEyebrow: "Current stack",
      stackTitle: "Modern, stable stack for fast, reliable delivery.",
      stackLead:
        "Technology choices are made for fast development, dependable deploys, and smooth evolution as new needs appear.",
    },
    collaboration: {
      eyebrow: "Collaboration",
      title: "How I work with you as a client.",
      lead:
        "You get predictable scope, a written quote, aligned milestones, and continuous communication — so the delivery stays on budget, on time, and on quality from start to finish.",
      bullets: [
        "Kickoff where we align goals, target group, messaging, and technical prerequisites",
        "Quote and delivery plan with milestones — you know what is included and when it ships",
        "Production with recurring demos and alignment before the next phase enters production",
        "Launch and handover: documentation, onboarding to operations/content, and a plan for ongoing management",
      ],
    },
    reference: {
      eyebrow: "Reference",
      title: "Confirmed internship at Capace Media",
      lead:
        "During my LIA internship at Capace Media Group in Malmö (27 Nov 2023 – 1 Feb 2024) I worked with headless WordPress, WPGraphQL, and React/Next.js — the same period as the Sveriges offentliga kockar internship case in the project list.",
      quote:
        "Eleonora's technical skills and problem-solving have been at a high level. Her independence and ability to absorb the right information and implement it correctly show she can deliver in an agency environment.",
      attribution: "Rick Centerhall, Lead Developer",
      org: "Capace Media Group AB · Malmö",
      period: "LIA 27 Nov 2023 – 1 Feb 2024",
      pdfLabel: "Download internship certificate (PDF)",
      agencyLabel: "Capace Media",
      agencyHref: "https://capace.se/",
    },
    contact: {
      eyebrow: "Contact",
      title: "New site, redesign, or a concrete new assignment?",
      lead:
        "Send a short description of goals, timeline, and budget frame — I will reply within a reasonable time with a suggested next step or an initial meeting. If it is a fit, we can define scope and quote before production starts.",
    },
    footerTail: "Portfolio built with Next.js, React, and Tailwind CSS.",
    ctaFallbacks: {
      openLiveSite: "Open live site",
      openNewsPage: "Open news page",
      openCase: "Open case",
    },
  },
} as const;

const translateProjectCta = (cta: string, language: Language) => {
  const labels = translations[language].ctaFallbacks;
  if (cta === "Öppna nyhetssidan") return labels.openNewsPage;
  if (cta === "Öppna livesajt") return labels.openLiveSite;
  return labels.openCase;
};

type ProjectTranslationEn = Pick<Project, "category" | "summary" | "impact">;

const badgeTranslationsEn: Record<string, string> = {
  Företag: "Company",
  Pågår: "In progress",
  Produkt: "Product",
  Webbapp: "Web app",
  Spel: "Game",
  Juridik: "Legal",
  Organisation: "Organization",
  Praktik: "Internship",
  "Mat & vardag": "Food & daily life",
};

const previewHighlightTranslationsEn: Record<string, string> = {
  Kontaktformulär: "Contact form",
  "Lokal SEO": "Local SEO",
  Responsiv: "Responsive",
  "Live på Netlify": "Live on Netlify",
  "Flöde & vänner": "Feed & friends",
  Landningssida: "Landing page",
  Konvertering: "Conversion",
  "Live-data": "Live data",
  "3 hamnar": "3 ports",
  "Auto-uppdatering": "Auto update",
  "ML-kalibrering": "ML calibration",
  "Svenska Spel": "Svenska Spel",
  "Barn 5–7 år": "Children ages 5-7",
  Affärsjuridik: "Business law",
  Tjänstesidor: "Service pages",
  Italienska: "Italian",
  "Tydliga tjänster": "Clear services",
  "Auth-flöde": "Auth flow",
  "Tid i fokus": "Time-focused UX",
  "April 2024": "April 2024",
  Nyheter: "News",
  Favoriter: "Favorites",
};

const projectTranslationsEn: Record<string, ProjectTranslationEn> = {
  "Trygg Vardag Skåne": {
    category: "Company website for care and assistance services",
    summary:
      "Problem: Visitors struggled to quickly understand the service and how to reach out. Solution: A clear information architecture with low-friction Web3Forms contact flow and solid SEO setup (metadata, Open Graph, canonical). Result: A clearer customer journey where more users move from first impression to inquiry without unnecessary friction.",
    impact: [
      "Problem: Unclear service overview and high threshold to first contact for older adults and relatives",
      "Solution: Clear IA plus a Web3Forms contact flow with relevant fields, spam protection, and thank-you page",
      "Result: Clearer path from information to inquiry, reinforced by local SEO with metadata, Open Graph, and canonical tags",
    ],
  },
  "Community Auth Forum": {
    category: "Social forum with auth and API (in progress)",
    summary:
      "Problem: A social forum needs strong authentication and a backend that scales over time. Solution: Node/Express/TypeScript with JWT, bcrypt, sanitize-html, and helmet, plus PostgreSQL migrations, deployed as serverless Netlify Functions APIs. Result: A stable technical foundation ready for additional social features with security and operational clarity.",
    impact: [
      "Problem: Social app with high requirements for secure sign-in, data protection, and long-term API structure",
      "Solution: JWT + bcrypt hardened with sanitize-html and helmet, plus PostgreSQL migrations for controlled schema changes",
      "Result: Robust backend foundation on Netlify Functions, ready for new features without heavyweight server operations",
    ],
  },
  "InboxBridge MVP": {
    category: "AI pipeline for inbound email",
    summary:
      "Problem: Incoming email arrives in inconsistent formats and is hard to process reliably in manual workflows. Solution: An MVP pipeline that normalizes IMAP messages, extracts key data with an LLM, and maps output to partner APIs with confidence scoring. Result: Faster triage and an integration-ready data flow that can be validated directly in the dashboard.",
    impact: [
      "Problem: Unstructured inbound email made prioritization and handoff to external systems time-consuming",
      "Solution: IMAP normalization followed by LLM extraction of summaries, actions, and confidence scores for more consistent decisions",
      "Result: Structured partner payload and integration-ready flow that shortens time from inbox to execution",
    ],
  },
  "Nordflux eBook": {
    category: "Product and landing page",
    summary:
      "A modern web experience for Nordflux eBook with a clear visual profile, conversion focus, and a fast path to content discovery.",
    impact: [
      "Highlights product value through clear structure and a strong opening section",
      "Designed to guide visitors toward action with minimal friction",
      "Deployed live on Netlify with a fast, stable frontend",
    ],
  },
  "Färjeankomster Sverige": {
    category: "Live-data app (Expo web + mobile)",
    summary:
      "An app for passenger ferry arrivals in Ystad, Trelleborg, and Helsingborg. It fetches and parses public MyShipTracking pages through an r.jina.ai proxy without paid AIS APIs, supports date-based views, deduplicates ETA against confirmed arrivals, and updates automatically.",
    impact: [
      "Parser that merges multiple port data sources while keeping listings consistent over time",
      "CORS workaround via text proxy enables live web data without backend API keys",
      "Status logic for arrived, scheduled, and delayed traffic plus tabs for quick operational overview",
    ],
  },
  "Europatipset Optimizer": {
    category: "Streamlit app for data and betting insights",
    summary:
      "Python/Streamlit decision support for Europatipset: historical odds ingestion, scikit-learn calibrated 1X2 model, sync with official coupon context, budget-aware system suggestions, backtesting, and betting logs. Deployed on Streamlit Cloud.",
    impact: [
      "ML probability calibration with backtesting to evaluate model performance over time",
      "football-data.org API sync plus enrichment of coupon data for active rounds",
      "Pytest suite securing core logic for odds handling, modeling, and suggestions",
    ],
  },
  "Äventyrsparken": {
    category: "Educational web games for ages 5-7",
    summary:
      "A playful mini-game hub with two games - Color Catcher and Animal Match - built for young children with large controls, clear feedback, and low stress. React/Vite app with PWA support, Web Audio, and Framer Motion animations.",
    impact: [
      "Color Catcher: random color prompts, streak tracking, and immediate visual/audio feedback",
      "Animal Match: 12-card memory gameplay with matching logic and no time pressure",
      "Accessible UX: sound toggle, portrait orientation in PWA manifest, and touch-friendly controls",
    ],
  },
  "W Advokatbyrå": {
    category: "Trust-led corporate website",
    summary:
      "A credibility-focused legal advisory site with premium feel, clear structure, and strong contact pathways.",
    impact: [
      "Creates a calm, professional first impression",
      "Presents legal services clearly without feeling heavy",
      "Built for straightforward navigation across firm, services, and contact",
    ],
  },
  Italidea: {
    category: "Italian language interpretation and support",
    summary:
      "A clear website for Italidea focused on Italian-language interpretation and support, helping visitors quickly find the right service and contact path.",
    impact: [
      "Clear service presentation for visitors needing support in Italian",
      "Builds trust with a warm tone and explicit guidance",
      "Live on Netlify with a setup that is easy to extend",
    ],
  },
  Tidspuls: {
    category: "Web app for time and attendance",
    summary:
      "A logged-in web app where users create accounts, sign in, and manage time and activity in a clear workflow. Deployed as a fast SPA on Netlify.",
    impact: [
      "Registration and sign-in flow designed for a secure first-use experience",
      "Interface built to work equally well on mobile and desktop",
      "Live Netlify environment enables quick sharing with stakeholders",
    ],
  },
  "Convertor eBook": {
    category: "Internship project and modernized landing page",
    summary:
      "During an internship at Convertor Svenska AB (April 2024), I helped modernize the landing page for their eBook offer with clearer structure, refreshed design, and a smoother user journey.",
    impact: [
      "Delivery in a real production context with product and communication requirements",
      "Updated presentation with clearer information hierarchy and more readable flow",
      "Frontend designed for easy iteration as messaging or campaigns evolve",
    ],
  },
  "Francks Refurbishment": {
    category: "Multilingual WordPress site during internship",
    summary:
      "During an internship at Convertor Svenska AB (February-May 2024), I contributed to Francks Refurbishment's pre-launch staging website by updating copy, building and refining WordPress modules, and supporting both Swedish and Danish versions.",
    impact: [
      "Built and refined WordPress modules to improve reusability and CMS editing flow",
      "Structured and tightened copy for clearer messaging before staging and testing",
      "Ensured Swedish and Danish versions stayed aligned in structure and content",
    ],
  },
  "Sveriges offentliga kockar": {
    category: "WordPress and news flow during internship",
    summary:
      "During an internship at Capace Media in Malmö (November 2023-February 2024), I contributed to WordPress development and troubleshooting, with a focus on the news section and frictionless editorial publishing workflows.",
    impact: [
      "Resolved technical blockers that slowed editors and marketers in CMS publishing",
      "Stepped in effectively when senior developers were allocated to other client work",
      "Improved operational stability and clearer update workflows for the site",
    ],
  },
  "Sparbanken Syd": {
    category: "Form solutions in TYPO3 during internship",
    summary:
      "During an internship at Convertor Svenska AB (February-April 2024), I worked in the TYPO3 backend for Sparbanken Syd on their digital forms: building, customizing, and quality-assuring forms according to the bank's requirements for structure and content.",
    impact: [
      "Created and customized forms in the TYPO3 backend with the right fields, settings, and structure",
      "Worked in the bank's Form Folder via List view, building on existing forms where appropriate",
      "Saved, tested, and validated the forms so they worked in a live environment",
    ],
  },
  Receptbok: {
    category: "Full-stack recipe platform",
    summary:
      "A modern recipe app with PWA support, saved favorites, and optional frontend integration with an existing Express and MongoDB backend.",
    impact: [
      "App-like experience for finding, saving, and managing recipes",
      "Mobile-friendly install flow with manifest and service worker",
      "Next.js frontend with support for backend sync when needed",
    ],
  },
};

const localizeProject = (project: Project, language: Language): Project => {
  if (language !== "en") return project;

  const translated = projectTranslationsEn[project.name];

  return {
    ...project,
    category: translated?.category ?? project.category,
    summary: translated?.summary ?? project.summary,
    impact: translated?.impact.length ? translated.impact : project.impact,
    badge: badgeTranslationsEn[project.badge] ?? project.badge,
    previewHighlights: project.previewHighlights.map(
      (item) => previewHighlightTranslationsEn[item] ?? item,
    ),
  };
};

const projects: Project[] = [


  {
    name: "Trygg Vardag Skåne",
    category: "Företagswebb för omsorg och ledsagning",
    summary:
      "Problem: Besökare hade svårt att snabbt förstå tjänsten och hur de går vidare till kontakt. Lösning: En tydlig informationsarkitektur med lågfriktionsformulär via Web3Forms och genomarbetad SEO (metadata, Open Graph och canonical). Resultat: En mer begriplig kundresa där fler kan gå från första intryck till konkret förfrågan utan onödiga hinder.",
    impact: [
      "Problem: Otydlig tjänstebild och hög tröskel till första kontakt för anhöriga och äldre",
      "Lösning: Tydlig IA samt kontaktformulär med Web3Forms, relevanta fält, spam-skydd och tacksida efter inskick",
      "Resultat: Klarare väg från informationssida till förfrågan, stärkt av lokal SEO med metadata, Open Graph och canonical",
    ],
    stack: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Netlify"],
    href: "https://trygg-vardag-skane.netlify.app/",
    cta: "Öppna livesajt",
    repoHref: "https://github.com/Elli2022/trygg-vardag-portfolio",
    badge: "Företag",
    previewHighlights: ["Kontaktformulär", "Lokal SEO", "Responsiv", "Live på Netlify"],
    preview: {
      gradient: "linear-gradient(135deg, #3d5a4c 0%, #6b8f71 45%, #e8c4b8 100%)",
      surface: "rgba(255, 251, 245, 0.16)",
      accent: "#f0ebe3",
      highlight: "#f5d0c8",
    },
  },

  {
    name: "Community Auth Forum",
    category: "Socialt forum med auth och API (pågående)",
    summary:
      "Problem: Ett socialt forum kräver både säker autentisering och en backend som går att bygga vidare på. Lösning: Node/Express/TypeScript med JWT, bcrypt, sanitize-html och helmet samt PostgreSQL med migrationer, driftsatt som serverless API på Netlify Functions. Resultat: En stabil teknisk grund för att utveckla fler sociala funktioner med bibehållen säkerhet och tydlig driftmodell.",
    impact: [
      "Problem: Social app med höga krav på säker inloggning, dataskydd och hållbar API-struktur",
      "Lösning: JWT + bcrypt med förstärkt skydd via sanitize-html och helmet, samt PostgreSQL-migrationer för kontrollerad schemautveckling",
      "Resultat: Robust backendfundament på Netlify Functions som är redo för vidare funktioner utan att låsa till tung serverdrift",
    ],
    stack: ["Node.js", "Express", "TypeScript", "PostgreSQL", "JWT", "Netlify Functions"],
    href: "https://community-auth-forum.netlify.app/",
    cta: "Öppna livesajt",
    repoHref: "https://github.com/Elli2022/community-auth-forum",
    badge: "Pågår",
    previewHighlights: ["Auth & JWT", "PostgreSQL", "Flöde & vänner", "Netlify API"],
    preview: {
      gradient: "linear-gradient(135deg, #1e1b4b 0%, #6d28d9 48%, #c084fc 100%)",
      surface: "rgba(255, 255, 255, 0.14)",
      accent: "#e9d5ff",
      highlight: "#a78bfa",
    },
  },

  {
  name: "InboxBridge MVP",
  category: "AI-pipeline för inkommande e-post",
  summary:
    "Problem: Inkommande e-post kommer i varierande format och är svår att hantera konsekvent i manuella flöden. Lösning: En MVP-pipeline som normaliserar IMAP-mail, extraherar nyckelinformation med LLM och mappar vidare till partner-API med confidence-baserad kvalitetssignal. Resultat: Snabbare triage och ett integrationsredo dataflöde som kan testas och valideras direkt i dashboarden.",
  impact: [
    "Problem: Ostandardiserad inkommande maildata gjorde prioritering och handoff till externa system tidskrävande",
    "Lösning: IMAP-normalisering följt av LLM-extraktion av sammanfattning, actions och confidence-score för mer konsekvent beslutsunderlag",
    "Resultat: Strukturerad partner-payload med integrationsredo flöde som kortar vägen från inkorg till vidare hantering",
  ],
  stack: ["TypeScript", "React", "IMAP", "LLM", "REST API", "Netlify"],
  href: "https://inboxbridge-elli-mvp.netlify.app/",
  cta: "Öppna livesajt",
  repoHref: "https://github.com/Elli2022/portfolio-ai-mvp",
  badge: "AI",
  previewHighlights: ["IMAP ingestion", "LLM processing", "Partner API", "Pipeline demo"],
  preview: {
    gradient: "linear-gradient(135deg, #0f172a 0%, #1d4ed8 48%, #06b6d4 100%)",
    surface: "rgba(255, 255, 255, 0.14)",
    accent: "#dbeafe",
    highlight: "#a5f3fc",
  },
},

{
    name: "Nordflux eBook",
    category: "Produkt- och landningssida",
    summary:
      "En modern webb för Nordflux eBook med tydlig visuell profil, fokus på konvertering och snabb väg till att utforska innehållet.",
    impact: [
      "Lyfter värdet i produkten med tydlig struktur och stark förstasektion",
      "Designad för att guida besökaren vidare till handling utan friktion",
      "Deployad live på Netlify med snabb och stabil frontend",
    ],
    stack: ["Next.js", "TypeScript", "React", "Netlify"],
    href: "https://nordflux.netlify.app/",
    cta: "Öppna livesajt",
    repoHref: "https://github.com/Elli2022/nordflux-ebook",
    badge: "Produkt",
    previewHighlights: ["Landningssida", "Responsiv", "Konvertering", "Live på Netlify"],
    preview: {
      gradient: "linear-gradient(135deg, #0b1020 0%, #1d4ed8 52%, #22d3ee 100%)",
      surface: "rgba(255, 255, 255, 0.16)",
      accent: "#dbeafe",
      highlight: "#a5f3fc",
    },
  },

  {
    name: "Färjeankomster Sverige",
    category: "Live-data-app (Expo web + mobil)",
    summary:
      "App för passagerarfärjans ankomster i Ystad, Trelleborg och Helsingborg. Hämtar och tolkar offentliga MyShipTracking‑sidor via r.jina.ai‑proxy utan betald AIS‑API, med kalenderval för dag, deduplicering av ETA mot bekräftade ankomster och automatisk uppdatering.",
    impact: [
      "Parser som sammanför flera datakällor per hamn och håller listan konsekvent över tid",
      "CORS‑lösning med textproxy så att live‑data kan visas i webben utan backend‑nyckel",
      "Statuslogik för ankommen, planerad och försenad samt flikar för tydlig överblick i flödet",
    ],
    stack: ["Expo", "React Native", "TypeScript", "React Native Web", "Netlify"],
    href: "https://ferry-arrivals-sweden-elli.netlify.app/",
    cta: "Öppna livesajt",
    repoHref: "https://github.com/Elli2022/ferry-arrivals-sweden",
    badge: "Webbapp",
    previewHighlights: ["Live-data", "3 hamnar", "Parser", "Auto-uppdatering"],
    preview: {
      gradient: "linear-gradient(135deg, #0c1929 0%, #0e7490 52%, #2dd4bf 100%)",
      surface: "rgba(255, 255, 255, 0.14)",
      accent: "#a5f3fc",
      highlight: "#5eead4",
    },
  },

  {
    name: "Europatipset Optimizer",
    category: "Streamlit-app för data och spelförslag",
    summary:
      "Python/Streamlit‑stöd för Europatipset: historiska odds, scikit‑learn‑kalibreringsmodell för 1X2, synk mot officiell kupong i Svenska Spel‑kontext, systemförslag under radbudget, backtest och speldagbok. Driftsatt på Streamlit Cloud.",
    impact: [
      "ML‑kalibrering av sannolikheter med backtest för att bedöma modellens träffsäkerhet över tid",
      "API‑synk från football-data.org och berikning av kupongdata för aktuella omgångar",
      "Pytest‑testsuite som säkrar kärnlogik för odds, modell och spelförslag",
    ],
    stack: ["Python", "Streamlit", "pandas", "scikit-learn", "pytest"],
    href: "https://europatipset-optimizer.streamlit.app/",
    cta: "Öppna livesajt",
    repoHref: "https://github.com/Elli2022/europatipset-optimizer",
    badge: "Data",
    previewHighlights: ["ML-kalibrering", "Backtest", "Svenska Spel", "Streamlit Cloud"],
    preview: {
      gradient: "linear-gradient(135deg, #052e16 0%, #14532d 45%, #ca8a04 100%)",
      surface: "rgba(255, 255, 255, 0.12)",
      accent: "#fef08a",
      highlight: "#facc15",
    },
  },


  {
    name: "Äventyrsparken",
    category: "Pedagogiska webbspel för barn 5–7 år",
    summary:
      "En lekfull spelhubb med två minispel – Färgfångaren och Djurpare – byggd för små barn med stora knappar, tydlig feedback och låg stress. React/Vite-app med PWA-stöd, ljud via Web Audio API och animationer med Framer Motion.",
    impact: [
      "Färgfångaren: slumpmässiga färgval, streak och stjärnor med omedelbar visuell/auditiv feedback",
      "Djurpare: memory med 12 kort, match-logik och vinstflöde utan tidspress",
      "Tillgänglig UX: ljud av/på, porträttläge i PWA-manifest och touchvänliga komponenter",
    ],
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion", "PWA"],
    href: "https://avantrysparken.netlify.app/",
    cta: "Öppna livesajt",
    repoHref: "https://github.com/Elli2022/avantrysparken",
    badge: "Spel",
    previewHighlights: ["Barn 5–7 år", "2 minispel", "Web Audio", "PWA"],
    preview: {
      gradient: "linear-gradient(135deg, #7c3aed 0%, #f97316 48%, #fde047 100%)",
      surface: "rgba(255, 255, 255, 0.16)",
      accent: "#fef3c7",
      highlight: "#fde68a",
    },
  },

  {
    name: "W Advokatbyrå",
    category: "Förtroendedriven företagswebb",
    summary:
      "En förtroendeingivande sajt för juridisk rådgivning med premiumkänsla, tydlig struktur och fokus på kontaktvägar.",
    impact: [
      "Skapar ett lugnt och professionellt första intryck",
      "Lyfter fram juridiska tjänster utan att bli tung eller stel",
      "Byggd för tydlig navigation mellan byrå, tjänster och kontakt",
    ],
    stack: ["React", "TypeScript", "Netlify Functions"],
    href: "https://w-advokatbyra-malmo.netlify.app/",
    cta: "Öppna livesajt",
    badge: "Juridik",
    previewHighlights: ["Affärsjuridik", "Malmö", "Tjänstesidor", "Live på Netlify"],
    preview: {
      gradient: "linear-gradient(135deg, #121826 0%, #20345a 55%, #c7a56d 100%)",
      surface: "rgba(255, 248, 236, 0.14)",
      accent: "#f4d9a8",
      highlight: "#d0a85c",
    },
  },

  {
    name: "Italidea",
    category: "Språktolkning och stöd på italienska",
    summary:
      "En tydlig webb för Italidea med fokus på språktolkning och stöd på italienska, där besökaren snabbt hittar rätt hjälp och kontaktväg.",
    impact: [
      "Tydlig tjänstepresentation för besökare som behöver stöd på italienska",
      "Bygger förtroende med varm tonalitet och tydlig vägledning",
      "Live på Netlify med lösning som är enkel att vidareutveckla",
    ],
    stack: ["Next.js", "TypeScript", "React", "Netlify"],
    href: "https://italidea.netlify.app/",
    cta: "Öppna livesajt",
    repoHref: "https://github.com/Elli2022/Italidea",
    badge: "Organisation",
    previewHighlights: ["Italienska", "Responsiv", "Tydliga tjänster", "Live på Netlify"],
    preview: {
      gradient: "linear-gradient(135deg, #0f172a 0%, #166534 50%, #f59e0b 100%)",
      surface: "rgba(255, 255, 255, 0.16)",
      accent: "#dcfce7",
      highlight: "#fde68a",
    },
  },

  {
    name: "Tidspuls",
    category: "Webbapp för tid och närvaro",
    summary:
      "En inloggad webbapp där användare skapar konto, loggar in och jobbar med tid och aktivitet i ett tydligt flöde. Deployad som snabb SPA på Netlify.",
    impact: [
      "Registrering och inloggning med fokus på en trygg första upplevelse",
      "Gränssnitt byggt för att fungera lika bra på mobil som på desktop",
      "Live-miljö på Netlify med enkel delning av länk till intressenter",
    ],
    stack: ["Vue 3", "TypeScript", "Netlify"],
    href: "https://tidspuls-app.netlify.app/",
    cta: "Öppna livesajt",
    badge: "Webbapp",
    previewHighlights: ["Auth-flöde", "Responsiv", "Tid i fokus", "Live på Netlify"],
    preview: {
      gradient: "linear-gradient(135deg, #1e1b4b 0%, #5b21b6 48%, #fb7185 100%)",
      surface: "rgba(255, 255, 255, 0.16)",
      accent: "#ede9fe",
      highlight: "#fecdd3",
    },
  },

  {
    name: "Convertor eBook",
    category: "Praktik och moderniserad landningssida",
    summary:
      "Under praktik hos Convertor Svenska AB (april 2024) arbetade jag med att modernisera landningssidan för deras eBook-erbjudande: tydligare struktur, fräschare uttryck och en smidigare väg för besökaren.",
    impact: [
      "Arbete i verklig kontext med krav från produkt och kommunikation",
      "Uppdaterad presentation med tydligare informationshierarki och lättläst flöde",
      "Frontend som är enkel att vidareutveckla när budskap eller kampanjer ändras",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Netlify"],
    href: "https://convertor-e-book.netlify.app/",
    cta: "Öppna livesajt",
    repoHref: "https://github.com/Elli2022/convertor-e-book",
    badge: "Praktik",
    previewHighlights: ["Convertor Svenska AB", "April 2024", "Landningssida", "Live på Netlify"],
    preview: {
      gradient: "linear-gradient(135deg, #111827 0%, #0f766e 48%, #22c55e 100%)",
      surface: "rgba(255, 255, 255, 0.14)",
      accent: "#d1fae5",
      highlight: "#bbf7d0",
    },
  },

  {
    name: "Francks Refurbishment",
    category: "Flerspråkig WordPress-webb under praktik",
    summary:
      "Under praktik hos Convertor Svenska AB (februari–maj 2024) bidrog jag till Francks Refurbishments webbplats innan lansering i stagingmiljö: uppdatering av textinnehåll, uppbyggnad och justering av moduler i WordPress samt arbete med både den svenska och danska sidan.",
    impact: [
      "Byggde och finjusterade WordPress-moduler för mer återanvändbara och lättarbetade ytor i CMS",
      "Strukturerade och skärpte copy så budskapet blev konsekvent inför staging och vidare test",
      "Såg till att svensk och dansk version höll ihop i struktur och innehåll under förberedelserna",
    ],
    stack: ["WordPress"],
    href: "https://francksref.com/",
    cta: "Öppna livesajt",
    badge: "Praktik",
    previewHighlights: ["Convertor", "SV & DK", "WordPress", "Staging-ready"],
    preview: {
      gradient: "linear-gradient(135deg, #0c1929 0%, #155e75 48%, #d4a574 100%)",
      surface: "rgba(255, 252, 245, 0.14)",
      accent: "#e0f2f1",
      highlight: "#fcd9a5",
    },
  },

  {
    name: "Sveriges offentliga kockar",
    category: "WordPress och nyhetsflöde under praktik",
    summary:
      "Under praktik på webbyrån Capace Media i Malmö (november 2023–februari 2024) bidrog jag till WordPress-utveckling och felsökning på sajten, med särskilt fokus på nyhetsdelen och hur innehåll kan publiceras utan friktion.",
    impact: [
      "Löste tekniska hinder som stoppade marknadsförare och redaktörer från smidiga publiceringsflöden i CMS",
      "Kunde ta vid när senior utvecklare var upptagen med andra kundprojekt",
      "Bidrog till stabil drift och tydligare arbetsflöden vid uppdateringar av sajten",
    ],
    stack: ["WordPress"],
    href: "https://sverigesoffentligakockar.se/nyheter/",
    cta: "Öppna nyhetssidan",
    badge: "Praktik",
    previewHighlights: ["Capace Media", "Malmö", "WordPress", "Nyheter"],
    preview: {
      gradient: "linear-gradient(135deg, #134e4a 0%, #276749 46%, #b7791f 100%)",
      surface: "rgba(255, 251, 235, 0.14)",
      accent: "#faf6eb",
      highlight: "#fcd34d",
    },
  },

  {
    name: "Sparbanken Syd",
    category: "Formulärlösningar i TYPO3 under praktik",
    summary:
      "Under LIA på Convertor Svenska AB (februari–april 2024) arbetade jag i TYPO3-backend åt Sparbanken Syd med deras digitala formulär: jag byggde, anpassade och kvalitetssäkrade formulär utifrån bankens krav på struktur och innehåll.",
    impact: [
      "Skapade och anpassade formulär i TYPO3:s backend med rätt fält, inställningar och struktur",
      "Arbetade i bankens Form Folder via List view och utgick från befintliga formulär där det passade",
      "Sparade, testade och funktionssäkrade formulären så de fungerade i skarp miljö",
    ],
    stack: ["TYPO3", "CMS", "Formulär"],
    href: "https://www.sparbankensyd.se/",
    cta: "Öppna livesajt",
    badge: "Praktik",
    previewHighlights: ["Convertor", "TYPO3", "Formulär", "Backend"],
    preview: {
      gradient: "linear-gradient(135deg, #0f2c52 0%, #1d4ed8 48%, #38bdf8 100%)",
      surface: "rgba(240, 249, 255, 0.16)",
      accent: "#eff6ff",
      highlight: "#bfdbfe",
    },
  },

  {
    name: "Receptbok",
    category: "Fullstack receptplattform",
    summary:
      "En modern receptapp med PWA-stöd, sparade favoriter och möjlighet att koppla frontend mot en befintlig Express- och MongoDB-backend.",
    impact: [
      "App-lik upplevelse för att hitta, spara och hantera recept",
      "Mobilvänlig installation med manifest och service worker",
      "Frontend i Next.js med stöd för backend-synk vid behov",
    ],
    stack: ["Next.js", "TypeScript", "Express", "MongoDB"],
    href: "https://ellisreceptbok.netlify.app/",
    cta: "Öppna livesajt",
    repoHref: "https://github.com/Elli2022/receptbok",
    badge: "Mat & vardag",
    previewHighlights: ["PWA", "Responsiv", "Favoriter", "Live på Netlify"],
    preview: {
      gradient: "linear-gradient(135deg, #0f766e 0%, #34a853 48%, #f0d69f 100%)",
      surface: "rgba(255, 255, 255, 0.16)",
      accent: "#f5f1e8",
      highlight: "#d8f3c8",
    },
  }

];

const stack = [
  "Next.js 16",
  "React 19",
  "TypeScript",
  "Tailwind CSS 4",
  "Netlify-ready",
];

const links = [
  {
    label: "Mail",
    href: "mailto:eleonora.nocentini@gmail.com",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/eleonora-nocentini-sk%C3%B6ldebrink-a2a46a63/",
  },
];

function ExternalIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

function ProjectPreview({ project }: { project: Project }) {
  return (
    <div
      className="relative overflow-hidden rounded-[1.75rem] border border-white/20 p-4 text-white shadow-2xl"
      style={{ background: project.preview.gradient }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.28),transparent_30%)]" />
      <div className="relative space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-white/85" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/45" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          </div>
          <span
            className="rounded-full px-3 py-1 text-[0.65rem] font-semibold tracking-[0.2em] uppercase"
            style={{ backgroundColor: project.preview.surface, color: project.preview.accent }}
          >
            {project.badge}
          </span>
        </div>
        <div className="space-y-3 rounded-[1.4rem] border border-white/12 bg-black/12 p-5 backdrop-blur-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-white/70">
            {project.category}
          </p>
          <h3 className="font-display text-2xl font-semibold tracking-tight">
            {project.name}
          </h3>
          <div className="grid gap-3 text-sm text-white/82 sm:grid-cols-2">
            {project.previewHighlights.map((item, index) => (
              <div
                key={item}
                className="rounded-2xl border border-white/12 p-3"
                style={
                  index === project.previewHighlights.length - 1
                    ? {
                        backgroundColor: project.preview.surface,
                        color: project.preview.highlight,
                      }
                    : undefined
                }
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [language, setLanguage] = useState<Language>("sv");
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");
  const currentYear = new Date().getFullYear();
  const copy = translations[language];

  useEffect(() => {
    const stored = localStorage.getItem("portfolioLang");
    if (stored === "sv" || stored === "en") {
      setLanguage(stored);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("portfolioLang", language);
  }, [language]);

  const localizedProjects = useMemo(
    () => projects.map((project) => localizeProject(project, language)),
    [language],
  );

  const filteredProjects = useMemo(
    () =>
      localizedProjects.filter((project) => {
        if (project.name === "Receptbok") {
          return false;
        }

        if (activeFilter === "all") {
          return true;
        }

        return filterBadgeMap[activeFilter].includes(project.badge);
      }),
    [activeFilter, localizedProjects],
  );

  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[32rem] bg-[radial-gradient(circle_at_top,rgba(201,107,58,0.16),transparent_55%)]" />
      <div className="pointer-events-none absolute right-[-8rem] top-32 h-80 w-80 rounded-full bg-[rgba(21,74,75,0.14)] blur-3xl" />
      <div className="pointer-events-none absolute left-[-5rem] top-[34rem] h-72 w-72 rounded-full bg-[rgba(226,197,141,0.18)] blur-3xl" />

      <div className="mx-auto flex w-full max-w-7xl flex-col px-5 pb-12 pt-5 sm:px-8 lg:px-10">
        <header className="glass-card sticky top-4 z-30 mb-8 rounded-full px-5 py-3">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <a href="#top" className="font-display text-sm font-semibold tracking-[0.24em] uppercase">
              Eleonora Nocentini Sköldebrink
            </a>
            <nav className="flex flex-wrap items-center gap-2 text-sm text-[color:var(--muted)]">
              <div
                className="mr-1 inline-flex items-center rounded-full border border-[color:var(--line)] bg-white/75 p-1"
                role="group"
                aria-label={copy.languageToggleLabel}
              >
                {(["sv", "en"] as const).map((lang) => {
                  const isActive = language === lang;
                  return (
                    <button
                      key={lang}
                      type="button"
                      onClick={() => setLanguage(lang)}
                      aria-label={lang === "sv" ? "Visa sidan på svenska" : "Show page in English"}
                      aria-pressed={isActive}
                      className={`rounded-full px-3 py-1.5 text-xs font-semibold tracking-[0.16em] transition ${
                        isActive
                          ? "bg-[color:var(--ink)] text-white shadow-[0_8px_20px_rgba(21,39,55,0.24)]"
                          : "text-[color:var(--muted)] hover:bg-white hover:text-[color:var(--ink)]"
                      }`}
                    >
                      {lang.toUpperCase()}
                    </button>
                  );
                })}
              </div>
              <a className="rounded-full px-3 py-1.5 transition hover:bg-white/70 hover:text-[color:var(--ink)]" href="#projects">
                {copy.nav.projects}
              </a>
              <a className="rounded-full px-3 py-1.5 transition hover:bg-white/70 hover:text-[color:var(--ink)]" href="#approach">
                {copy.nav.approach}
              </a>
              <a className="rounded-full px-3 py-1.5 transition hover:bg-white/70 hover:text-[color:var(--ink)]" href="#reference">
                {copy.nav.reference}
              </a>
              <a className="rounded-full px-3 py-1.5 transition hover:bg-white/70 hover:text-[color:var(--ink)]" href="#contact">
                {copy.nav.contact}
              </a>
            </nav>
          </div>
        </header>

        <section id="top" className="grid gap-10 pb-20 pt-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:pb-28">
          <div className="space-y-8">
            <div className="reveal space-y-5">
              <p className="eyebrow text-xs font-bold">{copy.hero.eyebrow}</p>
              <h1 className="section-title max-w-4xl text-[clamp(3.2rem,8vw,6.5rem)] font-bold leading-[0.94]">
                {copy.hero.title}
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-[color:var(--muted)] sm:text-xl">
                {copy.hero.lead}
              </p>
            </div>

            <div className="reveal flex flex-col gap-3 sm:flex-row" style={{ animationDelay: "120ms" }}>
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full bg-[color:var(--ink)] px-6 py-3.5 text-sm font-semibold text-white transition hover:translate-y-[-1px] hover:bg-black"
              >
                {copy.hero.primaryCta}
              </a>
              <a
                href="mailto:eleonora.nocentini@gmail.com"
                className="inline-flex items-center justify-center rounded-full border border-[color:var(--line)] bg-white/80 px-6 py-3.5 text-sm font-semibold text-[color:var(--ink)] transition hover:border-[color:var(--accent)] hover:bg-white"
              >
                {copy.hero.secondaryCta}
              </a>
            </div>

            <div className="reveal grid gap-3 sm:grid-cols-3" style={{ animationDelay: "220ms" }}>
              {copy.hero.stats.map((item) => (
                <div key={item.label} className="glass-card rounded-[1.6rem] p-5">
                  <p className="font-display text-3xl font-bold tracking-tight">{item.value}</p>
                  <p className="mt-2 text-sm text-[color:var(--muted)]">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal relative lg:justify-self-end" style={{ animationDelay: "180ms" }}>
            <div className="float-slow glass-card relative rounded-[2rem] p-4">
              <ProjectPreview project={localizedProjects[0]} />
            </div>
            <div className="glass-card relative -mt-8 ml-auto w-[82%] rounded-[2rem] p-4 sm:-mt-12">
              <ProjectPreview project={localizedProjects[1]} />
            </div>
          </div>
        </section>

        <section id="projects" className="pb-20 lg:pb-28">
          <div className="reveal mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-3">
              <p className="eyebrow text-xs font-bold">{copy.projects.eyebrow}</p>
              <h2 className="section-title text-4xl font-bold sm:text-5xl">
                {copy.projects.title}
              </h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-[color:var(--muted)]">
              {copy.projects.intro}
            </p>
          </div>

          <div className="reveal mb-8 flex flex-wrap gap-3" style={{ animationDelay: "80ms" }}>
            {projectFilters.map((filter) => {
              const isActive = activeFilter === filter.key;

              return (
                <button
                  key={filter.key}
                  type="button"
                  onClick={() => setActiveFilter(filter.key)}
                  className={`rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? "border-[color:var(--accent)] bg-[color:var(--ink)] text-white shadow-[0_10px_26px_rgba(21,39,55,0.24)]"
                      : "border-[color:var(--line)] bg-white/70 text-[color:var(--muted)] hover:border-[color:var(--accent)] hover:bg-white hover:text-[color:var(--ink)]"
                  }`}
                >
                  {copy.projects.filterLabels[filter.key]}
                </button>
              );
            })}
          </div>

          <div className="space-y-8">
            {filteredProjects.map((project, index) => (
              <article
                key={project.name}
                className="glass-card reveal group relative grid gap-8 overflow-hidden rounded-[2rem] border border-transparent p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--accent)] hover:shadow-[0_28px_54px_rgba(21,39,55,0.18)] lg:grid-cols-[1.08fr_0.92fr] lg:p-8"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <div className="pointer-events-none absolute right-6 top-6">
                  <span className="inline-flex items-center rounded-full border border-[color:var(--line)] bg-white/80 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[color:var(--accent-deep)] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    {copy.projects.hoverCue}
                  </span>
                </div>
                <div className="flex flex-col justify-between gap-8">
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center gap-3 text-sm">
                      <span className="rounded-full border border-[color:var(--line)] px-3 py-1 text-[color:var(--accent-deep)]">
                        {project.badge}
                      </span>
                      <span className="text-[color:var(--muted)]">{project.category}</span>
                    </div>
                    <h3 className="section-title text-3xl font-bold sm:text-4xl">
                      {project.name}
                    </h3>
                    <p className="max-w-2xl text-lg leading-8 text-[color:var(--muted)]">
                      {project.summary}
                    </p>
                  </div>

                  <div className="grid gap-6 lg:grid-cols-2">
                    <div>
                      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[color:var(--accent-deep)]">
                        {copy.projects.impactLabel}
                      </p>
                      <ul className="space-y-3 text-sm leading-6 text-[color:var(--muted)]">
                        {project.impact.map((item) => (
                          <li key={item} className="rounded-2xl border border-[color:var(--line)] bg-white/65 px-4 py-3">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-5">
                      <div>
                        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[color:var(--accent-deep)]">
                          {copy.projects.stackLabel}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.stack.map((item) => (
                            <span
                              key={item}
                              className="rounded-full border border-[color:var(--line)] bg-[color:var(--surface-strong)] px-3 py-2 text-sm text-[color:var(--ink)]"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-3">
                        <a
                          href={project.href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-full bg-[color:var(--ink)] px-5 py-3 text-sm font-semibold text-white transition hover:translate-y-[-1px] hover:bg-black"
                        >
                          {translateProjectCta(project.cta, language)}
                          <ExternalIcon />
                        </a>
                        {project.repoHref ? (
                          <a
                            href={project.repoHref}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-[color:var(--line)] bg-white/75 px-5 py-3 text-sm font-semibold text-[color:var(--ink)] transition hover:border-[color:var(--accent)] hover:bg-white"
                          >
                            {copy.projects.repoLabel}
                            <ExternalIcon />
                          </a>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="self-center">
                  <ProjectPreview project={project} />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="approach" className="pb-20 lg:pb-28">
          <div className="reveal mb-10 space-y-3">
            <p className="eyebrow text-xs font-bold">{copy.approach.eyebrow}</p>
            <h2 className="section-title text-4xl font-bold sm:text-5xl">
              {copy.approach.title}
            </h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="grid gap-5 md:grid-cols-3">
              {copy.approach.principles.map((item, index) => (
                <article
                  key={item.title}
                  className="glass-card reveal rounded-[1.75rem] p-6"
                  style={{ animationDelay: `${index * 120}ms` }}
                >
                  <p className="mb-6 font-display text-4xl font-bold tracking-tight text-[color:var(--accent)]">
                    0{index + 1}
                  </p>
                  <h3 className="section-title text-2xl font-bold">{item.title}</h3>
                  <p className="mt-3 text-base leading-7 text-[color:var(--muted)]">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>

            <aside className="glass-card reveal rounded-[1.9rem] p-6" style={{ animationDelay: "180ms" }}>
              <p className="eyebrow text-xs font-bold">{copy.approach.stackEyebrow}</p>
              <h3 className="section-title mt-3 text-3xl font-bold">
                {copy.approach.stackTitle}
              </h3>
              <p className="mt-4 text-base leading-7 text-[color:var(--muted)]">
                {copy.approach.stackLead}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[color:var(--line)] bg-white/70 px-3 py-2 text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </aside>
          </div>
        </section>


        <section className="pb-16 lg:pb-20">
          <div className="glass-card reveal rounded-[2rem] p-8 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-4">
                <p className="eyebrow text-xs font-bold">{copy.collaboration.eyebrow}</p>
                <h2 className="section-title text-4xl font-bold sm:text-5xl">
                  {copy.collaboration.title}
                </h2>
                <p className="max-w-2xl text-lg leading-8 text-[color:var(--muted)]">
                  {copy.collaboration.lead}
                </p>
              </div>

              <div className="grid gap-4">
                {copy.collaboration.bullets.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-[color:var(--line)] bg-white/70 px-5 py-4 text-base leading-7"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="reference" className="pb-10">
          <div className="glass-card reveal rounded-[2.2rem] p-8 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-start">
              <div className="space-y-5">
                <p className="eyebrow text-xs font-bold">{copy.reference.eyebrow}</p>
                <h2 className="section-title text-4xl font-bold sm:text-5xl">
                  {copy.reference.title}
                </h2>
                <p className="max-w-2xl text-lg leading-8 text-[color:var(--muted)]">
                  {copy.reference.lead}
                </p>
                <blockquote className="border-l-4 border-[color:var(--accent)] pl-5 text-lg leading-8 text-[color:var(--ink)] italic">
                  &ldquo;{copy.reference.quote}&rdquo;
                </blockquote>
                <div className="space-y-1 text-sm text-[color:var(--muted)]">
                  <p className="font-semibold text-[color:var(--ink)]">
                    {copy.reference.attribution}
                  </p>
                  <p>{copy.reference.org}</p>
                  <p>{copy.reference.period}</p>
                </div>
              </div>

              <div className="flex flex-col gap-3 lg:pt-12">
                <a
                  href="/references/lia-intyg-capace-eleonora.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--ink)] px-5 py-3 text-sm font-semibold text-white transition hover:translate-y-[-1px] hover:bg-black"
                >
                  {copy.reference.pdfLabel}
                  <ExternalIcon />
                </a>
                <a
                  href={copy.reference.agencyHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[color:var(--line)] bg-white/70 px-5 py-3 text-sm font-semibold text-[color:var(--ink)] transition hover:translate-y-[-1px] hover:bg-white"
                >
                  {copy.reference.agencyLabel}
                  <ExternalIcon />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="pb-10">
          <div className="glass-card reveal rounded-[2.2rem] p-8 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="space-y-4">
                <p className="eyebrow text-xs font-bold">{copy.contact.eyebrow}</p>
                <h2 className="section-title text-4xl font-bold sm:text-5xl">
                  {copy.contact.title}
                </h2>
                <p className="max-w-2xl text-lg leading-8 text-[color:var(--muted)]">
                  {copy.contact.lead}
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                {links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                    className="inline-flex items-center justify-center rounded-full bg-[color:var(--ink)] px-5 py-3 text-sm font-semibold text-white transition hover:translate-y-[-1px] hover:bg-black"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-10 border-t border-[color:var(--line)] pt-5 text-sm text-[color:var(--muted)]">
              <p>
                © {currentYear} Eleonora Nocentini Sköldebrink. {copy.footerTail}
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
