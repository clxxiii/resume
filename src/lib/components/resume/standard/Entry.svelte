<script lang="ts">
	import { Link } from 'lucide-svelte';

	type Props = { entry: string | Resume.Entry };
	let { entry }: Props = $props();
</script>

{#if typeof entry != 'string'}
	<div class="mb-2">
		<div class="relative">
			<h3 class="font-sans font-bold">
				{#if entry.url}
					<a class="flex items-center gap-1 underline" href={entry.url}>
						{entry.title}
						<Link size={16} />
					</a>
				{:else}
					{entry.title}
				{/if}
			</h3>
			{#if entry.organization}
				<h4 class="font-sans">{entry.organization}</h4>
			{/if}
			{#if entry.date}
				<div class="font-display relative top-0 right-0 font-extralight uppercase sm:absolute">
					{entry.date}
				</div>
			{/if}
		</div>
		{#if entry.details}
			{#if typeof entry.details == 'string'}
				<p>{entry.details}</p>
			{:else}
				<ul class="list-disc pl-4">
					{#each entry.details as detail, i (i)}
						<li class="text-sm">{detail}</li>
					{/each}
				</ul>
			{/if}
		{/if}
	</div>
{/if}
