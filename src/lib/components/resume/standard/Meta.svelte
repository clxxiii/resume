<script lang="ts">
	import { fly } from 'svelte/transition';
	import Contact from './Contact.svelte';

	type Props = { name: string; headline?: string; contacts: { [key: string]: Resume.Contact } };
	let { name, headline, contacts }: Props = $props();

	let contactList = $derived(Object.entries(contacts));
</script>

<div
	in:fly={{ duration: 500, y: 30 }}
	class="sm:clay bg-ctp-crust flex flex-col items-center justify-between rounded-xl p-4 sm:flex-row"
>
	<div
		class="to-ctp-overlay0 from-ctp-text flex flex-col items-center justify-between bg-gradient-to-br bg-clip-text text-transparent sm:items-start sm:justify-start"
	>
		<h1 class="font-display text-3xl font-medium tracking-widest uppercase">{name}</h1>
		<h1 class="font-display text-2xl font-light tracking-wide uppercase">{headline}</h1>
	</div>
	<div class="mt-4 flex flex-row flex-wrap justify-center gap-2 sm:mt-0 sm:flex-col sm:gap-0">
		{#each contactList as [title, contact] (title)}
			<Contact {title} {contact} />
		{/each}
	</div>
</div>
