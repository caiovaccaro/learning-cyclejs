import { Stream } from 'xstream';
import { div, label, input, hr, h1, makeDOMDriver, VNode } from '@cycle/dom';
import { DOMSource } from '@cycle/dom/xstream-typings';
import { run } from '@cycle/xstream-run';

interface ISources {
  dom: DOMSource;
}

interface ISinks {
  dom: Stream<VNode>;
}

function main(sources: ISources): ISinks {
  const sinks: ISinks = {
    dom: Stream.of(1)
      .map(() =>
        div('#root', [
          div('.wrap.container-fluid', [
            div('.row.item-container', [
              h1('', 'Test')
            ])
          ])
        ])
      )
  };

  return sinks;
}

run(main, {
  dom: makeDOMDriver('#app')
})
