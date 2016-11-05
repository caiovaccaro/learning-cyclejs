import { Stream } from 'xstream';
import { input, div, h1, makeDOMDriver } from '@cycle/dom';
import { run } from '@cycle/xstream-run';

function main(sources) {
  return {
    dom: Stream.of(1)
      .map(() =>
        div('#root', [
          h1('', 'Test'),
          input('.field', {attrs: {type: 'text'}})
        ])
      )
  };
}

run(main, {
  dom: makeDOMDriver('#app')
})
