<script>
	import LeftArrow from '../svg/left_arrow.svelte';
	import RightArrow from '../svg/right_arrow.svelte';
</script>

<div class="md:hidden flex justify-between gap-8">
    <button class="icon-container" disabled>
        <LeftArrow />
        Previous    
    </button>

    <button class="icon-container justify-end">
        Next
        <RightArrow />
    </button>
</div>

<style lang="postcss">
	button {
		@apply bg-qoutes rounded-full text-sm font-medium tracking-wider py-2 px-4 disabled:opacity-50 flex-1;
	}
</style>
