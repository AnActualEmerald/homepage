<script>

	import { AppBar, LightSwitch } from "@skeletonlabs/skeleton";

</script>

<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-self-end">
	<svelte:fragment slot="lead">
		<a href="/">Home</a>
	</svelte:fragment>
	<ul class="links flex">
		<li><a href="/posts">Blog</a></li>
	</ul>
	<svelte:fragment slot="trail">
		<LightSwitch />
	</svelte:fragment>

</AppBar>

