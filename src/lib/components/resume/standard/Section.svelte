<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';
	import Entry from './Entry.svelte';

	type Props = { title: string; section: Resume.Section };
	let { title, section }: Props = $props();

	const reservedEntries = ['text'];

	let entryList = $derived(Object.entries(section));
</script>

<div class="sm:clay bg-ctp-mantle my-2 rounded-xl p-4 sm:bg-transparent">
	<h1 class="font-display text-xl tracking-widest uppercase">
		<span class="flex items-center gap-2">
			<Icon size={24} icon={title} />
			{section.text ?? title}
		</span>
	</h1>
	{#each entryList as [id, entry] (id)}
		{#if !reservedEntries.includes(id)}
			<Entry {entry} />
		{/if}
	{/each}
</div>
