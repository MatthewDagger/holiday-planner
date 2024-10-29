<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<div class="flex justify-center items-center bg-white">
	{@render children()}
</div>

