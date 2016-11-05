import { Stream } from 'xstream';

function model(actions) {
	const text$ = actions.inputEvent$.startWith('Test');
	const number$ = actions.buttonEvent$.mapTo(+1);

	return Stream.combine(
		text$,
		number$
	).map(([text, number]) => {
		return { text, number }
	});
}

export default model;