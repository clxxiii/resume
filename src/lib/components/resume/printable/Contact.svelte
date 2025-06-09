<script lang="ts">
	type Props = { contact: Resume.Contact; title: string };
	let { title, contact }: Props = $props();
</script>

{#if typeof contact == 'string'}
	<div class="text-xs">
		<span>{contact}</span>
		<!-- <span>{title.toUpperCase()}</span> -->
	</div>
{:else if !contact.hidden}
	<div class="text-xs">
		<span>
			{contact.url ?? contact.text}
		</span>
		<!-- <span>{title.toUpperCase()}</span> -->
	</div>
{/if}
