// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'XPLOIT Ltd.',
      meta: [
          { property: 'og:locale', content: 'en_US' },
          { property: 'og:site_name', content: 'XPLOIT ltd.' },
          { property: 'og:logo', content: 'https://xploit.ltd/xploit_logo.png' },
          { property: 'og:url', content: 'https://xploit.ltd' },
          { property: 'og:type', content: 'website' },
          { property: 'og:title', content: 'XPLOIT ltd.' },
          { property: 'og:description', content: 'With our debut game, we\'re eager for collaborations and partnerships. Let\'s create gaming magic together!' },
          { property: 'og:image', content: 'https://xploit.ltd/xploit_og.jpg' },
          { property: 'og:image:width', content: '1200' },
          { property: 'og:image:height', content: '630' },
          { property: 'twitter:card', content: 'summary_large_image' },
          { property: 'twitter:domain', content: 'https://xploit.ltd' },
          { property: 'twitter:url', content: 'https://xploit.ltd/' },
          { property: 'twitter:title', content: 'XPLOIT ltd.' },
          { property: 'twitter:description', content: 'With our debut game, we\'re eager for collaborations and partnerships. Let\'s create gaming magic together!' },
          { property: 'twitter:image', content: 'https://xploit.ltd/xploit_og.jpg' }
      ]
    }
  },
  devtools: { enabled: true }
})
