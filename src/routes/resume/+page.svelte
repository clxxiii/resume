<script lang="ts">
	import StandardResume from '$lib/components/resume/standard/Resume.svelte';
	import PrintableResume from '$lib/components/resume/printable/Resume.svelte';
	import type { PageData } from './$types';
	import { onMount } from 'svelte';
	import { Flag, hasPermission } from '$lib/flag';
	import { resume } from '$lib/stores';

	let { data }: { data: PageData } = $props();

	resume.set(data.resume);
	let qr_code = $state(true);
	onMount(() => {
		if (hasPermission(data.source?.flags ?? 0, Flag.HIDE_QR)) {
			qr_code = false;
		}
	});
</script>

<div id="page">
	<div class="m-auto max-w-[800px] p-2 pt-0">
		<StandardResume />
	</div>
</div>

<!-- Printable version -->
<PrintableResume {qr_code} />

<style>
	@media print {
		#page {
			display: none;
		}
	}
</style>
