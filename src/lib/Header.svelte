<script>

	import { theme } from "./utils";
	import { Moon, Sun } from "lucide-svelte";


	const toggle = () => {
		if($theme === 'dark') {
			$theme = 'light';
		} else {
			$theme = 'dark';
		}

		localStorage.setItem('color-scheme', $theme);
	}

</script>
<header>
	<a href="/">Home</a>
	<ul class="links">
		<li><a href="/posts">Blog</a></li>
	</ul>
	<button aria-details="Toggle light and dark theme" on:click={toggle}> 
		{#if $theme === 'light'}
			<Moon />
		{:else}
			<Sun />
		{/if}
	</button>
</header>

<style lang="scss">
	header {
		width: 100%;
		display: flex;
		justify-content: space-between;
		padding-block: var(--size-7);
		padding-inline: var(--size-7);
		background-color: var(--brand-2);
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	.links {
		padding: 0px;
		display: flex;

		li {
			padding: 0px;
		}
	}

	button {
		background-color: transparent;
	}
</style>
