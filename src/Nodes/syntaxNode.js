import { callLLm } from "../../API/llms.js";

export async function syntax(state) {
  const prompt = `analyze the given code : ${state.originalCode}
    
    only find syntax error if there are any and fix the code
    
    do not include markdown backticks or any extra text, return only a valid JSON object with double-quoted keys and string values, 
no comments, no trailing commas and also use actual JSON null (not the string "null") when there is no error , exactly like this:
    
    {
    errorLine : "which line has error"
    syntaxError : "description of the syntax error or null if no syntax error"
    fixedCode : "fix the syntax errors and return it here"}
    `;

  const response = await callLLm(prompt);

  const parsed = JSON.parse(response);

  return {
    syntaxError: parsed.syntaxError,
    errorLine: parsed.errorLine,
    fixedCode: parsed.fixedCode,
  };
}
