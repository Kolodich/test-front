<template>
	<Draggable
		class="document-list"
		v-bind="dragLogic.bind"
		tag="ul"
		:group="group"
		:list="list"
		:draggable="!draggable"
		handle='.handle'
	>
		<template #item="{element}">
			<keep-alive>
				<Document
					class="document-list__item"
					v-bind="element"
					tag="li"
				/>
			</keep-alive>
		</template>
	</Draggable>
</template>

<script setup>

import useDraggable from '~/logic/draggable';

import Draggable from 'vuedraggable';
import Document from '~/components/Document.vue';

const props = defineProps({
	list: Array,
	group: {
		type: String,
		default: '',
	},
	draggable: {
		type: Boolean,
		default: false,
	},
});

const dragLogic = useDraggable();
const { list, group, draggable, useKeepAlive } = reactive(props);

</script>

<style lang="scss" scoped>

.document-list {
	list-style: none;

	&__item {
		&:not(:first-child) {
			margin-top: calc(var(--border-width) * -1);
		}
	}
}

</style>
