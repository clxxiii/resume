<script lang="ts">
	type Props = { project: Project; id: string };
	let { project, id }: Props = $props();
</script>

<a
	href={`/projects/${id}`}
	class="group bg-ctp-surface2 relative block aspect-video w-full overflow-hidden rounded-lg shadow-lg transition hover:shadow-xl"
>
	<img src={project.banner} alt="banner" />
	<div class="absolute bottom-0 w-full">
		<svg
			viewBox="0 0 300 34"
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			version="1.1"
		>
			<path
				d="M0 28L12.5 28.3C25 28.7 50 29.3 75 27.7C100 26 125 22 150 20.2C175 18.3 200 18.7 225 21.3C250 24 275 29 287.5 31.5L300 34L300 51L287.5 51C275 51 250 51 225 51C200 51 175 51 150 51C125 51 100 51 75 51C50 51 25 51 12.5 51L0 51Z"
				class="fill-ctp-base/30 transition duration-300 group-hover:-translate-y-3"
				stroke-linecap="round"
				stroke-linejoin="miter"
			></path>
			<path
				class="fill-ctp-base transition duration-300 group-hover:-translate-y-1"
				d="M0 33L12.5 30.5C25 28 50 23 75 20C100 17 125 16 150 18.7C175 21.3 200 27.7 225 30C250 32.3 275 30.7 287.5 29.8L300 29L300 51L287.5 51C275 51 250 51 225 51C200 51 175 51 150 51C125 51 100 51 75 51C50 51 25 51 12.5 51L0 51Z"
				stroke-linecap="round"
				stroke-linejoin="miter"
			></path>
		</svg>
		<div class="bg-ctp-base p-2 pt-0">
			<h1 class="text-sm font-bold sm:text-xl">
				{project.name}
			</h1>
			<h2 class="text-ctp-subtext1 text-xs sm:text-lg">
				{project.headline}
			</h2>
		</div>
	</div>
</a>
