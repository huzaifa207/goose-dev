<script>

	import Call from "../svg/call.svelte";
	import CalendarCard from "./calendar_card.svelte";
	import Navigation from "$lib/components/svg/navigation.svelte";
    import Pin from "$lib/components/svg/pin.svelte"
    import Map from "$lib/components/svg/map.svelte"

</script>
<section class="section-prop font-inter" id="overview">
	<div class="left">
		<div class="flex flex-col lg:flex-row justify-between items-center">
			<div>
				<h1 class="font-raleway">Maple Haven</h1>
				<h3>Queen Anne - Magnolia</h3>
			</div>
			<p class="status hidden lg:block">Available</p>
		</div>
        <div>
            <div class="flex items-center justify-between">
                <p class="pb-2"><span>Completion: </span>Q1 2023 (Estimated)</p>
    			<p class="status lg:hidden">Available</p>
            </div>
            <p>
                Smack dab center top-of-the-hill Queen Anne - this project is designed to complement its
                sublime neighborhood setting. Featuring two homes around 1,100 sqft and a full sized 3 bed
                plus office single family fronting 3rd Avenue West, expect hardwoods and top of the line
                appliances topped off with rooftop decks. The main house gets an elevated kitchen/sunken
                living room design with high ceilings. Parking off the alley for 3 cars. Half a block to the
                West Playfield - this is a rare location. We won't see another one of these for awhile.
            </p>
        </div>
        <div class="call-component">
            <button class="hidden lg:flex icon-container"><Call style_="stroke-white" />Call Now</button>
            <button class="flex lg:hidden icon-container h-12 w-12"><Call style_="stroke-white" /></button>
            <span>For price or opend house schedule</span>
        </div>
	</div>

	<div class="right">
        <div class="right_up">
            <div class="bg-map-small h-max lg:h-20 py-3">
                <div class="flex flex-col gap-2 p-3 lg:p-0 lg:flex-row justify-around items-center bg-white/70 w-11/12 mx-auto h-full map">
                    <p class="icon-container">
                        <Pin /> 1617 3rd Ave W
                    </p>

                    <p class="icon-container">
                        <Map /> Queen Anne
                    </p>

                    <button class="icon-container bg-white text-black h-min px-2 py-2 rounded-full shadow-md">
                        <Navigation /> Get Directions
                    </button>
                </div>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-3 px-2 gap-2 py-3">
                <p><span>Type: </span>Townhome</p>
                <p><span>Size: </span>3 Units</p>
                <p><span>Available: </span>2 Units</p>
                <p class="col-span-2 md:col-span-1 lg:col-span-1 order-6"><span>Area: </span>1,120 - 1,800 sqft</p>
                <p><span>Beds: </span>2-3</p>
                <p><span>Baths: </span>2-2.5</p>
            </div>
        </div>
        <div class="right_down">
            <div class="bg-secondaryBg w-4/5 mx-auto md:mx-0 p-3 md:p-0 md:w-[25%] rounded-md flex flex-col justify-center items-center gap-4 md:gap-2">
                <img src="/scale-blue.png" alt="">
                <p class="w-min">Open House</p>
            </div>
            <CalendarCard data={{date: "8", day: "Saturday", month: "July", time: "2:00 PM - 4:00 PM"}}/>
            <CalendarCard data={{date: "9", day: "Sunday", month: "July", time: "2:00 PM - 4:00 PM"}}/>
        </div>    
    </div>
</section>

<style lang="postcss">
    #overview {
        @apply flex flex-col md:flex-row justify-between gap-8 bg-secondaryBg h-max text-sm
    }
    .left {
        @apply flex-3 text-justify font-medium flex flex-col gap-7
    }

    h1 {
        @apply text-4xl font-semibold pb-1
    }
    h3 {
        @apply text-subheading text-base
    }
    .status {
        @apply uppercase bg-statusBox text-white text-xs font-semibold p-2 rounded-md
    }
    .right {
        @apply flex-2 flex flex-col h-full gap-2
    }
    .right_up {
        @apply bg-white rounded-md p-2
    }
    span {
        @apply font-semibold
    }
    .map {
        @apply text-subheading stroke-subheading
    }

    .right_down {
        @apply bg-white rounded-md py-2 px-3 flex flex-col md:flex-row gap-4 justify-between
    }

</style>
