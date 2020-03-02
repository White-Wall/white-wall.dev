<template>
	<div class="flex md:items-center justify-center w-full min-h-screen h-full">
		<div class="p-4 pt-8 sm:p-16">
			<div class="flex flex-col justify-center">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 63.529 60"
					class="fill-current w-full h-auto max-w-xs block mx-auto"
				>
					<path
						d="M61.765 14.118H51.529V1.765C51.53.776 50.753 0 49.765 0h-48C.776 0 0 .776 0 1.765v14.117c0 .989.776 1.765 1.765 1.765H12v10.588H1.765C.776 28.235 0 29.012 0 30v14.118c0 .988.776 1.764 1.765 1.764H12v12.353c0 .989.776 1.765 1.765 1.765h48c.988 0 1.764-.776 1.764-1.765V44.118c0-.989-.776-1.765-1.764-1.765H51.529V31.765h10.236c.988 0 1.764-.777 1.764-1.765V15.882c0-.988-.776-1.764-1.764-1.764zM27.529 3.529H48v10.589H27.53V3.529zM36 17.647v10.588H15.53V17.647H36zm-32.47-3.53V3.53H24v10.589H3.53zm0 28.236V31.765H24v10.588H3.53zM36 56.47H15.53V45.882H36v10.589zm-8.47-14.118V31.765H48v10.588H27.53zM60 45.883V56.47H39.53V45.882H60zm0-17.648H39.53V17.647H60v10.588z"
					/>
				</svg>

				<h1 class="mt-16 text-2xl text-center">
					Everything
					<strong class="font-black" :class="strongColor">
						starts
					</strong>
					with a white wall.
				</h1>

				<h1 class="mb-16 text-xl text-center mt-4">
					What it
					<strong class="font-black" :class="strongColor">
						can become
					</strong>
					is up to
					<strong class="font-black" :class="strongColor">you</strong
					>.
				</h1>
			</div>

			<a
				class="
                    text-black hover:bg-black hover:text-white transition-color duration-75 border-4 border-solid
                    border-black rounded-full shadow p-8 py-2 text-xl text-center w-full sm:w-1/2 block mx-auto
                "
				href="mailto:hello@white-wall.dev"
			>
				Get in touch
			</a>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
	computed: {
		strongColor() {
			const choices = [
				"text-red-500",
				"text-orange-500",
				"text-yellow-700",
				"text-green-500",
				"text-teal-700",
				"text-blue-500",
				"text-indigo-500",
				"text-purple-500",
				"text-pink-500"
			];

			return choices[Math.floor(Math.random() * choices.length)];
		}
	}
});
</script>
