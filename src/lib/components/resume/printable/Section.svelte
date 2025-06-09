<script lang="ts">
	import Entry from './Entry.svelte';

	type Props = { title: string; section: unknown; divider: boolean };
	let { title, section, divider = true }: Props = $props();
</script>

<div class="my-1" style="border-bottom: solid {divider ? 1 : 0}px black">
	<h1 class="font-display text-sm tracking-widest uppercase">
		{title}
	</h1>
	{#each section as entry, i (i)}
		<Entry {entry} />
	{/each}
</div>
