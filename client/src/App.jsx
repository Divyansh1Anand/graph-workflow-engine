import React from "react"
import Header from "./components/Header"
import { useState } from "react"
import LeftPanel from "./components/LeftPanel"
import RightPanel from "./components/RightPanel"

function App(){
    const [result , setResult] = useState(null)

    async function handleReview(code){
        const response = await fetch('http://localhost:3000/review',{
            method: 'POST',
            headers: {'Content-Type': 'application/json' },
            body: JSON.stringify({code: code})
        })
        const data = await response.json()
        console.log("fixedCode:" ,JSON.stringify(data.fixedCode))
        setResult(data)
    }
return (
  <div className="bg-black min-h-screen flex flex-col">
    <Header/>
    <div className="flex flex-1 overflow-hidden">
      <div className="w-1/2">
        <LeftPanel onReview={handleReview}/>
      </div>
      <div className="w-1/2 overflow-y-auto">
        {result && <RightPanel result={result}/>}
      </div>
    </div>
  </div>
)
}
export default App