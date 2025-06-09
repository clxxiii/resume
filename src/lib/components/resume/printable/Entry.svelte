<script lang="ts">
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

<div class="mb-2">
	<div class="relative">
		<h3 class="font-block text-xs font-semibold">
			{role}
			{#if entry.url}
				<span class="font-normal">
					(<a class="underline" href={entry.url}>{entry.url}</a>)
				</span>
			{/if}
		</h3>
		{#if organization}
			<h4 class="font-block text-xs">{organization}</h4>
		{/if}
		{#if entry.startDate && !entry.endDate}
			<div class="font-block absolute top-0 right-0 text-xs font-light">
				{format(entry.startDate)} - Present
			</div>
		{/if}
		{#if entry.startDate && entry.endDate}
			<div class="font-block absolute top-0 right-0 text-xs font-light">
				{format(entry.startDate)} - {format(entry.endDate)}
			</div>
		{/if}
	</div>
	{#if entry.highlights}
		<ul class="list-disc pl-4">
			{#each entry.highlights as detail, i (i)}
				<li class="text-xs">{detail}</li>
			{/each}
		</ul>
	{/if}
</div>
