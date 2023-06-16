import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "heymichellemac-resume",
  description: "heymichellemac-resume",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "My Resume", link: "/about-me" },
      { text: "My Portfolio", link: "/portfolio/walkthrough-guide" },
      { text: "Resume - PDF", link: "#" },
    ],

    sidebar: [
      {
        text: "My Resume",
        items: [
          { text: "About Me", link: "/about-me" },
          { text: "Work Experience", link: "/work-experience" },
          { text: "Resume - 1 Page PDF" },
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
  },
});
