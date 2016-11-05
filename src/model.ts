import { Stream } from 'xstream';

export default function model(actions) {
	const text$ = actions.inputEvent$.startWith('Test');
	const number$ = actions.buttonEvent$.mapTo(+1);
	const count$ = number$.fold((acc, x) => acc + x, 0);
	
	return Stream.combine(text$, count$)
		.map(([text, number]) => {
			return { text, number }
		})
}