<template>
	<div class="dot-statuses">
		<div
			class="dot-statuses__item"
			v-for="(item, index) in list"
			:key="index + '-' + item"
			:class="[item ? 'dot-statuses__item--' + item : '']"
		>
		</div>
	</div>
</template>

<script setup>

const props = defineProps({
	list: {
		type: Array,
		default: () => {},
	}
})

const { list } = reactive(props);

</script>

<style lang="scss" scoped>

.dot-statuses {
	display: flex;
	align-items: center;
	gap: 10px;

	&__item {
		--size: 8px;
		height: var(--size);
		width: var(--size);
		border-radius: 50px;
		background-color: currentColor;

		&--1 {
			color: var(--c-pink);
		}

		&--2 {
			color: var(--c-merigold);
		}

		&--3 {
			color: var(--c-merigold);
		}

		&--4 {
			color: var(--c-cyan);
		}

		&--5 {
			color: var(--c-dark-gray);
		}
	}
}

</style>
