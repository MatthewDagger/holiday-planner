<script lang="ts">
	let { data, children } = $props();
</script>

<div class="flex items-center absolute justify-center h-1/6 top-1 z-10">
	<h1 class="text-6xl font-bold text-white">
		{data.title}
		<hr class="white" />
	</h1>
</div>
<div class="flex flex-col justify-center items-center w-full">
	{@render children()}
</div>
