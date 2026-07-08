import * as acorn from "acorn";
import * as walk from "acorn-walk";
import { chunk } from "./chunks.js"

export function Chunker(code , filePath) {
  const ast = acorn.parse(code, {
    ecmaVersion: 2022,
    sourceType: "module",
    locations : true,
  });

  let chunks = [];

  walk.full(ast , (node) => {
    const type = node.type;

    if(type === 'FunctionDeclaration'){
        const Chunk = new chunk({
            id : filePath ? `${filePath}::${node.id?.name || 'anonymous'}` : `unknown::${node.id?.name || 'anonymous'}`,
            text : code.slice(node.start , node.end),
            filePath : filePath,
            name : node.id?.name || 'anonymous',
            type : type,
            scope : "module",
            calls : [],
            startLine : node.loc?.start.line,
            endLine : node.loc?.end.line,
        })
        chunks.push(Chunk);
    }
  });
  return chunks;
}