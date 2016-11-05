import { run } from '@cycle/xstream-run';
import { makeDOMDriver } from '@cycle/dom';

// MVI is one equivalent of MVC that cycle likes
// How would you implement it?
// 1. Separate events from data modeling
// 2. See how events might equal intent
// 3. Put aside rendering as view
// 4. See if view parts might be components

function main(sources) {
	// return {
	// 	dom: view(model(intent(sources.dom)))
	// };
}

function oldMainParts(sources) {
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


  // What if we can have components?

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
