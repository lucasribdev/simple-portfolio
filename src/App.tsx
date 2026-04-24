import {
  ArrowUpRight,
  Download,
  FolderGit2,
  Gamepad2,
  Github,
  HeartHandshake,
  Linkedin,
  Mail,
} from "lucide-react";
import { TextFade } from "./components/TextFade";
import LogoLoop from "./components/LogoLoop";
import {
  AWS,
  Cypress,
  Electron,
  GoogleCloud,
  Jest,
  NestJS,
  NextJs,
  NodeJs,
  PostgreSQL,
  Prisma,
  React,
  ReactQuery,
  Storybook,
  Supabase,
  TailwindCSS,
  TypeScript,
  Zod,
} from "developer-icons";

const links = [
  {
    label: "Email",
    value: "lucasribdev@gmail.com",
    href: "mailto:lucasribdev@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/lucasribdev",
    href: "https://linkedin.com/in/lucasribdev",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "github.com/lucasribdev",
    href: "https://github.com/lucasribdev",
    icon: Github,
  },
  {
    label: "Projetos",
    value: "Ver repositórios",
    href: "https://github.com/lucasribdev?tab=repositories",
    icon: FolderGit2,
  },
];

const resumeUrl = "/resume_br.pdf";

const featured = [
  {
    year: "2026",
    title: "Templo",
    description:
      "Plataforma para descoberta de comunidades, clãs e guildas, conectando jogadores por meio de um catálogo de jogos, anúncios filtráveis e integração com Supabase.",
    highlights: [
      "Desenhei a arquitetura com BFF para proteger regras de negócio e simplificar o cliente.",
      "Modelei anúncios, perfis, jogos, curtidas e visualizações no Supabase.",
      "Priorizei descoberta, filtros e SEO para páginas públicas de jogos e anúncios.",
    ],
    stack: ["React", "TypeScript", "TanStack Start", "Supabase", "BFF"],
    icon: Gamepad2,
    url: "https://templo.club",
  },
  {
    year: "2025",
    title: "Portal Institucional Social Skate",
    description:
      "Portal institucional da ONG Social Skate, reunindo projetos, notícias, transparência e captação de apoio para destacar seu impacto social por meio do skate, da educação e da cultura.",
    highlights: [
      "Modelei o conteúdo em JSON versionado e integrei Decap CMS para edição editorial sem dependência técnica.",
      "Configurei geração estática de páginas públicas para projetos e notícias, com metadados por rota.",
      "Implementei galerias, documentos de transparência, área de doação e consentimento de cookies com Google Analytics.",
    ],
    stack: [
      "React",
      "TypeScript",
      "TanStack Router",
      "Tailwind CSS",
      "CMS",
      "SSG",
    ],
    icon: HeartHandshake,
    url: "https://socialskate.pages.dev/",
  },
];

const techLogos = [
  {
    node: <React size={30} />,
    title: "React",
    href: "https://react.dev",
  },
  {
    node: <NextJs size={30} />,
    title: "Next.js",
    href: "https://nextjs.org",
  },
  {
    node: <TypeScript size={30} />,
    title: "TypeScript",
    href: "https://typescriptlang.org",
  },
  {
    node: <TailwindCSS size={30} />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
  {
    node: <ReactQuery size={30} />,
    title: "React Query",
    href: "https://react-query.tanstack.com",
  },
  {
    node: <Zod size={30} />,
    title: "Zod",
    href: "https://zod.dev",
  },
  {
    node: <Storybook size={30} />,
    title: "Storybook",
    href: "https://storybook.js.org",
  },
  {
    node: <NodeJs size={30} />,
    title: "Node.js",
    href: "https://nodejs.org",
  },
  {
    node: <NestJS size={30} />,
    title: "NestJS",
    href: "https://nestjs.com",
  },
  {
    node: <Prisma size={30} />,
    title: "Prisma",
    href: "https://prisma.io",
  },
  {
    node: <Supabase size={30} />,
    title: "Supabase",
    href: "https://supabase.com",
  },
  {
    node: <AWS size={30} />,
    title: "AWS",
    href: "https://aws.amazon.com",
  },
  {
    node: <GoogleCloud size={30} />,
    title: "Google Cloud",
    href: "https://cloud.google.com",
  },
  {
    node: <PostgreSQL size={30} />,
    title: "PostgreSQL",
    href: "https://www.postgresql.org",
  },
  {
    node: <Electron size={30} />,
    title: "Electron",
    href: "https://www.electronjs.org",
  },
  {
    node: <Cypress size={30} />,
    title: "Cypress",
    href: "https://www.cypress.io",
  },
  {
    node: <Jest size={30} />,
    title: "Jest",
    href: "https://jestjs.io",
  },
];

function App() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-8 md:px-10">
        <span className="font-mono text-xs tracking-widest text-muted-foreground">
          LR · 2026
        </span>
        <span className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
          <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
          disponível para projetos
        </span>
      </header>

      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-24 pt-16 md:px-10 md:pt-28">
        <TextFade direction="up">
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-primary">
            ◆ Engenheiro de Software · Frontend
          </p>
          <h1 className="text-white text-5xl font-bold leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
            Lucas
            <br />
            <span className="text-gradient">Ribeiro.</span>
          </h1>
          <p className="mt-10 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Mais de <span className="text-foreground">7 anos</span> construindo
            aplicações web com foco em{" "}
            <span className="text-foreground">performance</span>,{" "}
            <span className="text-foreground">escala</span> e{" "}
            <span className="text-foreground">arquitetura bem definida</span>.
            Especializado em <span className="text-foreground">React</span> e{" "}
            <span className="text-foreground">TypeScript</span>, com experiência
            em <span className="text-foreground">SSR</span>,{" "}
            <span className="text-foreground">BFF</span> e construção de{" "}
            <span className="text-foreground">design systems</span>.
          </p>
          <div className="mt-12 flex flex-wrap gap-2">
            <LogoLoop
              logos={techLogos}
              speed={50}
              direction="left"
              logoHeight={30}
              gap={60}
              hoverSpeed={0}
              scaleOnHover
              fadeOut
              fadeOutColor="#060a0d"
              ariaLabel="Stack"
            />
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-4">
            <a
              href={resumeUrl}
              download
              className="group inline-flex items-center gap-3 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:glow"
            >
              <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              Baixar currículo
            </a>
            <a
              href={resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-xs uppercase tracking-widest text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
            >
              ver online (PDF)
            </a>
          </div>
        </TextFade>
      </section>

      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-32 md:px-10">
        <div className="mb-8 border-b border-border pb-4">
          <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
            ◆ Projetos em destaque
          </h2>
        </div>

        <div className="mb-24 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
          {featured.map(
            ({
              year,
              title,
              description,
              highlights,
              stack: techs,
              icon: Icon,
              url,
            }) => (
              <a
                key={title}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col justify-between bg-card p-6 transition-colors hover:bg-secondary md:p-8"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-background transition-colors group-hover:border-primary group-hover:text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-xs tracking-widest text-muted-foreground">
                      {year}
                    </span>
                  </div>
                  <h3 className="mt-6 text-lg font-semibold leading-tight text-foreground md:text-xl">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {description}
                  </p>
                  <ul className="mt-3 space-y-2">
                    {highlights?.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        <p className="text-sm text-muted-foreground">{h}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {techs.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border bg-background px-2.5 py-1 font-mono text-[10px] text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            ),
          )}
        </div>

        <div className="mb-8 flex items-end justify-between border-b border-border pb-4">
          <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
            ◆ Contato & Links
          </h2>
          <span className="font-mono text-xs text-muted-foreground">
            04 / 04
          </span>
        </div>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
          {links.map(({ label, value, href, icon: Icon }) => {
            const inner = (
              <>
                <div className="flex min-w-0 items-center gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border bg-background transition-colors group-hover:border-primary group-hover:text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                      {label}
                    </p>
                    <p className="mt-1 break-all text-base font-medium text-foreground md:text-lg">
                      {value}
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="h-6 w-6 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
              </>
            );
            return (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group relative flex items-center justify-between bg-card p-5 transition-colors hover:bg-secondary md:p-8"
              >
                {inner}
              </a>
            );
          })}
        </div>
      </section>

      <footer className="relative z-10 mx-auto max-w-6xl border-t border-border px-6 py-8 md:px-10">
        <div className="flex flex-col items-start justify-between gap-2 font-mono text-xs text-muted-foreground md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} Lucas Ribeiro</span>
          <span>Construído com React + TypeScript + Tailwind CSS</span>
        </div>
      </footer>
    </main>
  );
}

export default App;
