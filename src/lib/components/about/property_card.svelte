<script>
    import Property from "$lib/components/svg/property.svelte"
    import RealState from "$lib/components/svg/real_state.svelte"
    import RightArrow from "$lib/components/svg/right_arrow.svelte"

    export let data;
</script>

<div class="rounded-lg border p-6 shadow-md">
    <div class="grid gap-4">
        <div>
            <img src="/property-grid1.png" alt="" class="h-full w-full object-cover rounded-2xl">
        </div>
        <h3 class="text-xl font-semibold">{data.title}</h3>
        <div class="flex gap-8 text-sm font-inter">
            <p class="icon-container">{data.properties_count}<Property /> properties</p>
            <p class="icon-container">{data.available_properties}<RealState /> available</p>
        </div>
        <button class="icon-container font-inter bg-secondaryBg rounded-full w-max px-3 py-1">
            See Properties <RightArrow />
        </button>

    </div>
</div>