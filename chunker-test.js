import fs from 'fs';
import { Chunker } from './chunker.js';

const filePath = './test-sample.js';
const code = fs.readFileSync(filePath, 'utf-8');


const result = Chunker(code, filePath);

console.log("Total chunks found:", result.length);
console.log("\n=== Chunks ===");



fs.writeFileSync("./outputFile.txt" , JSON.stringify(result , null , 2) , 'utf-8')