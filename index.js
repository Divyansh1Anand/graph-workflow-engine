import { runEngine } from "./src/Engine.js"
import { createInitialState } from "./src/state.js"

const code = `
function multiply(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return a * b;
}

const result = multiply(3, 4);
console.log(result);
`

const initialState = createInitialState(code)
const result = await runEngine(initialState)

console.log(result)