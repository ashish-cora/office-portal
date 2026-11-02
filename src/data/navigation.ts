export interface NavItem {
	label: string;
	href: string;
	active?: boolean;
}

export interface FooterLink {
	label: string;
	href: string;
	social?: boolean;
}

export interface FooterTopic {
	label: string;
	items: FooterLink[];
}

export const NAV_ITEMS: NavItem[] = [
	{ label: 'Dashboard', href: '/' },
	{ label: 'Announcements', href: '/announcements' },
	{ label: 'Directory', href: '/directory' },
	{ label: 'Attendance', href: '/attendance' },
	{ label: 'Leave', href: '/leave' },
	{ label: 'Calendar', href: '/calendar' },
	{ label: 'Documents', href: '/documents' },
	{ label: 'Profile', href: '/profile' },
];

export const FOOTER_TOPICS: FooterTopic[] = [
	{
		label: 'Company',
		items: [
			{ label: 'About Us', href: '#' },
			{ label: 'Security and Compliance', href: '#' },
			{ label: 'Contact Us', href: '#' },
		],
	},
	{
		label: 'Services',
		items: [
			{ label: 'Artificial Intelligence', href: '#' },
			{ label: 'Product Development', href: '#' },
			{ label: 'Data & AI', href: '#' },
			{ label: 'Design', href: '#' },
			{ label: 'DevOps & Cloud', href: '#' },
			{ label: 'Staff Augmentation', href: '#' },
			{ label: 'AWS Solutions', href: '#' },
			{ label: 'Healthcare Technology', href: '#' },
		],
	},
	{
		label: 'Connect with Us',
		items: [
			{ label: 'Podcast', href: '#', social: true },
			{ label: 'Instagram', href: '#', social: true },
			{ label: 'TikTok', href: '#', social: true },
			{ label: 'LinkedIn', href: '#', social: true },
		],
	},
];
