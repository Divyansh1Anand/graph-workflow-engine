function cosineSimilarity(vectorA , vectorB){

    if(vectorA.length !== vectorB.length){
        throw new Error("Vectors must be of the same length")
    }

    const magnitude_of_vectorA = Math.sqrt(vectorA.reduce((sum , val) => sum+val*val , 0))
    const magnitude_of_vectorB = Math.sqrt(vectorB.reduce((sum,val)=>sum+val*val ,0))
    
    const dot_product = vectorA.reduce((sum,val,i) => sum+val*vectorB[i] , 0)

    return dot_product/(magnitude_of_vectorA * magnitude_of_vectorB)
}