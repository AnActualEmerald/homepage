export type Post = {
	title: string;
	slug: string;
	description: string;
	date: string;
	categories: Categories[];
	published: boolean;
};

export type Categories = 'Programming' | 'Tech' | 'Fluff';
