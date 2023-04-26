<template class="btn">
	<button
		class="btn"
		:class="{
			'btn--sm': sm,
			'btn--circle': circle,
		}"
	>
		<slot />
	</button>
</template>

<script setup>

const props = defineProps({
	sm: {
		type: Boolean,
		default: false,
	},
	circle: {
		type: Boolean,
		default: false,
	},
});

</script>

<style lang="scss" scoped>

.btn {
	--height: 30px;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 10px;
	padding: 0 8px;
	height: var(--height);
	min-width: var(--height);
	line-height: var(--height);
	font-size: 12px;
	border-radius: 99em;
	border: var(--border);
	transition: filter 0.2s;
	will-change: filter;
	font-weight: bold;

	&--sm {
		--height: 22px;
		font-size: 10px;
	}

	&--circle {
		padding: 0;
		width: var(--height);
	}

	&:not(:disabled):hover {
		filter: brightness(97%);
	}
}

</style>
