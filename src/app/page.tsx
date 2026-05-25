import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frilans webbutveckling · referenser",
  description:
    "Webb och frontend för företag och organisationer – tydliga leveranser, modern stack och ansvarsfull överlämning.",
};

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

const projects: Project[] = [


  {
    name: "Trygg Vardag Skåne",
    category: "Företagswebb för omsorg och ledsagning",
    summary:
      "En varm och tydlig företagswebb för sällskap och ledsagning för äldre i Skåne – med fokus på att förklara tjänsten, bygga förtroende och göra det enkelt att skicka förfrågan via formulär.",
    impact: [
      "Kontaktformulär via Web3Forms med tydliga fält, spam-skydd och omdirigering till tacksida efter inskick",
      "SEO med metadata, lokala nyckelord, Open Graph, canonical och struktur som stödjer synlighet i sök",
      "Tydlig informationsarkitektur från tjänster och verksamhetsområde till kontakt och nästa steg",
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
      "Ett pågående fullstack‑forum där användare registrerar sig, loggar in med JWT och får ett flöde med nyheter, inlägg med bilder, gilla‑ och kommentarsfunktion, vänner och profiler – inklusive återställning av lösenord. Node/Express/TypeScript‑API på Netlify Functions med PostgreSQL (Neon) och en statisk SPA med hash‑routing.",
    impact: [
      "Säker inloggning med JWT, bcrypt och skydd via sanitize-html samt helmet mot vanliga webbrisker",
      "PostgreSQL med migrationer och tydlig datamodell för användare, inlägg och relationer",
      "Serverless API‑arkitektur på Netlify Functions som skalar utan egen serverdrift",
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

const principles = [
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
  const currentYear = new Date().getFullYear();

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
              <a className="rounded-full px-3 py-1.5 transition hover:bg-white/70 hover:text-[color:var(--ink)]" href="#projects">
                Projekt
              </a>
              <a className="rounded-full px-3 py-1.5 transition hover:bg-white/70 hover:text-[color:var(--ink)]" href="#approach">
                Process
              </a>
              <a className="rounded-full px-3 py-1.5 transition hover:bg-white/70 hover:text-[color:var(--ink)]" href="#contact">
                Kontakt
              </a>
            </nav>
          </div>
        </header>

        <section id="top" className="grid gap-10 pb-20 pt-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:pb-28">
          <div className="space-y-8">
            <div className="reveal space-y-5">
              <p className="eyebrow text-xs font-bold">Frilans · Webb & frontend</p>
              <h1 className="section-title max-w-4xl text-[clamp(3.2rem,8vw,6.5rem)] font-bold leading-[0.94]">
                Webb för företag och organisationer som vill ha tydlig kommunikation, trygg leverans och modern frontend – jag tar ansvar från struktur till launch.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-[color:var(--muted)] sm:text-xl">
                Jag tar er från kartläggda behov till en lanserad webb eller webbapp med genomtänkt struktur, vässad frontend och rimliga förväntningar på innehåll och CMS. Efter launch finns plan för överlämning, prestanda och vidare utveckling.
              </p>
            </div>

            <div className="reveal flex flex-col gap-3 sm:flex-row" style={{ animationDelay: "120ms" }}>
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full bg-[color:var(--ink)] px-6 py-3.5 text-sm font-semibold text-white transition hover:translate-y-[-1px] hover:bg-black"
              >
                Se referenser och case
              </a>
              <a
                href="mailto:eleonora.nocentini@gmail.com"
                className="inline-flex items-center justify-center rounded-full border border-[color:var(--line)] bg-white/80 px-6 py-3.5 text-sm font-semibold text-[color:var(--ink)] transition hover:border-[color:var(--accent)] hover:bg-white"
              >
                Diskutera ert projekt
              </a>
            </div>

            <div className="reveal grid gap-3 sm:grid-cols-3" style={{ animationDelay: "220ms" }}>
              {[
                { value: "12", label: "Case ni kan granska" },
                { value: "1–2 v", label: "Återkoppling på förfrågan" },
                { value: "Next + WP", label: "Typ av leveranser" },
              ].map((item) => (
                <div key={item.label} className="glass-card rounded-[1.6rem] p-5">
                  <p className="font-display text-3xl font-bold tracking-tight">{item.value}</p>
                  <p className="mt-2 text-sm text-[color:var(--muted)]">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal relative lg:justify-self-end" style={{ animationDelay: "180ms" }}>
            <div className="float-slow glass-card relative rounded-[2rem] p-4">
              <ProjectPreview project={projects[0]} />
            </div>
            <div className="glass-card relative -mt-8 ml-auto w-[82%] rounded-[2rem] p-4 sm:-mt-12">
              <ProjectPreview project={projects[1]} />
            </div>
          </div>
        </section>

        <section id="projects" className="pb-20 lg:pb-28">
          <div className="reveal mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-3">
              <p className="eyebrow text-xs font-bold">Utvalda projekt</p>
              <h2 className="section-title text-4xl font-bold sm:text-5xl">
                Utvalda case med tydlig riktning och affärsnytta.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-[color:var(--muted)]">
              När ni utvärderar en leverantör behöver ni se bredd: landningssidor, företagswebbar, webbappar i Next/React, API‑driven backend, live‑data‑ och mobilappar samt dataverktyg – och CMS‑arbete i WordPress där det passar. Märkta praktikcase visar hur jag jobbat i byråmiljö med äkta krav. Jag tar ägarskap för lösningen vi gemensamt landar och kan bygga vidare när ni lanserar nästa steg.
            </p>
          </div>

          <div className="space-y-8">
            {projects.filter((project) => project.name !== "Receptbok").map((project, index) => (
              <article
                key={project.name}
                className="glass-card reveal grid gap-8 overflow-hidden rounded-[2rem] p-6 lg:grid-cols-[1.08fr_0.92fr] lg:p-8"
                style={{ animationDelay: `${index * 120}ms` }}
              >
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
                        Det här projektet visar
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
                          Stack och fokus
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
                          {project.cta}
                          <ExternalIcon />
                        </a>
                        {project.repoHref ? (
                          <a
                            href={project.repoHref}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-[color:var(--line)] bg-white/75 px-5 py-3 text-sm font-semibold text-[color:var(--ink)] transition hover:border-[color:var(--accent)] hover:bg-white"
                          >
                            Se repo
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
            <p className="eyebrow text-xs font-bold">Arbetssätt</p>
            <h2 className="section-title text-4xl font-bold sm:text-5xl">
              Tydlig riktning från första intryck till rätt nästa steg.
            </h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="grid gap-5 md:grid-cols-3">
              {principles.map((item, index) => (
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
              <p className="eyebrow text-xs font-bold">Aktuell stack</p>
              <h3 className="section-title mt-3 text-3xl font-bold">
                Modern och stabil stack för snabb, trygg leverans.
              </h3>
              <p className="mt-4 text-base leading-7 text-[color:var(--muted)]">
                Teknikvalen är gjorda för snabb utveckling, trygg deploy och enkel
                vidareutveckling när nya behov uppstår.
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
                <p className="eyebrow text-xs font-bold">Samarbete</p>
                <h2 className="section-title text-4xl font-bold sm:text-5xl">
                  Så jobbar jag med er som kund.
                </h2>
                <p className="max-w-2xl text-lg leading-8 text-[color:var(--muted)]">
                  Ni får förutsägbar scope, skriftlig offert, avstämda milstolpar och löpande kommunikation – så att leveransen matchar budget, tid och kvalitetskrav hela vägen.
                </p>
              </div>

              <div className="grid gap-4">
                {[
                  "Kickoff där vi samlar mål, målgrupp, budskap och tekniska förutsättningar",
                  "Offert och leveranslista med milstoplar – ni vet vad som ingår och när det levereras",
                  "Produktion med återkommande demos och avstämding innan nästa steg går i produktion",
                  "Launch med överlämning: dokumentation, intro till drift/innehåll och plan för vidareförvaltning",
                ].map((item) => (
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

        <section id="contact" className="pb-10">
          <div className="glass-card reveal rounded-[2.2rem] p-8 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="space-y-4">
                <p className="eyebrow text-xs font-bold">Kontakt</p>
                <h2 className="section-title text-4xl font-bold sm:text-5xl">
                  Ny sajt, förnya befintlig eller starta ett konkret uppdrag?
                </h2>
                <p className="max-w-2xl text-lg leading-8 text-[color:var(--muted)]">
                  Maila en kort beskrivning av mål, tid och budgetram – jag återkopplar inom rimlig tid med förslag på nästa steg eller ett första möte. Passar det för er kan vi ta fram scope och offert innan produktion startar.
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
                © {currentYear} Eleonora Nocentini Sköldebrink. Portfolio byggd med
                Next.js, React och Tailwind CSS.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
