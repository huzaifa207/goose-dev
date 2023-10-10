<script>
	import Left from "./svg/left.svelte";
	import Right from "./svg/right.svelte";

    export let class_;
    export let icon;

</script>

<div class="circle-btn-container {class_}">
    {#if icon === 'left'}
        <Left />
    {:else if icon === 'right'}
        <Right />
    {/if}
</div>
