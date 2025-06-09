<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';

	type Props = { contact: Resume.Contact; title: string };
	let { title, contact }: Props = $props();
</script>

{#if typeof contact == 'string'}
	<div class="bg-ctp-overlay0/25 rounded p-1 sm:bg-transparent sm:p-0">
		<span class="flex items-center justify-end gap-1">
			{contact}
			<Icon icon={title} />
		</span>
	</div>
{:else if !contact.hidden}
	<div class="bg-ctp-overlay0/25 rounded p-1 sm:bg-transparent sm:p-0">
		<a class="flex flex-row-reverse items-center justify-end gap-1 sm:flex-row" href={contact.url}>
			<span style:text-decoration={contact.url ? 'underline' : 'none'}>{contact.text}</span>
			<Icon icon={contact.icon ?? title} />
		</a>
	</div>
{/if}
