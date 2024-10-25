<script lang="ts">
	import AttractionCard from "$lib/components/attraction-card.svelte";
	import Progress from "$lib/components/ui/progress/progress.svelte";

	let { data } = $props();

	// Scroll Logic
	let scrollEl: HTMLDivElement
	let scrollPos = $state(0)
	let scrollOffset = $derived((1 / (data.stops.length * (data.stops.length - 1) )) * Math.round(scrollPos / 100 * data.stops.length))
	let progressPos = $derived(scrollOffset * 100 + scrollPos)
	let currentStep = $derived(Math.floor(scrollPos / (100 / (data.stops.length + 1))))

	function onscroll(){		
		scrollPos = ((scrollEl.scrollTop / scrollEl.scrollHeight)) * 100	
	}
</script>

{#snippet stopButton(image: string, alt: string, color: string, name: string, position: number )}
	<div class="z-10 flex items-center">
		<div class="w-10 h-10 bg-{color} rounded-full flex items-center justify-center cursor-pointer pointer-events-auto" 
		onclick={() => scrollEl.scrollTo({top: scrollEl.scrollHeight / data.stops.length * position, behavior: "smooth"})}
		role="none">
			<img src={image} alt={alt} class="h-8 w-8 object-cover rounded-full" />
		</div>
		<h3 class="text-white font-bold backdrop-blur-md rounded-md p-1 ml-2 pointer-events-auto">{name}</h3>
	</div>
{/snippet}

<div class="snap-mandatory snap-y overflow-y-scroll no-scrollbar h-screen scroll-smooth" {onscroll} bind:this={scrollEl}>
	<div class="absolute h-screen w-1/5 left-1 z-10 box-border p-10 pointer-events-none">
		<div class="flex relative h-full justify-between flex-col">
			<Progress value={progressPos} class="absolute w-2 left-4 z-0"></Progress>
			{#each data.stops as stop, i}
				{#if i < currentStep}
					{@render stopButton(stop.image, stop.alt, "baby-blue", stop.name, i)}
				{/if}
				{#if i == currentStep}
					{@render stopButton(stop.image, stop.alt, "baby-blue", stop.name, i)}
				{/if}
				{#if i > currentStep}
					{@render stopButton(stop.image, stop.alt, "ocean-blue", stop.name, i)}
				{/if}
			{/each}
	
		</div>
	</div>
	{#each data.stops as stop}
		<div class="h-screen snap-start relative">
			<img src={stop.image} alt={stop.alt} class="h-screen w-full object-cover" />
			<div class="absolute bottom-0 right-0 w-4/5 h-5/6 box-border p-5">
				<h2 class="text-white text-xl font-bold mb-5">
					{stop.name}
					<hr />
				</h2>
				<div class="w-1/2">
					{#each stop.attractions as attraction}
						<AttractionCard {...attraction}></AttractionCard>
						<AttractionCard {...attraction}></AttractionCard>
						<AttractionCard {...attraction}></AttractionCard>
					{/each}
				</div>
			</div>
		</div>
	{/each}
</div>

