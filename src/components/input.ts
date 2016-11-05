import { div, input } from '@cycle/dom';

const Input = () => {
	return div([
    	input('.field', {attrs: {type: 'text'}})
    ])
}

export default Input;