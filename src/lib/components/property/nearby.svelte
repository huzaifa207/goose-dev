<script>
	import Pagination from '../pagination.svelte';
	import NearbyCard from './nearby_card.svelte';
	import NearbyPagination from './nearby_pagination.svelte';
</script>

<section id="nearby" class="section-prop">
	<h2>Nearby</h2>
    <div class="flex justify-center gap-4 pb-6">
        <button>Food</button>
        <button>Shopping</button>
        <button>Entertainment</button>
        <button>Packages</button>
    </div>
	<div class="grid lg:grid-cols-2 gap-2">
		<img
			src="/map-large.png"
			alt=""
			class="hidden h-full w-full object-cover lg:block row-span-5"
		/>
        <NearbyPagination />
		<NearbyCard data={{ title: 'Queen’s Café', type: 'Café', time: '3' }} />
		<NearbyCard data={{ title: 'Pizza Heaven', type: 'Restaurant', time: '3' }} />
		<NearbyCard data={{ title: 'The Hungry Parrots', type: 'Restaurant', time: '5' }} />
		<NearbyCard data={{ title: 'Dip and Sip', type: 'Café', time: '5' }} />
		<Pagination />
	</div>
</section>

<style lang="postcss">
    button {
        @apply py-2 w-max px-2 lg:px-0 lg:w-28 bg-secondaryBg rounded-full text-sm font-medium focus:font-semibold focus:text-white focus:bg-black
    }
</style>
