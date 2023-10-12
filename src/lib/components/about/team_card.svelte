<script>
    export let data;
</script>

<div class="card bg-white p-6 rounded-lg">
    <div class="grid gap-6">
        <div class="h-[20rem] lg:h-[28rem]">
            <img src="/person.png" alt="" class="h-full w-full object-cover rounded-2xl">
        </div>
        <div>
            <h3 class="font-semibold text-xl">{data.name}</h3>
            <p class="text-sm font-inter">{data.designation}</p>
        </div>
    </div>
</div>