import { syntax } from "./Nodes/syntaxNode.js";
import { bugs } from "./Nodes/BugsNode.js";
import { security } from "./Nodes/SecurityNode.js";
import { correctPractice } from "./Nodes/CorrectPracticeNode.js";
import { suggestions } from "./Nodes/suggestionsNode.js";
import { exit } from "./Nodes/ExitNode.js";

const blueprint = {
  Nodes: {
    syntax: syntax,
    Bugs: bugs,
    Security: security,
    CorrectPractice: correctPractice,
    suggestions: suggestions,
    exit : exit,
  },
  edges : [
    {from: "syntax", to: (state) => state.syntaxError !== null ? "exit" : "Bugs"},
    {from : "Bugs" , to : (state) => state.bugsError !== null ? "exit" : ["Security" , "CorrectPractice"]},
    {from: "Security", to : "suggestions"},
    {from: "CorrectPractice", to : "suggestions"}
  ],
  start : "syntax"
};

export default blueprint   