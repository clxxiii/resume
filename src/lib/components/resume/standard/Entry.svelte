<script lang="ts">
	import { Link } from 'lucide-svelte';
	let { entry } = $props();

	const role = $derived(
		entry.position ??
			entry.roles?.join(', ') ??
			(entry.studyType ? entry.studyType + ' in ' + entry.area : entry.name)
	);
	const organization = $derived(entry.institution ?? (entry.name == role ? '' : entry.name));

	const format = (s: string) => {
		const months = [
			'Jan',
			'Feb',
			'Mar',
			'Apr',
			'May',
			'Jun',
			'Jul',
			'Aug',
			'Sep',
			'Oct',
			'Nov',
			'Dec'
		];
		const date = new Date(s);
		return months[date.getMonth()] + ' ' + date.getFullYear();
	};
</script>

{#if typeof entry != 'string'}
	<div class="mb-2">
		<div class="relative">
			<h3 class="font-sans font-bold">
				{#if entry.url}
					<a class="flex items-center gap-1 underline" href={entry.url}>
						{role}
						<Link size={16} />
					</a>
				{:else}
					{role}
				{/if}
			</h3>
			{#if organization}
				<h4 class="font-sans">{organization}</h4>
			{/if}
			{#if entry.startDate && !entry.endDate}
				<div class="font-display relative top-0 right-0 font-extralight uppercase sm:absolute">
					{format(entry.startDate)} - Present
				</div>
			{/if}
			{#if entry.startDate && entry.endDate}
				<div class="font-display relative top-0 right-0 font-extralight uppercase sm:absolute">
					{format(entry.startDate)} -
					{format(entry.endDate)}
				</div>
			{/if}
		</div>
		{#if entry.highlights}
			<ul class="list-disc pl-4">
				{#each entry.highlights as detail, i (i)}
					<li class="text-sm">{detail}</li>
				{/each}
			</ul>
		{/if}
	</div>
{/if}
