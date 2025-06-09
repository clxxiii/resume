<script lang="ts">
	import { ArrowLeft } from 'lucide-svelte';
	import type { PageData } from './$types';
	import { fly } from 'svelte/transition';
	const { data }: { data: PageData } = $props();
	const { project } = data;
</script>

<div class="m-auto max-w-[1000px] p-2">
	<div in:fly={{ duration: 500, y: 30 }} class="flex items-center gap-2 py-2">
		<a href="/" class="hover:bg-ctp-surface0 rounded p-1 transition">
			<ArrowLeft size={24} />
		</a>
		<div>
			<h1 class="text-3xl font-bold sm:text-5xl">
				{project.name}
			</h1>
			<h2 class="hidden text-sm sm:block">{project.headline}</h2>
		</div>
	</div>
	<img
		in:fly={{ duration: 500, y: 30, delay: 50 }}
		src={project.banner}
		alt="banner"
		class="relative flex aspect-video w-full rounded-2xl object-cover object-top"
	/>

	<div class="p-2 text-lg">
		{#if project.description && typeof project.description == 'string'}
			{#each project.description.split('\n') as para, i (i)}
				<p class="py-2" in:fly|global={{ duration: 500, y: 30, delay: i * 50 + 150 }}>{para}</p>
			{/each}
		{:else}
			<p>We don't know much about {project.name}, but it's probably pretty cool!</p>
		{/if}
	</div>
</div>
