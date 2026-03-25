import { callLLM } from "../../API/llms.js"

export async function Security(state){

    const prompt = `analyze the code first and find its context after that find any security vulnerabilities in this order : 
    
    1) first check any sensity data exposure
    2) check for any broken authentication
    3) any injection vulnerabilities
    
    return the result in a strict JSON object in this format :
    {
    securityError : "description of the error and what can it do"
    errorLine : "lines at which error is presnt
    fixedCode : "correct code"
    }
    `

    const respone = await callLLm(prompt)

    const parsed = JSON.parsed(respone)

    return {
        securityError : parsed.securityError,
        errorLine : parsed.errorLine,
        fixedCode : parsed.fixedCode
    }
}