export const documents = [
	{
		id: 1,
		name: 'Паспорт',
		required: true,
		desc: 'Для всех',
		statuses: [4]
	},
	{
		id: 2,
		name: 'ИНН',
		required: true,
		desc: 'Для всех'
	},
	{
		id: 3,
		name: 'Тестовое задание кандидата',
		desc: 'Россия, Белоруссия, Украина, администратор филиала, повар-сушист, повар-пиццмейкер, повар горячего цеха',
		required: false,
	},
	{
		id: 4,
		name: 'Трудовой договор',
		required: false,
		statuses: [4, 5],
	},
	{
		id: 5,
		name: 'Мед. книжка',
		required: false,
	},
]

export const documentGroups = [
	{
		id: 1,
		name: 'Обязательные для всех',
		desc: 'Документы, обязательные для всех сотрудников без исключения',
		documents: [ documents.shift(), documents.shift() ],
		statuses: [1, 2, 3],
	},
	{
		id: 2,
		name: 'Обязательные для трудоустройства',
		desc: 'Документы, без которых невозможно трудоустройство человека на какую бы то ни было должность в компании вне зависимости от граж',
		documents: []
	},
	{
		id: 3,
		name: 'Специальные',
		documents: []
	},
];


export default {
	documents,
	documentGroups
}
