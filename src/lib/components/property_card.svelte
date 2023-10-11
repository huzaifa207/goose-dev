<script>
	import CircleIcon from './circle_icon.svelte';
	import Pagination from './pagination.svelte';
	import PropertyFeature from './property_feature.svelte';
	let features = ['Available', 'Size: 3 units', 'Est. completion Q1 2023'];
</script>

<div>
	<article>
		<div class="flex flex-col md:flex-row md:justify-between mb-2">
			<div class="md:text-left">
				<h3>Queen Anne</h3>
				<p>Queen Anne - Queen Anne</p>
			</div>
			<div class="flex justify-center gap-3 py-2">
				{#each features as feature}
					<PropertyFeature {feature} />
				{/each}
			</div>
		</div>
		<div class="relative">
			<div class="grid grid-cols-3 gap-1 md:grid-rows-2 align-center">
				<div class="col-span-3 md:row-span-2 md:col-span-2 img-container main-img">
					<img src="/property-main.png" alt="" width="100%" class="w-full h-full"/>
				</div>
				<div class="selected img-container">
					<img src="/property2.png" alt="" width="100%"  class="w-full h-full"/>
				</div>
				<div class="img-container">
					<img src="/property3.png" alt="" width="100%" class="w-full h-full"/>
				</div>
				<div class="img-container container-4">
					<img src="/property4.png" alt="" class="md:hidden w-full h-full" width="100%" />
				</div>
			</div>
			<CircleIcon icon={'left'} class_="absolute left-2 bottom-1/2 h-8 md:hidden" />
			<CircleIcon icon={'right'} class_="absolute right-2 bottom-1/2 h-8 md:hidden" />
		</div>
	</article>
	<Pagination />
</div>

<style lang="postcss">
	article {
		@apply text-center border-2 rounded-sm p-2;
	}
	h3 {
		@apply text-lg font-semibold;
	}
	p {
		@apply text-sm;
	}
	/* .img-container {
		@apply mx-auto flex justify-center items-center max-h-[150px] md:max-h-[300px] lg:max-h-full lg:max-w-full lg:aspect-auto aspect-square overflow-hidden;
	} */
	.container-4 {
		@apply md:hidden;
	}
	.main-img {
		@apply max-h-[50vh] aspect-auto overflow-hidden md:max-h-max mx-auto md:max-w-[80vw] lg:max-w-full lg:max-h-full;
	}

	.selected {
		@apply border border-black md:border-0;
	}
</style>
