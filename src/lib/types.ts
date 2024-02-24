export type Post = {
	title: string;
	slug: string;
	description: string;
	date: string;
	categories: Categories[];
	tags: String[];
	published: boolean;
};

export type Categories = 'Programming' | 'Tech' | 'Fluff';
