import type { Service } from '../types/service';

export const SERVICES: Service[] = [
	{
		id: 'artificial-intelligence',
		name: 'Artificial Intelligence',
		tagline: 'Intelligent systems that learn and adapt',
		description:
			'We build AI-powered solutions that help organizations automate decisions, extract insights from unstructured data, and deliver smarter experiences to users and customers.',
		category: 'AI & Machine Learning',
		image:"/images/services/ai.jpg"

	},
	{
		id: 'web-development',
		name: 'Web Development',
		tagline: 'Modern web platforms at scale',
		description:
			'We design and develop fast, accessible, and maintainable web applications using current standards and frameworks that grow with your business.',
		category: 'Web Engineering',
		image:"/images/services/web-dev.jpg"
		
	},
	{
		id: 'application-development',
		name: 'Application Development',
		tagline: 'Native and cross-platform apps',
		description:
			'We create mobile and desktop applications tailored to your workflows, with an emphasis on performance, usability, and secure data handling.',
		category: 'Software Development',
		image:"/images/services/app-dev.jpg"

	},
	{
		id: 'data-engineering',
		name: 'Data Engineering',
		tagline: 'Reliable data pipelines and platforms',
		description:
			'We architect the infrastructure that collects, transforms, and serves data so teams can make decisions on trustworthy, up-to-date information.',
		category: 'Data & Analytics',
		image:"/images/services/data.jpg"

	},
	{
		id: 'healthcare-technology',
		name: 'Healthcare Technology',
		tagline: 'Secure digital health solutions',
		description:
			'We build compliant, privacy-first technology for healthcare providers and patients, supporting better outcomes through connected care.',
		category: 'HealthTech',
		image:"/images/services/health.jpg"

	},
];


