<script lang="ts">
	import 'open-props/style';
	import 'open-props/normalize';
	import 'open-props/colors-hsl';
	import '@fontsource/roboto';
	import '@fontsource/space-mono';

	import '../app.scss';
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
	import { onMount } from 'svelte';
	import { theme } from '$lib/utils';
	import { browser } from '$app/environment';

	onMount(() => {
		if(browser){
			const preferred = localStorage.getItem("color-scheme");
			const dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
			$theme = preferred ? preferred as 'dark' | 'light' : dark ? 'dark' : 'light';
		}

		theme.subscribe((col) => {
			document.querySelector('html')?.setAttribute('color-scheme', col);
		})
	});
</script>

<div class="layout">
	<Header />

	<main>
		<slot />
	</main>

	<Footer />
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
