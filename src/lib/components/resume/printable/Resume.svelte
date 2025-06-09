<script lang="ts">
	import Meta from './Meta.svelte';
	import SectionBlock from './SectionBlock.svelte';
	import QrCode from 'svelte-qrcode';
	import { page } from '$app/state';
	import { source } from '$lib/stores';

	type Props = { resume: Resume; qr_code?: boolean };
	let { resume, qr_code = true }: Props = $props();
</script>

<div class="relative hidden text-black print:block">
	<Meta name={resume.name} headline={resume.headline} contacts={resume.contact} />
	<SectionBlock sections={resume.sections} />

	{#if qr_code}
		<div
			class="font-display fixed right-0 bottom-0 flex flex-col items-center text-xs font-extralight tracking-tight uppercase"
		>
			<div class="size-16">
				<QrCode value={page.url.href + ($source ? `?s=${$source.code}` : '')} />
			</div>
			<span>Scan me!</span>
		</div>
	{/if}
</div>
