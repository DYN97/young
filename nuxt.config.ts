// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@element-plus/nuxt',
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/supabase',
  ],

  devtools: {
    enabled: true,
  },
  routeRules: {
    // Cached for 1 hour
    '/api/*': { cache: { maxAge: 60 * 60 } },
  },
  app: {
    // head
    head: {
      title: 'Element Plus + Nuxt 3',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'ElementPlus + Nuxt3',
        },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    }
  },

  // css
  css: [
    '@unocss/reset/tailwind.css',
    '~/assets/scss/index.scss'
  ],
  supabase: {
    redirectOptions: {
      login: '/login',
      callback: '/confirm',
      include: undefined,
      exclude: [],
      cookieRedirect: false,
    },
  },
  // vueuse
  vueuse: {
    ssrHandlers: true,
  },

  // colorMode
  colorMode: {
    classSuffix: '',
  },

  future: {
    compatibilityVersion: 4,
  },

  experimental: {
    // when using generate, payload js assets included in sw precache manifest
    // but missing on offline, disabling extraction it until fixed
    payloadExtraction: false,
    renderJsonPayloads: true,
    typedPages: true,
  },

  compatibilityDate: '2024-08-14',

  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
    prerender: {
      crawlLinks: false,
      routes: ['/'],
      
      ignore: ['/hi', '/api/*'],
    },
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
          additionalData: `@use "@/assets/scss/element/index.scss" as element;`,
        },
      },
    },
  },

  elementPlus: {
    icon: 'ElIcon',
    importStyle: 'scss',
    themes: ['dark'],
  },
})