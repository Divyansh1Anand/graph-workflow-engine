import blueprint from "./Blueprint.js";

export async function runEngine(state) {
  let currentNode = blueprint.start;

  while (true) {
    console.log("current node", currentNode);
    const nodeFunction = blueprint.Nodes[currentNode];

    console.log("nodeFunction exists:", !!nodeFunction);

    const output = await nodeFunction(state);

    state = { ...state, ...output };

    const edges = blueprint.edges.filter((e) => e.from === currentNode);

    if (edges.length === 0) break;

    const edge = edges[0];
    const to = edge.to;

    if (typeof to === "function") {
      const result = to(state);
      console.log("routing to:", result);
      if (Array.isArray(result)) {
        const output = await Promise.all(
          result.map((nodeName) => {
            const nodeFunction = blueprint.Nodes[nodeName];
            return nodeFunction(state);
          }),
        );
        state = { ...state, ...output[0], ...output[1] };

        const nextEdge = blueprint.edges.find((e) => e.from === result[0]);
        console.log("nextEdge:", nextEdge);
        console.log("nextEdge.to:", nextEdge.to);
        currentNode = nextEdge.to;
      } else {
        currentNode = result;
        state = { ...state, ...output };
      }
    }
  }
  return state;
}
