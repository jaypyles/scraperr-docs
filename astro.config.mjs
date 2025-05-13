// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Scraperr Docs',
			social: {
				github: 'https://github.com/jaypyles/Scraperr',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						{ label: 'Quickstart', slug: 'guides/quickstart' },
						{ label: 'Using the Scraperr API', slug: 'guides/api' },
						{ label: 'Job Table', slug: 'guides/job-table' },
						{ label: 'AI Integration', slug: 'guides/ai' },
						{ label: 'Site Mapping', slug: 'guides/site-mapping' },
						{ label: 'Optional Configuration', slug: 'guides/optional-configuration' },
						{ label: 'Helm Deployment', slug: 'guides/helm-deployment' },
					],
				},
			],
		}),
	],
});
