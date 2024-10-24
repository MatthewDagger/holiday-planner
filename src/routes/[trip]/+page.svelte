<script lang="ts">
	import AttractionCard from "$lib/components/attraction-card.svelte";
	import Progress from "$lib/components/ui/progress/progress.svelte";

	let { data } = $props();

	// Scroll Logic
	let scrollEl: HTMLDivElement
	let scrollPos = $state(0)
	let progressPos = $state(0)
	let currentStep = $derived(Math.round(scrollPos / 100 * data.stops.length) )

	function onscroll(){
		const scrollOffset = (1 / (data.stops.length * (data.stops.length - 1) )) * currentStep
		scrollPos = ((scrollEl.scrollTop / scrollEl.scrollHeight)) * 100
		progressPos = scrollOffset * 100 + scrollPos
	}
</script>
{#snippet stopButton(image: string, alt: string, color: string, name: string )}
	
	<div class="z-10 flex items-center">
		<div class="w-10 h-10 bg-{color} rounded-full flex items-center justify-center" 
		>
			<img src={image} alt={alt} class="h-8 w-8 object-cover rounded-full" />
		</div>
		<h3 class="text-white font-bold backdrop-blur-md rounded-md p-1 ml-2">{name}</h3>
	</div>
{/snippet}

<div class="absolute h-screen w-1/5 left-1 z-10 box-border p-10">
	<div class="flex relative h-full justify-between flex-col">
		<Progress value={progressPos} class="absolute w-2 left-4 z-0"></Progress>
		{#each data.stops as stop, i}
			{#if i < currentStep}
				{@render stopButton(stop.image, stop.alt, "baby-blue", stop.name)}
			{/if}
			{#if i == currentStep}
				{@render stopButton(stop.image, stop.alt, "baby-blue", stop.name)}
			{/if}
			{#if i > currentStep}
				{@render stopButton(stop.image, stop.alt, "ocean-blue", stop.name)}
			{/if}
		{/each}

	</div>
</div>


<div class="snap-mandatory snap-y overflow-y-scroll no-scrollbar h-screen" {onscroll} bind:this={scrollEl}>

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

