<template>
	<component :is="tag" class="document">
		<div class="document__container">
			<div class="document__name">
				{{ name }}
			</div>

			<DotStatuses
				v-if="statuses && statuses.length"
				class="document__statuses"
				:list="statuses"
			/>

			<div
				v-if="required"
				class="document__required"
			>
				Обязательный
			</div>

			<div
				v-if="desc"
				class="document__desc"
			>
				{{ desc }}
			</div>

			<div class="document__btn-list">
				<button class="document-group__btn" aria-label="Удалить">
					<NuxtIcon
						name="bookmark"
						filled
					/>
				</button>
				<button class="document-group__btn" aria-label="Удалить">
					<NuxtIcon
						name="canBin"
						filled
					/>
				</button>
				<NuxtIcon
					class="handle document__btn document__btn--drag"
					name="dragVertical"
					filled
				/>
			</div>
		</div>
	</component>
</template>

<script setup>

import DotStatuses from './DotStatuses.vue';

const props = defineProps({
	id: [Number, String],
	name: {
		type: String,
		default: '',
	},
	desc: {
		type: String,
		default: '',
	},
	statuses: {
		type: Array,
		default: () => [],
	},
	required: {
		type: Boolean,
		default: false,
	},
	tag: {
		type: String,
		default: 'div'
	},
});

const { name, desc, statuses, required, tag } = reactive(props);

</script>

<style lang="scss" scoped>

@import '../assets/css/mixins/index.scss';

.document {

	&__container {
		display: flex;
		gap: 15px;
		border: var(--border);
		padding: 13px 16px;
		color: var(--c-black);
		align-items: center;
	}

	&__name,
	&__desc {
		position: relative;
		overflow: hidden;
		white-space: nowrap;
	}

	&__name {
		flex: none;
		font-size: 13px;
	}

	&__desc {
		flex: auto;
		color: var(--c-dark-gray);
		font-size: 11px;


		@include inner-shadow-right(14px);
	}

	&__required {
		font-size: 11px;
		color: var(--c-pink);
	}

	&__btn-list {
		display: flex;
		gap: 10px;
		margin-left: auto;
	}

	&__btn {
		cursor: pointer;

		&--drag {
			cursor: move;
			cursor: grab;
			cursor: -moz-grab;
			cursor: -webkit-grab;
		}
	}
}

</style>
