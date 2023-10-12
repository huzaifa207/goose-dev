<script>
    import Calendar from "$lib/components/svg/calendar.svelte"
    import Map from "$lib/components/svg/map.svelte"
    import Property from "$lib/components/svg/property.svelte"
    import Smiley from "$lib/components/svg/smiley.svelte"
</script>

<section class="section-prop bg-section">

    <div class="gird lg:grid-cols-1">
        <div class="text-white text-center font-semibold text-sm">
            <h2>Our achievements</h2>
            <p class="font-inter">We have been one of the most prominent real estate developers in Seattle for over 8 years</p>
        </div>
        <div class="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-8 lg:w-3/5 mx-auto items-center content-center font-inter pt-8 pb-4">
            <button class="icon-container"><Calendar /> 8 years</button>
            <button class="icon-container "><Map /> 6 locations</button>
            <button class="icon-container "><Property />33 properties</button>
            <button class="icon-container "><Smiley />165 clients</button>
        </div>
    </div>
</section>

<style lang="postcss">
    button {
        @apply justify-center text-subheading stroke-subheading bg-white py-3 rounded-lg font-medium
    }
</style>