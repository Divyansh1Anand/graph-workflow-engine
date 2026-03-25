import { callLLm } from "../../API/llms"

const prompt = `analyze the given code ${state.originalCode}

look for any type of bugs that would produce bugs  `