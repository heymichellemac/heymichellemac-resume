import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "heymichellemac-resume",
  description: "heymichellemac-resume",
  lastUpdated: true,
  themeConfig: {
    search: {
      provider: "local",
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Resume - PDF", link: "/resume-pdf" },
      { text: "My Resume", link: "/about-me" },
      { text: "My Portfolio", link: "/portfolio/walkthrough-guide" },
    ],

    sidebar: [
      {
        text: "My Resume",
        items: [
          { text: "Resume - PDF", link: "/resume-pdf" },
          { text: "About Me", link: "/about-me" },
          { text: "Work Experience", link: "/work-experience" },
        ],
      },
      {
        text: "My Portfolio",
        items: [
          {
            text: "Writing Sample - Walkthrough Guide",
            link: "/portfolio/walkthrough-guide",
          },
          {
            text: "Writing Sample - User Guide For Ticketing Application",
            link: "/portfolio/user-guide-ticketer",
          },
        ],
      },
    ],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/heymichellemac",
      },
      {
        icon: "linkedin",
        link: "https://www.linkedin.com/in/michellemccausland/",
      },
      {
        icon: "mastodon",
        link: "https://pkm.social/@heymichellemac",
      },
    ],

    footer: {
      message:
        'Made by <a rel="me" href="https://heymichellemac.com/" target="_blank" rel="noopener noreferrer">heymichellemac</a> | Powered by <a href="https://vitepress.dev/" target="_blank" rel="noopener noreferrer">Vitepress</a>',
    },
  },
});
