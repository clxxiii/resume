<script lang="ts">
	import Section from './Section.svelte';

	type Props = { sections: { [key: string]: Resume.Section } };
	let { sections }: Props = $props();

	let sectionList = $derived(Object.entries(sections));
</script>

{#each sectionList as [title, section], i (title)}
	<Section title={section.text ?? title} {section} divider={i + 1 != sectionList.length} />
{/each}
