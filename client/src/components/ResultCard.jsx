import React from "react"

function ResultCard({ title, content }) {
  return (
    <div className="border-l-2 border-green-500 pl-3 py-2 bg-black">
      <p className="text-green-600 font-mono text-xs tracking-widest mb-2">&gt; {title}</p>
      <p className="text-green-400 font-mono text-sm leading-relaxed">{content}</p>
    </div>
  )
}

export default ResultCard