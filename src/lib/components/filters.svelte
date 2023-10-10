<script>
	import IconFilters from "./svg/icon_filters.svelte";

	let neighborhoods = [
        { id: 'all', value: 'All Neighborhoods' }, 
        {id: 'georgia', value: 'Georgia'}, 
        {id: 'sydney', value: 'Sydney'}
        ];
</script>

<div class="flex gap-4 justify-center pb-3">
	<select name="" id="">
        {#each neighborhoods as neighborhood}
            <option value={neighborhood.id}>{neighborhood.value}</option>
        {/each}
	</select>

    <div class="hidden lg:flex gap-2">
        <button class="selected">Available</button>
        <button>Now Preselling</button>
        <button>Sold</button>
    </div>

    <button class="lg:hidden btn-mob icon-container gap-6">
        Filters <IconFilters />
    </button>
</div>

<style lang="postcss">

    select, button {
        @apply py-2 px-4 rounded-full font-semibold
    }

    select {
        @apply w-72 border border-black bg-transparent                         
    }

    button {
        @apply w-40 bg-qoutes   
    }

    .selected {
        @apply bg-black text-white
    }

    .btn-mob {
        @apply w-max bg-transparent border border-black
    }

</style>
