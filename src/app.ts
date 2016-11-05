import { makeDOMDriver } from '@cycle/dom';
import { run } from '@cycle/xstream-run';
import intent from './intent';
import model from './model';
import view from './view';

function main(sources) {
  const actions = intent(sources.dom);
  const state$ = model(actions);
  const vdom$ = view(state$);

  return {
    dom: vdom$
  };
}

run(main, {
  dom: makeDOMDriver('#app')
})
