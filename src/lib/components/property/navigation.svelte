<script>
	import Overview from '$lib/components/svg/overview.svelte';
	import Photos from '$lib/components/svg/photos.svelte';
	import Highlight from '$lib/components/svg/highlight.svelte';
	import Floorplan from '$lib/components/svg/floorplan.svelte';
	import Nearby from '$lib/components/svg/nearby.svelte';
	import Call from '../svg/call.svelte';
</script>

<nav class="font-inter">
	<div class="nav-container">
		<a href="#overview" class="icon-container"><Overview />Overview</a>
		<a href="#photo" class="icon-container"><Photos />Photos</a>
		<a href="#highlight" class="icon-container"><Highlight />Highlights</a>
		<a href="#plan" class="icon-container"><Floorplan />Floor Plans</a>
		<a href="#nearby" class="icon-container"><Nearby />Nearby</a>
	</div>
	<div class="call-component">
		<span>For price or opend house schedule </span>
		<button class="icon-container"><Call style_="stroke-white" />Call Now</button>
	</div>
</nav>

<style lang="postcss">
	nav {
		@apply hidden lg:flex w-full justify-between items-center sticky top-0 h-[4rem] bg-white px-16 z-10;
	}

	.nav-container {
		@apply flex justify-between w-3/5;
	}

    
	a {
        @apply uppercase font-semibold text-center py-5 focus:text-selected  focus:stroke-selected focus:stroke-1 focus:border-b-selected focus:border-b-2;
	}

</style>
