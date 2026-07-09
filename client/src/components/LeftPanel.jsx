import React from "react"
import { useState } from "react"

function LeftPanel({onReview}) {
    const [code , setCode] = useState("")

        return (
            <div className= "flex flex-col gap-4 p-4 w-1/2 min-h-screen border-r border-green-900">
                <p className="text-green-600 font-mono text-xs tracking-widest">&gt; input.js</p>
                <textarea
                value= {code}
                onChange ={(e) => setCode(e.target.value)}
                placeholder="// paste your code here"
                className="h-[50vh] bg-black text-green-400 font-mono text-sm p-3 border border-green-900 focus:outline-none focus:border-green-400 resize-none placeholder-green-900"
                />
                <button onClick = {() => onReview(code)}
                    className="self-end bg-transparent border border-green-500 text-green-400 font-mono text-sm px-6 py-2 tracking-widest hover:bg-green-950 transition-color"
                    >
                    &gt; run_review
                    </button>
            </div>
        )
}

export default LeftPanel