require('dotenv').config()

interface IOptions {
	site_name: string
	base_url: string
	author: string
	description: string
	lang: string
	keywords: string
	theme_color: string
	icon: string
}

const defaultOptions: IOptions = {
	site_name: process.env.SITE_NAME || '',
	base_url: process.env.BASE_URL || '',
	author: 'Chypriote',
	description: 'ValoSkins',
	lang: 'en',
	keywords: 'ValoSkins, Valorant, Skins, ValorantSkins',
	theme_color: '#08bfd5',
	icon: `${process.env.BASE_URL}icon.png`,
}

const getHead = (options: IOptions) => ({
	titleTemplate: (titleChunk: string) => titleChunk ? `${titleChunk} - ${process.env.site_name}` : `${process.env.site_name}`,
	htmlAttrs: {
		lang: options.lang,
	},
	meta: [
		{ charset: 'utf-8' },
		{ name: 'keywords', content: options.keywords },
		{ name: 'author', content: options.author },
		{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
		{ name: 'theme-color', content: options.theme_color },

		{ hid: 'description', name: 'description', content: options.description },

		{ hid: 'og:title', name: 'og:title', property: 'og:title', template: (titleChunk: string) => titleChunk ? `${titleChunk} - ${process.env.site_name}` : `${process.env.site_name}` },
		{ hid: 'og:site_name', name: 'og:site_name', property: 'og:site_name', content: options.site_name },
		{ hid: 'og:image', name: 'og:image', property: 'og:image', content: options.icon },
		{ hid: 'og:type', name: 'og:type', property: 'og:type', content: 'website' },
		{ hid: 'og:description', name: 'og:description', property: 'og:description', content: options.description },
		{ hid: 'og:url', name: 'og:url', property: 'og:url', content: options.base_url },
		{ hid: 'og:locale', name: 'og:locale', property: 'og:locale', content: 'en_EN' },

		{ hid: 'twitter:card', name: 'twitter:card', property: 'twitter:card', content: 'summary' },
		{ hid: 'twitter:site', name: 'twitter:site', property: 'twitter:site', content: options.author },
		{ hid: 'twitter:creator', name: 'twitter:creator', property: 'twitter:creator', content: options.author },
		{ hid: 'twitter:title', name: 'twitter:title', property: 'twitter:title', template: (titleChunk: string) => titleChunk ? `${titleChunk} - ${process.env.site_name}` : `${process.env.site_name}` },
		{ hid: 'twitter:description', name: 'twitter:description', property: 'twitter:description', content: options.description },
		{ hid: 'twitter:image', name: 'twitter:image', property: 'twitter:image', content: options.icon },
	],
	link: [
		{ hid: 'canonical', rel: 'canonical', href: options.base_url },
		{ rel: 'preconnect', href: 'https://res.cloudinary.com' },
		{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
	],
})
export const head = getHead(defaultOptions)

const getPwa = (options: IOptions) => ({
	meta: {
		name: options.site_name,
		author: options.author,
		keywords: options.keywords,
		theme_color: options.theme_color,
		lang: options.lang,
		description: options.description,
		ogHost: options.base_url,
		twitterCard: 'summary',
		twitterSite: options.author,
		tiwtterCreator: options.author,
	},
	manifest: {
		name: options.site_name,
		short_name: 'valoskins',
		lang: options.lang,
		theme_color: options.theme_color,
		background_color: '#1c2025',
		display: 'standalone',
	},
})

export const pwa = getPwa(defaultOptions)
