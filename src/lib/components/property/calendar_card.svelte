<script>
    export let data;
</script>

<div>
    <p>{data.month}</p>
    <h3 class="text-2xl">{data.date}</h3>
    <p>{data.day}</p>
    <hr class="border-2 rounded-full">
    <p>{data.time}</p>
</div>

<style lang="postcss">
    div {
        @apply text-center text-subheading font-medium border border-subheading/50 text-sm p-3 rounded-md flex flex-col gap-1 w-full md:w-[35%]
    }
</style>