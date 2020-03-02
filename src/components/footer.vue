<template>
	<div class="text-center text-gray-500 -mt-6">
		©️ {{ year }} White Wall OÜ —
		<a class="hover:underline" href="/privacy">Privacy policy</a>
	</div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
	computed: {
		year() {
			return new Date().getFullYear();
		}
	}
});
</script>
