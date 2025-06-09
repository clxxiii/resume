<script lang="ts">
	import { onMount } from 'svelte';

	type Props = { duration?: number; paths: string[]; color?: string };
	let { duration = 3000, paths, color = 'rgba(var(--ctp-base), 0.3)' }: Props = $props();

	let i = $state(0);
	let path = $derived(`"` + paths[i] + `"`);

	onMount(() => {
		const increment = () => (i = (i + 1) % paths.length);
		const timer = setInterval(increment, duration);
		increment();

		return () => {
			clearInterval(timer);
		};
	});
</script>

<path style="--d: {duration}ms; d: path({path}); fill: {color}"></path>

<style>
	path {
		transition: var(--d) cubic-bezier(0.29, 0, 0.69, 0.94);
	}
</style>
