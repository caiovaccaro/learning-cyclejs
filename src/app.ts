import { Stream } from 'xstream';
import { button, input, div, h1, makeDOMDriver } from '@cycle/dom';
import { run } from '@cycle/xstream-run';

// What if we have two events?
// How can we combine two values
// and use them in the DOM?

function main(sources) {
  const inputEvent$ = sources.dom.select('.field')
    .events('input')
    .map(ev => ev.target.value)
    .startWith('Test');

  const buttonEvent$ = sources.dom.select('.inc')
    .events('click')
    .mapTo(+1);

  const count$ = buttonEvent$.fold((acc, x) => acc + x, 0)

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
