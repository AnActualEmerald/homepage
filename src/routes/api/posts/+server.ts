import type { RequestHandler } from './$types';
import type { Post } from '$lib/types';
import { json } from '@sveltejs/kit';
import { dev } from '$app/environment';

async function getPosts() {
    let posts: Post[] = [];

    const paths = import.meta.glob("/src/posts/*.md", { eager: true });

    for(const path in paths) {
        const file = paths[path];
        const slug = path.split('/').at(-1)?.replace('.md', '');
        
        if(file && typeof file === 'object' && 'metadata' in file && slug) {
            const meta = file.metadata as Omit<Post, 'slug'>;
            const post = { ...meta, slug } satisfies Post;

            (post.published || dev) && posts.push(post);
        }

    }

    return posts;
}

export const GET: RequestHandler = async () => {
    const posts = await getPosts();    

    return json(posts);
};