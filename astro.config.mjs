import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Sailhouse",
      favicon: "/favicon.ico",
      editLink: { baseUrl: "https://github.com/sailhouse/docs/edit/main" },
      logo: {
        src: "/src/assets/logo.svg",
      },
      social: {
        github: "https://github.com/sailhouse/docs",
      },
      customCss: ["/src/styles/main.css"],
      sidebar: [
        {
          label: "Getting Started",
          items: [
            {
              label: "Setup",
              link: "/getting-started/setup/",
            },
          ],
        },
        {
          label: "Concepts",
          autogenerate: {
            directory: "concepts",
          },
        },
        {
          label: "SDKs",
          autogenerate: {
            directory: "sdks",
          },
        },
        {
          label: "Using on",
          autogenerate: {
            directory: "using-on",
          },
        },
        {
          label: "Reference",
          autogenerate: {
            directory: "reference",
          },
        },
      ],
    }),
  ],
  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
    },
  },
  output: "static",
  adapter: netlify(),
});
