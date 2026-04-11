import { callLLm } from "../../API/llms.js"

export async function security(state){

    const prompt = `analyze the code ${state.originalCode}
    
    first and find its context after that find any security vulnerabilities in this order : 
    
    1) first check any sensity data exposure
    2) check for any broken authentication
    3) any injection vulnerabilities
    
    return only a valid JSON object with double-quoted keys and string values, 
no comments, no trailing commas use actual JSON null (not the string "null") when there is no error and return the result exactly like this :
    {
    securityError : "description of the error and what can it do"
    errorLine : "lines at which error is present"
    fixedCode : "correct code"
    }
    `

    const response = await callLLm(prompt)

    const parsed = JSON.parse(response)

    return {
        securityError : parsed.securityError,
        errorLine : parsed.errorLine,
        fixedCode : parsed.fixedCode
    }
}