import { div } from '@cycle/dom';
import Title from './components/title';
import Button from './components/button';
import Input from './components/input';

function view(state$) {
	return state$
		.map(({text, number}) =>
			div('#root', [
				Title(text, number),
				Input(),
				Button()
			])
	)
}

export default view;