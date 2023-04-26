export default () => ({
	removing: ref(false),
	emitClickRemove: payload => emit('click:remove', payload),
	emitRemove: payload => emit('remove', payload)
});
