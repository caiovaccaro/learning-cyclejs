import { run } from '@cycle/xstream-run';

// All can happen with a function
// that returns something to the DOM.
// But it is not the real DOM, how does cycle
// deals with that?

function main() {}

run(main, { dom: '' })
