<script lang="ts">
	import Entry from './Entry.svelte';

	type Props = { title: string; section: Resume.Section; divider: boolean };
	let { title, section, divider = true }: Props = $props();

	const reservedEntries = ['text'];

	let entryList = $derived(Object.entries(section));
</script>

<div class="my-1" style="border-bottom: solid {divider ? 1 : 0}px black">
	<h1 class="font-display text-sm tracking-widest uppercase">
		{title}
	</h1>
	{#each entryList as [id, entry] (id)}
		{#if !reservedEntries.includes(id)}
			<Entry {entry} />
		{/if}
	{/each}
</div>
