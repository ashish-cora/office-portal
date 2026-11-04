// @ts-check
import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';

import sanity from '@sanity/astro';
import react from '@astrojs/react';

const env = loadEnv(process.env.NODE_ENV ?? 'production', process.cwd(), '');

// https://astro.build/config
export default defineConfig({
  redirects: {
    '/': '/home',
  },

  integrations: [
    sanity({
      projectId: env.PUBLIC_SANITY_PROJECT_ID ?? 'pmcpg0al',
      dataset: env.PUBLIC_SANITY_DATASET ?? 'production',
      apiVersion: '2026-03-01',
      useCdn: true,
    }),
    react(),
  ],
});
