<script>
	import CircleIcon from './circle_icon.svelte';
	import Pagination from './pagination.svelte';
	import PropertyFeature from './property_feature.svelte';
	import LeftArrow from './svg/left_arrow.svelte';
	import RightArrow from './svg/right_arrow.svelte';
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
					<img src="/property-main.png" alt="" width="100%" />
				</div>
				<div class="selected img-container">
					<img src="/property2.png" alt="" width="100%" />
				</div>
				<div class="img-container">
					<img src="/property3.png" alt="" width="100%" />
				</div>
				<div class="img-container container-4">
					<img src="/property4.png" alt="" class="md:hidden" width="100%" />
				</div>
			</div>
			<CircleIcon icon={'left'} class_="absolute left-2 bottom-1/2 h-8 md:hidden" />
			<CircleIcon icon={'right'} class_="absolute right-2 bottom-1/2 h-8 md:hidden" />
		</div>
	</article>
	<div class="hidden md:flex justify-center items-center gap-4 pt-3 font-inter">
		<button class="icon-container" disabled>
			<LeftArrow /> Previous Property
		</button>
        <Pagination />
		<button class="icon-container">
			Next Property <RightArrow />
		</button>
	</div>
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
	.img-container {
		@apply mx-auto flex justify-center items-center max-h-[150px] md:max-h-[300px] lg:max-h-full lg:max-w-full lg:aspect-auto aspect-square overflow-hidden;
	}
	.container-4 {
		@apply md:hidden;
	}
	.main-img {
		@apply max-h-[50vh] aspect-auto overflow-hidden md:max-h-max object-contain mx-auto md:max-w-[80vw] lg:max-w-full lg:max-h-full;
	}
	.main-img img {
		@apply object-contain;
	}

	.selected {
		@apply border border-black md:border-0;
	}
	button {
		@apply bg-qoutes rounded-full text-sm font-medium tracking-wider w-max py-2 px-4 disabled:opacity-50;
	}
</style>
