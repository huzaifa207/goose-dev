<script>
    import CircleIcon from "$lib/components/circle_icon.svelte"
    import FullScreenIcon from "$lib/components/svg/fullscreen.svelte"
    import DownloadIcon from "$lib/components/svg/download.svelte"
</script>

<section class="section-prop" id="photo">
    <h2>Photos</h2>

    <div class="grid grid-cols-3 gap-2">
        <div class="md:col-span-2 md:row-span-2 col-span-3 relative">
            <img src="/property-grid1.png" alt="" class="w-full h-full object-cover">
            <CircleIcon icon="left" class_="absolute top-1/2 translate-y-1/2 left-2"/>
            <CircleIcon icon="right" class_="absolute top-1/2 translate-y-1/2 right-2"/>
            <div class="hidden lg:flex absolute bottom-4 right-4 justify-end gap-4">
                <button class="icon-container"><FullScreenIcon /> Enlarge</button>
                <button class="icon-container"><DownloadIcon /> Download</button>
            </div>
        </div>
        <img src="/property-grid1.png" alt="" class="md:hidden w-full h-full object-cover">
        <img src="/property-grid2.png" alt="" class="w-full h-full object-cover">
        <img src="/property-grid3.png" alt="" class="w-full h-full object-cover">

    </div>
</section>

<style lang="postcss">
    section {
        @apply h-full mb-5
    }

    h2 {
        @apply my-3
    }
    button {
        @apply rounded-lg bg-white border-2 border-black p-2 shadow-lg
    }
</style>