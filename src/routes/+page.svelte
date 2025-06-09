<script lang="ts">
	import ProjectBox from '$lib/components/ProjectBox.svelte';
	import Splash from '$lib/components/Splash.svelte';
	import { fly } from 'svelte/transition';
	import type { PageData } from './$types';
	import { onMount } from 'svelte';
	import Loading from '$lib/components/Loading.svelte';

	const { data }: { data: PageData } = $props();

	let mounted = $state(false);
	onMount(() => (mounted = true));
</script>

{#if mounted}
	<div class="m-auto max-w-[1000px] p-2 pt-0 text-xl">
		<Splash />
		<p class="mt-5 md:text-3xl" in:fly|global={{ duration: 500, y: 30, delay: 100 }}>
			Hey there! I'm Eli, a software developer with a soft spot for web development. This site is an
			overview of my work, my skills, and the projects I've made along the way.
		</p>
		<section id="projects" in:fly|global={{ duration: 500, y: 30, delay: 200 }}>
			<h1
				class="font-display border-ctp-text border-b-2 py-2 text-center text-2xl font-extralight tracking-widest uppercase sm:text-4xl"
			>
				Projects
			</h1>
			<div class="grid grid-cols-1 gap-5 p-5 md:grid-cols-2">
				{#each Object.entries(data.projects) as [name, project], i (name)}
					<div in:fly|global={{ duration: 500, y: 30, delay: i * 100 + 200 }}>
						<ProjectBox {project} id={name} />
					</div>
				{/each}
			</div>
		</section>
		<!-- <section id="contact">
		<h1
			class="font-display border-ctp-text border-b-2 py-2 text-center text-2xl font-extralight tracking-widest uppercase sm:text-4xl"
		>
			Contact
		</h1>
	</section> -->
	</div>
{:else}
	<Loading />
{/if}
