import {
  ArrowUpRight,
  Download,
  FolderGit2,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import { useEffect, useRef } from "react";

declare global {
  interface Window {
    VANTA?: {
      WAVES: (options: {
        el: HTMLElement;
        mouseControls: boolean;
        touchControls: boolean;
        gyroControls: boolean;
        minHeight: number;
        minWidth: number;
        scale: number;
        scaleMobile: number;
        color: number;
      }) => { destroy?: () => void };
    };
  }
}

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

function App() {
  const vantaRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!vantaRef.current || !window.VANTA?.WAVES) {
      return;
    }

    const effect = window.VANTA.WAVES({
      el: vantaRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0x060a0d,
    });

    return () => {
      effect?.destroy?.();
    };
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden">
      <div
        ref={vantaRef}
        className="absolute inset-0 z-0 opacity-25"
        aria-hidden="true"
      />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top,rgba(97,212,106,0.12),transparent_38%),linear-gradient(180deg,rgba(7,11,19,0.24),rgba(7,11,19,0.82))]" />
      <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-8 md:px-10">
        <span className="font-mono text-xs tracking-widest text-muted-foreground">
          LR · PORTFOLIO / 2026
        </span>
        <span className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
          <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
          disponível para projetos
        </span>
      </header>

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
          Mais de <span className="text-foreground">7 anos</span> desenvolvendo
          aplicações web com foco em{" "}
          <span className="text-foreground">performance</span>,{" "}
          <span className="text-foreground">escala</span> e{" "}
          <span className="text-foreground">boa arquitetura</span>. Trabalho
          principalmente com <span className="text-foreground">React</span> e{" "}
          <span className="text-foreground">TypeScript</span>, além de
          experiência com{" "}
          <span className="text-foreground">SSR (Next.js, Tanstack Start)</span>{" "}
          e BFFs com <span className="text-foreground">Node.js</span> e{" "}
          <span className="text-foreground">NestJS</span>.
        </p>

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

      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-32 md:px-10">
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
          <span>Construído com React + TypeScript</span>
        </div>
      </footer>
    </main>
  );
}

export default App;
