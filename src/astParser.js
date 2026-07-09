import * as acorn from 'acorn';
import * as walk from 'acorn-walk';

export function parseFile(code) {
    const ast = acorn.parse(code, {
        ecmaVersion: 2022,
        sourceType: 'module'
    });

    const NodeNumbers = {};

    // Using walk.full instead of simple + '*'
    walk.full(ast, (node) => {
        const type = node.type;
        NodeNumbers[type] = (NodeNumbers[type] || 0) + 1;
    });

    console.log("Total nodes counted:", Object.keys(NodeNumbers).length);
    
    return { NodeNumbers };
}