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
		website: Link,
		url: Link,
		linkedin: Linkedin,
		phone: Phone,
		address: MapPin,
		location: MapPin,
		projects: HardHat,
		work: Briefcase,
		education: GraduationCap,
		'professional development': Handshake
	};
</script>

{#if iconMap[icon]}
	{@const Icon = iconMap[icon]}
	<Icon {size} />
{:else}
	<CircleHelp {size} />
{/if}
