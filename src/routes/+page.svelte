<script lang="ts">
	import * as Carousel from '$lib/components/ui/carousel/index.js';
</script>

<Carousel.Root class="w-full h-screen box-border">
	<Carousel.Content class="-ml-0">
		<Carousel.Item class="flex h-screen pl-0 items-center justify-center">
			<img src="./images/bern.webp" alt="A bridge crossing the river in Bern" />
			<a href="/switzerland" class="absolute top-1/3">
				<div>
					<h1 class="text-6xl font-bold text-white">Switzerland</h1>
					<hr class="white" />
				</div>
			</a>
		</Carousel.Item>
		<Carousel.Item class="flex h-screen pl-0 items-center justify-center">
			<img src="./images/bern.webp" alt="A bridge crossing the river in Bern" />
		</Carousel.Item>
	</Carousel.Content>

	<Carousel.Previous class="absolute left-5" />
	<Carousel.Next class="absolute right-5" />
</Carousel.Root>

<style></style>
