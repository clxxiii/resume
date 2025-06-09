<script lang="ts">
	import { source } from '$lib/stores';
	import '../app.css';
	import { navigating } from '$app/state';
	import Loading from '$lib/components/Loading.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import { onNavigate } from '$app/navigation';

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});

	let { children, data } = $props();

	if (data.source) {
		source.set(data.source);
	}
</script>

<svelte:head>
	<title>Eli Fereira</title>
</svelte:head>

<div class="latte text-ctp-text bg-ctp-base relative flex min-h-screen flex-col justify-between">
	<div>
		<header class="w-full print:hidden">
			<Header />
		</header>
		{#if navigating.from}
			<Loading />
		{:else}
			<main>
				{@render children()}
			</main>
		{/if}
	</div>
	<footer class="w-full print:hidden">
		<Footer />
	</footer>
</div>
