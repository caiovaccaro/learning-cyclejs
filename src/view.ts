import { div, p } from '@cycle/dom';
import Title from './components/title';
import Button from './components/button';
import Input from './components/input';

export default function view(state$) {
	return state$
		.map(({text, number}) =>
			div('#root', [
				Title(text, number),
				Input(),
				Button()
			])
	)
}