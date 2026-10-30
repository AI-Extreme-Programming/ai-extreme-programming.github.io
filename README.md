# ai-extreme-programming.github.io [![starline](https://raw.githubusercontent.com/AI-Extreme-Programming/ai-extreme-programming.github.io/refs/heads/starlines/AI-Extreme-Programming/ai-extreme-programming.github.io/starline.svg)](https://github.com/qoomon/starlines)
<div align="center">

  <img src="assets/media/logo.jpg" alt="logo" width="200" height="auto" />
    <h1><a href="https://github.com/AI-Extreme-Programming/ai-extreme-programming.github.io">AI-Extreme-Programming/ai-extreme-programming.github.io</a></h1>
  <h3>Org site for AI Extreme Programming, served at aixp.scottkirvan.com</h3>
  
  
<!-- Badges -->
<p>
  <a href="https://github.com/AI-Extreme-Programming/ai-extreme-programming.github.io/graphs/contributors">
    <img src="https://img.shields.io/github/contributors/AI-Extreme-Programming/ai-extreme-programming.github.io" alt="contributors" />
  </a>
  <a href="">
    <img src="https://img.shields.io/github/last-commit/AI-Extreme-Programming/ai-extreme-programming.github.io" alt="last update" />
  </a>
  <a href="https://github.com/AI-Extreme-Programming/ai-extreme-programming.github.io/network/members">
    <img src="https://img.shields.io/github/forks/AI-Extreme-Programming/ai-extreme-programming.github.io" alt="forks" />
  </a>
  <a href="https://github.com/AI-Extreme-Programming/ai-extreme-programming.github.io/stargazers">
    <img src="https://img.shields.io/github/stars/AI-Extreme-Programming/ai-extreme-programming.github.io" alt="stars" />
  </a>
  <a href="https://github.com/AI-Extreme-Programming/ai-extreme-programming.github.io/issues/">
    <img src="https://img.shields.io/github/issues/AI-Extreme-Programming/ai-extreme-programming.github.io" alt="open issues" />
  </a>
  <a href="https://github.com/AI-Extreme-Programming/ai-extreme-programming.github.io/blob/main/LICENSE.md">
    <img src="https://img.shields.io/github/license/AI-Extreme-Programming/ai-extreme-programming.github.io.svg" alt="license" />
  </a>
  <a href="https://discord.gg/TN6XJSNK5Y">
    <!--<img src="https://img.shields.io/discord/704680098577514527?style=flat-square&label=%F0%9F%92%AC%20discord&color=00ACD7">-->
    <img src="https://img.shields.io/discord/1052011377415438346?style=flat-square&label=discord&color=00ACD7">
  </a>
</p>
   
<h4>
    <a href="https://aixp.scottkirvan.com/">View Site</a>
  <span> · </span>
    <a href="https://github.com/AI-Extreme-Programming/ai-extreme-programming.github.io/issues/new?template=bug_report.md">Report Bug</a>
  <span> · </span>
    <a href="https://github.com/AI-Extreme-Programming/ai-extreme-programming.github.io/issues/new?template=feature_request.md">Request Feature</a>
  </h4>
</div>

This is the organization site for [AI Extreme Programming](https://github.com/AI-Extreme-Programming), a VitePress site in `docs/` served at **[aixp.scottkirvan.com](https://aixp.scottkirvan.com/)**.

Because this repo carries the org's custom domain, every other Pages site in the org is served under it at `aixp.scottkirvan.com/<repo>/`. For example, [aiXP](https://github.com/AI-Extreme-Programming/aiXP) is at [aixp.scottkirvan.com/aiXP/](https://aixp.scottkirvan.com/aiXP/). Link to those sites by full URL, not as pages of this site, and don't add a page here with the same path as an org repo.

- **Build:** `cd docs && npm ci && npm run docs:build` (VitePress, `base: '/'`).
- **Deploy:** `docs.yml` publishes to GitHub Pages on pushes that change `docs/`. Pages source: GitHub Actions; custom domain `aixp.scottkirvan.com` (set in the repo's Pages settings).
- **DNS:** Cloudflare `CNAME aixp → ai-extreme-programming.github.io`, set to DNS only so GitHub can issue the HTTPS certificate.

## Key Features

**Automated Release Management**: The `release.yml` workflow uses [Release-Please](https://github.com/googleapis/release-please) for automated versioning and CHANGELOG updates driven by [Conventional Commits](https://www.conventionalcommits.org/). AI-generated release notes (via Gemini) and Discord notifications are wired in. See [CONTRIBUTING.md](CONTRIBUTING.md) for commit conventions.

**VitePress Documentation Site**: The `docs/` folder contains a [VitePress](https://vitepress.dev/) site that deploys to GitHub Pages via the `docs.yml` workflow. Enable Pages in your repo settings (source: GitHub Actions) to publish it.

**Pre-release Staging**: The `pre-release-staging.yml` workflow lets you generate and review AI-drafted release notes on a staging branch before the release goes out.

**Template Initialization**: The `template-init.yml` workflow runs once on your first push to a derived repo, substitutes all repository references throughout the project, enables the release workflow, and then deletes itself.

**.gitignore Templates**: The `.github/gitignore-templates/` folder contains ready-to-use `.gitignore` files for Unreal Engine, Unity, Python, Node.js, C++, and general development. See the [templates README](.github/gitignore-templates/) for usage.

**AI Agent Context (optional)**: The included `CLAUDE.md` gives AI coding agents (e.g. [Claude Code](https://claude.ai/code)) a starting set of engineering standards — branching conventions, commit discipline, test-driven development, verification discipline, and a no-shortcuts ethos. The project name is automatically substituted on initialization. Customize it as your project evolves, or delete it if you're not using AI agents.

## Repo Layout

```
ai-extreme-programming.github.io/
├── .github/
│   ├── gitignore-templates/    # Ready-to-use .gitignore files (Unreal, Unity, Python, Node, C++)
│   ├── release-please/         # Release-Please configuration and version manifest
│   └── workflows/              # GitHub Actions workflows (see Key Features above)
├── assets/
│   └── media/                  # Images and logos
├── docs/                       # VitePress documentation site
├── notes/                      # CHANGELOG, VERSION, TODO
├── CLAUDE.md                   # AI agent context (optional)
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING.md
├── LICENSE.md
└── README.md
```

> **Note:** Issue templates, PR templates, and funding config live in the org-level [`ScottKirvan/.github`](https://github.com/ScottKirvan/.github) repo and apply here automatically via GitHub's community health file fallback.

Features
--------
Installation
------------
Usage
-----

Contributions / Contact
-----------------------
- Please [file an issue](https://github.com/AI-Extreme-Programming/ai-extreme-programming.github.io/issues/new), or [grab a fork](https://github.com/AI-Extreme-Programming/ai-extreme-programming.github.io/fork), hack away, and submit a [pull request](https://github.com/AI-Extreme-Programming/ai-extreme-programming.github.io/pulls).
- Contact me at [linkedin.com/in/scottkirvan/](https://www.linkedin.com/in/scottkirvan/)
- You can also contact me at my [discord](https://discord.gg/TN6XJSNK5Y) server, I'm cptvideo.

Credits
-------
**[ai-extreme-programming.github.io](https://github.com/AI-Extreme-Programming/ai-extreme-programming.github.io)** — Copyright (c) 2025 [Scott Kirvan](https://github.com/ScottKirvan). [MIT License](LICENSE.md).

Project Link:  [ai-extreme-programming.github.io](https://github.com/AI-Extreme-Programming/ai-extreme-programming.github.io)  
[CHANGELOG](notes/CHANGELOG.md)  
[TODO](notes/TODO.md)
