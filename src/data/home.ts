export const categories: string[] = [
	'Web Development',
	'Frontend Development',
	'Backend Development',
	'Full Stack Development',
	'JavaScript',
	'React',
	'Node.js',
	'HTML & CSS',
	'Responsive Design',
	'UI/UX Design',
	'API Development',
];

type Video = {
	id: string;
	title: string;
	channel: {
		id: string;
		name: string;
		profileUrl: string;
	};
	views: number;
	postedAt: Date;
	duration: number;
	thumbnailUrl: string;
	videoUrl: string;
};

export const videos: Video[] = [
	{
		id: '1',
		title: 'Intro to Web Development',
		channel: {
			id: 'channel1',
			name: 'Web Dev Academy',
			profileUrl: 'https://youtube.com/channel/channel1',
		},
		views: 5000,
		postedAt: new Date('2024-12-01'),
		duration: 1200, // 20 minutes
		thumbnailUrl: 'https://img.youtube.com/vi/video1/0.jpg',
		videoUrl: 'https://www.youtube.com/watch?v=1',
	},
	{
		id: '2',
		title: 'Mastering Frontend Development',
		channel: {
			id: 'channel2',
			name: 'Frontend Masters',
			profileUrl: 'https://youtube.com/channel/channel2',
		},
		views: 8000,
		postedAt: new Date('2024-11-28'),
		duration: 1800, // 30 minutes
		thumbnailUrl: 'https://img.youtube.com/vi/video2/0.jpg',
		videoUrl: 'https://www.youtube.com/watch?v=2',
	},
	{
		id: '3',
		title: 'Backend Development Fundamentals',
		channel: {
			id: 'channel3',
			name: 'Backend Dev Hub',
			profileUrl: 'https://youtube.com/channel/channel3',
		},
		views: 10000,
		postedAt: new Date('2024-11-15'),
		duration: 1500, // 25 minutes
		thumbnailUrl: 'https://img.youtube.com/vi/video3/0.jpg',
		videoUrl: 'https://www.youtube.com/watch?v=3',
	},
	{
		id: '4',
		title: "Full Stack Development: A Beginner's Guide",
		channel: {
			id: 'channel4',
			name: 'Code Academy',
			profileUrl: 'https://youtube.com/channel/channel4',
		},
		views: 12000,
		postedAt: new Date('2024-12-10'),
		duration: 2400, // 40 minutes
		thumbnailUrl: 'https://img.youtube.com/vi/video4/0.jpg',
		videoUrl: 'https://www.youtube.com/watch?v=4',
	},
	{
		id: '5',
		title: 'JavaScript: The Essential Guide',
		channel: {
			id: 'channel5',
			name: 'JavaScript Mastery',
			profileUrl: 'https://youtube.com/channel/channel5',
		},
		views: 15000,
		postedAt: new Date('2024-11-22'),
		duration: 1800, // 30 minutes
		thumbnailUrl: 'https://img.youtube.com/vi/video5/0.jpg',
		videoUrl: 'https://www.youtube.com/watch?v=5',
	},
	{
		id: '6',
		title: 'React for Beginners',
		channel: {
			id: 'channel6',
			name: 'React Pro',
			profileUrl: 'https://youtube.com/channel/channel6',
		},
		views: 20000,
		postedAt: new Date('2024-12-05'),
		duration: 2100, // 35 minutes
		thumbnailUrl: 'https://img.youtube.com/vi/video6/0.jpg',
		videoUrl: 'https://www.youtube.com/watch?v=6',
	},
	{
		id: '7',
		title: 'Node.js Explained: A Complete Guide',
		channel: {
			id: 'channel7',
			name: 'Node Devs',
			profileUrl: 'https://youtube.com/channel/channel7',
		},
		views: 25000,
		postedAt: new Date('2024-11-18'),
		duration: 2700, // 45 minutes
		thumbnailUrl: 'https://img.youtube.com/vi/video7/0.jpg',
		videoUrl: 'https://www.youtube.com/watch?v=7',
	},
	{
		id: '8',
		title: 'HTML & CSS for Web Development',
		channel: {
			id: 'channel8',
			name: 'Web Design Academy',
			profileUrl: 'https://youtube.com/channel/channel8',
		},
		views: 30000,
		postedAt: new Date('2024-11-30'),
		duration: 1500, // 25 minutes
		thumbnailUrl: 'https://img.youtube.com/vi/video8/0.jpg',
		videoUrl: 'https://www.youtube.com/watch?v=8',
	},
	{
		id: '9',
		title: 'Responsive Design Tips for Beginners',
		channel: {
			id: 'channel9',
			name: 'Responsive Web',
			profileUrl: 'https://youtube.com/channel/channel9',
		},
		views: 35000,
		postedAt: new Date('2024-10-25'),
		duration: 1800, // 30 minutes
		thumbnailUrl: 'https://img.youtube.com/vi/video9/0.jpg',
		videoUrl: 'https://www.youtube.com/watch?v=9',
	},
	{
		id: '10',
		title: 'UI/UX Design Best Practices',
		channel: {
			id: 'channel10',
			name: 'UI Design Academy',
			profileUrl: 'https://youtube.com/channel/channel10',
		},
		views: 40000,
		postedAt: new Date('2024-11-10'),
		duration: 2100, // 35 minutes
		thumbnailUrl: 'https://img.youtube.com/vi/video10/0.jpg',
		videoUrl: 'https://www.youtube.com/watch?v=10',
	},
	{
		id: '11',
		title: 'API Development with Node.js',
		channel: {
			id: 'channel11',
			name: 'API Masters',
			profileUrl: 'https://youtube.com/channel/channel11',
		},
		views: 50000,
		postedAt: new Date('2024-09-15'),
		duration: 2500, // 42 minutes
		thumbnailUrl: 'https://img.youtube.com/vi/video11/0.jpg',
		videoUrl: 'https://www.youtube.com/watch?v=11',
	},
];
