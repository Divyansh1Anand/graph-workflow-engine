import { syntaxNode } from "./Nodes/syntaxNode.js";
import { BugsNode } from "./Nodes/BugsNode.js";
import { SecurityNode } from "./Nodes/SecurityNode.js";
import { CorrectPracticeNode } from "./Nodes/CorrectPracticeNode.js";
import { SuggestionsNode } from "./Nodes/suggestionsNode.js";
import { ExitNode } from "./Nodes/ExitNode.js";

const blueprint = {
  Nodes: {
    syntax: syntaxNode,
    Bugs: BugsNode,
    Security: SecurityNode,
    CorrectPractice: CorrectPracticeNode,
    suggestions: SuggestionsNode,
    exit : ExitNode,
  },
  edges : [
    {from: "syntax", to : "exit" , condition : (state) => state.syntaxError != null},
    {from: "syntax", to :"Bugs", condition : (state) => state.syntaxError == null},
    {from: "Bugs" , to : "exit" , condition : (state) => state.bugsError != null},
    {from: "Bugs" , to : ["Security" , "CorrectPractice"] , condition : (state) => state.bugsError == null},
    {from: "Security", to : "suggestions"},
    {from: "CorrectPractice", to : "suggestions"}
  ],
  start : "syntax"
};

export default blueprint   