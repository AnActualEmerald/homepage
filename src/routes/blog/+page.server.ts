import type { Post } from '$lib/types';
import type { PageServerLoad } from './$types';

export const load = (async ({ fetch }) => {
	const posts : Post[] = await (await fetch('/api/posts')).json();
	return {
		posts
	};
}) satisfies PageServerLoad;
