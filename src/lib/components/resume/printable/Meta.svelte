<script lang="ts">
	import Contact from './Contact.svelte';
	import { resume } from '$lib/stores';
	import { getContacts } from '$lib/dataflow';

	let contactList = $derived($resume ? getContacts($resume) : []);
</script>

{#if $resume && $resume.basics}
	<div class="flex justify-between border-b-4 border-black">
		<div>
			<h1 class="font-display text-3xl tracking-widest uppercase">{$resume.basics.name}</h1>
			<h1 class="font-display text-2xl font-extralight tracking-wide uppercase">
				{$resume.basics.label}
			</h1>
		</div>
		<div class="text-right">
			{#each contactList as [title, contact] (title)}
				<Contact {title} {contact} />
			{/each}
		</div>
	</div>
{/if}
