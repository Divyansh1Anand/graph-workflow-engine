export function createInitialState(code){
    return {
        originalCode : code,
        syntaxError : null,
        bugsError : null,
        securityError : null,
        correctPractice : null,
        suggestions : null
    }
}