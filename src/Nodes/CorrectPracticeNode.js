import { callLLm } from "../../API/llms.js"

export async function correctPractice(state){

    const prompt = `analyze the code ${state.originalCode}

    and make the code better in terms of industry standard 
    in this order :

    1)first go through the naming convections 
    2) then check the reusability of the code 
    3) check if the data types would reduce bugs
    4) any unncessary complexity inside the code
    
    return only a valid JSON object with double-quoted keys and string values, 
no comments, no trailing commas use actual JSON null (not the string "null") when there is no error and return the result exactly like this :
    
    {
    correctPractice : "description of the changes done"
    fixedCode : "improved version of the code" 
    }
    `

    const response = await callLLm(prompt)

    const parsed = JSON.parse(response) 

    return {
        correctPractice : parsed.correctPractice,
        fixedCode : parsed.fixedCode
    }
}