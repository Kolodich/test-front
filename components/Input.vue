<template>

<div class="input">
	<div class="input__container">
		<div class="input__prepend">
			<slot
				name="prepend"
				v-bind="{ on: { click: onClickPrepend } }"
			/>
		</div>

		<input
			class="input__field"
			:type="type"
			:value="modelValue"
			@input="onInput"
		>

		<div class="input__append">
			<slot
				name="append"
				v-bind="{ on: { click: onClickAppend } }"
			/>
		</div>
	</div>
</div>

</template>

<script setup>

const props = defineProps({
	type: {
		type: String,
		default: 'text',
	},
	modelValue: {
		type: String,
		default: '',
	},
})

const { type } = reactive(props);

const emit = defineEmits(['update:modelValue', 'click:prepend', 'click:append'])

function onInput(event) {
	emit('update:modelValue', event.target.value.trim());
}

function onClickPrepend() { emit('click:prepend'); }

function onClickAppend() { emit('click:append'); }

</script>

<style lang="scss" scoped>

@import '../assets/css/mixins/index.scss';

.input {

	&__container {
		display: flex;
		align-items: center;
		border-bottom: var(--border);
		transition: border-block-color 0.2s;
	}

	&__container:has(.input__field:focus-visible) {
		border-block-color: var(--c-blue);
	}

	&__field {
		border: none;
		padding: 12px;
		flex: auto;

		@include focus-visible {
			outline: none;
		}
	}
}

</style>
