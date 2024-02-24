<script lang="ts">
	import type { PageData } from './$types';
	import { TITLE } from '$lib/consts';

	export let data: PageData;
</script>

<svelte:head>
	<title>{TITLE} - {data.meta.title}</title>
</svelte:head>

<svelte:component this={data.content} />
