<template>
	<component
		:is="tag"
		class="document-group"
		:class="{
			'document-group--expanded': expanded
		}"
		:aria-expanded="expanded"
	>
		<div class="document-group__container">

			<Button
				class="document-group__arrow-btn"
				sm
				circle
				@click="onToggle"
			>
				<NuxtIcon name="arrowUp" filled/>
			</Button>

			<div class="document-group__name">
				{{ name }}
			</div>

			<DotStatuses
				v-if="statuses && statuses.length"
				class="document-group__statuses"
				:list="statuses"
			/>

			<div
				v-if="desc"
				class="document-group__desc"
			>
				{{ desc }}
			</div>

			<div class="document-group__btn-list">
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
					class="handle document-group__btn document-group__btn--drag"
					name="dragVertical"
					filled
				/>
			</div>
		</div>

		<transition
			name="accordion"
			@enter="onExpanding"
			@after-enter="onCollapsing"
			@before-leave="onExpanding"
			@after-leave="onCollapsing"
		>
			<div
				v-show="expanded"
				class="document-group__documents"
			>
				<DocumentList
					v-bind="listProps"
					:list="documents"
				/>
			</div>
		</transition>
	</component>
</template>

<script setup>

import Draggable from 'vuedraggable'
import Button from './Button.vue';
import Document from './Document.vue';
import DocumentList from './DocumentsList.vue';

const props = defineProps({
	id: {
		type: [String, Number],
		default: 0,
	},
	name: {
		type: String,
		default: ''
	},
	desc: {
		type: String,
		default: ''
	},
	statuses: {
		type: Array,
		default: () => [],
	},
	documents: {
		type: Array,
		default: () => [],
	},
	expanded: {
		type: Boolean,
		default: false,
	},
	listProps: {
		type: Object,
		default: () => {}
	},
	tag: {
		type: String,
		default: 'div'
	}
});

const { name, desc, statuses, documents, listProps } = reactive(props);

const expanded = ref(true);

const emit = defineEmits(['update:documents']);

function onExpanding(el) {
	el.style.height = el.scrollHeight + "px";
};

function onCollapsing(el) {
	el.style.height = "";
}

function onToggle() {
	expanded.value = !expanded.value;
}

</script>

<style lang="scss" scoped>

@import '../assets/css/mixins/index.scss';

.document-group {


	&__arrow-btn ::v-deep(svg) {
		transition: 0.4s transform;
	}

	&--expanded &__arrow-btn ::v-deep(svg) {
		transform: rotateX(180deg);
	}

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
		font-size: 15px;
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
		margin-left: auto;
		display: flex;
		gap: 10px;
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

	&__documents {
		padding-left: 16px;
		margin-top: calc(var(--border-width) * -1);
	}
}

.accordion-enter-active,
.accordion-leave-active {
  will-change: height, opacity;
  transition-property: height, opacity;
  transition-duration: 0.4s;
  overflow: hidden;
}

.accordion-enter-active {

}


.accordion-enter,
.accordion-leave-to {
  height: 0 !important;
  opacity: 0;
}

.ghost {
	transition: 0.2s opacity;
	opacity: 0.8;
}

</style>
