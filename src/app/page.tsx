type Project = {
  name: string;
  category: string;
  summary: string;
  impact: string[];
  stack: string[];
  href: string;
  cta: string;
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
    badge: "Mat & vardag",
    previewHighlights: ["PWA", "Responsiv", "Favoriter", "Live på Netlify"],
    preview: {
      gradient: "linear-gradient(135deg, #0f766e 0%, #34a853 48%, #f0d69f 100%)",
      surface: "rgba(255, 255, 255, 0.16)",
      accent: "#f5f1e8",
      highlight: "#d8f3c8",
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
              <p className="eyebrow text-xs font-bold">Portfolio 2026</p>
              <h1 className="section-title max-w-4xl text-[clamp(3.2rem,8vw,6.5rem)] font-bold leading-[0.94]">
                Webbprojekt med tydlig känsla, ren struktur och modern frontend.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-[color:var(--muted)] sm:text-xl">
                Jag bygger digitala upplevelser som kombinerar visuellt uttryck med
                tydlighet, tempo och användbarhet. Här samlar jag projekt som visar
                hur form, innehåll och kod får jobba ihop.
              </p>
            </div>

            <div className="reveal flex flex-col gap-3 sm:flex-row" style={{ animationDelay: "120ms" }}>
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full bg-[color:var(--ink)] px-6 py-3.5 text-sm font-semibold text-white transition hover:translate-y-[-1px] hover:bg-black"
              >
                Se utvalda projekt
              </a>
              <a
                href="mailto:eleonora.nocentini@gmail.com"
                className="inline-flex items-center justify-center rounded-full border border-[color:var(--line)] bg-white/80 px-6 py-3.5 text-sm font-semibold text-[color:var(--ink)] transition hover:border-[color:var(--accent)] hover:bg-white"
              >
                Kontakta mig
              </a>
            </div>

            <div className="reveal grid gap-3 sm:grid-cols-3" style={{ animationDelay: "220ms" }}>
              {[
                { value: "3", label: "Aktuella case" },
                { value: "Svensk", label: "Copy och tonalitet" },
                { value: "2026", label: "Aktuell stack" },
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
                Case som visar bredden i det jag bygger.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-[color:var(--muted)]">
              Portfolion speglar nu en bredare mix av aktuella projekt:
              företagswebb, receptplattform och webbappen Tidspuls för tid och
              närvaro. Det gör det lättare att visa både formkänsla och teknisk bredd.
            </p>
          </div>

          <div className="space-y-8">
            {projects.map((project, index) => (
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

                      <a
                        href={project.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-[color:var(--ink)] px-5 py-3 text-sm font-semibold text-white transition hover:translate-y-[-1px] hover:bg-black"
                      >
                        {project.cta}
                        <ExternalIcon />
                      </a>
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
              Jag vill att en sajt ska kännas lika tydlig som den ser bra ut.
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
                Byggd i en modern stack som passar Netlify idag.
              </h3>
              <p className="mt-4 text-base leading-7 text-[color:var(--muted)]">
                Den här portfolion är uppsatt för snabb utveckling, enkel vidarebyggnad
                och smidig deploy. Den går att fortsätta fylla på utan att du behöver
                börja om från början när fler projekt ska in.
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

        <section id="contact" className="pb-10">
          <div className="glass-card reveal rounded-[2.2rem] p-8 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="space-y-4">
                <p className="eyebrow text-xs font-bold">Kontakt</p>
                <h2 className="section-title text-4xl font-bold sm:text-5xl">
                  Vill du att nästa projekt också ska kännas genomarbetat?
                </h2>
                <p className="max-w-2xl text-lg leading-8 text-[color:var(--muted)]">
                  Jag tar gärna fram sajter som kombinerar estetik, tydlighet och
                  användarvänlig frontend. Hör av dig om du vill samarbeta eller se fler case.
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
