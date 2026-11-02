import type { Product } from '../types/product';

export const PRODUCTS: Product[] = [
	{
		id: 'cloudsync',
		name: 'CloudSync',
		tagline: 'Unified cloud infrastructure',
		description: 'Deploy, monitor, and scale your cloud resources across providers from a single dashboard.',
		category: 'Cloud',
	},
	{
		id: 'codeflow',
		name: 'CodeFlow',
		tagline: 'CI/CD made effortless',
		description: 'Automated pipelines that run tests, build artifacts, and deploy to production with confidence.',
		category: 'DevOps',
	},
	{
		id: 'datapulse',
		name: 'DataPulse',
		tagline: 'Real-time data analytics',
		description: 'Turn raw data into actionable insights with live dashboards and predictive modeling.',
		category: 'Data & AI',
	},
	{
		id: 'securevault',
		name: 'SecureVault',
		tagline: 'Enterprise-grade security',
		description: 'End-to-end encryption, access controls, and compliance monitoring for sensitive workloads.',
		category: 'Security',
	},
	{
		id: 'devtrack',
		name: 'DevTrack',
		tagline: 'Agile project tracking',
		description: 'Plan sprints, track issues, and ship features faster with integrated team collaboration.',
		category: 'Productivity',
	},
	{
		id: 'apigateway',
		name: 'API Gateway',
		tagline: 'Manage all your APIs',
		description: 'Design, publish, and secure APIs with rate limiting, analytics, and developer portals.',
		category: 'Integration',
	},
];
