import { Stream } from 'xstream';

export default function model(actions) {
	console.log(actions)
	const text$ = actions.inputEvent$.startWith('Test');
	const number$ = actions.buttonEvent$.mapTo(+1);
	const stream = Stream.combine(text$,number$)

	stream.map(() => {
		console.log(1)
	})

	// console.log(stream.addListener(function() { console.log(1) }))

	return stream;
}