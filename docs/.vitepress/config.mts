import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "ai-extreme-programming.github.io",
  description: "TODO - Replace with your project description.",
  base: '/ai-extreme-programming.github.io/',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'GitHub', link: 'https://github.com/AI-Extreme-Programming/ai-extreme-programming.github.io' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/AI-Extreme-Programming/ai-extreme-programming.github.io' },
      { icon: 'discord', link: 'https://discord.gg/TN6XJSNK5Y' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © Scott Kirvan'
    }
  }
})
