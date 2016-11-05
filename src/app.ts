import { Stream } from 'xstream';
import { button, input, div, h1, makeDOMDriver } from '@cycle/dom';
import { run } from '@cycle/xstream-run';

function main(sources) {
  const inputEvent$ = sources.dom.select('.field')
    .events('input')
    .map(ev => ev.target.value)
    .startWith('Test');

  const buttonEvent$ = sources.dom.select('.inc')
    .events('click')
    .mapTo(+1);

  const count$ = buttonEvent$.fold((acc, x) => acc + x, 0)

  const events$ = Stream.combine(
    inputEvent$,
    count$
  ).map(([text, number]) => {
    return { text, number }
  });

  return {
    dom: events$
      .map(({text, number}) =>
        div('#root', [
          renderTitle(text, number),
          renderInput(),
          renderButton()
        ])
      )
  };

  function renderTitle(text, number) {
    return div([
      h1('', text + ' ' + number)
    ])
  }

  function renderInput() {
    return div([
      input('.field', {attrs: {type: 'text'}})
    ])
  }

  function renderButton() {
    return div([
      button('.inc', 'Increment')
    ])
  }
}

run(main, {
  dom: makeDOMDriver('#app')
})
