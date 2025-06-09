<script lang="ts">
	type Props = { entry: string | Resume.Entry };
	let { entry }: Props = $props();
</script>

{#if typeof entry != 'string'}
	<div class="mb-2">
		<div class="relative">
			<h3 class="font-block text-xs font-semibold">
				{entry.title}
				{#if entry.url}
					<span class="font-normal">
						(<a class="underline" href={entry.url}>{entry.url}</a>)
					</span>
				{/if}
			</h3>
			{#if entry.organization}
				<h4 class="font-block text-xs">{entry.organization}</h4>
			{/if}
			{#if entry.date}
				<div class="font-block absolute top-0 right-0 text-xs font-light">
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
						<li class="text-xs">{detail}</li>
					{/each}
				</ul>
			{/if}
		{/if}
	</div>
{/if}
