<script lang="ts">
	import { Menu as MenuIcon, X } from 'lucide-svelte';
	import HeaderLink from './HeaderLink.svelte';
	import { page } from '$app/state';
	import FooterLinks from './FooterLinks.svelte';
	import { fade, fly, slide } from 'svelte/transition';

	type Link = {
		text: string;
		href: string;
	};

	const links: Link[] = [
		{
			text: 'home',
			href: '/'
		},
		{
			text: 'resume',
			href: '/resume'
		}
		// {
		// 	text: 'projects',
		// 	href: '/projects'
		// },
		// {
		// 	text: 'contact',
		// 	href: '/contact'
		// }
	];

	let menuShown = $state(false);
	const currentPage = $derived(links.find((x) => x.href == page.url.pathname)?.text ?? 'ELI');
</script>

<div class="fixed z-10 flex w-full justify-center p-2 sm:static">
	<div
		class="bg-ctp-crust hidden h-12 w-fit items-center justify-center gap-2 rounded-full px-10 sm:flex"
	>
		{#each links as link, i (i)}
			<HeaderLink href={link.href}>{link.text}</HeaderLink>
		{/each}
	</div>

	<!-- Mobile Bar -->
	<div class="flex h-6 w-full items-center justify-between px-1 sm:hidden">
		<div class="font-display font-light tracking-wide uppercase">{currentPage}</div>
		<button onclick={() => (menuShown = true)}>
			<MenuIcon size={30} />
		</button>
	</div>
</div>

<!-- Mobile Padding -->
<div class="static h-12 p-2 sm:hidden"></div>

<!-- Mobile Menu -->
{#if menuShown}
	<div
		transition:fade={{ duration: 250 }}
		class="fixed inset-0 z-10 bg-black/25 backdrop-blur-xs"
	></div>
	<div
		transition:slide={{ duration: 250 }}
		class="bg-ctp-base fixed top-0 left-0 z-20 w-full rounded-b-xl shadow-lg"
	>
		<div class="flex w-full justify-between p-2 text-gray-400">
			<div class="font-display flex items-center gap-2 text-xl font-light tracking-wide uppercase">
				<div>eli fereira</div>
				<div class="flex justify-center gap-2 text-gray-400">
					<FooterLinks size={16} />
				</div>
			</div>
			<button onclick={() => (menuShown = false)}>
				<X />
			</button>
		</div>
		<hr class="mx-2 border-t-2 border-gray-300" />
		<div class="flex flex-col py-2 text-lg">
			{#each links as link, i (i)}
				<a
					in:fly|global={{ duration: 300, x: 30, delay: i * 50 }}
					onclick={() => (menuShown = false)}
					href={link.href}
					class="rounded-full px-3 py-[2px] tracking-widest uppercase transition"
				>
					{link.text}
				</a>
			{/each}
		</div>
	</div>
{/if}
