<script>
	import TeamCard from "./team_card.svelte";

</script>
<section class="section-prop bg-secondaryBg">
    <h2 class="py-8">Meet the team</h2>
    <div class="grid lg:grid-cols-3 gap-3 lg:gap-8">
        <TeamCard data={{name: "Amin Shariat", designation: "Land acquisition"}}/>
        <TeamCard data={{name: "Andrew McLane", designation: "Land acquisition"}}/>
        <TeamCard data={{name: "Kianna Dicus", designation: "Marketing and Office Manager"}}/>
    </div>
</section>