import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite" });

export async function callLLm(prompt) {
  const result = await model.generateContent(prompt);
  const text = result.response.text();

  // strip markdown backticks if present
  const cleaned = text
    .replace(/```json|```/g, "")
    .replace(/[\x00-\x1F\x7F]/g, " ") // remove control characters
    .trim();

  return cleaned;
}
