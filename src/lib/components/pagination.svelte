<script>
    let pages = [1,2,3,4,5].sort((a,b) => b-a)
    console.log(pages);
</script>
<div class="flex items-center gap-1">
    {#each pages as page}
        <div class="ellipse w{page}">
            
        </div>
    {/each}
</div>

<style lang="postcss">
    .ellipse {
        @apply rounded-full bg-qoutes aspect-square 
    }
    .w5 {
        width: 11px;
    }
    .w4 {
        width: 9px;
    }
    .w3 {
        width: 7px;
    }
    .w2 {
        width: 5px;
    }
    .w1 {
        width: 3px;
    }
</style>