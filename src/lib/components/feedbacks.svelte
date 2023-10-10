<script>
	import CircleIcon from './circle_icon.svelte';
	import Pagination from './pagination.svelte';

</script>

<section class="section">
	<h2>Feedbacks from our satisfied clients</h2>

	<div class="flex items-center justify-center gap-8">
		<CircleIcon class_="hidden lg:flex h-10" icon={"left"} />
		<div class="quote-box">
			<div class="quotes-block">
				<p>
					We love the house, love the location, and Goose came back multiple times to correct things
					we didn't catch the first time around. We've recommended friends take a look at Goose
					Projects.
				</p>
			</div>
		</div>
		<CircleIcon class_="hidden lg:flex h-10" icon={'right'} />
	</div>

	<div class="reviewer-info">
		<div class="round-image">
			<img src="/reviewer.png" alt="Reviewer display" />
		</div>
		<div>
			<h3>Simon and Karly</h3>
			<p>West Seattle</p>
		</div>
	</div>
    <div class="w-fit m-auto">
        <Pagination />
    </div>
</section>

<style lang="postcss">
	section {
		@apply bg-section text-white;
	}

	.quote-box {
		@apply bg-white rounded-sm relative mr-4 z-10 min-h-[8rem] p-6 shadow-quote mt-10 mb-4 lg:w-4/5;
	}

	.quote-box::after {
		@apply content-[''] absolute -bottom-3 left-1/2 border-t-12 border-t-white border-b-0 border-x-12 border-x-transparent -translate-x-1/2;
	}

	.quotes-block {
		@apply relative;
	}
	.quotes-block::before,
	.quotes-block::after {
		quotes: '“' '”' '“' '”';
		@apply text-qoutes text-9xl absolute content-[""] -z-10 italic font-medium;
	}

	.quotes-block::before {
		@apply content-[open-quote] -top-9 -left-8;
	}
	.quotes-block::after {
		@apply content-[open-quote] -bottom-24 right-4;
	}

	.quotes-block p {
		@apply text-black p-3 font-medium italic text-center lg:text-2xl lg:font-semibold lg:px-16;
	}

	.reviewer-info {
		@apply text-center flex flex-col py-4 lg:flex-row lg:justify-center lg:text-left;
	}

	.round-image {
		@apply h-16 aspect-square rounded-full mx-auto lg:mx-0;
	}

	.reviewer-info h3 {
		@apply font-semibold;
	}

	.reviewer-info p {
		@apply text-sm;
	}
</style>
