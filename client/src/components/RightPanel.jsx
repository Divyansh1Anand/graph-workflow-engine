import React from "react"
import ResultCard from "./ResultCard"

function RightPanel({result}){
    return (
        <div className="flex flex-col gap-4 p-4 h-full overflow-y-auto">
            <p className="text-green-600 font-mono text-xs tracking-widest">&gt; analysis_output</p>
            {result.syntaxError && <ResultCard title="Syntax Error" content={result.syntaxError} />}
            {result.bugsError && <ResultCard title="Bugs Error" content={result.bugsError} />}
            {result.securityError && <ResultCard title="security Error" content={result.securityError} />}
            {result.correctPractice && <ResultCard title="correctPractice Error" content={result.correctPractice} />}
            {result.suggestions && <ResultCard title="suggestions" content={result.suggestions} />}
            {result.fixedCode && (
  <div className="border-l-2 border-green-500 pl-3 py-2">
    <p className="text-green-600 font-mono text-xs tracking-widest mb-2">&gt; fixed_code</p>
    <pre className="text-green-400 font-mono text-sm leading-relaxed whitespace-pre-wrap break words">
      {result.fixedCode.replace(/\\n/g , '\n')}
    </pre>
  </div>
)}
        </div>
    )
}

export default RightPanel