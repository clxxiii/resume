<script>
	import { fly } from 'svelte/transition';
	import Waves from './Waves.svelte';
	import Me from '$lib/assets/transparent-me.png';
</script>

<div
	in:fly={{ duration: 500, y: 30 }}
	class="from-ctp-flamingo to-ctp-blue relative flex h-30 justify-end overflow-hidden rounded-xl bg-gradient-to-br shadow-xl sm:h-60 md:h-80 lg:h-100"
>
	<div
		class="font-block text-ctp-text z-10 flex w-full items-center justify-center p-5 text-xl font-bold"
	>
		<div
			class="bg-ctp-base/40 rounded-lg border-1 border-white/20 p-2 text-3xl shadow-lg backdrop-blur-md sm:text-7xl lg:text-8xl"
		>
			<span> Hi, I'm </span>
			<span
				class="from-ctp-flamingo to-ctp-blue inline-block bg-gradient-to-br bg-clip-text text-transparent"
				>Eli</span
			>
		</div>
	</div>
	<div class="relative h-full w-[0px]">
		<div class="absolute top-0 right-0 aspect-square h-full">
			<Waves />
		</div>
	</div>
	<div class="bg-ctp-base aspect-square">
		<div in:fly={{ duration: 500, x: 30, delay: 250 }} class="relative z-0 h-full">
			<img class="absolute top-0 right-0 z-20 h-full brightness-135 grayscale" alt="eli" src={Me} />
		</div>
	</div>
</div>
