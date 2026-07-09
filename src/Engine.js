import blueprint from "./Blueprint.js";

export async function runEngine(state) {
  let currentNode = blueprint.start;

  while (true) {
    const nodeFunction = blueprint.Nodes[currentNode];

    const output = await nodeFunction(state);

    state = { ...state, ...output };

    const edges = blueprint.edges.filter((e) => e.from === currentNode);

    if (edges.length === 0) break;

    const edge = edges[0];
    const to = edge.to;

    if (typeof to === "function") {
      const result = to(state);

      if (Array.isArray(result)) {
        const output = await Promise.all(
          result.map((nodeName) => {
            const nodeFunction = blueprint.Nodes[nodeName];
            return nodeFunction(state);
          }),
        );
        state = { ...state, ...output[0], ...output[1] };

        const nextEdge = blueprint.edges.find((e) => e.from === result[0]);
        currentNode = nextEdge.to;
      } else {
        currentNode = result;
        state = { ...state, ...output };

        if(typeof state.syntaxError ===  'string' && 
          state.syntaxError.toLowerCase().includes('no')){
            state.syntaxError = null
          }
        if(typeof state.bugsError === 'string' && state.bugsError.toLowerCase().includes('no')){
          state.bugsError = null
        }
      }
    }
  }
  return state;
}
