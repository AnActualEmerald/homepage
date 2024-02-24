// @ts-nocheck
import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

export const load = async ({params}: Parameters<PageLoad>[0]) => {
    try {
        const post = await import(`../../../posts/${params.slug}.md`);

        return {
            content: post.default,
            meta: post.metadata
        }
    } catch (e) {
        console.error(`error loading post '${params.slug}':`, e);
        return error(404);
    }
};