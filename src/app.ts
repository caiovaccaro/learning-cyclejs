import { Stream } from 'xstream';
import { input, div, h1, makeDOMDriver } from '@cycle/dom';
import { run } from '@cycle/xstream-run';

function main(sources) {
  return {
    dom: sources.dom.select('.field').events('input')
      .map(ev => ev.target.value)
      .startWith('Test')
      .map(value =>
        div('#root', [
          h1('', value),
          input('.field', {attrs: {type: 'text'}})
        ])
      )
  };
}

run(main, {
  dom: makeDOMDriver('#app')
})
