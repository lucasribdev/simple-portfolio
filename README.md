# Lucas Ribeiro Portfolio

Portfolio pessoal de Lucas Ribeiro, engenheiro de software frontend com mais de 7 anos de experiencia em aplicacoes web, React, TypeScript, SSR, BFF e design systems.

O projeto apresenta uma landing page objetiva com resumo profissional, stack principal, projetos em destaque, curriculo em PDF e links de contato.

## Destaques

- Interface responsiva com foco em leitura rapida e navegacao direta.
- Secao de apresentacao com posicionamento profissional e stack tecnica.
- Projetos em destaque com descricao, ano, tecnologias e links externos.
- Area de contato com email, LinkedIn, GitHub e repositorios.
- Animacoes sutis de entrada usando Motion.
- SEO basico configurado em `index.html`, incluindo description, Open Graph e Twitter metadata.

## Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- Motion
- Lucide React
- Geist Font

## Como rodar

Instale as dependencias:

```bash
npm install
```

Rode o ambiente de desenvolvimento:

```bash
npm run dev
```

Gere o build de producao:

```bash
npm run build
```

Execute o lint:

```bash
npm run lint
```

Visualize o build localmente:

```bash
npm run preview
```

## Estrutura

```txt
public/
  favicon.svg
  icons.svg
  resume_br.pdf
src/
  components/
    TextFade.tsx
  lib/
    utils.ts
  App.tsx
  index.css
  main.tsx
```

## Projetos em destaque

- [Templo](https://templo.club): plataforma para descoberta de comunidades, clas e guildas, com catalogo de jogos, anuncios filtraveis e integracao com Supabase.
- [Portal Institucional Social Skate](https://socialskate.pages.dev/): portal institucional para a ONG Social Skate, com projetos, noticias, transparencia e captacao de apoio.

## Qualidade

O projeto usa TypeScript, ESLint e build de producao via Vite. Antes de publicar alteracoes, rode:

```bash
npm run lint
npm run build
```
