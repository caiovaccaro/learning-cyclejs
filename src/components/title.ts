import { div, h1 } from '@cycle/dom';

const Title = (text, number) => {
	return div([
		h1('', text + ' ' + number)
	])
}

export default Title;