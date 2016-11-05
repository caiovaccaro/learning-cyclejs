import { Stream } from 'xstream';
import { div, h1, makeDOMDriver } from '@cycle/dom';
import { run } from '@cycle/xstream-run';

// If everything is a stream
// how can you render this to the DOM?
// div('#root', [
//   h1('', 'Test')
// ])

function main() {
  return {
    dom: ''
  };
}

run(main, {
  dom: makeDOMDriver('#app')
})
