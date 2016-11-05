import { run } from '@cycle/xstream-run';
import { makeDOMDriver } from '@cycle/dom';
import intent from './intent';
import model from './model';
import view from './view';

function main(sources) {
	return {
		dom: view(model(intent(sources.dom)))
	};
}

run(main, {
  dom: makeDOMDriver('#app')
})
