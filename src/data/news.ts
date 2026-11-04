import type { NewsArticle } from '../types/news';

const block = (text: string): any[] => [
  {
    _type: 'block',
    _key: `block-${text.slice(0, 20).replace(/\s+/g, '-')}`,
    style: 'normal',
    children: [
      {
        _type: 'span',
        text,
        marks: [],
      },
    ],
    markDefs: [],
  },
];

export const NEWS: NewsArticle[] = [
	{
		id: 'office-relocation',
		slug: 'office-relocation',
		title: 'Meridian Office Relocates to Downtown Campus',
		excerpt:
			'We are moving to a new downtown campus starting next month. The new location offers modern workspaces, improved transit access, and expanded collaboration areas.',
		content: block(
			'Meridian Office is excited to announce our relocation to a new downtown campus. Starting next month, all teams will move to the new location, which offers modern workspaces, improved transit access, expanded collaboration areas, and state-of-the-art meeting rooms. The move will happen in phases over two weeks to minimize disruption. More details about moving dates, packing guidelines, and the new floor plan will be shared via email and posted on the internal portal.'
		),
		date: '2026-10-15',
		author: 'Facilities Team',
		category: 'Company',
	},
	{
		id: 'new-leave-policy',
		slug: 'new-leave-policy',
		title: 'Updated Leave Policy Takes Effect Next Month',
		excerpt:
			'The revised leave policy introduces additional personal days and clearer guidelines for parental and sick leave, effective from the first pay cycle of next month.',
		content: block(
			'Starting with the first pay cycle of next month, our updated leave policy will take effect. The revision introduces additional personal days per year, clearer guidelines for parental and sick leave, and a streamlined approval process through the portal. All current leave balances will carry over automatically. Managers have been briefed on the new approval workflow, and HR will host a Q&A session next week to answer any questions.'
		),
		date: '2026-10-10',
		author: 'Human Resources',
		category: 'HR',
	},
	{
		id: 'ai-productivity-tools',
		slug: 'ai-productivity-tools',
		title: 'New AI Productivity Tools Rolled Out Company-wide',
		excerpt:
			'A suite of AI-powered productivity tools is now available to all employees, designed to help with meeting summaries, document drafting, and routine task automation.',
		content: block(
			'A new suite of AI-powered productivity tools is now available to all employees. These tools assist with meeting summaries, document drafting, email composition, and routine task automation. The rollout is complete across all departments, and training sessions are scheduled throughout the week. Access the tools through the internal portal dashboard under the Productivity section.'
		),
		date: '2026-10-05',
		author: 'IT Department',
		category: 'Technology',
	},
	{
		id: 'quarterly-town-hall',
		slug: 'quarterly-town-hall',
		title: 'Q3 Town Hall: Key Takeaways and Action Items',
		excerpt:
			'The Q3 town hall covered company performance, upcoming product launches, and organizational priorities. A recording and summary are now available on the portal.',
		content: block(
			'The Q3 town hall was held last week, covering company performance, upcoming product launches, and organizational priorities for the remainder of the year. Key takeaways include strong revenue growth, two new product launches planned for Q4, and a continued focus on employee development. A recording of the session and a detailed summary with action items are now available on the internal portal. Department heads will follow up with team-specific plans.'
		),
		date: '2026-09-28',
		author: 'Executive Leadership',
		category: 'Events',
	},
	{
		id: 'cybersecurity-training',
		slug: 'cybersecurity-training',
		title: 'Mandatory Cybersecurity Training Deadline Approaching',
		excerpt:
			'All employees must complete the annual cybersecurity training by the end of the month. The course is available through the learning management system.',
		content: block(
			'All employees are required to complete the annual cybersecurity training by the end of this month. The course covers phishing awareness, password security, data handling, and incident reporting. It is available through the learning management system and takes approximately 45 minutes to complete. Reminders will be sent weekly until completion. Failure to complete the training may result in temporary restriction of certain system access.'
		),
		date: '2026-09-20',
		author: 'Security Team',
		category: 'Security',
	},
	{
		id: 'wellness-program',
		slug: 'wellness-program',
		title: 'Launch of the Employee Wellness Program',
		excerpt:
			'The new Employee Wellness Program offers gym membership subsidies, mental health resources, and monthly wellness workshops starting this month.',
		content: block(
			'We are launching the Employee Wellness Program this month. The program offers gym membership subsidies, mental health resources through our employee assistance program, and monthly wellness workshops on topics like nutrition, stress management, and fitness. Sign-ups are open through the benefits portal. The first workshop, focused on stress management, takes place next Thursday at noon in the main conference room.'
		),
		date: '2026-09-12',
		author: 'People Operations',
		category: 'Benefits',
	},
	{
		id: 'office-hours-update',
		slug: 'office-hours-update',
		title: 'Updated Office Hours for the Holiday Season',
		excerpt:
			'Office hours will be adjusted during the holiday season. The building will be open with reduced staffing from late December through early January.',
		content: block(
			'Office hours will be adjusted during the holiday season. The building will remain open with reduced staffing from late December through early January. Specific holiday closures include December 25 and January 1. Employees planning to work during this period should coordinate with their managers and badge access will remain active. Security will be on site during all operating hours.'
		),
		date: '2026-09-05',
		author: 'Facilities Team',
		category: 'Operations',
	},
];
