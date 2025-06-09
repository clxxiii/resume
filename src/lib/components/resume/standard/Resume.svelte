<script lang="ts">
	import Meta from './Meta.svelte';
	import SectionBlock from './SectionBlock.svelte';

	let { resume }: { resume: Resume } = $props();
</script>

<div>
	<Meta name={resume.name} headline={resume.headline} contacts={resume.contact} />
	<SectionBlock sections={resume.sections} />
</div>
