import { Stream } from 'xstream';
import { input, div, h1, makeDOMDriver } from '@cycle/dom';
import { run } from '@cycle/xstream-run';

// Check cycles docs, the main function can receive "sources"
// How can we make the h1 content to be the inputs value?
// PS: Doesn't Stream.of(1) looks weird?

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
