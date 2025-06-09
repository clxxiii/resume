<script lang="ts">
	import Section from './Section.svelte';
	import { resume } from '$lib/stores';
	import { getSections } from '$lib/dataflow';

	const sections = $derived($resume ? getSections($resume) : []);
</script>

{#each sections as [title, section], i (title)}
	<Section {title} {section} divider={i + 1 != sections.length} />
{/each}
