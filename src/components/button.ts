import { div, button } from '@cycle/dom';

const Button = () => {
	return div([
    	button('.inc', 'Increment')
    ])
}

export default Button;