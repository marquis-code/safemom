export default {
  ssr: false,
  target: "static",
  app: {
    head: {
      title: "Safemom",
      htmlAttrs: { lang: "en" },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "format-detection", content: "telephone=no" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.svg" }],
    },
  },
  modules: ["@nuxtjs/tailwindcss"],
  buildModules: [
    '@nuxtjs/i18n'
  ],
  i18n: {
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'fr', name: 'French', file: 'fr.json' },
      { code: 'es', name: 'Spanish', file: 'es.json' },
      { code: 'yo', name: 'Yoruba', file: 'yo.json' },
      { code: 'ig', name: 'Igbo', file: 'ig.json' },
      { code: 'ha', name: 'Hausa', file: 'ha.json' }
    ],
    defaultLocale: 'en',
    lazy: true,
    langDir: 'locales/'
  },
  css: ["/assets/css/main.css"],
  tailwindcss: {
    cssPath: "@/assets/css/main.css",
  },
  axios: {
    // Axios options here
    timeout: 10000, // Example: set timeout to 10 seconds
  }
};
