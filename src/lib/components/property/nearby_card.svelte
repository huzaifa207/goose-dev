<script>
	import Navigation from "$lib/components/svg/navigation.svelte";

	export let data;
</script>

<div
	class="border border-black/40 flex flex-col gap-3 lg:gap-0 lg:flex-row lg:items-center justify-between p-2 rounded-lg text-subheading font-medium text-sm"
>
	<div class="flex items-center gap-4 flex-4">
		<img src="/restaurant.png" alt="" class="w-1/4 aspect-square object-cover rounded-lg" />
		<div>
			<h3 class="text-xl font-semibold py-2">{data.title}</h3>
            
			<div class="flex flex-col lg:flex-row justify-between gap-2 lg:gap-8 font-inter">
				<p class="icon-container">
					<svg
						width="20"
						height="20"
						viewBox="0 0 20 20"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<mask
							id="mask0_518_323"
							style="mask-type:alpha"
							maskUnits="userSpaceOnUse"
							x="0"
							y="0"
							width="20"
							height="20"
						>
							<rect width="20" height="20" fill="#D9D9D9" />
						</mask>
						<g mask="url(#mask0_518_323)">
							<path
								d="M3.33301 17.5V15.8333H16.6663V17.5H3.33301ZM6.66634 14.1667C5.74967 14.1667 4.96495 13.8403 4.31217 13.1875C3.6594 12.5347 3.33301 11.75 3.33301 10.8333V2.5H16.6663C17.1247 2.5 17.517 2.66319 17.8434 2.98958C18.1698 3.31597 18.333 3.70833 18.333 4.16667V6.66667C18.333 7.125 18.1698 7.51736 17.8434 7.84375C17.517 8.17014 17.1247 8.33333 16.6663 8.33333H14.9997V10.8333C14.9997 11.75 14.6733 12.5347 14.0205 13.1875C13.3677 13.8403 12.583 14.1667 11.6663 14.1667H6.66634ZM6.66634 12.5H11.6663C12.1247 12.5 12.517 12.3368 12.8434 12.0104C13.1698 11.684 13.333 11.2917 13.333 10.8333V4.16667H4.99967V10.8333C4.99967 11.2917 5.16287 11.684 5.48926 12.0104C5.81565 12.3368 6.20801 12.5 6.66634 12.5ZM14.9997 6.66667H16.6663V4.16667H14.9997V6.66667Z"
								fill="#333333"
							/>
						</g>
					</svg>

					{ data.type}
				</p>
				<p class="icon-container">
                    <span class="block border-2 border-black rounded-full">
                        <Navigation />
                    </span>
					in {data.time} minutes
				</p>
			</div>
		</div>
	</div>
	<button class="icon-container self-end lg:self-auto bg-secondaryBg rounded-full py-1 px-5 w-max max-w-max text-base text-black flex-2">
		<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M9.16764 19.1249V17.4582C7.43153 17.2638 5.94195 16.545 4.69889 15.302C3.45584 14.0589 2.73709 12.5693 2.54264 10.8332H0.875977V9.16654H2.54264C2.73709 7.43043 3.45584 5.94085 4.69889 4.69779C5.94195 3.45474 7.43153 2.73599 9.16764 2.54154V0.874878H10.8343V2.54154C12.5704 2.73599 14.06 3.45474 15.3031 4.69779C16.5461 5.94085 17.2649 7.43043 17.4593 9.16654H19.126V10.8332H17.4593C17.2649 12.5693 16.5461 14.0589 15.3031 15.302C14.06 16.545 12.5704 17.2638 10.8343 17.4582V19.1249H9.16764ZM10.001 15.8332C11.6121 15.8332 12.9871 15.2638 14.126 14.1249C15.2649 12.986 15.8343 11.611 15.8343 9.99988C15.8343 8.38877 15.2649 7.01377 14.126 5.87488C12.9871 4.73599 11.6121 4.16654 10.001 4.16654C8.38987 4.16654 7.01487 4.73599 5.87598 5.87488C4.73709 7.01377 4.16764 8.38877 4.16764 9.99988C4.16764 11.611 4.73709 12.986 5.87598 14.1249C7.01487 15.2638 8.38987 15.8332 10.001 15.8332ZM10.001 13.3332C9.08431 13.3332 8.29959 13.0068 7.64681 12.354C6.99403 11.7013 6.66764 10.9165 6.66764 9.99988C6.66764 9.08321 6.99403 8.29849 7.64681 7.64571C8.29959 6.99293 9.08431 6.66654 10.001 6.66654C10.9176 6.66654 11.7024 6.99293 12.3551 7.64571C13.0079 8.29849 13.3343 9.08321 13.3343 9.99988C13.3343 10.9165 13.0079 11.7013 12.3551 12.354C11.7024 13.0068 10.9176 13.3332 10.001 13.3332Z"
				fill="#1C1B1F"
			/>
		</svg>

		Locate on map
	</button>
</div>
