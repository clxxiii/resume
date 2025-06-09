<script lang="ts">
	import {
		Briefcase,
		CircleHelp,
		Github,
		GraduationCap,
		Handshake,
		HardHat,
		Link,
		Linkedin,
		Mail,
		MapPin,
		Phone,
		type Icon as IconType
	} from 'lucide-svelte';
	type Props = { icon: string; size?: number };

	let { icon, size = 16 }: Props = $props();

	const iconMap: { [key: string]: typeof IconType } = {
		email: Mail,
		github: Github,
		link: Link,
		linkedin: Linkedin,
		phone: Phone,
		address: MapPin,
		projects: HardHat,
		work: Briefcase,
		development: Handshake,
		education: GraduationCap
	};
</script>

{#if iconMap[icon]}
	{@const Icon = iconMap[icon]}
	<Icon {size} />
{:else}
	<CircleHelp {size} />
{/if}
