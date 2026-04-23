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
import LiquidEther from "./components/LiquidEther";
import { TextFade } from "./components/TextFade";

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
    stack: ["React", "TypeScript", "TanStack Start", "Supabase", "BFF"],
    icon: Gamepad2,
    url: "https://templo.club",
  },
  {
    year: "2025",
    title: "Portal Institucional Social Skate",
    description:
      "Portal institucional da ONG Social Skate, reunindo projetos, notícias, transparência e captação de apoio para destacar seu impacto social por meio do skate, da educação e da cultura.",
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

const stack = [
  "React",
  "TypeScript",
  "TailwindCSS",
  "React Query",
  "Zod",
  "Storybook",
  "Node.js",
  "NestJS",
  "REST APIs",
  "Prisma",
  "Supabase",
  "BFF",
  "SSR / SSG",
  "Design Systems",
];

function App() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 z-1 w-full">
        <LiquidEther
          colors={["#3BBF57", "#61d46a", "#A8E6AF"]}
          mouseForce={15}
          cursorSize={75}
          isViscous
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>
      <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-8 md:px-10">
        <span className="font-mono text-xs tracking-widest text-muted-foreground">
          LR · 2026
        </span>
        <span className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
          <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
          disponível para projetos
        </span>
      </header>

      <TextFade
        direction="up"
        className="pt-0 pb-5 flex-col flex justify-center items-center space-y-0"
      >
        <section className="relative z-10 mx-auto max-w-6xl px-6 pb-24 pt-16 md:px-10 md:pt-28">
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
            {stack.map((s, i) => (
              <span
                key={s}
                style={{
                  animationDelay: `${380 + i * 60}ms`,
                  animationFillMode: "both",
                }}
                className="animate-fade-in rounded-full border border-border bg-card/50 px-4 py-2 font-mono text-xs text-muted-foreground backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:text-foreground"
              >
                {s}
              </span>
            ))}
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
        </section>
      </TextFade>

      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-32 md:px-10">
        <div className="mb-8 border-b border-border pb-4">
          <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
            ◆ Projetos em destaque
          </h2>
        </div>

        <div className="mb-24 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
          {featured.map(
            ({ year, title, description, stack: techs, icon: Icon, url }) => (
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
