<template>
	<div class="container app">
		<div class="app__header header">
			<h1 class="header__the-title">
				Документы
			</h1>

			<div class="header__the-toolbar">
				<Button circle>
					<NuxtIcon name="bookmark" filled/>
				</Button>
				<Button>
					<NuxtIcon name="plus" filled/>
					Новый тип
				</Button>
				<Button>
					<NuxtIcon name="plus" filled/>
					Новый документ
				</Button>
			</div>

			<div class="header__the-search">
				<Input
					v-model="query"
					@click:append="onClickInputAppend"
				>
					<template #prepend>
						<NuxtIcon
							name="magnifier"
							filled
						/>
					</template>
					<template #append="{ on }">
						<button
							v-if="useQuery"
							v-on="on"
							aria-label="Отмена"
						>
							<NuxtIcon
								name="xmark"
								filled
							/>
						</button>
					</template>
				</Input>
			</div>
		</div>

		<div class="documents">
			<Draggable
				v-bind="dragLogic.bind"
				class="documents__groups"
				tag="ul"
				handle=".document-group__container .handle"
				:key="'document-group-' + foundDocumentGroups.length"
				:list="foundDocumentGroups"
				:draggable="useQuery"
			>
				<template #item="{ element: group }">
					<keep-alive>
						<DocumentGroup
							class="documents__groups-item"
							v-bind="group"
							tag="li"
							:list-props="{ group: 'documents', draggable: !useQuery }"
							expanded
						/>
					</keep-alive>
				</template>
			</Draggable>

			<DocumentList
				group="documents"
				:key="'documents-' + foundDocuments.length"
				:draggable="!useQuery"
				:list="foundDocuments"
			/>
		</div>
	</div>
</template>

<script setup>

import data from '@/data/documents';

import useDraggable from '~/logic/draggable.js';

import Draggable from 'vuedraggable'
import Input from '@/components/Input.vue';
import Button from '@/components/Button.vue';
import Document from '@/components/Document.vue';
import DocumentList from '@/components/DocumentsList.vue';
import DocumentGroup from '@/components/DocumentGroup.vue';

const instance = getCurrentInstance();

const dragLogic = useDraggable();
const lists = reactive(data);

const query = ref('');
const draggable = ref(false);

const useQuery = computed(() => query.value !== '');
const loweredQuery = computed(() => query.value.toLowerCase());


const foundDocumentGroups = computed(() => {
	if (query.value === '') return lists.documentGroups;

	const res = lists.documentGroups.filter(group => {
		const documents = [...group.documents].filter(document => hasQuery(document.name));
		if (documents.length) return true;

		return hasQuery(group.name)
	});
	return res;
});

const foundDocuments = computed(() => {
	if (query.value === '') return lists.documents;

	const res = lists.documents.filter(document => hasQuery(document.name));
	return res;
});

function hasQuery(str) {
	return str.toLowerCase().includes(loweredQuery.value);
}

function onClickInputAppend() {
	query.value = '';
}

</script>

<style lang="scss" scoped>

.app {
	padding: 40px;

	&__header {
		margin-bottom: 20px;
	}
}

.header {
	display: grid;
	grid-gap: 24px 30px;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: auto auto;
	grid-template-areas:
		'title toolbar'
		'search .'
	;

	&__the-title {
		grid-area: title;
		font-size: 22px;
		color: var(--c-black);
	}

	&__the-toolbar {
		grid-area: toolbar;
		display: flex;
		gap: 10px;
		justify-content: flex-end;
		grid-template: 10px;
	}

	&__the-search {
		grid-area: search;
	}
}

.ghost {
	transition: 0.2s opacity;
	opacity: 0.8;
}

.flip-list-move {
  transition: transform 0.5s;
}
.no-move {
  transition: transform 0s;
}


.documents {
	&__groups,
	&__items {
		list-style: none;
	}

	&__groups {
		margin-bottom: 14px;
	}

	&__groups-item:not(:last-child) {
		margin-top: calc(var(--border-width) * -1);
	}

	&__items {

	}
}

</style>
