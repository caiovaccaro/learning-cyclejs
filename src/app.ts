import { makeDOMDriver } from '@cycle/dom';
import { run } from '@cycle/xstream-run';

function main() {
  return { dom: '' };
}

run(main, {
  dom: makeDOMDriver('#app')
})
