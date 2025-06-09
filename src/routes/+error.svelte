<script lang="ts">
	import { page } from '$app/state';
</script>

<svelte:head>
	<title>{page.status} - {page.error?.message ?? ''}</title>
</svelte:head>

<div class="w-full text-center">
	<div
		class="font-block from-ctp-flamingo to-ctp-blue inline-block bg-gradient-to-br bg-clip-text text-[128px] leading-[100%] font-bold text-transparent sm:text-[300px]"
	>
		{page.status}
	</div>
</div>

<div class="font-display w-full text-center text-2xl font-light tracking-widest uppercase">
	{page.error?.message}
</div>
