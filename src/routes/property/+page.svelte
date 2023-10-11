<script>
	import Hero from "$lib/components/property/hero.svelte";
	import Navigation from "$lib/components/property/navigation.svelte";
	import Highlights from "../../lib/components/property/highlights.svelte";
	import Nearby from "../../lib/components/property/nearby.svelte";
	import Overview from "../../lib/components/property/overview.svelte";
	import Photos from "../../lib/components/property/photos.svelte";
	import Plan from "../../lib/components/property/plan.svelte";

    
</script>

<main>
    <Hero />
    <Navigation />
    <Overview />
    <Photos />
    <Highlights />
    <Plan />
    <Nearby />
</main>

<style lang="postcss">
    main {
        @apply w-full
    }
</style>