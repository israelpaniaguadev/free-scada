import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: "https://jakkunight.github.io",
  base: "/free-scada"
	integrations: [
		starlight({
			title: 'Free SCADA Docs',
			social: {
				github: 'https://github.com/jakkunight/free-scada',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Get Started', link: '/guides/get-started/' },
					],
				},
				{
					label: 'API Reference',
					autogenerate: { directory: 'api' },
				},
			],
		}),
	],
});
