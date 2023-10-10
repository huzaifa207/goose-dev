<script>
    let estates = [
        {value: "0", text: 'What type of estate are you seeking?' },
        {value: "apartment", text: 'Apartment' },
        {value: "bungalow", text: 'Bungalow' }
    ]

    let selectedEstate = '0'

    let priceRanges = [
        {value: "0", text: "What is your price range?"},
        {value: "1", text: "$200-$500"},
        {value: "2", text: "$500-$800"},
        {value: "3", text: "$800-$1000"},
    ]

    let selectedPrice = '0'

</script>

<section class="lg:grid lg:grid-cols-2 gap-x-8 px-2 lg:px-8 py-8 lg:py-12">
	<div>
		<h2>Let us know about your interests</h2>
		<form action="" class="grid-form font-inter">
			<input type="text" name="name" id="name" placeholder="Your name" required />
			<input
				type="text"
				name="designation"
				id="designation"
				placeholder="Your designation"
				required
			/>
			<input type="tel" name="phone" id="phone" placeholder="Your phone number" required />
			<input type="email" name="email" id="email" placeholder="Your email" required />
			<select name="estate" id="estate" required bind:value={selectedEstate} class={selectedEstate == '0' && "selectedText"}>
                {#each estates as estate}
                    <option value={estate.value}>{estate.text}</option>
                {/each}
			</select>
			<select name="price" id="price" required bind:value={selectedPrice} class={selectedPrice == '0' && "selectedText"}>
                {#each priceRanges as priceRange}
                    <option value={priceRange.value}>{priceRange.text}</option>
                {/each}
			</select>

			<textarea
				name="message"
				id="message"
				cols="30"
				rows="4"
				placeholder="(Optional) Additional message/comments"
				class="form-area"
			/>

			<div class="flex gap-2 form-area lg:mt-8">
				<input type="checkbox" name="mail-list" id="mail-list" />
				<label for="mail-list" class="flex-1">
					(Optional) By checking this box, you are agreeing to join our mailing list.
				</label>
			</div>

			<input type="submit" value="Submit" />
		</form>
	</div>

	<div class="hidden lg:block">
		<img src="/form-image.png" alt="a girl listening to you" class="m-auto" />
	</div>
</section>

<style lang="postcss">
	.grid-form {
		@apply grid grid-cols-1 lg:grid-cols-2 gap-3 py-4 lg:py-8;
	}

	.form-area {
		@apply lg:col-span-2 resize-none;
	}

	h2 {
		@apply text-3xl lg:text-4xl font-semibold text-center lg:text-left;
	}

	::placeholder,
	::-ms-input-placeholder {
		@apply text-fieldText opacity-100;
	}
	input,
	select,
	textarea {
		@apply text-sm bg-fieldsBg p-3;
	}

    .selectedText, 
	select option:first-child {
		@apply text-fieldText text-opacity-60;
	}


	input[type='submit'] {
		@apply bg-black text-white font-semibold rounded-full w-max px-6;
	}
</style>
