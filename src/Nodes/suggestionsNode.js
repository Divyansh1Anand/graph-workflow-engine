import { callLLm } from "../../API/llms.js"

export async function suggestions(state){

    const prompt = `here's the security analysis : ${state.securityError}
    here's the correctPractice analysis : ${state.correctPractice}
    
    analye the code and add any suggestions that would imrove the code more 
    
    the suggestion should be based on this analyzing steps : 
    
    1) based on what the error is
    2) if there is any room for improvement
    
    return only a valid JSON object with double-quoted keys and string values, 
no comments, no trailing commas and also use actual JSON null (not the string "null") when there is no error , like this :
    
    {
    suggestions : "suggesting any new improvemnets"
    }
    `

    const response = await callLLm(prompt)

    const parsed = JSON.parse(response)

    return {
        suggestions : parsed.suggestions
    }
}