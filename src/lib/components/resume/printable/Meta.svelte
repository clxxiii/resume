<script lang="ts">
	import Contact from './Contact.svelte';

	type Props = { name: string; headline?: string; contacts: { [key: string]: Resume.Contact } };
	let { name, headline, contacts }: Props = $props();

	let contactList = $derived(Object.entries(contacts));
</script>

<div class="flex justify-between border-b-4 border-black">
	<div>
		<h1 class="font-display text-3xl tracking-widest uppercase">{name}</h1>
		<h1 class="font-display text-2xl font-extralight tracking-wide uppercase">{headline}</h1>
	</div>
	<div class="text-right">
		{#each contactList as [title, contact] (title)}
			<Contact {title} {contact} />
		{/each}
	</div>
</div>
