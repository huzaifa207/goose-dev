<script>
	let pages = [1, 2, 3, 4, 5];

	let active_page = 1;
</script>

<div class="flex items-center gap-1">
	{#each pages as page}
		<div class="ellipse w-2 {page} {active_page === page && 'active'}" />
	{/each}
</div>

<style lang="postcss">
    .ellipse {
		@apply rounded-full bg-qoutes aspect-square;
	}
    .active {
        @apply w-3 bg-black
    }
</style>