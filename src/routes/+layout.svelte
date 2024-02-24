<script lang="ts">
	import 'open-props/style';
	import 'open-props/normalize';
	import 'open-props/colors-hsl';
	import '@fontsource/roboto';
	import '@fontsource/space-mono';

	import '../app.scss';
	import Header from '$lib/Header.svelte';
</script>

<div class="layout">
	<Header />

	<main>
		<slot />
	</main>
</div>

<style lang="scss">
	.layout {
		height: 100%;
		max-inline-size: 1920px;
		display: grid;
		grid-template-rows: auto 1fr auto;
		margin-inline: auto;
	}

	main {
		padding-inline: var(--size-7);
		padding-block: var(--size-9);
	}

	@media (min-width: 1920px) {
		.layout {
			padding-inline: 0;
		}
	}
</style>
