import { callLLm } from "../../API/llms.js";

export async function bugs(state) {
  const prompt = `analyze the given code ${state.originalCode}

look for any type of bugs that would produce inconsistency in the code , run the analyzation in this order :

1) any runtime bugs
2) any data type bugs


return only a valid JSON object with double-quoted keys and string values, 
no comments, no trailing commas also use actual JSON null instead of the string "null" when there is no error exact;y like this :

{
bugsError : "descrpiton of the bugs and which one of the bugs it is based on the 3 types provided or return null if none"
errorLine : "at which line the bug is present"
fixedCode : "correct code"
}
`;
  const response = await callLLm(prompt);

  const parsed = JSON.parse(response);

  return {
    bugsError: parsed.bugsError,
    errorLine: parsed.errorLine,
    fixedCode: parsed.fixedCode,
  };
}
