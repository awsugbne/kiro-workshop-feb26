# Kiro IDE Workshop — Brisbane AWS User Group

A hands-on workshop for building a todo list application using spec-driven development in [Kiro IDE](https://kiro.dev). Built with [Astro](https://astro.build) and [Starlight](https://starlight.astro.build) for the Brisbane AWS User Group February 2026 meetup.

**Live site:** https://awsugbne.github.io/kiro-workshop-feb26/

## What you'll learn

- **Spec-driven development** — Generate requirements, design documents, and implementation plans from a single prompt
- **Vibe coding** — Use Kiro's Vibe mode for prompt refinement before switching to Spec mode
- **Steering docs** — Guide Kiro with coding standards, accessibility rules, and project conventions
- **Agent hooks & MCP** — Automate workflows and extend Kiro with MCP servers

## Getting started

```bash
npm install
npm run dev
```

The site runs at `http://localhost:4321/kiro-workshop-feb26/`.

## Deploying

The site auto-deploys to GitHub Pages on push to `main` via the workflow in `.github/workflows/deploy.yml`.

## Acknowledgements

This workshop is based on the [original interactive demo](https://donnie.id/interactive-demo/kiro-ide/) created by [Donnie Prakoso](https://donnie.id), Developer Advocate at AWS. The original workshop was provided through the **AWS User Group Leaders Program** — we copied and modified it for use at our meetup. All credit to Donnie for the source material and screenshots.
