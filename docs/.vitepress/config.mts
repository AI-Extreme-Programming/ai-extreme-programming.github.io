import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "AI Extreme Programming",
  description: "Home of aiXP: Extreme Programming for Human-AI Teams of 1 to N.",
  // The org site is served at the root of aixp.scottkirvan.com; the org's
  // project sites (e.g. /aiXP/) come from their own repos, so link to them by
  // full URL rather than as routes in this site.
  base: '/',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'aiXP', link: 'https://aixp.scottkirvan.com/aiXP/', target: '_self' },
      { text: 'GitHub', link: 'https://github.com/AI-Extreme-Programming' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/AI-Extreme-Programming' },
      { icon: 'discord', link: 'https://discord.gg/TN6XJSNK5Y' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © Scott Kirvan'
    }
  }
})
