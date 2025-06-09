<script lang="ts">
	import { fly } from 'svelte/transition';
	import Section from './Section.svelte';
	import { resume } from '$lib/stores';
	import { getSections } from '$lib/dataflow';

	const sections = $derived($resume ? getSections($resume) : []);
</script>

<div in:fly={{ duration: 500, y: 50 }}>
	{#each sections as [title, section], i (title)}
		<div in:fly|global={{ duration: 1000, y: 50, delay: 50 * i }}>
			<Section {title} {section} />
		</div>
	{/each}
</div>
