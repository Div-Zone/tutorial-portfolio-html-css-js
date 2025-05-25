import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "DivZone",
  tagline: "Documentación",
  favicon: "img/favicon.ico",
  url: "https://docs.div.zone",
  baseUrl: "/",
  organizationName: "DivZone",
  projectName: "divzone",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  i18n: {
    defaultLocale: "es",
    locales: ["es"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
        gtag: {
          trackingID: "G-XQX52D98DK",
          anonymizeIP: true,
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/divzone-social-card.jpg",
    metadata: [
      { name: "author", content: "Gabriel Maza" },
      {
        name: "keywords",
        content: "HTML, CSS, javascript, tutoriales, desarrollo web",
      },
      { name: "publisher", content: "div.zone" },
    ],
    navbar: {
      title: "DivZone Docs",
      logo: {
        alt: "DivZone Docs Logo",
        src: "img/logo.svg",
      },
      items: [
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'tutorialSidebar',
        //   position: 'left',
        //   label: 'Tutoriales',
        // },
        {
          href: "https://div.zone/#courses",
          label: "Cursos en video",
          position: "left",
          title: "DivZone Cursos en video link",
        },
        {
          href: "https://github.com/Div-Zone",
          label: "GitHub",
          position: "right",
          title: "DivZone GitHub link",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Tutorial",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Facebook",
              href: "https://www.facebook.com/divzone.official",
              title: "DivZone Facebook link",
            },
            {
              label: "YouTube",
              href: "https://www.youtube.com/@div_zone",
              title: "DivZone Youtube link",
            },
            {
              label: "Discord",
              href: "https://discord.gg/pNST4gkgby",
              title: "DivZone Discord link",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/Div-Zone",
              title: "DivZone GitHub link",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} DivZone Docs.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
