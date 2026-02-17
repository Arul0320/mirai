import { GoogleGenAI } from "@google/genai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
console.log("Loaded Gemini API Key:", apiKey ? "Yes" : "No");

if (!apiKey) {
  throw new Error("Missing VITE_GEMINI_API_KEY in environment variables");
}

const ai = new GoogleGenAI({ apiKey });

export async function getAiConsultation(query: string): Promise<string> {
  const prompt = `You are the MIRAi AI Consultant.
User query: ${query}
Provide a concise enterprise recommendation.`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: prompt,
    });

    return response.text ?? "No response generated.";
  } catch (error: any) {
    console.error("Gemini API Error:", error);

    // 🔹 Quota exceeded (429)
    if (error?.status === "RESOURCE_EXHAUSTED" || error?.message?.includes("quota")) {
      return "Our AI assistant is temporarily at capacity due to usage limits. Please try again shortly or contact our team directly.";
    }

    // 🔹 Network or fetch failure
    if (error?.message?.includes("fetch")) {
      return "Network issue detected. Please check your connection and try again.";
    }

    // 🔹 Generic fallback
    return "We’re unable to generate a response right now. Please try again later.";
  }
}
