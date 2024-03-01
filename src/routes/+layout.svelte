<script lang="ts">
	import '../app.pcss';
	import '@fontsource/roboto';
	import '@fontsource/space-mono';

	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<div class="layout">
	<Header></Header>

	<main>
		<slot />
	</main>

	<Footer></Footer>
</div>

<style lang="scss">
	.layout {
		height: 100%;
		max-inline-size: 1920px;
		display: grid;
		grid-template-rows: auto 1fr auto;
		margin-inline: auto;
	}

	@media (min-width: 1440px) {
		.layout {
			padding-inline: 0;
		}
	}
</style>
