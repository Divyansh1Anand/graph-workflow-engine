import { callLLm } from "../../API/llm.js"

export async function syntaxNode(state){

    const prompt = `analyze the given code : ${state.originalCode}
    
    only find syntax error if there are any and fix the code
    
    do not include markdown backticks or any extra text, return only the JSON object exactly like this:
    
    {
    errorLine : "which line has error"
    syntaxError : "description of the syntax error or null if no syntax error"
    fixedCode : "fix the syntax errors and return it here"}
    `

    const response = await callLLm(prompt)

    const parsed = JSON.parse(response)

    return {
        syntaxError: parsed.syntaxError,
        errorLine: parsed.errorLine,
        fixedCode : parsed.fixedCode
    }
}