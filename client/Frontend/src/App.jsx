import React from "react"
import Header from "../../src/components/Header"
import { useState } from "react"
import LeftPanel from "../../src/components/LeftPanel"
import RightPanel from "../../src/components/RightPanel"

function App(){
    const [result , setResult] = useState(null)

    async function handleReview(code){
        const response = await fetch('http://localhost:3000/review',{
            method: 'POST',
            headers: {'Content-Type': 'application/json' },
            body: JSON.stringify({code: code})
        })
        const data = await response.json()
        setResult(data)
    }
    return (
        <div>
            <Header/>
            <LeftPanel onReview={handleReview}/>
            {result && <RightPanel result = {result}/>}
        </div>
    )
}

export default App