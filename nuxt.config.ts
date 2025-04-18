// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
			meta: [
				{property: 'og:locale', content: 'en_US'},
				{property: 'og:site_name', content: 'XPLOIT ltd.'},
				{property: 'og:logo', content: 'https://xploit.ltd/xploit_logo.png'},
				{property: 'og:url', content: 'https://xploit.ltd'},
				{property: 'og:type', content: 'website'},
				{property: 'og:title', content: 'XPLOIT ltd.'},
				{
					property: 'og:description',
					content: 'With our debut game, we\'re eager for collaborations and partnerships. Let\'s create gaming magic together!'
				},
				{property: 'og:image', content: 'https://xploit.ltd/xploit_og.jpg'},
				{property: 'og:image:width', content: '1200'},
				{property: 'og:image:height', content: '630'},
				{property: 'twitter:card', content: 'summary_large_image'},
				{property: 'twitter:domain', content: 'https://xploit.ltd'},
				{property: 'twitter:url', content: 'https://xploit.ltd/'},
				{property: 'twitter:title', content: 'XPLOIT ltd.'},
				{
					property: 'twitter:description',
					content: 'With our debut game, we\'re eager for collaborations and partnerships. Let\'s create gaming magic together!'
				},
				{property: 'twitter:image', content: 'https://xploit.ltd/xploit_og.jpg'}
			]
		}
	},

	devtools: {enabled: true},

	modules: ['@zadigetvoltaire/nuxt-gtm', '@nuxt/image'],

	gtm: {
		id: 'GTM-NJPW8K97',
		nonce: '3464ff42c',
	},

	compatibilityDate: '2024-12-06',

	css: [
		'@/assets/style/style.sass',
	],

	image: {
		format: ['webp'],
		quality: 80,
		dir: 'assets/images'
	},

	vite: {
		css: {
			preprocessorOptions: {
				sass: {
					additionalData: '@import "@/assets/style/vars.sass"\n',
				},
			},
		},
	},
})
