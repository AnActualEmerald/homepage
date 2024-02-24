<script lang="ts">
	import { formatDate } from '$lib/utils';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<section class="posts">
	{#each data.posts as post}
		<!-- <li class="preview surface-2"> -->
		<a href="/posts/{post.slug}" class="preview surface-2">
			{#if post.date}
				<small>{formatDate(post.date)}</small>
			{/if}
			<h1>{post.title}</h1>
			<p>{post.description ?? ''}</p>
			{#if post.tags}
				<div class="tags">
					{#each post.tags as tag}
						<span class="tag">{tag}</span>
					{/each}
				</div>
			{/if}
		</a>
		<!-- </li> -->
	{/each}
</section>

<style lang="scss">
	.posts {
		width: 33%;
		padding-inline: var(--size-10);
		small {
			color: var(--text-2);
			filter: opacity(50%);
		}
	}

	.preview {
		border-radius: var(--radius-2);
		border: solid var(--border-size-2) var(--border);
		min-height: 10em;
		display: block;
		text-decoration: none;
		padding-inline: var(--size-7);
		padding-block: var(--size-4);
		transition-property: box-shadow;
		transition-duration: 0.25s;

		&:hover {
			box-shadow: 0px 0px 10px var(--brand);
		}
	}

	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: var(--size-2);
		margin-top: var(--size-3);
		.tag {
			background-color: var(--brand);
			color: var(--gray-9);
			border-radius: var(--radius-3);
			font-size: 0.8em;
			padding: 0.6em;
			line-height: var(--size-3);
			font-weight: bold;
			text-align: center;
			text-transform: uppercase;
		}
	}
</style>
