<script>
	import PageEllipses from './page_ellipses.svelte';
	import LeftArrow from './svg/left_arrow.svelte';
	import RightArrow from './svg/right_arrow.svelte';

	export let style_;
</script>

<div class="hidden md:flex justify-center items-center gap-4 pt-3 {style_} font-inter ">
	<button class="icon-container" disabled>
		<LeftArrow /> Previous Property
	</button>

	<PageEllipses />
	<button class="icon-container">
		Next Property <RightArrow />
	</button>
</div>

<style lang="postcss">
	button {
		@apply bg-qoutes rounded-full text-sm font-medium tracking-wider w-max py-2 px-4 disabled:opacity-50;
	}
</style>
