import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Sailhouse",
      head: [
        {
          tag: "link",
          attrs: {
            rel: "shortcut icon",
          },
          content: "/favicon.ico",
        },
      ],
      logo: {
        src: "/src/assets/logo.svg",
      },
      social: {
        github: "https://github.com/withastro/starlight",
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
});
