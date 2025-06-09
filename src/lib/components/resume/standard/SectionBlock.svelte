<script lang="ts">
	import { fly } from 'svelte/transition';
	import Section from './Section.svelte';

	type Props = { sections: { [key: string]: Resume.Section } };
	let { sections }: Props = $props();

	let sectionList = $derived(Object.entries(sections));
</script>

<div in:fly={{ duration: 500, y: 50 }}>
	{#each sectionList as [title, section], i (title)}
		<div in:fly|global={{ duration: 1000, y: 50, delay: 50 * i }}>
			<Section {title} {section} />
		</div>
	{/each}
</div>
