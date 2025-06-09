<script lang="ts">
	import { page } from '$app/state';

	// type Props = { href: string }
	let { href, children } = $props();

	let current = $derived(page.url.pathname == href);
</script>

<a
	{href}
	class="rounded-full p-1 px-3 font-bold uppercase transition"
	class:-clay-sm={current}
	class:clay-sm={!current}
>
	{@render children()}
</a>

<style>
	.clay-sm {
		--color: rgba(0, 0, 0, 0.06);
		box-shadow:
			2px 2px 2px rgba(0, 0, 0, 0.1),
			inset -4px -4px 4px rgba(0, 0, 0, 0.06);
		background: rgb(var(--ctp-base));
	}

	.-clay-sm {
		--color: rgba(0, 0, 0, 0.06);
		box-shadow:
			2px 2px 4px var(--color),
			inset 2px 2px 4px var(--color);
		background: rgb(var(--ctp-surface0));
	}
</style>
