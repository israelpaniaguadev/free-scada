import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://jakkunight.github.io',
  base: '/free-scada',
	integrations: [
		starlight({
			title: 'Free SCADA',
			social: {
				github: 'https://github.com/jakkunight',
			},
			sidebar: [
				{
					label: 'Developer guides',
					autogenerate: { directory: 'dev-guides' },
				},
        {
          label: 'User guides',
          autogenerate: { directory: 'user-guides' },
        },
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
