<script lang="ts">
	type Contact = string | { url: string; text: string };
	type Props = { contact: Contact; title: string };
	let { title, contact }: Props = $props();
</script>

{#if typeof contact == 'string'}
	<div class="text-xs">
		<span>{contact}</span>
		<!-- <span>{title.toUpperCase()}</span> -->
	</div>
{:else}
	<div class="text-xs">
		<span>
			{contact.url ?? contact.text}
		</span>
		<!-- <span>{title.toUpperCase()}</span> -->
	</div>
{/if}
