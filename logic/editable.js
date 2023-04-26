export default () => ({
	editing: ref(false),
	saving: ref(false),
	emitClickEdit: payload => emit('click:edit', payload),
	emitEdit: payload => emit('edit', payload)
});
