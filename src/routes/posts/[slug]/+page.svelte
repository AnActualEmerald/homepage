<script lang="ts">
	import type { PageData } from './$types';
	import { TITLE } from '$lib/consts';

	export let data: PageData;
</script>

<svelte:head>
	<title>{TITLE} - {data.meta.title}</title>
</svelte:head>

<div>
	<article class="post">
		<h1 class="title">{data.meta.title}</h1>

		<svelte:component this={data.content} />
	</article>
</div>

<style lang="scss">
	div {
		width: 100%;
		display: flex;
		justify-content: center;
	}

	article {
		width: 50%;
		height: auto;

		.title {
			text-transform: capitalize;
		}
	}

	@media (max-width: 720px) {
		article {
			width: 100%;
			padding-inline: var(--size-7);
			padding-block: var(--size-4);
		}
	}
</style>
