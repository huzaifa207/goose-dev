<script>
	import PropertyCard from './property_card.svelte';
</script>

<section class="section-prop">
	<h2 class="py-8">Our property locations</h2>

	<div class="grid lg:grid-cols-3 gap-8">
		<PropertyCard
			data={{ title: 'Northwest Seattle', properties_count: '10', available_properties: '5' }}
		/>
		<PropertyCard
			data={{ title: 'Northeast Seattle', properties_count: '20', available_properties: '10' }}
		/>
		<PropertyCard
			data={{
				title: 'Greenlake - Fremont - Wallingford',
				properties_count: '20',
				available_properties: '5'
			}}
		/>
		<PropertyCard
			data={{ title: 'Queen Anne - Magnolia', properties_count: '25', available_properties: '5' }}
		/>
		<PropertyCard
			data={{ title: 'Central District', properties_count: '10', available_properties: '5' }}
		/>
		<PropertyCard
			data={{ title: 'West Seattle - Delridge', properties_count: '5', available_properties: '3' }}
		/>
		<div class="hidden lg:block"/>
		<PropertyCard
			data={{ title: 'Southeast Seattle', properties_count: '5', available_properties: '3' }}
		/>
	</div>
</section>
