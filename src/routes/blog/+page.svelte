<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<ul>
	{#each data.posts as post}
		<li class="preview surface-2">
			<h1><a href="/posts/{post.slug}">{post.title}</a></h1>
			<p>{post.description ?? ''}</p>
		</li>
	{/each}
</ul>

<style lang="scss">
	li {
		border-radius: var(--radius-2);
		border: solid var(--border-size-2) var(--border);
		min-height: 10em;
		padding-block: var(--size-2);
		padding-inline: var(--size-4);

		&:hover {
			box-shadow: var(--shadow-3);
		}
	}
</style>
