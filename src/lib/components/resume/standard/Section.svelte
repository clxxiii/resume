<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';
	import Entry from './Entry.svelte';

	type Props = { title: string; section: unknown };
	let { title, section }: Props = $props();
</script>

<div class="sm:clay bg-ctp-mantle my-2 rounded-xl p-4 sm:bg-transparent">
	<h1 class="font-display text-xl tracking-widest uppercase">
		<span class="flex items-center gap-2">
			<Icon size={24} icon={title} />
			{title}
		</span>
	</h1>
	{#each section as entry, id (id)}
		<Entry {entry} />
	{/each}
</div>
